import Wrap from '@/components/componentWrap';
import readme from './README.md';

export default function index() {
  return (
    <Wrap name="Empty 空状态" html={readme}>
      <div>空状态时的展示占位图。</div>
      <div>
        <ul>
          <ol> 当目前没有数据时，用于显式的用户提示。</ol>
          <ol>初始化场景时的引导创建流程。</ol>
        </ul>
      </div>
    </Wrap>
  );
}
