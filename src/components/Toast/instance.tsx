import { PureComponent } from 'react';
import ReactDOM from 'react-dom';

import base64List from './constance';
import style from './index.scss';
import {
  ICallBackProp,
  IInstanceProp,
  IToastState,
  IUserProp,
} from './interface';

class Toast extends PureComponent {
  static newInstance: (
    props: IInstanceProp,
    cb: (v: ICallBackProp) => void
  ) => void;

  state: IToastState = {
    visible: false,
    content: undefined,
    icon: undefined,
    maskClickable: false,
    maskClassName: undefined,
    maskStyle: undefined,
    maskClickCb: undefined,
  };

  render() {
    const {
      visible,
      content,
      icon,
      maskClassName,
      maskClickable,
      maskStyle,
      maskClickCb,
    } = this.state;
    const renderMask = ({
      maskClickable,
      maskClassName,
      maskStyle,
      maskClickCb,
    }: IInstanceProp): React.ReactNode => (
      <div
        className={`${maskClassName || style.ToastMask} ${
          maskClickable ? style.AllowClickAble : style.UnClickAble
        }`}
        style={maskStyle}
        onClick={() => {
          maskClickCb && maskClickCb();
        }}
      ></div>
    );
    const renderIcon = (icon: IUserProp['icon']) => {
      let res = icon;
      if (icon) {
        if (
          ['success', 'info', 'fail', 'loading'].indexOf(icon as string) !== -1
        ) {
          res = (
            <img
              className={`${style[`Icon-${icon}`]}`}
              src={base64List[icon as string]}
              alt=""
            />
          );
        }
      }
      return res;
    };
    const renderContent = (content: IUserProp['content']) => {
      if (typeof content === 'string') {
        /**
         * 如果style.Text是undefined,由于``模板字符串的原因,最终会返回'undefined'
         * 如果直接是className={style.Text},如果style.Text是undefined,则代表是:
         * className={undefined},结果就是直接不会返回className
         */
        return <div className={style.Text}>{content}</div>;
      }
      return <div>{content}</div>;
    };
    return (
      visible && (
        <>
          {renderMask({
            maskClassName,
            maskClickable,
            maskStyle,
            maskClickCb,
          })}
          <div className={style.ToastWrap}>
            <div className={style.Toast}>
              {renderIcon(icon)}
              {renderContent(content)}
            </div>
          </div>
        </>
      )
    );
  }
}
let defaultInstanceProp: IInstanceProp = {
  duration: 2000, // 持续显示两秒
  maskClickable: false, // 不可点击遮罩
  maskClassName: undefined,
  maskStyle: undefined,
};
Toast.newInstance = (props, cb) => {
  const messageEl = document.createElement('div');
  document.body.appendChild(messageEl);
  // @ts-ignore
  const _toast: ICallBackProp = {};
  let queue: {
    uid: number;
    immediately: boolean;
    duration?: number;
    onClose: any;
  }[] = [];
  let id = 0;
  function ref(vm: any) {
    const type = ['success', 'info', 'fail', 'loading', 'show'];
    type.forEach((type) => {
      // @ts-ignore
      _toast[type] = ({
        content = '',
        icon,
        duration = defaultInstanceProp.duration,
        maskClassName = defaultInstanceProp.maskClassName,
        maskClickable = defaultInstanceProp.maskClickable,
        maskStyle = defaultInstanceProp.maskStyle,
        maskClickCb,
        onClose,
      }: IUserProp) => {
        const userProp = {
          visible: true,
          content,
          duration,
          maskClassName,
          maskClickable,
          maskStyle,
          onClose,
          maskClickCb,
        };
        const res = {
          ...userProp,
          icon: type === 'show' ? icon : type,
        };
        const uid = ++id;
        const item = {
          uid,
          immediately: false,
          duration: res.duration,
          onClose: res.onClose,
        };
        if (queue.length < 1) {
          queue.push(item);
        } else {
          queue.forEach((item) => {
            item.immediately = true;
          });
          item.immediately = false;
          queue.push(item);
        }
        queue.forEach((vv) => {
          if (vv.immediately) {
            vm.setState({ visible: false }); // 1,关闭该toast
            vv.onClose && vv.onClose(); // 2,立即执行该toast回调
            // 3,执行完成后，从队列里面删除掉这个toast
            queue = queue.filter((item) => item.uid !== vv.uid);
          } else {
            vm.setState(res);
            setTimeout(() => {
              // 从队列里找这个toast
              const res = queue.find((item) => item.uid === vv.uid);
              if (res) {
                // 队列里面有这个toast的话，则执行这个toast的回调
                vm.setState({ visible: false }); // 关闭该toast
                vv.onClose && vv.onClose(); // 执行这个toast的回调
              }
            }, vv.duration);
          }
        });
      };
    });
    /** 清除Toast */
    _toast.clear = () => {
      vm.setState({ visible: false });
      queue.forEach((vv) => {
        vv.onClose && vv.onClose();
      });
      queue = [];
    };
    _toast.component = vm;
    _toast.config = (v) => {
      defaultInstanceProp = v;
    };
    cb(_toast);
  }
  ReactDOM.render(<Toast {...props} ref={ref} />, messageEl);
};

export default Toast;
