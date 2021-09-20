import styles from './index.scss';
import gobalStore from '../../store';

const UpdateMobx = function () {
  const { user, setUserToken } = gobalStore;
  function updateToken() {
    console.log('setUserToken');
    setUserToken('jwttoken111');
  }
  return (
    <div className={styles.updateMobxWrap}>
      updateMobx页面
      <ul>
        <li>
          <button onClick={() => updateToken()}>更新token</button>
        </li>
      </ul>
    </div>
  );
};

export default UpdateMobx;
