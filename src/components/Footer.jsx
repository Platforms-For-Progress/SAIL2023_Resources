import React from "react"
import './Footer.css'
import { AiFillInstagram, AiFillFacebook, AiFillLinkedin } from 'react-icons/ai';
function Footer() {
    return (
        <footer>
            <div className="footer-social">
                <a href="https://instagram.com"><AiFillInstagram/></a>
                <a href="https://facebook.com"><AiFillFacebook/></a>
                <a href="https://linkedin.com"><AiFillLinkedin/></a>
            </div>
            <p>&copy; 2023 My Personal Website </p>
        </footer>
    )
}

export default Footer;