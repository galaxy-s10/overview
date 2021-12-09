import { useEffect, useState, memo, UIEvent } from 'react';
import style from './index.scss';
import { articleData } from './mock';
import { getArticleList } from './services';

/**
 * 获取[min,max]之间的随机整数
 * 例如：[10,30],[-21,32],[-100,-20]
 */
const getRandomInt = (min: number, max: number) =>
  Math.floor(Math.random() * (max - min + 1)) + min;

/**
 * 获取随机字符串
 */
const randomString = (length: number): string => {
  const str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let res = '';
  for (let i = 0; i < length; i++) {
    res += str.charAt(getRandomInt(0, str.length - 1));
  }
  return res;
};

const VirtualList = () => {
  const [list, setList] = useState<any[]>([]);
  const [itemHeight, setItemHeight] = useState(40); // 每个item的高度
  const [visibleHeight, setVisibleHeight] = useState(200); // 可视高度
  const [visibleMaxCount, setVisibleMaxCount] = useState(
    Math.floor(visibleHeight / itemHeight) + 2
  );
  const [startIndex, setStartIndex] = useState(0); // 当前可视范围的第1个元素的索引值
  // const [endIndex, setEndIndex] = useState(startIndex); // 当前可视范围的第1个元素的索引值
  const [nowPage, setNowPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);

  const getData = async () => {
    try {
      const res = await getArticleList({ nowPage, pageSize });
      console.log(res);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    const domlist: JSX.Element[] = [];
    getData();
    // domlist.push(
    //   <div
    //     data-index={i}
    //     key={i}
    //     style={{ height: `${itemHeight}px` }}
    //     className={style['virtual-list-item']}
    //   >
    //     <span>index:{i},</span>
    //     <b> {randomString(10)}</b>
    //   </div>
    // );
    // console.log('显示几个：', domlist.length);
    setList(domlist);
  }, []);
  const virtualListScroll = (
    e: UIEvent<HTMLDivElement, globalThis.UIEvent>
  ) => {
    // 每次滚动都监听当前可视范围的第1个元素的索引值
    console.log(e.currentTarget.scrollTop);
    const index = Math.floor(e.currentTarget.scrollTop / itemHeight);
    console.log('当前可视范围的第一个item的索引是：', index);
    // setStartIndex()
  };
  return (
    <>
      {visibleMaxCount}
      <div
        style={{ height: `${visibleHeight}px` }}
        className={style['virtual-list-wrapper']}
        onScroll={(e) => virtualListScroll(e)}
      >
        <div className={style['virtual-list-container']}>{list}</div>
      </div>
    </>
  );
};
export default VirtualList;
