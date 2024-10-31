import { apiCall } from "../utils/http"

const Navbar = () => {
    let baseUrl = import.meta.env.VITE_API_BASE_URL
    apiCall(baseUrl , 'GET')

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container">
                <a className="navbar-brand" href="/">Gmate</a>
            </div>
        </nav>
    )
}

export default Navbar
