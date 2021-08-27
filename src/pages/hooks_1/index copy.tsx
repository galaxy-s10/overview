import React, { useState, useEffect } from 'react';
import { useMount } from 'ahooks';
// import { tabList } from './data'
// import { tabList } from './data1'
import tabStyle from './index.scss';
import { getPageList } from './service/index';
import { tab } from './interface';

export default (arg: any) => {
  const [_tab, setTab] = useState(tab);
  const [currentTabId, setCurrentTabId] = useState(1);

  // const tabList1: tab[] = [{ id: 1, name: 'hi', img: '32', children: [] }]
  // const tabList1: Array<tab> = [{ a: 1, id: 11 }]
  let test1 = { id: 1, name: '43', img: '43', children: [] };
  let test2 = [{ id2: 1, name: '43', img: '43', children: [] }];
  let sgd: { b: number }[] = []; //这样只能定义数组里面所有值的格式，但是允许为空，并不是一定要有{b:number}
  // 如果在tabList1里面写了一个从js文件导入的数据，会导致类型检测失效！
  const tabList2: tab[] = [{ id: 1, name: '23', img: '23', children: [] }];
  // const tabList2: tab[] = [
  //   { id: 1, name: '23', img: '23', children: [{ id: 2, name: '234', img: '5345', children: [] }] },
  // ]
  const tabList22: tab[] = [
    {
      id: 1,
      name: 'Face', //tab名称
      img: 'https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg', //tab图标
      children: [
        {
          id: 101,
          name: 'Eyes', //tab名称
          img: 'https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg', //tab图标
        },
        {
          id: 102,
          name: 'Nose', //tab名称
          img: 'https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg', //tab图标
        },
        {
          id: 103,
          name: 'Ear', //tab名称
          img: 'https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg', //tab图标
        },
        {
          id: 104,
          name: 'Mouth', //tab名称
          img: 'https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg', //tab图标
        },
        {
          id: 105,
          name: 'Eyebrow', //tab名称
          img: 'https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg', //tab图标
        },
        {
          id: 106,
          name: 'Beard', //tab名称
          img: 'https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg', //tab图标
        },
      ], //二级tab
    },
    {
      id: 2,
      name: 'Hairstyle', //tab名称
      img: 'https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg', //tab图标
      children: [], //二级tab
    },
    {
      id: 3,
      name: 'Headwear', //tab名称
      img: 'https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg', //tab图标
      children: [], //二级tab
    },
    {
      id: 4,
      name: 'Jacket', //tab名称
      img: 'https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg', //tab图标
      children: [], //二级tab
    },
    {
      id: 5,
      name: 'Jacket1', //tab名称
      img: 'https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg', //tab图标
      children: [], //二级tab
    },
    {
      id: 6,
      name: 'Jacket2', //tab名称
      img: 'https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg', //tab图标
      children: [], //二级tab
    },
  ];
  // const tabList1: tab[] = tabList
  const tabList1: tab[] = [...tabList];
  // console.log(tabList1, 87)
  console.log(tabList2, 87111);
  console.log(tabList);
  useEffect(() => {
    console.log('useEffect');
    // getPageList().then(res => {
    //   console.log(res, 12143)
    // })
  });
  useMount(() => {
    console.log('useMount');
    // setTimeout(() => {
    //   setCurrentTabId(1)
    // }, 1000)
  });
  console.log(tabList);
  const _tabCpt = _tab.map((tabinfo, index) => {
    console.log(tabinfo, index, 'tabinfo');
    console.log(_tab[tabinfo]);
    return (
      <div key={index} className={tabStyle.topTabItem}>
        <div onClick={() => setCurrentTabId(tabinfo.id)}>
          <span>
            <img
              src={tabinfo.img}
              alt=""
              style={{ width: '10px', height: '10px' }}
            />
            {tabinfo.name}
          </span>
        </div>
        {tabinfo.children &&
          tabinfo.children.length != 0 &&
          currentTabId === tabinfo.id && (
            <div className={tabStyle.second_tab}>
              {tabinfo.children.map((tabChild) => {
                return (
                  <div className={tabStyle.second_tab_item}>
                    {tabChild.name}
                  </div>
                );
              })}
            </div>
          )}
      </div>
    );
    // return (
    //   <div key={index} className={tabStyle.topTab}>
    //     <div>
    //       <span>{key}</span>
    //     </div>
    //     <div className={tabStyle.second_tab}>
    //       {_tabdata[key].children &&
    //         _tabdata[key].children.map((child, child_index) => {
    //           console.log(child, child_index, 98)
    //           return (
    //             <span key={child_index} className={tabStyle.second_tab_item}>
    //               {child.name}
    //             </span>
    //           )
    //         })}
    //     </div>
    //   </div>
    // )
  });
  console.log(tab, 876);
  return (
    <>
      <div className={tabStyle.topTab}>{_tabCpt}</div>
    </>
  );
};
