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

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<HomePage />} />
        </Route>
        <Route path="/login" element={<LogIn />} />
        <Route path="*" element={<NotFoundPage />} />

        <Route path="/user-homepage" element={<UserHomePage />} />
      </Routes>
    </Router>
  )
}

export default App
