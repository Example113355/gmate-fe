import ReactDOM from 'react-dom/client'
import App from './App'
import './assets/styles/index.css'
import { UserProvider } from './contexts/UserContext';
// import { SocketContextProvider } from "./contexts/SocketContext";

ReactDOM.createRoot(document.getElementById('root')!).render(
    <UserProvider>
        {/* <SocketContextProvider> */}
            <App />
        {/* </SocketContextProvider> */}
    </UserProvider>
)

document.getElementById('root')!.className = "h-screen flex flex-col"
