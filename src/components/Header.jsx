import React, { useState } from 'react'
import './Nav.css'
import { Link } from 'react-router-dom'

function Header() {
    const [open, setOpen] = useState(false)

    return (
        <header className="nav-root">
            <div className="nav-center">
                <Link to="/" className="brand">DevHub Portal</Link>
            </div>
            <div className="nav-right">
                <nav className={`nav-links ${open ? 'open' : ''}`} aria-label="Primary">
                    <Link to="/" className="nav-link">Home</Link>
                    <Link to="/users" className="nav-link">Users</Link>
                    <Link to="/about" className="nav-link">About</Link>
                </nav>
            </div> 

        </header>
    )
}

export default Header