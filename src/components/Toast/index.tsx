import ToastInstance from './instance';
import { ICallBackProp, IInstanceProp } from './interface';

let Toast: ICallBackProp = {};
ToastInstance.newInstance({}, (res) => {
  Toast = res;
});
export default Toast;
