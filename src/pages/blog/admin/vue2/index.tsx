import Wrap from '@/components/componentWrap';
import readme from './README.md';

export default function index() {
  return (
    <Wrap name="vue2后台" html={readme}>
      <div>基于vue2 + webpack5 + iview搭建的博客后台</div>
      <div>🎉🎉🎉</div>
      <div>
        <a
          href="https://github.com/galaxy-s10/vueblog-admin-old"
          target="_blank"
        >
          点我
        </a>
      </div>
    </Wrap>
  );
}
