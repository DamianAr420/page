import React, { useEffect, useState } from "react";
import "./contact.css";
import {NotificationContainer, NotificationManager} from 'react-notifications';
import 'react-notifications/lib/notifications.css';
import { Link } from "react-router-dom";

export default function Contact() {
    const [date, setDate] = useState(new Date());
    const [age, setAge] = useState(0);
    const [DTbirthday, setDTBirthDay] = useState(0);
    const mail = "e-mail";
    const phone = "+48 phone number";

    useEffect(() => {
        const birth = new Date("04/07/2003")
        const birthday = new Date("04/07/" + date.getFullYear())
        const timer = setInterval(() => {
            setDate(new Date());
            const ageInDays = (date - birth) / (1000 * 60 * 60 * 24);
            setAge(Math.floor(ageInDays / 365.25));
            setDTBirthDay(Math.floor((birthday - date) / (1000 * 60 * 60 * 24)));
        }, 1000);

        return () => {
            clearInterval(timer);
        };
    }, [date]);

    const copy = (event) => {
        try {
            navigator.clipboard.writeText(event.target.value)
            NotificationManager.success("Copied");
        } catch (error) {
            NotificationManager.error("Error")
        }
    }

    return(
        <div id="contactBody">
            <NotificationContainer />
            <div id="conBox">
                <img src="me1.jpg" alt="error" />
                <div id="data">
                    <div id="name">
                        Damian Argalski
                    </div>
                    <div className="info">
                        Age: {age + ","} days to birthday: {DTbirthday}
                    </div>
                    <div className="info">
                        E-mail: <button onClick={copy} value={mail}>{mail}</button>
                    </div>
                    <div className="info">
                        Phone: <button onClick={copy} value={phone}>{phone}</button>
                    </div>
                    <div className="info">
                        GitHub: <Link id="conLink" to="https://github.com/DamianAr420">DamianAr420</Link>
                    </div>
                    <div id="tutorial" className="info">
                        Click E-mail or Phone to copy or GitHub to go to the website
                    </div>
                </div>
            </div>
        </div>
    )
}
