import Wrap from '@/components/componentWrap';
import readme from './README.md';

export default function index() {
  return (
    <Wrap name="LeetCode" html={readme}>
      <div>记录做过的算法题</div>
      <div>🎉🎉🎉</div>
    </Wrap>
  );
}
