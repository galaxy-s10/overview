import React, { useState, useEffect, useRef } from 'react';
// import { useMount } from 'ahooks'
import { tabList as ajaxTabList, goodsList as ajaxGoodsList } from './data1';
// import { tabList } from './data1'
import tabStyle from './index.scss';
// import { getPageList } from './service/index'
// import { tab } from './interface'
console.log('===');
const TabCpt = (arg: any) => {
  const [currentTabIndex, setCurrentTabIndex] = useState<number>(-1); //当前选中的一级tab的下标
  const [currentChildTabIndex, setCurrentChildTabIndex] = useState<number>(-1); //当前选中的二级tab的下标
  const [loading, setLoading] = useState(false); //是否加载中
  const [tabList, setTabList] = useState<any[]>([]); //所有整理好的tab数据
  const [goodsList, setGoodsList] = useState<any[]>([]); //当前tabid分页的数据
  const [tabHeight, setTabHeight] = useState(40); //tab高度
  const cardRef = useRef<any>();

  //模拟声明周期
  useEffect(() => {
    console.log('模拟声明周期');
    getAjaxTabList();
    cardRef.current &&
      cardRef.current.addEventListener('scroll', function (e) {
        if (
          e.target.scrollTop + e.target.clientHeight ===
          e.target.scrollHeight
        ) {
          console.log('到底了，开始分页', loading);
          if (!loading) {
            console.log('没有ajax,分页');
            setLoading(true);
            // getTabData()
          } else {
            console.log('正在ajax不分页');
          }
        }
      });
    console.log(
      'currentTabIndex',
      currentTabIndex,
      'currentChildTabIndex',
      currentChildTabIndex,
    );
  }, []);

  /**
   * 请求tab栏数据
   */
  const getAjaxTabList = async () => {
    const data: any[] = await new Promise((res, rej) => {
      setTimeout(() => {
        console.log('请求tab栏数据成功');
        // setLoading(false)
        res(ajaxTabList.data.tablist);
      }, 500);
    });
    console.log('请求tab栏数据成功,异步设置tab栏数据', data);
    setTabList(data);
  };

  console.log('函数式组件每次都会执行我。');

  /**
   * 请求商品分页数据
   */
  const getAjaxGoodsList = async () => {
    console.log('=====', loading);
    const data = await new Promise((res, rej) => {
      setTimeout(() => {
        console.log('请求商品分页数据成功');
        res(ajaxGoodsList.data.result);
        // setLoading(false)
      }, 500);
    });
    console.log('data', data);
    const newGoodsList = [...goodsList, ...data];
    setLoading(false);
    setGoodsList(newGoodsList);
  };

  // tabList的副作用
  useEffect(() => {
    console.log('tabList的副作用', tabList);
    // 获取完tablist后，设置tabid，然后请求对应的分页数据
    tabList.length && setCurrentTabIndex(0);
    tabList.length && tabList[0].children.length && setCurrentChildTabIndex(0);
    // getAjaxGoodsList()
  }, [tabList]);

  //tabid的副作用
  useEffect(() => {
    console.log('tabid变了，要发请求设置goodslist');
    console.log(tabList, currentTabIndex, currentChildTabIndex);
    // if(tabList)
    // if(currentTabIndex !== -1 &&)
    if (!tabList.length) {
      console.log(tabList, '0330000');
    } else {
      console.log('tabList有数据了');
      console.log(tabList[currentTabIndex]);
      // 如果当前一级tab栏有children，则设置currentChildTabIndex为0，并且获取数据
      if (tabList[currentTabIndex].children.length) {
        setCurrentChildTabIndex(0);
        getAjaxGoodsList();
      }
      if (tabList[currentTabIndex].children.length == 0) {
        setCurrentChildTabIndex(-1);
        getAjaxGoodsList();
      }
    }
  }, [currentTabIndex, currentChildTabIndex]);

  //loading的副作用
  useEffect(() => {
    console.log('loading副作用', loading);
    loading && getAjaxGoodsList();
  }, [loading]);

  //ahooks的hook
  // useMount(() => {
  //   // 这是ahooks提供的hook,但这里使用useEffect。
  //   console.log('useMount')
  // })

  const _tabCpt = tabList?.map((tabinfo, index) => {
    // console.log(tabinfo, index, 'tabinfo')
    // console.log(_tab[tabinfo])
    return (
      <div key={index} className={tabStyle.topTabItem}>
        <div onClick={() => setCurrentTabIndex(index)}>
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
          currentTabIndex === index && (
            <div className={tabStyle.second_tab}>
              <div>
                {tabinfo.children.map((tabChild, tabChildIndex) => {
                  return (
                    <div
                      key={tabChildIndex}
                      className={tabStyle.second_tab_item}
                      onClick={() => setCurrentChildTabIndex(tabChildIndex)}
                    >
                      <img
                        src={tabinfo.img}
                        alt=""
                        style={{ width: '10px', height: '10px' }}
                      />
                      {tabChild.name}--
                    </div>
                  );
                })}
              </div>
            </div>
          )}
      </div>
    );
  });
  // return <div>22</div>
  return (
    <div className={tabStyle.tab}>
      {/* <div className={tabStyle.scrollTab}>
        {tabList?.map(v => {
          console.log(v)
          return <span>111</span>
        })}
      </div> */}
      <div className={tabStyle.scrollTab}>{_tabCpt}</div>
      <div style={{ marginTop: tabHeight / 2 + 'px' }}>
        <div className={tabStyle.card} ref={cardRef}>
          {goodsList?.map((item, index) => {
            return (
              <div key={index} className={tabStyle.cardItem}>
                <div className={tabStyle.whitebg}>
                  <div className={tabStyle.title}>
                    <div className={tabStyle.tag}>{item.tag[0].name}</div>
                    <div className={tabStyle.redDotTip}></div>
                  </div>
                  <img
                    className={tabStyle.previewImg}
                    src="https://img.cdn.hsslive.cn/1613141138717Billd.jpg"
                    alt=""
                  />
                  <div className={tabStyle.onlyNum}>Only 10</div>
                </div>

                <div className={tabStyle.graybg}>
                  <span>15</span>
                  <div>
                    <span>889</span> <del className={tabStyle.delLine}>999</del>
                  </div>
                </div>
              </div>
            );
          })}
          {loading && <span>loading</span>}
        </div>
      </div>

      <div>
        {currentTabIndex},{currentChildTabIndex}
      </div>
    </div>
  );
};
export default TabCpt;
