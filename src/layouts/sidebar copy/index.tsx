import { memo, useState } from 'react';
// import { withRouter } from 'react-router-dom';
import { DownOutlined } from '@ant-design/icons';
import classNames from 'classnames';
import { history } from 'umi';
import { SideBarWraper } from './style';
import { defaultRoutes as routes } from '../../../config/routes';
import globalStore from '../../store/index';

const SideBar = function (props) {
  const { title } = globalStore;
  const [sideBarList, setSideBarList] = useState(routes);
  function goPage(e, route) {
    e.stopPropagation();
    const routeClone = { ...route };
    console.log('点击了', routeClone, routeClone.path);
    if (routeClone.routes?.length) {
      routeClone.open = !routeClone.open;
      const res = sideBarList.map((item) => {
        if (item.path === routeClone.path) item = routeClone;
        return item;
      });
      setSideBarList(res);
    } else {
      console.log('跳转');
      history.push(route.path);
    }
  }
  const SideItem = function (routes) {
    if (!routes) return undefined;
    return routes.map((route, index) => (
      <div
        className="side-bar-item"
        key={index}
        onClick={(e) => goPage(e, route)}
      >
        <span> {route.meta && route.meta.title}</span>
        {route.routes && (
          <DownOutlined
            className={classNames('downIcon', { isOpen: route.open })}
          />
        )}
        {route.routes && route.routes.length && (
          <ul style={{ display: route.open ? 'block' : 'none' }}>
            {SideItem(route.routes)}
          </ul>
        )}
      </div>
    ));
  };
  return (
    <SideBarWraper>
      <div className="side-bar-title">{title}</div>
      {SideItem(sideBarList)}
    </SideBarWraper>
  );
};
export default memo(SideBar);
