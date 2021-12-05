import Wrap from '@/components/componentWrap';
import readme from './README.md';

export default function index() {
  return (
    <Wrap name="Standard" html={readme}>
      <div>前端规范</div>
      <div>eslint + prettier</div>
    </Wrap>
  );
}
