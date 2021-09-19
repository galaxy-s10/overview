// import Redux from 'redux'
const Redux = require('redux'); // Problem:为什么要使用require?
import Reducer from './reducer';

// console.log(Redux);
const store = Redux.createStore(
  Reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(), //配合谷歌浏览器的Redux DevTools扩展插件
);

export default store;
