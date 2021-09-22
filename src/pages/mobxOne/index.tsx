import { observer } from 'mobx-react';
import globalStore from '../../store';

import styles from './index.scss';

const Mobx1 = (props: any) => {
  const { store } = props;
  const { user, buyCar } = globalStore;
  return (
    <div className={styles.mobxOneWrap}>
      mobxOne页面
      <ul>
        {Object.keys(user).map((item) => {
          return (
            <li key={item}>
              {item}:{user[item]}
            </li>
          );
        })}
      </ul>
    </div>
  );
};
export default observer(Mobx1);
