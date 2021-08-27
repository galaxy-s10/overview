import styles from './index.less';
import { history } from 'umi';
export default function IndexPage() {
  console.log(styles);
  // history.push('/hooks_1');

  return (
    <div>
      <h1 className={styles.title}>
        Page index
        <span className={styles.aaa}>aaa</span>
      </h1>
    </div>
  );
}
