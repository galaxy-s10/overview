import Wrap from '@/components/componentWrap';
import readme from './README.md';

export default function index() {
  return (
    <Wrap name="node后端" html={readme}>
      <div>基于node + mysql搭建的博客后端</div>
      <div>🎉🎉🎉</div>
      <div>
        <a
          href="https://github.com/galaxy-s10/react-blog-server"
          target="_blank"
        >
          点我
        </a>
      </div>
    </Wrap>
  );
}
