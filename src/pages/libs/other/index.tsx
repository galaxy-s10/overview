import Wrap from '@/components/componentWrap';
import readme from './README.md';

export default function index() {
  return (
    <Wrap name="其他" html={readme}>
      <div>扩展用</div>
      <div>🎉🎉🎉</div>
    </Wrap>
  );
}
