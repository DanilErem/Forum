import React from "react"
import './Navbar.css'
import {NavLink} from "react-router-dom";
class Navbar extends React.Component{
    render() {
        return (
            <div className={"navbar-container"}>
                <div className={"navbar-element"}>

                    <NavLink className={"navbar-element-text"}>Chat</NavLink>

                </div>
            </div>
        );
    }
}

export default Navbar;
