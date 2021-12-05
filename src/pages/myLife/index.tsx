import Wrap from '@/components/componentWrap';
import readme from './README.md';

export default function index() {
  return (
    <Wrap name="Life" html={readme}>
      <div>day in and day out</div>
      <div>🎉🎉🎉</div>
    </Wrap>
  );
}
