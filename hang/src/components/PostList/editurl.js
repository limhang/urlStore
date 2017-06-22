import React, { Component } from 'react';
import { Modal, Form, Input } from 'antd';
import styles from './editurl.css';

const FormItem = Form.Item;

class EditUrl extends Component {

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
    const { url, detail, category, tag } = this.props.record;
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
          title="Edit Url"
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
                  initialValue: url,
                })(<Input />)
              }
            </FormItem>
            <FormItem
              {...formItemLayout}
              label="detail"
            >
              {
                getFieldDecorator('detail', {
                  initialValue: detail,
                })(<Input />)
              }
            </FormItem>
            <FormItem
              {...formItemLayout}
              label="category"
            >
              {
                getFieldDecorator('category', {
                  initialValue: category,
                })(<Input />)
              }
            </FormItem>
            <FormItem
                {...formItemLayout}
                label="tag"
            >
              {
                getFieldDecorator('tag', {
                  initialValue: tag,
                  })(<Input />)
              }
            </FormItem>
          </Form>
        </Modal>
      </span>
    );
  }
}

export default Form.create()(EditUrl);