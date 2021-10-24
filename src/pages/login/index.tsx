import { memo, useState } from 'react';
import { history, Redirect } from 'umi';
import { Form, Card, Button, Checkbox, Input, message } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { LoginWrap } from './style';
import { login, getUserInfo } from './server';
import type { loginInterface } from './interface';
import { UserStore } from '../../store';

const Login = function (props) {
  const [loading, setLoading] = useState(false);
  const { setUserInfo, setUserToken } = UserStore();
  async function onFinish(userInfo: loginInterface) {
    setLoading(true);
    userInfo.exp = userInfo.exp ? 24 * 7 : 24; // token默认24小时过期，选择七天免登陆即7*24小时过期
    try {
      const res = await login(userInfo);
      setUserToken(res.token, userInfo.exp * 60 * 60);
      const res1 = await getUserInfo();
      console.log(res1, '-098');
      setUserInfo(res1.userInfo);
      message.success(res.message);
      setLoading(false);
      history.push('/dashboard');
    } catch (err) {
      setLoading(false);
    }
    // login(userInfo)
    //   .then((res) => {
    //     message.success(res.message);
    //     setLoading(false);
    //     history.push('/dashboard');
    //   })
    //   .catch((err) => {
    //     console.log(err, '请求成功了，但被reject了');
    //     setLoading(false);
    //   });
  }

  function onFinishFailed(v) {
    message.error('请输入完整！');
  }

  return (
    <LoginWrap>
      <Card hoverable title="欢迎登录" bordered={false} className="card">
        <Form
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          name="loginForm"
        >
          <Form.Item name="username" rules={[{ required: true }]}>
            <Input prefix={<UserOutlined />} />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[{ required: true }]}
            style={{ marginBottom: '10px' }}
          >
            <Input.Password prefix={<LockOutlined />} />
          </Form.Item>
          <Form.Item
            name="exp"
            valuePropName="checked"
            style={{ marginBottom: 0 }}
          >
            <Checkbox>七天内免登陆</Checkbox>
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" block loading={loading}>
              登录
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </LoginWrap>
  );
};
export default memo(Login);
