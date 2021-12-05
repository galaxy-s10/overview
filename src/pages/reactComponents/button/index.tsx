import Wrap from '@/components/componentWrap';
import readme from './README.md';

export default function index() {
  return (
    <Wrap name="Button 按钮" html={readme}>
      <div>按钮用于开始一个即时操作。</div>
      <div>
        标记了一个（或封装一组）操作命令，响应用户点击行为，触发相应的业务逻辑。
      </div>
    </Wrap>
  );
}
