import React from "react"
import './Navbar.css';
import {Link} from "react-router-dom";
class Navbar extends React.Component{
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className={"navbar-container"}>
                <div className={"navbar-element"}>
                    <Link to={"/chats"} className={"navbar-element-text"}>Чаты</Link>
                </div>
                <div className={"navbar-element"}>
                    <Link to={"/my-chats"} className={"navbar-element-text"}>Мои чаты</Link>
                </div>
            </div>
        );
    }
}

export default Navbar;
