import Home from './home';
// import { Provider } from 'react-redux';
// import Store from '../redux/index';
import { makeAutoObservable } from 'mobx';
import { observer } from 'mobx-react-lite';
import Store from '../mobxStore';

const Index = () => {
  return <Home store={Store}></Home>;
};
export default Index;
