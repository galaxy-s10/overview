import Wrap from '@/components/componentWrap';
import readme from './README.md';

export default function index() {
  return (
    <Wrap name="nuxt前台" html={readme}>
      <div>基于nuxt + elementui搭建的博客前台</div>
      <div>🎉🎉🎉</div>
      <div>
        <a href="https://www.hsslive.cn/" target="_blank">
          点我
        </a>
      </div>
    </Wrap>
  );
}
