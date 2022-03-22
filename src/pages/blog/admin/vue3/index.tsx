import Wrap from '@/components/componentWrap';
import readme from './README.md';

export default function index() {
  return (
    <Wrap name="vue3后台" html={readme}>
      <div>基于vue3 + webpack5 + typescriipt搭建的博客后台</div>
      <div>🎉🎉🎉</div>
      <div>
        <a href="https://admin.hsslive.cn" target="_blank">
          点我
        </a>
      </div>
    </Wrap>
  );
}
