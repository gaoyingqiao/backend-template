import React from 'react';
import { Form, Input, Button, Icon } from 'antd';
import { connect } from 'dva';
import styles from './index.less';

const FormItem = Form.Item;

@Form.create()
@connect(({ login }) => ({
  login,
}))
export default class Login extends React.Component {

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  }

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <div className={styles.loginContainer}>
        <Form onSubmit={this.handleSubmit} className={styles.loginForm}>
        <FormItem>
          {getFieldDecorator('username', {
            rules: [{ required: true, message: '请输入账号' }],
          })(
            <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="账户" />
          )}
        </FormItem>
        <FormItem>
          {getFieldDecorator('password', {
            rules: [{ required: true, message: '请输入密码' }],
          })(
            <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="密码" />
          )}
        </FormItem>
        <FormItem>
          <Button type="primary" htmlType="submit" className={styles.loginFormButton}>
            登录
          </Button>
        </FormItem>
      </Form>
      </div>
    )
  }
}