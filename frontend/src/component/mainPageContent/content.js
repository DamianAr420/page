import React from "react";
import "./content.css";

export default class Content extends React.Component {
    render() {
        return(
            <div id="homeBody">
                <h1>
                    <span className="text-6xl">Hello everyone!</span> <br />
                    My name is <span className="text-red-700">Damian </span> 
                    and on this website there are two simple projects: 
                    a calculator and a notepad.
                </h1>
            </div>
        )
    }
}
