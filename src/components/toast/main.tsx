import ReactDOM from 'react-dom';
import { forwardRef, useState } from 'react';
import style from './index.scss';
import LoadingPng from './assets/loading.png';

const Toast = function (props, ref) {
  const { type, msg, duration } = props;
  console.log(type, msg, duration, '===Toast渲染了=====');
  const RenderToastMask = function () {
    return <div className={style.ToastMask}></div>;
  };
  const [num, setNum] = useState(1);
  document.body.classList.add(style.UnClickAble);
  return (
    <div>
      {/* {RenderToastMask()} */}
      <div className={style.ToastWrap}>
        <div className={style.Toast}>
          <img
            className={`${style.Icon} ${style.ToastIconRotate}`}
            src={LoadingPng}
            alt=""
          />
          <div className={style.Text}>{msg}11</div>
        </div>
      </div>
    </div>
  );
};
// const messageEl = document.createElement('div');
// document.body.appendChild(messageEl);
// ReactDOM.render(<Toast />, messageEl);
export default Toast;
