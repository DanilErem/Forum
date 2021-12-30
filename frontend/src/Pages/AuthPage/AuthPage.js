import React, {createRef} from "react";
import './AuthPage.css' // добавил коменты
import {
    createChangeRegistrationRegime,
    createChangeVisibleAction,
    createEmailChangeTextAction,
    createPasswordChangeAction, createRegistrationAction, getButtonText, getLinkText, LOGIN_REGIME, REGISTRATION_REGIME
} from "../../store/registration-reducer";
import {getUsers} from "../../store/http/UserApi";

class AuthPage extends React.Component {
    constructor(props) {
        super(props);
        this.nickNameInput = createRef();
        this.passwordInput = createRef();
    }

    onNickNameChange(){
        let action = createEmailChangeTextAction(this.nickNameInput.current.value);
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
    onRegistration(){
        let action = createRegistrationAction(this.nickNameInput.current.value, this.passwordInput.current.value);
        this.props.dispatch(action);
    }
    changeEnterRegime(){
        let action = createChangeRegistrationRegime();
        this.props.dispatch(action);
    }


    render() {
        return (
            <div className={"section authpage"}>
                <div className="title">
                    Registration
                </div>
                <div className="main registration">
                    <input name={"nickname"}  ref={this.nickNameInput} onChange={this.onNickNameChange.bind(this)} value={this.props.state.nicknameInputText} placeholder={"Nickname"}/>
                    <div className="password-input">
                        <input name={"password"} ref={this.passwordInput} onChange={this.onPasswordChange.bind(this)} value={this.props.state.passwordInputText} type={this.props.state.inputAttitude} placeholder={"Password"} />
                        <img className={"visible-password"} onClick={this.changeVisible.bind(this)} src={this.props.state.passwordHideSrc} alt={""}/>
                    </div>
                    <div className="button-group">
                        <button onClick={this.onRegistration.bind(this)}>{getButtonText(this.props.state)}</button>
                        <a  onClick={this.changeEnterRegime.bind(this)}>{getLinkText(this.props.state)}</a>
                    </div>
                </div>
            </div>
        );
    }
}
export default AuthPage;
