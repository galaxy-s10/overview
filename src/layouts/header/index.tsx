import React, { memo } from 'react';
import { Menu, Dropdown } from 'antd';
import { MenuFoldOutlined, DownOutlined } from '@ant-design/icons';
import { HeaderWraper } from './style';
import { UserStore } from '../../store/index';
import withBreadcrumbs from 'react-router-breadcrumbs-hoc';
import { defaultRoutes as routes } from '../../../config/routes';
import CacheModel from '../../libs/cache';
import { history } from 'umi';
import { observer } from 'mobx-react';

/**
 * 面包屑导航栏
 */
const Breadcrumbs = withBreadcrumbs(routes)(({ breadcrumbs }) => {
  return (
    <span>
      {breadcrumbs.map((breadcrumb, index) => {
        return (
          <span key={breadcrumb.key}>
            <span>{breadcrumb.meta?.title}</span>
            {index < breadcrumbs.length - 1 && <i> / </i>}
          </span>
        );
      })}
    </span>
  );
});

const Header = function (props) {
  console.log('header重新渲染', UserStore());
  const { username, avatar, setUserToken } = UserStore();

  function logout() {
    // setUserToken(null);
    CacheModel.clearStorage('token');
    history.push('/');
  }
  const menu = (
    <Menu>
      <Menu.Item key="1">网站前台</Menu.Item>
      <Menu.Item key="2">个人信息</Menu.Item>
      <Menu.Item key="3">
        <span onClick={() => logout()}>退出登录</span>{' '}
      </Menu.Item>
    </Menu>
  );
  return (
    <HeaderWraper>
      <div>
        <div className="icon">
          <MenuFoldOutlined />
        </div>
        <Breadcrumbs />
      </div>
      <div className="user-info">
        <Dropdown overlay={menu}>
          <a className="ant-dropdown-link" onClick={(e) => e.preventDefault()}>
            {username}
            <DownOutlined />
          </a>
        </Dropdown>
        <img className="user-avatar" src={avatar} alt="" />
      </div>
    </HeaderWraper>
  );
};
export default memo(observer(Header));
