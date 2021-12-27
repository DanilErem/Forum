import React from "react"
import './Navbar.css';
import {Link} from "react-router-dom";
class Navbar extends React.Component{
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <header>
                <nav>
                    <Link className="logo" to={"/"}>OrleanForum</Link>
                    <div className="nav-links">
                        <Link to={"/chats"} className={"nav-link"}>Чаты</Link>
                        <Link to={"/my-chats"} className={"nav-link"}>Мои чаты</Link>
                    </div>
                </nav>
            </header>
        );
    }
}

export default Navbar;
