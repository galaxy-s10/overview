import ToastInstance from './instance';
import { ICallBackProp } from './interface';

let Toast: ICallBackProp = {};
ToastInstance.newInstance({}, (res) => {
  Toast = res;
});
export default Toast;
