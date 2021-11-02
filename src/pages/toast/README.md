```react
import Toast from '@/components/Toast/index';
Toast.fail({
  content: 'fail-toast',
  onClose: () => {
    console.log('该Toast关闭时触发的回调');
  },
});
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
```