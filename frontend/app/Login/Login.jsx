import React from 'react';
require('./Login.css');

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userName: '',
        };
    }


    render() {
        return(
            <div>
                <div className = "loginView">
                     <input type="submit" value="Submit" />
                </div>
            </div>
        )
    }
}

module.exports = Login;
