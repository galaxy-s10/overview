import styles from './index.less';

export default function IndexPage() {
  console.log(styles);
  return (
    <div>
      <h1 className={styles.title}>
        Page index
        <span className={styles.aaa}>aaa</span>
      </h1>
    </div>
  );
}
