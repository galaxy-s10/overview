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

  /**
   * 挂载
   * 当组件实例被创建并插入 DOM 中时，其生命周期调用顺序如下：
   * constructor()
   * static getDerivedStateFromProps()
   * render()
   * componentDidMount()
   */

  /**
   * 更新
   * 当组件的 props 或 state 发生变化时会触发更新。组件更新的生命周期调用顺序如下：
   * static getDerivedStateFromProps()
   * shouldComponentUpdate()
   * render()
   * getSnapshotBeforeUpdate()
   * componentDidUpdate()
   */

  /**
   * 卸载
   * 当组件从 DOM 中移除时会调用如下方法：
   * componentWillUnmount()
   */

  componentDidMount() {
    console.log('执行了组件的componentDidMount方法', this.state);
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log(
      '执行了组件的componentDidUpdate方法',
      prevProps,
      prevState,
      snapshot
    );
  }

  componentWillUnmount() {
    console.log('调用了Cpn的componentWillUnmount方法');
  }

  render() {
    console.log('Toast组件render', this.props, this.state);
    const { visible, content, icon, maskClassName, maskClickable, maskStyle } =
      this.state;
    const renderMask = ({
      maskClickable,
      maskClassName,
      maskStyle,
    }: IInstanceProp): React.ReactNode => {
      console.log('renderMask渲染了', this.state);
      return (
        <div
          className={`${maskClassName || style.ToastMask} ${
            maskClickable ? style.AllowClickAble : style.UnClickAble
          }`}
          style={maskStyle}
        ></div>
      );
    };
    const renderIcon = function (icon: IUserProp['icon']) {
      console.log('renderIcon渲染了');
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
      console.log('renderContent渲染了');
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
  let quequ: {
    uid: number;
    immediately: boolean;
    duration?: number;
    quequcb: any;
  }[] = [];
  let id = 0;
  function ref(vm) {
    ['success', 'info', 'fail', 'loading'].forEach((type) => {
      // @ts-ignore
      _toast[type] = (props: IUserProp) => {
        console.log('执行', type, uid, quequ);
        const userProp = { visible: true, ...props };
        const res = {
          ...defaultInstanceProp,
          ...userProp,
          icon: type,
        };
        console.log('quequ[quequ.length - 1]', quequ[quequ.length - 1]);
        // vm.setState(res);
        console.log('resresres', res);
        const uid = ++id;
        const quequcb = (props) => {
          console.log('huidiao', quequ, props);
          console.log('.....', quequ);
          vm.setState({ visible: false });
          props.onClose && props.onClose();
        };
        const item = {
          uid,
          immediately: false,
          duration: res.duration,
          type: res.icon,
          quequcb,
          onClose: res.onClose,
        };
        console.log(quequ, '队列22');
        const a = quequ[0];
        console.log(item, '====++++++');
        if (quequ.length < 1) {
          quequ.push(item);
          console.log('==2==', quequ, a);
          // a?.quequcb({ ...item });
        } else {
          // quequ.forEach((item, index, arr) => {
          // const popres = quequ.shift();
          // console.log(popres, '///');
          quequ.forEach((item) => {
            item.immediately = true;
          });
          item.immediately = false;
          quequ.push(item);

          // popres.quequcb(popres);
          // });
          // a?.quequcb(a.duration);
        }

        console.log('((((((object))))))', quequ);

        quequ.forEach((vv) => {
          if (vv.immediately) {
            console.log('不是最后一个，立即执行，然后删掉该item', vv);
            vm.setState({ visible: false });
            vv.onClose();
            quequ = quequ.filter((v) => v.uid !== vv.uid);
            console.log(quequ, '0))((');
          } else {
            vm.setState(res);
            console.log('最后一个', item);
            setTimeout(() => {
              const res = quequ.find((item) => item.uid == vv.uid);
              console.log('找到了吗', res);
              if (res) {
                vm.setState({ visible: false });
                res.onClose();
              } else {
                console.log('没了啊');
              }
            }, item.duration);
          }
        });
        // quequ = [];
        console.log('----', quequ[0]);
      };
    });
    _toast.show = (props: IUserProp) => {
      console.log('执行show');
      const userProp = { visible: true, ...props };
      const res = {
        icon: null,
        ...defaultInstanceProp,
        ...userProp,
      };
      console.log(res, '00');
      vm.setState(res);
      res.duration &&
        setTimeout(() => {
          vm.setState({ visible: false });
          props.onClose && props.onClose();
        }, res.duration);
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
