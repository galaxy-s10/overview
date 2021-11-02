import { memo, useState } from 'react';
// import { withRouter } from 'react-router-dom';
import { DownOutlined } from '@ant-design/icons';
import classNames from 'classnames';
import { history } from 'umi';
import { SideBarWraper } from './style';
import { componentRoutes, defaultRoutes } from '../../../config/routes';
import globalStore from '../../store/index';

const SideBar = function (props) {
  const { title } = globalStore;
  // const routes = [...componentRoutes];
  // const routes = [...defaultRoutes];
  const routes = [...componentRoutes, ...defaultRoutes];
  const [sideBarList, setSideBarList] = useState(routes);
  console.log(998, routes);
  function goPage(e, route) {
    console.log('点击了goPage');
    e.stopPropagation();
    const routeClone = { ...route };
    if (routeClone.routes?.length) {
      routeClone.open = !routeClone.open;
      const res = sideBarList.map((item) => {
        if (item.path === routeClone.path) item = routeClone;
        return item;
      });
      console.log(res, '++++');
      setSideBarList(res);
    } else {
      console.log('跳转');
      history.push(route.path);
    }
  }
  const SideItem = (routes) => {
    console.log(111, routes, '---');
    if (!routes) return undefined;
    const res = routes.map((route, index) => {
      console.log(9988, route);
      return (
        <div
          className="side-bar-item"
          key={index}
          onClick={(e) => goPage(e, route)}
        >
          <span className="side-bar-item-title">
            {route.meta && route.meta.title}
          </span>
          {route.routes && (
            <DownOutlined
              className={classNames('downIcon', { isOpen: route.open })}
            />
          )}
          {route.routes && route.routes.length && (
            <ul
              className="side-bar-item-list"
              style={{ display: route.open ? 'block' : 'none' }}
            >
              {SideItem(route.routes)}
            </ul>
          )}
        </div>
      );
    });
    console.log(9981, res);
    return res;
  };
  return (
    <SideBarWraper>
      <div className="side-bar-title">
        <div className="side-bar-logo">
          <img
            src="https://img.cdn.hsslive.cn/1613141138717Billd.jpg"
            style={{ width: '32px', height: '32px', borderRadius: '50%' }}
            alt=""
          />
          <span onClick={() => history.push('/')}>Billd Design</span>
        </div>
      </div>
      {SideItem(sideBarList)}
    </SideBarWraper>
  );
};
export default memo(SideBar);
