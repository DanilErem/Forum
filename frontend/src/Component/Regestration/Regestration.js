import React, {createRef} from "react";
import './Regestration.css' // добавил коменты
import {
    createChangeVisibleAction,
    createNickNameChangeTextAction,
    createPasswordChangeAction
} from "../../store/registration-reducer";

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
            <div className={"section"}>
                <div className="title">
                    Registration
                </div>
                <div className="main registration">
                    <input name={"nickname"}  ref={this.nickNameInput} onChange={this.onNickNameChange.bind(this)} value={this.props.state.nicknameInputText} placeholder={"Nickname"}/>
                    <div className="password-input">
                        <input name={"password"} ref={this.passwordInput} onChange={this.onPasswordChange.bind(this)} value={this.props.state.passwordInputText} type={this.props.state.inputAttitude} placeholder={"Password"} />
                        <img className={"visible-password"} onClick={this.changeVisible.bind(this)} src={this.props.state.passwordHideSrc} alt={""}/>
                    </div>
                    <button>Login</button>
                </div>
            </div>
        );
    }
}
export default Regestration;
