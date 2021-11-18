import './Contact.css'
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';

export default function Contact() {
    return(
        <section>
            <h1>Contact</h1>
            <div className="icons">
                <EmailIcon /><a href="mailto:hmccravey@healthmanagement.com">hmccravey@healthmanagement.com</a>
            </div>
            <div className="icons">
                <PhoneIcon />(213) 314-9090
            </div>

        </section>
    )
}