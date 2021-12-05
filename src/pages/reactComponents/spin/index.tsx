import Wrap from '@/components/componentWrap';
import readme from './README.md';

export default function index() {
  return (
    <Wrap name="Spin 加载中" html={readme}>
      <div>用于页面和区块的加载中状态。</div>
      <div>
        页面局部处于等待异步数据或正在渲染过程时，合适的加载动效会有效缓解用户的焦虑。
      </div>
    </Wrap>
  );
}
