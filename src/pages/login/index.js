import React, {PureComponent} from 'react';
import {connect} from "react-redux";
import {Button, Input, LoginBox, LoginWrapper} from "./style";
import {actionCreators} from './store';
import {Redirect} from "react-router-dom";

class Login extends PureComponent {

    render() {
        const {login, loginStatus} = this.props;
        if (!loginStatus) {
            return (
                <LoginWrapper>
                    <LoginBox>Welcome!
                        <Input placeholder='Username' ref={(input) => {
                            this.account = input
                        }}/>
                        <Input placeholder='Password' type='password' ref={(input) => {
                            this.password = input
                        }}/>
                        <Button onClick={() => login(this.account, this.password)}>Log in</Button>
                    </LoginBox>
                </LoginWrapper>
            )
        } else {
            return <Redirect to='/'/>
        }
    }
}

const mapState = (state) => ({
    loginStatus: state.getIn(['login', 'login'])
})

const mapDispatch = (dispatch) => ({
    login(accountElem, passwordElem) {
        dispatch(actionCreators.login(accountElem.value, passwordElem.value));
    }
})

export default connect(mapState, mapDispatch)(Login);
