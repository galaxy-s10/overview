import { memo } from 'react';
// import { observer } from 'mobx-react';
import { useSelector, useDispatch, Provider } from 'react-redux';
// import counterStore, { reducer, addNum } from '@/models/counter';
// import { RootState } from '@/models';
// import Layout from '../layouts';

const Index = () => (
  // const counter = useSelector((state: RootState) => {
  //   console.log(state, 111);
  //   return state.counter;
  // });
  <div>Index页面</div>
);
// return <Layout />;
// export default Index;
export default Index; // observer包裹 + 使用memo，正确写法
