import ReactDOM from 'react-dom/client'
import App from './App'
import './assets/styles/index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(<App />)

document.getElementById('root')!.className = "h-screen flex flex-col"
