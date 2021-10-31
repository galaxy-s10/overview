import { useEffect } from 'react';
import ReactDOM from 'react-dom';

import Toast from './main';

// const messageEl = document.createElement('div');
// document.body.appendChild(messageEl);
// ReactDOM.render(<Toast />, messageEl);
const baseConfig = {
  type: 'info',
  closeAble: false,
  duration: 2000,
};
const _props = { ...baseConfig };

const Message = function (msg, duration) {
  // const messageEl = document.createElement('div');
  // document.body.appendChild(messageEl);
  // ReactDOM.render(<Toast key={msg} msg={msg} duration={duration} />, messageEl);
  // ReactDOM.render(<Toast />, messageEl);
  const newOptions = { ...baseConfig, msg, duration };
  console.log(
    'Message渲染了',
    ReactDOM.flushSync(() => {
      console.log('messageEl');
    }),
    msg,
    duration
  );
  if (['success', 'info', 'fail', 'loading'].indexOf(newOptions.type) === -1) {
    return console.error(
      `Message.type: '${newOptions.type}' is error, Message.type can only be one of 'success' 'warning' 'info' 'error' 'loading'`
    );
  }

  _props.type = newOptions.type;
  _props.msg = newOptions.msg;
  _props.duration = newOptions.duration;
  console.log(_props, '>>>>');
  // return <>1111</>;
  // ReactDOM.render(<Toast {..._props} a={xxx} />, messageEl);

  useEffect(() => {
    console.log('sss');
  });
  return <div></div>;
  // return <Toast key={msg} msg={msg} duration={duration} />;
  // const _props = { type: baseConfig.type, msg: '', duration: 1 };
};

['success', 'info', 'fail', 'loading'].forEach((type) => {
  Message[type] = (msg, duration) => {
    console.log('调用了', type, msg, duration, 876);
    return Message(msg, duration);
  };
});
// console.log(Toast, 988888);
// Message.clear = function () {
//   messageEl.parentNode?.removeChild(messageEl);
// };
// Message.config = function (options) {
//   baseConfig = { ...baseConfig, ...options };
// };
const messageEl = document.createElement('div');
document.body.appendChild(messageEl);
let xxx = 235;
setTimeout(() => {
  xxx = 4364;
  console.log('sdfsg');
}, 2000);
// ReactDOM.render(<Toast {..._props} a={xxx} />, messageEl);
console.log('导出', Message);
export default Message;
