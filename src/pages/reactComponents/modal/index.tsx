import Wrap from '@/components/componentWrap';
import readme from './README.md';

export default function index() {
  return (
    <Wrap name="Modal 对话框" html={readme}>
      <div>模态对话框。</div>
      <div>
        <p>
          需要用户处理事务，又不希望跳转页面以致打断工作流程时，可以使用 Modal
          在当前页面正中打开一个浮层，承载相应的操作。
        </p>
        <p>
          另外当需要一个简洁的确认框询问用户时，可以使用 Modal.confirm()
          等语法糖方法。
        </p>
      </div>
    </Wrap>
  );
}
