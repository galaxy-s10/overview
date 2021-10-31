import { memo, useEffect } from 'react';
import { Button } from 'antd';
import { useModel } from 'umi';
import { UserStore } from '../../store';
import style from './index.scss';
import Toast from '@/components/Toast/index';

const Dashboard = function (props) {
  // console.log(UserStore);
  const { username, avatar, title } = UserStore();
  const initState = useModel('@@initialState');

  useEffect(() => {
    const tt = require.context('../../components', true, /.tsx$/);
    console.log(988, tt);
    tt.keys().forEach((item) => {
      console.log(2222, item);
    });
    const sss = null;
    // Toast.config({ duration: 10000, maskClickable: true });
    Toast.fail({
      content: 'failfail',
      // duration: 500,
      onClose: () => {
        console.log(998, '--failfailfail');
      },
    });
    // Toast.success({
    //   content: 'successsuccess',
    //   // duration: 3000,
    //   onClose: () => {
    //     console.log(998, '--successsuccesssuccess');
    //   },
    // });
    // Toast.newInstance(
    //   {
    //     duration: 1000, // 设置持续时间（不设置的话默认2000）
    //     // maskClickable: true, // 设置可点击（不设置的话默认不可点击）
    //   },
    //   (res) => {
    //     sss = res;
    //     // res.fail({ content: 12 });
    //     console.log('实例化成功', res, 6777);
    //     // res.show({
    //     setTimeout(() => {
    //       res.fail({
    //         content: '11111',
    //         // maskClickable: true,
    //         // maskClassName: style.xxx,
    //         // maskStyle: { backgroundColor: 'red' },
    //         // duration: 3000,
    //         onClose: () => {
    //           console.log(998, '--failfailfailfailfail');
    //         },
    //       });
    //     }, 100);

    //     // setTimeout(() => {
    //     return;
    //     setTimeout(() => {
    //       res.show({
    //         content: 222222,
    //         duration: 3000,
    //         // maskClickable: true,
    //         onClose: () => {
    //           console.log(998, '==show');
    //         },
    //       });
    //     }, 500);

    //     return;
    //     res.success({
    //       content: 33333333,
    //       duration: 1000,
    //       // maskClickable: true,
    //       onClose: () => {
    //         console.log(998, '==successsuccess');
    //       },
    //     });
    //     // res.show({
    //     //   content: '333333',
    //     //   duration: 3000,
    //     //   maskClickable: true,

    //     //   onClose: () => {
    //     //     console.log('==showwww');
    //     //   },
    //     // });
    //     // }, 1000);

    //     // setTimeout(() => {
    //     //   res.fail({
    //     //     content: 'sdgdfhs',
    //     //     duration: 2000,
    //     //     onClose: () => {
    //     //       console.log('---failfailfail');
    //     //     },
    //     //   });
    //     // }, 100);

    //     // console.log(res.show('textxxx', 0));
    //     // res.info({
    //     //   icon: <b>23523</b>,
    //     //   content: <a href="">gsgsd</a>,
    //     //   onClose: () => {
    //     //     console.log('--infoinfoinfo--');
    //     //   },
    //     //   maskClickable: true,
    //     //   duration: 1000,
    //     // });
    //     // console.log(res.loading('loading...', 0));
    //   }
    // );
    setTimeout(() => {
      // sss.clear();
    }, 1000);
  }, []);
  return (
    <div>
      Dashboard页面
      <div>
        <div>用户名：{username}</div>
        <div>头像：{avatar}</div>
        <div>标题：{title}</div>
        {/* 不能直接遍历，因为userInfo里面除了有属性，还有方法。属性通过userInfo['username']调用没问题，
        但是方法userInfo['setUserToken']会报警告 */}
        {/* {Object.keys(userInfo).map((item, index) => {
          console.log(userInfo, item, '00');
          return (
            <div key={index}>
              <span style={{ color: 'red' }}>{item}: </span>
              <span style={{ width: '300px', wordBreak: 'break-word' }}>
                {userInfo['username']}
              </span>
            </div>
          );
        })} */}
      </div>
    </div>
  );
};
export default memo(Dashboard);
