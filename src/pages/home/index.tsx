import { useEffect, useState, memo } from 'react';

const Home = function (props) {
  const [testarr, setTestarr] = useState([
    { id: 1, name: 'zhangsan' },
    { id: 2, name: 'lisi' },
    { id: 3, name: 'wangwu' },
  ]);

  // function addItem() {
  //   console.log('additem');
  //   let arr1 = [...testarr];
  //   arr1.push({ id: 4, name: 'zhaoliu' });
  //   setTestarr(arr1);
  // }
  function addItem() {
    console.log('additem');
    setTestarr((arr) => {
      let arr1 = [...arr];
      arr1.push({ id: 4, name: 'zhaoliu' });
      console.log(arr, '----');
      return arr1;
    });
  }

  function handleClick() {
    console.log('handleClick');
    for (let i = 0; i < 10; i++) {
      console.log('for循环');
      addItem();
    }
  }

  useEffect(() => {
    console.log('testarr', testarr);
  }, [testarr]);

  return (
    <div>
      Home页面
      <button onClick={() => handleClick()}>ppp</button>
    </div>
  );
};
export default memo(Home);
