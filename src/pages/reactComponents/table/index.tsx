import Wrap from '@/components/componentWrap';
import readme from './README.md';

export default function index() {
  return (
    <Wrap name="Table 表格" html={readme}>
      <div>展示行列数据。</div>
      <div>
        <ul>
          <ol>当有大量结构化的数据需要展现时；</ol>
          <ol>当需要对数据进行排序、搜索、分页、自定义操作等复杂行为时。</ol>
        </ul>
      </div>
    </Wrap>
  );
}
