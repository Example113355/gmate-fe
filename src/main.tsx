import ReactDOM from 'react-dom/client'
import App from './App'
import './assets/styles/index.css'
import { UserProvider } from './contexts/UserContext'

ReactDOM.createRoot(document.getElementById('root')!).render(
    <UserProvider>
        <App />
    </UserProvider>
)

document.getElementById('root')!.className = "h-screen flex flex-col"
