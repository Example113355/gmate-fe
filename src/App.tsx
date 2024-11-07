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

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<HomePage />} />
        </Route>
        <Route path="/login" element={<LogIn />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  )
}

export default App
