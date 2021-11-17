import { Link } from 'react-router-dom'
import './NavBar.css'

export default function NavBar() {
    return(
        <nav id='nav'>
            <div className="nav-links">
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/contact">Contact</Link>
            </div>
        </nav>
    )
}