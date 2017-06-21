import React from 'react';
import { Menu, Icon } from 'antd';
import { Link } from 'dva/router';

function Header({ location }) {
  return (
    <Menu
      selectedKeys={[location.pathname]}
      mode="horizontal"
      theme="dark"
    >
      <Menu.Item key="/users">
        <Link to="/postlist"><Icon type="home" />Home</Link>
      </Menu.Item>
      <Menu.Item key="/postadd">
        <Link to="/postadd"><Icon type="file-add" />Add</Link>
      </Menu.Item>
      <Menu.Item key="/search">
        <Link to="/search"><Icon type="search" />Search</Link>
      </Menu.Item>
      <Menu.Item key="/exit">
        <Link to="/login"><Icon type="logout" />exit</Link>
      </Menu.Item>
    </Menu>
  );
}

export default Header;
