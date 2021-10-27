import { memo } from 'react';
import { Button } from 'antd';
import { useModel } from 'umi';
import { UserStore } from '../../store';
import Toast from '@/components/toast';

const Dashboard = function (props) {
  console.log(UserStore);
  const { username, avatar, title } = UserStore();
  const initState = useModel('@@initialState');
  console.log(initState, '====');
  // console.log(Toast.aaa());
  console.log(Toast, Toast.success('xxxx', 1), 888);
  setTimeout(() => {
    Toast.fail('agasdgs', 4);
  }, 1000);
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
