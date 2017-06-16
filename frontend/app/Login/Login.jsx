import React from 'react';
import { Input, Icon } from 'antd';
require('./Login.css');

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userName: '',
        };
    }

    emitEmpty() {
        this.userNameInput.focus();
        this.setState({ userName: '' });
    }

    onChangeUserName(e) {
        this.setState({ userName: e.target.value });
    }

    render() {
        const { userName } = this.state;
        const suffix = userName ? <Icon type="close-circle" onClick={this.emitEmpty} /> : null;
        return(
            <div>
                <div className = "loginView">
                    <Input className = "login_input"
                        placeholder="Enter your userName"
                        prefix={<Icon type="user" />}
                        suffix={suffix}
                        value={userName}
                        onChange={this.onChangeUserName}
                        ref={node => this.userNameInput = node}
                    />
                </div>
            </div>
        )
    }
}

module.exports = Login;
