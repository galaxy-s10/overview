import React, { memo } from 'react';
import { useMount } from 'ahooks';
import Header from './header/index';
import SideBar from './sidebar/index';
import Content from './content/index';
import Footer from './footer/index';
import { LayoutWraper } from './style';
import Login from '../pages/login';
import ReactContext from '../pages/reactContext';
import MobxContenxt from '../pages/mobxContext';
import CacheModel from '../libs/cache';

const Layout = function (props) {
  console.log('Layout重新渲染', props);

  if (props.location.pathname == '/login') {
    return <Login></Login>;
  }
  if (props.location.pathname == '/test') {
    return <ReactContext></ReactContext>;
  } else if (props.location.pathname == '/test1') {
    return <MobxContenxt></MobxContenxt>;
  }

  useMount(() => {
    console.log('layout渲染完成');
  });
  return (
    <LayoutWraper>
      <SideBar />
      <div className="layout-right">
        <Header />
        <Content routes={props.children} />
        <Footer />
      </div>
    </LayoutWraper>
  );
};
export default memo(Layout);