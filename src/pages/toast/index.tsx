import { memo, useEffect } from 'react';
import Toast from '@/components/Toast/index';
import Wrap from '../../components/componentWrap';
import readme from './README.md';

const ToastPage = function () {
  useEffect(() => {
    // Toast.fail({
    //   // icon: 'sdgsdg',
    //   content: 'fail-toast',
    //   duration: 1000,
    //   onClose: () => {
    //     console.log('111');
    //   },
    // });
    Toast.show({
      content: 'hi',
      onClose: () => {
        console.log('222');
      },
    });
    Toast.show({
      icon: <div>自定义icon</div>,
      content: 'hello',
      onClose: () => {
        console.log('333');
      },
    });
  });
  return (
    <Wrap name="Toast 轻提示" html={readme}>
      <div>
        在页面中间弹出黑色半透明提示，用于消息通知、加载提示、操作结果提示等场景。
      </div>
      <div>vant组件库没写哈哈哈</div>
      <div>123</div>
    </Wrap>
  );
};
export default memo(ToastPage);
