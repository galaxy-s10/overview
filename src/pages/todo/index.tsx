import Wrap from '@/components/componentWrap';
import readme from './README.md';

export default function index() {
  return (
    <Wrap name="Todo" html={readme}>
      <div>这里放一些准备要做的事</div>
      <div>🎉🎉🎉</div>
      <div></div>
    </Wrap>
  );
}
