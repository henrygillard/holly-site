import Contact from '../Contact/Contact'
import Email from '@mui/icons-material/Email'
import Phone from '@mui/icons-material/Phone'
import './Footer.css'

export default function Footer() {
    return(
        <footer id='footer'>
           <div>
                <a className="links" href="mailto:hmccravey@healthmanagement.com"><Email /></a>
            </div>
            <div className="icons">
                <a className="links" href="/contact"><Phone /></a>
            </div>
        </footer>   )
}