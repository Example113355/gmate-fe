import {
  Route,
  BrowserRouter as Router, Routes
} from 'react-router-dom'
import './assets/styles/base.css'
import './assets/styles/keyframes.css'
import MainLayout from './components/MainLayout'

import HomePage from './pages/home'
import LogIn from './pages/Login/Login'
import NotFoundPage from './pages/notFound'
import UserHomePage from './pages/userHomepage'
import UserDetail from './pages/UserDetail/UserDetail'
import TestModalPage from './pages/testpayment'
import PlayerStat from './pages/PlayerStat/PlayerStat'
import PlayerEdit from './pages/PlayerEdit/PlayerEdit'
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<HomePage />} />
          <Route path="/user/:id" element={<UserDetail />} />
          <Route path="/player/stat" element={<PlayerStat />} />
          <Route path="/player/edit" element={<PlayerEdit />} />
        </Route>
        <Route path="/login" element={<LogIn />} />
        <Route path="*" element={<NotFoundPage />} />
        <Route path="/test-modal" element={<TestModalPage />} />

        <Route path="/user-homepage" element={<UserHomePage />} />
      </Routes>
    </Router>
  )
}

export default App
