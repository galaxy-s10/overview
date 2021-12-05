import { useEffect, useState, memo } from 'react';
import style from './index.less';

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
  const count = 500;
  const [list, setList] = useState<any[]>([]);
  useEffect(() => {
    console.log('x');
    const list: JSX.Element[] = [];
    for (let i = 0; i < count; i++) {
      list.push(
        <div data-index={i} className={style['virtual-list-item']}>
          <span>index:{i},</span>
          <b> {randomString(10)}</b>
        </div>
      );
    }
    setList(list);
  }, []);
  const virtualListScroll = (e) => {
    console.log(e);
  };
  return (
    <div className={style['virtual-list-wrapper']} onScroll={virtualListScroll}>
      <div className={style['virtual-list-container']}>{list}</div>
    </div>
  );
};
export default memo(VirtualList);
