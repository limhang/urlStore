import React from 'react';
import ShoppingCell from './ShoppingCell.jsx';
require('./Shopping.css');

class Shopping extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div>
                <div className="empty-header"></div>
                <ul className="flex-container">
                    <li className="flex-container"><ShoppingCell shopping_pic='http://img.1yyg.net/goodspic/pic-200-200/20170323140223728.jpg' shopping_name="超薄笔记本电脑多核" shopping_price="10000" left="999" need='999' join="999"/></li>
                    <li className="flex-container"><ShoppingCell shopping_pic='http://img.1yyg.net/goodspic/pic-200-200/20170323140223728.jpg' shopping_name="超薄笔记本电脑多核" shopping_price="10000" left="999" need='999' join="999"/></li>
                    <li className="flex-container"><ShoppingCell shopping_pic='http://img.1yyg.net/goodspic/pic-200-200/20170323140223728.jpg' shopping_name="超薄笔记本电脑多核" shopping_price="10000" left="999" need='999' join="999"/></li>
                    <li className="flex-container"><ShoppingCell shopping_pic='http://img.1yyg.net/goodspic/pic-200-200/20170323140223728.jpg' shopping_name="超薄笔记本电脑多核" shopping_price="10000" left="999" need='999' join="999"/></li>
                    <li className="flex-container"><ShoppingCell shopping_pic='http://img.1yyg.net/goodspic/pic-200-200/20170323140223728.jpg' shopping_name="超薄笔记本电脑多核" shopping_price="10000" left="999" need='999' join="999"/></li>
                    <li className="flex-container"><ShoppingCell shopping_pic='http://img.1yyg.net/goodspic/pic-200-200/20170323140223728.jpg' shopping_name="超薄笔记本电脑多核" shopping_price="10000" left="999" need='999' join="999"/></li>
                    <li className="flex-container"><ShoppingCell shopping_pic='http://img.1yyg.net/goodspic/pic-200-200/20170323140223728.jpg' shopping_name="超薄笔记本电脑多核" shopping_price="10000" left="999" need='999' join="999"/></li>
                    <li className="flex-container"><ShoppingCell shopping_pic='http://img.1yyg.net/goodspic/pic-200-200/20170323140223728.jpg' shopping_name="超薄笔记本电脑多核" shopping_price="10000" left="999" need='999' join="999"/></li>
                </ul>
                <div className="empty-footer"></div>
            </div>
        )
    }
}

module.exports = Shopping;