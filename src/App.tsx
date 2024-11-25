import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./assets/styles/base.css";
import "./assets/styles/keyframes.css";
import MainLayout from "./components/MainLayout";

import HomePage from "./pages/home";
import LogIn from "./pages/Login/Login";
import NotFoundPage from "./pages/notFound";
import UserHomePage from "./pages/userHomepage";
import UserDetail from "./pages/UserDetail/UserDetail";
import TestModalPage from "./pages/testPayment";
import PlayerStat from './pages/PlayerStat/PlayerStat'
import PlayerEdit from './pages/PlayerEdit/PlayerEdit'
import PlayerProfile from './pages/PlayerProfile'
import { useEffect, useState } from "react";
import { fetchToken, onMessageListener } from "./utils/firebase";
function App() {
  const [show, setShow] = useState(false);
  const [notification, setNotification] = useState({ title: "", body: "" });
  const [isTokenFound, setIsTokenFound] = useState(false);

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
          <Route path="/user-homepage" element={<UserHomePage />} />
          <Route path="/player/stat" element={<PlayerStat />} />
        </Route>
        <Route path="/login" element={<LogIn />} />
        <Route path="*" element={<NotFoundPage />} />
        <Route path="/test-modal" element={<TestModalPage />} />

        <Route path="/user-homepage" element={<UserHomePage />} />
        <Route path="/player-profile" element={<PlayerProfile />} />

      </Routes>
    </Router>
  );
}

export default App;
