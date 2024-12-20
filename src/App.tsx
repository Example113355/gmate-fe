import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./assets/styles/base.css";
import "./assets/styles/keyframes.css";
import MainLayout from "./components/MainLayout";

import LogIn from "./pages/Login/Login";
import NotFoundPage from "./pages/notFound";
import UserHomePage from "./pages/userHomepage";
import UserDetail from "./pages/UserDetail/UserDetail";
import TestModalPage from "./pages/testPayment";
import PlayerStat from "./pages/PlayerStat/PlayerStat";
import PlayerEdit from "./pages/PlayerEdit/PlayerEdit";
import PlayerProfile from "./pages/PlayerProfile";
import SignGmate from "./pages/SignGmate/SignGmate";
import { useEffect, useState } from "react";
import { fetchToken, onMessageListener } from "./utils/firebase";
import { useUser } from "./contexts/UserContext";
import { post } from "./utils/http_2";

function App() {
  const [show, setShow] = useState(false);
  const [notification, setNotification] = useState({ title: "", body: "" });
  const [isTokenFound, setIsTokenFound] = useState(null);
  const { user } = useUser();

  useEffect(() => {
    fetchToken(setIsTokenFound);
  }, []);

  onMessageListener()
    .then((payload: any) => {
      setNotification({
        title: payload.notification.title,
        body: payload.notification.body,
      });
      setShow(true);
      console.log(payload);
    })
    .catch((err) => console.log("failed: ", err));

  useEffect(() => {
    if (isTokenFound) {
      console.log("Token found: ", isTokenFound);
      localStorage.setItem("pushToken", isTokenFound);
      if (user._id) {
        console.log("User id: ", user._id);
        post("/public/auth/register_fcm_token", {
          token: isTokenFound,
          user_id: user._id,
        });
      }
    }
  }, [isTokenFound]);

  // const onShowNotificationClicked = () => {
  //   setNotification({
  //     title: "Notification",
  //     body: "This is a test notification",
  //   });
  //   setShow(true);
  // };
  console.log(isTokenFound, notification, show);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<UserHomePage />} />
          <Route path="/user/:id" element={<UserDetail />} />
          <Route path="/sign-gmate" element={<SignGmate />} />
          <Route path="/user-homepage" element={<UserHomePage />} />
          <Route path="/player/profile" element={<PlayerProfile />} />
          <Route path="/player/stat" element={<PlayerStat />} />
          <Route path="/player/edit" element={<PlayerEdit />} />
        </Route>

        <Route path="/login" element={<LogIn />} />
        <Route path="*" element={<NotFoundPage />} />
        <Route path="/test-modal" element={<TestModalPage />} />

        <Route path="/user-homepage" element={<UserHomePage />} />
      </Routes>
    </Router>
  );
}

export default App;
