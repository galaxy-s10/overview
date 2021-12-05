import Wrap from '@/components/componentWrap';
import readme from './README.md';

export default function index() {
  return (
    <Wrap name="BackTop 回到顶部" html={readme}>
      <div>返回页面顶部的操作按钮。</div>
      <div>
        <ul>
          <ol>当页面内容区域比较长时；</ol>
          <ol>当用户需要频繁返回顶部查看相关内容时。</ol>
        </ul>
      </div>
    </Wrap>
  );
}
