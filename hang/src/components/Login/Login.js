import React from 'react';
import { connect } from 'dva';
import {Link} from 'dva/router';
import {Form, Icon, Input, Button, Checkbox} from 'antd';
import styles from './login.css';
function Login({
  loading,
  dispatch,
  form:{
    getFieldDecorator,
    validateFields
  }
})  {

  function commit(data) {
    const {username, password} = data;
    dispatch({type: 'app/auth',payload:{username, password}});
    // dispatch({type: 'users/fetch',payload:{}});
  }

  function handleSubmit(e) {
    e.preventDefault();
    validateFields((error,values) => {
      if (!error) {
        commit(values);
      }
    });
  }

  return (
    <div className={styles.container}>
        <span className={styles.logo}>Welcome To UrlStore</span>
      <Form onSubmit={handleSubmit}>
        <Form.Item>
            {
                getFieldDecorator('username', {
                    rules: [
                        {
                            required: true,
                            message: 'Please input your username!'
                        }
                    ]
                })(<Input addonBefore={<Icon type="user"/>} placeholder="Username" />)
            }
        </Form.Item>
        <Form.Item>
            {
                getFieldDecorator('password', {
                    rules: [
                        {
                            required: true,
                            message: 'Please input your Password!'
                        }
                    ]
                })(<Input addonBefore={<Icon type="lock"/>} type="password" placeholder="Password" />)
            }
        </Form.Item>
        <Form.Item>

            {
                getFieldDecorator('remember', {
                    valuePropName: 'checked',
                    initialValue: true
                })(<Checkbox disabled>Remember me</Checkbox>)
            }
            <span className={styles.toOther }>Or <Link to="/register">register now!</Link></span>
            <Button
                type="primary"
                htmlType="submit"
                className={styles.button}
                loading={loading}
            >
                Log in
            </Button>
        </Form.Item>
      </Form>
    </div>

  );
}

export default connect((state, ownProps) => {
    return {
        loading: state.loading.models.app,
    };
})(Form.create({})(Login));