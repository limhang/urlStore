import React, { Component } from 'react';
import { Modal, Form, Input } from 'antd';
import styles from './addurl.css';

const FormItem = Form.Item;

class AddUrl extends Component {

  constructor(props) {
    super(props);
    this.state = {
      visible: false,
    };
  }

  showModelHandler = (e) => {
    if (e) e.stopPropagation();
    this.setState({
      visible: true,
    });
  };

  hideModelHandler = () => {
    this.setState({
      visible: false,
    });
  };

  okHandler = () => {
    const { onOk } = this.props;
    this.props.form.validateFields((err, values) => {
      if (!err) {
        onOk(values);
        console.log('1');
        console.log(values);
        this.hideModelHandler();
      }
    });
  };

  render() {
    const { children } = this.props;
    const { getFieldDecorator } = this.props.form;
    // const { url, detail, category, tag } = this.props.record;

    const formItemLayout = {
      labelCol: { span: 6 },
      wrapperCol: { span: 14 },
    };

    return (
      <span>
        <span onClick={this.showModelHandler}>
          { children }
        </span>
        <Modal
          title="Add Url"
          visible={this.state.visible}
          onOk={this.okHandler}
          onCancel={this.hideModelHandler}
        >
          <Form horizontal onSubmit={this.okHandler}>
            <FormItem
              {...formItemLayout}
              label="Url"
            >
              {
                getFieldDecorator('Url', {
                })(<Input />)
              }
            </FormItem>
            <FormItem
              {...formItemLayout}
              label="detail"
            >
              {
                getFieldDecorator('detail', {
                })(<Input />)
              }
            </FormItem>
            <FormItem
              {...formItemLayout}
              label="category"
            >
              {
                getFieldDecorator('category', {
                })(<Input />)
              }
            </FormItem>
            <FormItem
                {...formItemLayout}
                label="tag"
            >
              {
                getFieldDecorator('tag', {
                  })(<Input />)
              }
            </FormItem>
          </Form>
        </Modal>
      </span>
    );
  }
}

export default Form.create()(AddUrl);