import React from 'react';
require('./ShoppingCell.css');

class ShoppingCell extends React.Component {
    constructor(props) {
        super(props);
    }
    render(){
        return (
            <div>
                <div className="cloudShopping-cell">
                    <ul>
                        <li className="shoping-pic"><img src={this.props.shopping_pic} /></li>
                        <li className="shopping-name">{this.props.shopping_name}</li>
                        <li className="shopping-price">价值：￥{this.props.shopping_price}</li>
                        <li className="shopping-progress">
                            <div className="range0"></div>
                            <div className="range1"></div>
                            <div className="join">{this.props.join}<br/>已参与</div>
                            <div className="need">{this.props.need}<br/>总需</div>
                            <div className="left">{this.props.left}<br/>剩余</div>
                        </li>
                        <li className="begin-shopping">立即一元云购</li>
                    </ul>
                </div>
            </div>
        );
    }
}

module.exports = ShoppingCell;