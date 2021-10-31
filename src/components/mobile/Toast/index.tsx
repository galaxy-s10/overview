import { PureComponent } from 'react';
import ReactDOM from 'react-dom';
import style from './index.scss';
import base64List from './constance';
import {
  ICallBackProp,
  IToastState,
  IUserProp,
  IInstanceProp,
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
  };

  render() {
    console.log('Toast组件render', this.props, this.state);
    const { visible, content, icon, maskClassName, maskClickable, maskStyle } =
      this.state;
    const renderMask = function ({
      maskClickable,
      maskClassName,
      maskStyle,
    }: IInstanceProp): React.ReactNode {
      if (!maskClickable) {
        document.body.classList.add(style.UnClickAble);
      } else {
        document.body.classList.remove(style.UnClickAble);
      }
      return <div className={maskClassName} style={maskStyle}></div>;
    };
    const renderIcon = function (icon: IUserProp['icon']) {
      let res = icon;
      if (icon) {
        if (['success', 'info', 'fail', 'loading'].indexOf(icon) !== -1) {
          res = (
            <img
              className={`${style[`Icon-${icon}`]}`}
              src={base64List[icon]}
              alt=""
            />
          );
        }
      }
      return res;
    };
    const renderContent = function (content: IUserProp['content']) {
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
          {renderMask({ maskClassName, maskClickable, maskStyle })}
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

Toast.newInstance = function (props, cb) {
  console.log('Toast实例化', props, cb);
  const defaultInstanceProp: IInstanceProp = {
    duration: 2000, // 持续显示两秒
    maskClickable: false, // 不可点击遮罩
    maskClassName: undefined,
    maskStyle: undefined,
  };
  const messageEl = document.createElement('div');
  document.body.appendChild(messageEl);
  // @ts-ignore
  const _toast: ICallBackProp = {};

  // const clear = function () {
  //   console.log('清除Toast', _vm);
  //   // ReactDOM.unmountComponentAtNode(messageEl);
  //   // if (messageEl.parentNode) {
  //   //   messageEl.parentNode.removeChild(messageEl);
  //   // }
  // };
  const quequ = [];
  function ref(vm) {
    ['success', 'info', 'fail', 'loading'].forEach((type) => {
      console.log('????????');
      // @ts-ignore
      _toast[type] = (props: IUserProp) => {
        quequ.push(1);
        const userProp = { visible: true, ...props };
        const res = {
          ...defaultInstanceProp,
          ...userProp,
          icon: type,
        };
        console.log(res, '--');
        // if (quequ.length === 1) {
        vm.setState(res);
        res.duration &&
          setTimeout(() => {
            vm.setState({ visible: false });
            props.onClose && props.onClose();
            quequ.pop();
          }, res.duration);
        // } else {
        //   console.log('已存在其他toast');
        // }
      };
    });
    _toast.show = (props: IUserProp) => {
      const userProp = { visible: true, ...props };
      const res = {
        icon: null,
        ...defaultInstanceProp,
        ...userProp,
      };
      vm.setState(res);
      props.duration &&
        setTimeout(() => {
          vm.setState({ visible: false });
          props.onClose && props.onClose();
        }, props.duration);
    };
    _toast.clear = () => {
      vm.setState({ visible: false });
    };
    _toast.component = vm;
    cb(_toast);
  }
  ReactDOM.render(<Toast {...props} ref={ref} />, messageEl);
};

export default Toast;
