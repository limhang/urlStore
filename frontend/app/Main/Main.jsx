import React from 'react';

class Main extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div>
                {this.props.children}
            </div>
        )
    }
}

module.exports = Main;
