import { memo } from 'react';
import { observer } from 'mobx-react';

import styles from './index.scss';
import globalStore from '../../store';

const TestPageDemo = function () {
  const { user, buyCar } = globalStore;

  return (
    <div className={styles.testPageWrap}>
      testPage页面
      <ul>
        {Object.keys(user).map((item) => (
          <li key={item}>
            {item}:{user[item]}
          </li>
        ))}
      </ul>
    </div>
  );
};

// export default memo(TestPageDemo); //memo优化
// export default observer(TestPageDemo); //observer包裹，不使用memo
// export default observer(memo(TestPageDemo)); //observer包裹 + 使用memo，错误写法
export default memo(observer(TestPageDemo)); // observer包裹 + 使用memo，正确写法
