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

  //错误
  function addFriend1(i) {
    console.log('addFriend');
    let arrClone = [...myFriends];
    arrClone.push({ id: 4, name: 'firend-' + i });
    setMyFriends(arrClone);
  }

  //正确
  function addFriend(i) {
    console.log('addFriend');
    setMyFriends((res) => {
      let arrClone = [...res];
      arrClone.push({ id: 4 + i, name: 'firend-' + i });
      console.log('arrClone', arrClone);
      return arrClone;
    });
  }

  function addFriend2(item) {
    console.log('addFriend2');
    setMyFriends((res) => {
      let arrClone = [...res];
      arrClone.push(item);
      console.log('arrClone', arrClone);
      return arrClone;
    });
  }

  function delFriend2(item) {
    setMyFriends((res) => {
      let res1 = res.filter((v) => v.id != item.id);
      return res1;
    });
  }

  function addFriend3(item) {
    let arrClone = [...myFriends];
    console.log('arrClone', JSON.stringify(arrClone));
    arrClone.push(item);
    console.log('arrClone', JSON.stringify(arrClone));
    setMyFriends(arrClone);
  }

  // 正确
  function handleClick() {
    console.log('handleClick');
    addFriend3({ id: 5, name: 'shengqi' });
    addFriend3({ id: 4, name: 'zhaoliu' });
    // delFriend2({ id: 1 });
  }

  //正确，直接for循环结束了，再一次性set赋值
  function handleClick1() {
    console.log('handleClick1,或者直接for循环结束了，再一次性set赋值');
    let arrClone = [...myFriends];
    for (let i = 0; i < 10; i++) {
      console.log('for循环', i);
      arrClone.push({ id: 4 + i, name: 'firend-' + i });
    }
    setMyFriends(arrClone);
  }

  useEffect(() => {
    console.log('myFriends的副作用', myFriends);
  }, [myFriends]);

  return (
    <div>
      Home页面
      <button onClick={() => handleClick()}>handleClick</button>
      <button onClick={() => handleClick1()}>handleClick1</button>
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
