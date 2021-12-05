import Wrap from '@/components/componentWrap';
import readme from './README.md';

export default function index() {
  return (
    <Wrap name="vue2组件" html={readme}>
      <div>基于webpack5+gulp4构建的vue2.x组件库</div>
      <div>🎉🎉🎉</div>
      <div>
        <a href="https://www.hsslive.cn/billd/" target="_blank">
          点我
        </a>
      </div>
      <div>33</div>
    </Wrap>
  );
}
