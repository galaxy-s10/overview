import ToastInstance from './instance';
import { ICallBackProp } from './interface';

// eslint-disable-next-line import/no-mutable-exports
let Toast: ICallBackProp = {};
ToastInstance.newInstance({}, (res) => {
  Toast = res;
});
export default Toast;
