import { useEffect, useState, memo } from 'react';

/**
 * useState异步更新
 */

const Home = function (props) {
  const [myFriends, setMyFriends] = useState([
    { id: 1, name: 'zhangsan' },
    { id: 2, name: 'lisi' },
    { id: 3, name: 'wangwu' },
  ]);

  // function addFriend(i) {
  //   console.log('addFriend');
  //   let arrClone = [...myFriends];
  //   arrClone.push({ id: 4, name: 'firend-' + i });
  //   setMyFriends(arrClone);
  // }

  function addFriend(i) {
    console.log('addFriend');
    setMyFriends((arr) => {
      let arrClone = [...arr];
      arrClone.push({ id: 4 + i, name: 'firend-' + i });
      return arrClone;
    });
  }

  function handleClick() {
    console.log('handleClick');
    for (let i = 0; i < 10; i++) {
      console.log('for循环', i);
      addFriend(i);
    }
  }

  useEffect(() => {
    console.log('myFriends的副作用', myFriends);
  }, [myFriends]);

  return (
    <div>
      Home页面
      <button onClick={() => handleClick()}>ppp</button>
      {myFriends.map((item) => {
        return (
          <div key={item.id}>
            {item.id}:{item.name}
          </div>
        );
      })}
    </div>
  );
};
export default memo(Home);
