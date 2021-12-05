// 实例化参数
export interface IInstanceProp {
  maskStyle?: React.CSSProperties; // Toast 遮罩样式
  maskClassName?: string; // Toast 遮罩类名
  maskClickable?: boolean; // 是否允许背景点击
  duration?: number; // 提示持续时间，若为 0 则不会自动关闭
}

// 实例化后的回调函数的参数(暴露给用户的接口)
export interface IUserProp extends IInstanceProp {
  content?: React.ReactNode; // Toast 文本内容
  icon?: 'info' | 'success' | 'fail' | 'loading' | React.ReactNode; // Toast 图标
  onClose?: () => void; // 关闭Toast时的回调
}

export interface IToastState extends IUserProp {
  visible: boolean;
}

// Toast组件暴露给用户的方法。
export interface ICallBackProp {
  /** Toast组件实例 */
  component: any;
  /** Toast组件默认配置 */
  config: ({
    maskClassName,
    maskClickable,
    maskStyle,
    duration,
  }: IInstanceProp) => void;
  /** 清除所有Toast */
  clear: () => void;
  /** 显示Toast */
  show: ({
    content,
    icon,
    duration,
    maskClickable,
    maskStyle,
    maskClassName,
  }: IUserProp) => void;
  success: ({
    content,
    duration,
    maskClickable,
    maskStyle,
    maskClassName,
  }: IUserProp) => void;
  fail: ({
    content, // 内容
    duration,
    maskClickable,
    maskStyle,
    maskClassName,
  }: IUserProp) => void;
  info: ({
    content,
    duration,
    maskClickable,
    maskStyle,
    maskClassName,
  }: IUserProp) => void;
  loading: ({
    content,
    duration,
    maskClickable,
    maskStyle,
    maskClassName,
  }: IUserProp) => void;
}
