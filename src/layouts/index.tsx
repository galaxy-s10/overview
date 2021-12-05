import { memo } from 'react';
import { useMount } from 'ahooks';
import { history } from 'umi';
import { useSelector, useDispatch, Provider } from 'react-redux';
import Header from './header/index';
import SideBar from './sidebar/index';
import Content from './content/index';
import LayoutWraper from './style';
import counterStore, { reducer, addNum } from '@/store/counter';
import { RootState } from '@/store/store';

// import Login from '../pages/login';
// import ReactContext from '../pages/reactContext';
// import MobxContenxt from '../pages/mobxContext';

const Layout = function (props) {
  console.log('Layout重新渲染', props, props.location.pathname);
  if (props.location.pathname === '/') {
    history.push('/introduce');
  }
  // const counter = useSelector((state: RootState) => {
  //   console.log(state, 111);
  //   return state.counter;
  // });
  if (props.location.pathname === '/login') {
    // return <Login></Login>;
  }
  // if (props.location.pathname === '/test') {
  //   return <ReactContext></ReactContext>;
  // }
  // if (props.location.pathname === '/test1') {
  //   return <MobxContenxt></MobxContenxt>;
  // }

  useMount(() => {
    console.log('layout渲染完成');
  });

  // return <div>1111</div>;
  return (
    <LayoutWraper>
      <SideBar />
      <div className="layout-right">
        <Header />
        <Content routes={props.children} />
        {/* {JSON.stringify(counter)} */}
        {/* <Footer /> */}
      </div>
    </LayoutWraper>
  );
};
export default memo(Layout);
