import React from "react"
import './Navbar.css'
class Navbar extends React.Component{
    render() {
        return (
            <div className={"navbar-container"}>
                <div className={"navbar-element"}>
                    <p className={"navbar-element-text"}>Chat</p>
                </div>
            </div>
        );
    }
}

export default Navbar;
