import { memo, useEffect } from 'react';
import { Button } from 'antd';
import { useModel } from 'umi';
import { UserStore } from '../../store';
import ToastTest from '@/components/mobile/Toast';

const Dashboard = function (props) {
  // console.log(UserStore);
  const { username, avatar, title } = UserStore();
  const initState = useModel('@@initialState');

  useEffect(() => {
    let sss = null;
    ToastTest.newInstance(
      {
        duration: 2, // 持续时间
      },
      (res) => {
        sss = res;
        // res.fail({ content: 12 });
        console.log('实例化成功', res, 6777);
        res.success({
          content: '1423',
          duration: 1000,
          onClose: () => {
            console.log('-successsuccesssuccess');
          },
        });
        setTimeout(() => {
          res.fail({
            content: 'sdgdfhs',
            duration: 2000,
            onClose: () => {
              console.log('---failfailfail');
            },
          });
        }, 100);

        // console.log(res.show('textxxx', 0));
        // res.info({
        //   icon: <b>23523</b>,
        //   content: <a href="">gsgsd</a>,
        //   onClose: () => {
        //     console.log('--infoinfoinfo--');
        //   },
        //   maskClickable: true,
        //   duration: 1000,
        // });
        // console.log(res.loading('loading...', 0));
      }
    );
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
