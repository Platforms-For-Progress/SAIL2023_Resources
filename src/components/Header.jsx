import React from "react"
import './Header.css'

function Header() {
    return (
        <header>
            <nav>
                <ul>
                    <li className="header_item"><a href="/">Home</a></li>
                    <li className="header_item"><a href="/about">About</a></li>
                    <li className="header_item"><a href="/contact">Contact</a></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;