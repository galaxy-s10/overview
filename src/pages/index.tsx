import { memo } from 'react';
import { observer } from 'mobx-react';
import styles from './index.less'; //umi默认支持less
import gobalStore from '../store';

import TestPage from './testPage';
import MobxOne from './mobxOne';
import UpdateMobx from './updateMobx';

const Index = () => {
  const { user, buyCar } = gobalStore;

  return (
    <div className={styles.indexWrap}>
      <span className={styles.title}>title:pages下的Index页面</span>
      <ul>
        {Object.keys(user).map((item) => {
          return (
            <li key={item}>
              {item}:{user[item]}
            </li>
          );
        })}
      </ul>
      <TestPage></TestPage>
      <MobxOne store={gobalStore}></MobxOne>
      <UpdateMobx></UpdateMobx>
    </div>
  );
};
// export default Index;
export default memo(observer(Index)); //observer包裹 + 使用memo，正确写法
