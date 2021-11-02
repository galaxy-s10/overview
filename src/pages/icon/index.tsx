import Wrap from '../../components/componentWrap';
import readme from './README.md';

export default function index() {
  return (
    <Wrap name="Icon 图标" html={readme}>
      <div>
        语义化的矢量图形。使用图标组件，你需要安装 @ant-design/icons
        图标组件包：
      </div>
      <div>ant-design没写哈哈哈</div>
    </Wrap>
  );
}
