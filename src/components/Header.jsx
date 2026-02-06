import profilePicture from "../assets/profilePicture.png"
import mailIcon from "../assets/mail.svg"
import "./Header.css"

export default function Header() {
    return (
        <header>
            <img src={profilePicture} alt="Profile picture" className="profile-picture"/>
            <h1 className="name-headline">Dominik Depner</h1>
            <p className="job-description">Full-Stack Developer</p>
            <a href="mailto:kroft.domi@t-online.de" className="mail-button">
                <img src={mailIcon} alt="Mail" />
                Email
            </a>
        </header>
    )
}