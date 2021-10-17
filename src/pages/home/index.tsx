import { useEffect, useState, memo } from 'react';
import { slotList } from '../../../mock/mock';
/**
 * useState异步更新
 */

const Home = function () {
  const [myFriends, setMyFriends] = useState([
    { id: 1, name: 'zhangsan' },
    { id: 2, name: 'lisi' },
    { id: 3, name: 'wangwu' },
  ]);

  const [imgList, setImgList] = useState([]);

  function delFriend2(item) {
    setMyFriends((res) => {
      let res1 = res.filter((v) => v.id != item.id);
      return res1;
    });
  }

  function addFriend3(item) {
    // let arrClone = [...myFriends];
    // console.log('arrClone', JSON.stringify(arrClone), 1);
    // arrClone.push(item);
    // console.log('arrClone', JSON.stringify(arrClone), 2);
    // setMyFriends(arrClone);
    //解决：
    setMyFriends((res) => {
      let arrClone = [...res];
      console.log(JSON.stringify(arrClone), 1);
      arrClone.push(item);
      console.log(JSON.stringify(arrClone), 2);
      return arrClone;
    });
  }

  // shengqi和zhaoliu都加进去了
  function handleClick() {
    console.log('handleClick');
    addFriend3({ id: 5, name: 'shengqi' });
    addFriend3({ id: 4, name: 'zhaoliu' });
    // delFriend2({ id: 1 });
  }

  function downloadImg() {
    console.log('ssss');
  }

  useEffect(() => {
    console.log('home生命周期');
    let a = require.context('../../../public/u/', true);

    a.keys().forEach((k) => {
      // console.log(k);
      console.log(k.slice(2));
      let imgName = k.slice(2);
      imgList.push(imgName);
    });
  }, []);

  useEffect(() => {
    console.log('imgList的副作用', imgList.length);
  }, [imgList]);

  useEffect(() => {
    console.log('myFriends的副作用', myFriends);
  }, [myFriends]);

  return (
    <div>
      Home页面
      <button onClick={() => handleClick()}>handleClick</button>
      {myFriends.map((item) => {
        return (
          <div key={item.id}>
            {item.id}:{item.name}
          </div>
        );
      })}
      <hr />
      <hr />
      <hr />
      <button onClick={() => downloadImg()}>下载</button>
      {/* {imgList.length &&
        imgList.map((v) => {
          return <img key={v} src={'/u/' + v} alt="" />;
        })} */}
      {slotList.map((v, index) => {
        return <img key={index} src={v} alt="" />;
      })}
      {/* <img
        src={require('https://rec.4funvideo.com/u/22c6ba6d-26f6-4f49-8ced-729a177915d9-Skin_Face_Hair_Front.png')}
        alt=""
      /> */}
    </div>
  );
};
export default memo(Home);
