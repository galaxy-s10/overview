import { useEffect, useState } from 'react';
import { setLocale, getLocale, getIntl, FormattedMessage } from 'umi';
import { makeAutoObservable } from 'mobx';
import { observer } from 'mobx-react';
// import { observer } from 'mobx-react-lite';
import Store from './mobxStore';

const Home = function (props) {
  useEffect(() => {
    console.log('home页面', props.store);
    console.log('home页面', props.store.gobalState);
  });

  const [testarr, setTestarr] = useState([
    { id: 1, name: 'zhangsan' },
    { id: 2, name: 'lisi' },
    { id: 3, name: 'wangwu' },
  ]);

  function addItem() {
    console.log('additem');
    let arr = [...testarr];
    arr.push({ id: 4, name: 'zhaoliu' });
    setTestarr(arr);
  }

  function handleClick() {
    console.log('--');
    // props.store.setGobalState();
    for (let i = 0; i < 4; i++) {
      addItem();
    }
  }

  useEffect(() => {
    console.log('testarr', testarr);
  }, [testarr]);

  return (
    <div>
      react useState异步更新问题
      <div>{JSON.stringify(props.store.gobalState.user)}</div>
      <button onClick={() => handleClick()}>ppp</button>
    </div>
  );
};
export default observer(Home);
