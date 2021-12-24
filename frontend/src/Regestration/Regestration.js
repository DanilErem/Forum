import React, {createRef} from "react";
import './Regestration.css'
import {createNickNameChangeTextAction, createPasswordChangeAction} from "../store/registration-reducer";
class Regestration extends React.Component {
    constructor(props) {
        super(props);
        this.nickNameInput = createRef();
        this.passwordInput = createRef();
    }
    onNickNameChange(){
        let action = createNickNameChangeTextAction(this.nickNameInput.current.value);
        this.props.dispatch(action);
    }
    onPasswordChange(){
        let action = createPasswordChangeAction(this.passwordInput.current.value);
        this.props.dispatch(action);
    }
    render() {
        return (
            <div className={"regestrarion-container"}>
                <form className={"inputs-container"}>
                    <input ref={this.nickNameInput} onChange={this.onNickNameChange.bind(this)} value={this.props.state.nicknameInputText} className={"regestration-input"} placeholder={"Nickname"}/>
                    <input ref={this.passwordInput} onChange={this.onPasswordChange.bind(this)} value={this.props.state.passwordInputText} type={"password"} className={"regestration-input"} placeholder={"Password"} />
                    <input className={"login"} type={"submit"} value={"Login"}/>
                </form>
            </div>
        );
    }
}
export default Regestration;
