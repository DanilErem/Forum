import React from "react";
import './Regestration.css'
class Regestration extends React.Component {
    render() {
        return (
            <div className={"regestrarion-container"}>
                <form className={"inputs-container"}>
                    <input className={"regestration-input"} placeholder={"Nickname"}/>
                    <input type={"password"} className={"regestration-input"} placeholder={"Password"} />
                    <input className={"login"} type={"submit"} value={"Login"}/>
                </form>
            </div>
        );
    }
}
export default Regestration;
