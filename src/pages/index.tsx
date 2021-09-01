import Home from './home';
import { Provider } from 'react-redux';
import store from '../redux/index';

const Index = () => {
  return (
    <Provider store={store}>
      <Home></Home>
    </Provider>
  );
};
export default Index;
