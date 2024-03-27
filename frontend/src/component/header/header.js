import React from "react";
import "./header.css";
import { BrowserRouter as Router, Link, Routes, Route } from "react-router-dom";
import Content from "../mainPageContent/content";
import Notepad from "../notepad/Notes";
import Contact from "../contact/contact";
import Calculator from "../../calculator/calculator";

export default class Header extends React.Component { 
    render() {
        const buttons = [
            "Calculator", "Notepad", "Home", "Contact"
        ];
        return(
            <header className="headerBox">
            <Router>
                {buttons.map((name, key) => (
                    <Link key={key} to={name === "Home" ? "/" : "/" + name}>
                        <button className="headerButtons" id={name}>
                            {name}
                        </button>
                    </Link>
                ))}
            <Routes>
                <Route exact path="/" element={<Content />} />
                <Route path="/Notepad" element={<Notepad />} />
                <Route path="/Contact" element={<Contact />} />
                <Route path="/Calculator" element={<Calculator />} />
            </Routes>
            </Router>
            </header>
        );
    }
}