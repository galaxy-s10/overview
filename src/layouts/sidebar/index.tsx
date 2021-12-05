import { memo, useEffect, useState } from 'react';
// import { withRouter } from 'react-router-dom';
import classNames from 'classnames';
import { history } from 'umi';
import SideBarWraper from './style';
import allRoutes, {
  componentRoutes,
  defaultRoutes,
  bookMarkRoutes,
  sidebarRoutes,
} from '../../../config/routes';
// import globalStore from '../../store/index';
import ArrowIcon from '@/components/ArrowIcon';
import { deepCloneByJson } from '@/libs/utils';

const SideBar = function () {
  // const { title } = globalStore;
  // const routes = [...componentRoutes];
  // const routes = [...defaultRoutes];
  // const routes = allRoutes;
  const routes = sidebarRoutes;
  const [sideBarList, setSideBarList] = useState(routes);
  function goPage(e, route) {
    console.log('点击了goPage', e.target, route);
    e.stopPropagation();
    const routeClone = { ...route };
    function digui(origin, target) {
      const res = origin;
      for (let i = 0; i < origin.length; i++) {
        const item = origin[i];
        if (item.path === target) {
          item.open = !item.open;
        }
        if (item.routes && item.routes.length) {
          digui(item.routes, target);
        }
      }
      return res;
    }
    if (routeClone.routes?.length) {
      routeClone.open = !routeClone.open;
      const res = digui(deepCloneByJson(sideBarList), routeClone.path);
      setSideBarList(res);
    } else {
      console.log('跳转');
      history.push(route.path);
    }
  }
  const SideItem = (routes) => {
    if (!routes) return undefined;
    const res = routes.map((route, index) => (
      <div
        className="side-bar-item"
        key={index}
        onClick={(e) => goPage(e, route)}
      >
        <span className="side-bar-item-title">
          <span className={!route.routes ? 'no-routes' : ''}>
            {route.meta && route.meta.title}
          </span>
          {route.routes && (
            <ArrowIcon position={route.open ? 'bottom' : 'top'} />
          )}
        </span>

        {route.routes && route.routes.length > 0 && (
          <ul
            className="side-bar-item-list"
            style={{ display: route.open ? 'block' : 'none' }}
          >
            {SideItem(route.routes)}
          </ul>
        )}
      </div>
    ));
    return res;
  };

  useEffect(() => {
    console.log(sideBarList);
  }, [sideBarList]);
  return (
    <SideBarWraper>
      <div className="side-bar">
        <div className="side-bar-logo">
          <div className="logo">
            <img
              src="https://img.cdn.hsslive.cn/1613141138717Billd.jpg"
              style={{
                width: '32px',
                height: '32px',
                borderRadius: '50%',
                marginRight: '10px',
              }}
              alt=""
            />
            <span onClick={() => history.push('/')}>Overview</span>
          </div>
        </div>
        {SideItem(sideBarList)}
      </div>
    </SideBarWraper>
  );
};
export default memo(SideBar);
