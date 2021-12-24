import React, {createRef} from "react";
import './Regestration.css'
import {
    createChangeVisibleAction,
    createNickNameChangeTextAction,
    createPasswordChangeAction
} from "../store/registration-reducer";
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
    changeVisible(){
        let action = createChangeVisibleAction();
        this.props.dispatch(action);
    }
    onPasswordChange(){
        let action = createPasswordChangeAction(this.passwordInput.current.value);
        this.props.dispatch(action);
    }
    render() {
        debugger;
        return (
            <div className={"regestrarion-container"}>
                <form className={"inputs-container"}>
                    <input name={"nickname"}  ref={this.nickNameInput} onChange={this.onNickNameChange.bind(this)} value={this.props.state.nicknameInputText} className={"regestration-input"} placeholder={"Nickname"}/>
                    <input name={"password"} ref={this.passwordInput} onChange={this.onPasswordChange.bind(this)} value={this.props.state.passwordInputText} type={this.props.state.inputAttitude} className={"regestration-input"} placeholder={"Password"} />
                    <label className={"visible-password"} onClick={this.changeVisible.bind(this)} htmlFor={"password"}><img src={this.props.state.passwordHideSrc} alt={""}/></label>
                    <input className={"login"} type={"submit"} value={"Login"}/>
                </form>
            </div>
        );
    }
}
export default Regestration;
