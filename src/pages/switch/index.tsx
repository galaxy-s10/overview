import Wrap from '../../components/componentWrap';
import readme from './README.md';

export default function index() {
  return (
    <Wrap name="Switch 开关" html={readme}>
      <div>开关选择器。</div>
      <div>
        <ul>
          <ol> 需要表示开关状态/两种状态之间的切换时；</ol>
          <ol>
            和 checkbox 的区别是，切换 switch 会直接触发状态改变，而 checkbox
            一般用于状态标记，需要和提交操作配合。
          </ol>
        </ul>
      </div>
    </Wrap>
  );
}
