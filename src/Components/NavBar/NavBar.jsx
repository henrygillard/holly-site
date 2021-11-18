import { fontFamily } from '@mui/system'
import { Link } from 'react-router-dom'
import './NavBar.css'

export default function NavBar() {
    return(
        <nav id='nav'>
            <div className="cursive-text">
                <h1>Holly McCravey</h1>
            </div>
            <div className="nav-links">
                <Link className="links" to="/">Home</Link>
                <Link className="links" to="/about">About</Link>
                <Link className="links" to="/contact">Contact</Link>
            </div>
        </nav>
    )
}