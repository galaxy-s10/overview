import { useEffect, useState, memo } from 'react';

/**
 * useState异步更新
 */

const Home = function () {
  const [myFriends, setMyFriends] = useState([
    { id: 1, name: 'zhangsan' },
    { id: 2, name: 'lisi' },
    { id: 3, name: 'wangwu' },
  ]);

  function delFriend2(item) {
    setMyFriends((res) => {
      const res1 = res.filter((v) => v.id !== item.id);
      return res1;
    });
  }

  function addFriend3(item) {
    const arrClone = [...myFriends];
    console.log('arrClone', JSON.stringify(arrClone));
    arrClone.push(item);
    console.log('arrClone', JSON.stringify(arrClone));
    setMyFriends(arrClone);
  }

  // 点击后最终结果只会加进去了zhaoliu
  function handleClick() {
    console.log('handleClick');
    addFriend3({ id: 5, name: 'shengqi' });
    addFriend3({ id: 4, name: 'zhaoliu' });
    // delFriend2({ id: 1 });
  }

  useEffect(() => {
    console.log('myFriends的副作用', myFriends);
  }, [myFriends]);

  return (
    <div>
      Home页面
      <button onClick={() => handleClick()}>handleClick</button>
      {myFriends.map((item) => (
        <div key={item.id}>
          {item.id}:{item.name}
        </div>
      ))}
    </div>
  );
};
export default memo(Home);
