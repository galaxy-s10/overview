import Wrap from '../../components/componentWrap';
import readme from './README.md';

export default function index() {
  return (
    <Wrap name="Message 全局提示" html={readme}>
      <div>全局展示操作反馈信息。</div>
      <div>
        <ul>
          <ol> 可提供成功、警告和错误等反馈信息。</ol>
          <ol>
            顶部居中显示并自动消失，是一种不打断用户操作的轻量级提示方式。
          </ol>
        </ul>
      </div>
    </Wrap>
  );
}
