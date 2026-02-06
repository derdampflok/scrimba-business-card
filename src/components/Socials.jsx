import linkedInIcon from "../assets/linkedin.svg"
import instagramIcon from "../assets/instagram.svg"
import githubIcon from "../assets/github.svg"
import "./Socials.css"

export default function Socials() {
    return (
        <footer>
            <a href="https://www.linkedin.com/in/dominik-depner-946b7823a/"><img src={linkedInIcon} alt="LinkedIn" /></a>
            <a href="https://www.instagram.com/dominik_depner/"><img src={instagramIcon} alt="Instagram" /></a>
            <a href="https://github.com/derdampflok"><img src={githubIcon} alt="GitHub" /></a>
        </footer>
    )
}