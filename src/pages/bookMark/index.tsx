import Wrap from '@/components/componentWrap';
import readme from './README.md';

export default function index() {
  return (
    <Wrap name="书签" html={readme}>
      <div>这里放一些常用的书签</div>
      <div>🎉🎉🎉</div>
    </Wrap>
  );
}
