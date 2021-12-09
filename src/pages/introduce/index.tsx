import { memo, useState, useEffect } from 'react';
import VList from '@/components/VirtualList';
import {
  deleteNullObjectKey,
  judgeStringSpace,
} from '@/pages/libs/js/common/utils';

const Introduce = () => {
  useEffect(() => {
    const obj = { a: undefined, b: NaN, c: '', d: null };
    deleteNullObjectKey(obj);
    console.log(judgeStringSpace('obj'), '空格');
    console.log(obj, '-----');
  }, []);

  return (
    <div>
      <h1>记录所有</h1>
      <VList></VList>
    </div>
  );
};
export default memo(Introduce);
