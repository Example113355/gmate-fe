import {
  BrowserRouter as Router,
  Routes, Route
} from 'react-router-dom'
import Navbar from './components/navbar'
import Footer from './components/footer'
import HomePage from './pages/home'
import NotFoundPage from './pages/notFound'

function App() {
  return (
    <div className="">
      <Router>
        <Navbar />

        <Routes>
          <Route path="/" element={ <HomePage /> } />
          <Route path="*" element={ <NotFoundPage /> } />
        </Routes>

        <Footer />
      </Router>
    </div>
  )
}

export default App
