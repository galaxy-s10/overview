```react
import { memo } from 'react';
import Toast from '@/components/Toast/index';
import Wrap from '@/components/componentWrap';
import readme from './README.md';

const ToastPage = function () {
  const successToast = () => {
    Toast.success({
      content: '自定义success内容',
      onClose: () => {
        console.log('successToast关闭回调');
      },
    });
  };
  const failToast = () => {
    Toast.fail({
      content: '自定义fail内容',
      onClose: () => {
        console.log('failToast关闭回调');
      },
    });
  };
  const infoToast = () => {
    Toast.info({
      content: '自定义info内容',
      onClose: () => {
        console.log('infoToast关闭回调');
      },
    });
  };
  const loadingToast = () => {
    Toast.loading({
      content: '自定义loading内容',
      onClose: () => {
        console.log('loadingToast关闭回调');
      },
    });
  };

  const showToast = () => {
    Toast.show({
      icon: <div>自定义icon</div>,
      content: <b>自定义内容</b>,
      onClose: () => {
        console.log('showToast关闭回调');
      },
    });
  };

  const showContentToast = () => {
    Toast.show({
      content: 'showContentToast',
      onClose: () => {
        console.log('showContentToast关闭回调');
      },
    });
  };
  const clearToast = () => {
    Toast.clear();
  };

  const allowMaskClickToast = () => {
    Toast.show({
      maskClickable: true,
      content: '允许点击背景',
      onClose: () => {
        console.log('allowMaskClickToast关闭回调');
      },
    });
  };
  const editToastConfig1 = () => {
    Toast.config({
      duration: 3000,
      maskClickable: true,
    });
  };

  const editToastConfig2 = () => {
    Toast.config({
      duration: 500,
      maskClickable: false,
      maskStyle: {
        backgroundColor: 'rgba(0,0,0,0.3)',
      },
    });
  };

  return (
    <Wrap name="Toast 轻提示" html={readme}>
      <div>
        在页面中间弹出黑色半透明提示，用于消息通知、加载提示、操作结果提示等场景。
      </div>
      <div>移动端的Toast提示</div>
      <div>
        <div>
          有icon和content的Toast:
          <button onClick={() => successToast()}>successToast</button>
          <button onClick={() => failToast()}>failToast</button>
          <button onClick={() => infoToast()}>infoToast</button>
          <button onClick={() => loadingToast()}>loadingToast</button>
          <button onClick={() => showToast()}>showToast</button>
        </div>
        <br />
        <div>
          只有content的Toast:
          <button onClick={() => showContentToast()}>showContentToast</button>
        </div>
        <br />
        <div>
          其他Toast:
          <button onClick={() => allowMaskClickToast()}>
            allowMaskClickToast
          </button>
        </div>
        <br />
        <div>
          关闭Toast:
          <button onClick={() => clearToast()}>clearToast</button>
        </div>
        <br />
        <div>
          修改默认Toast全局配置:
          <button onClick={() => editToastConfig1()}>
            持续时间3000毫秒、允许点击背景
          </button>
          <button onClick={() => editToastConfig2()}>
            持续时间500毫秒、不允许点击背景、自定义mask样式
          </button>
        </div>
      </div>
    </Wrap>
  );
};
export default memo(ToastPage);

```
