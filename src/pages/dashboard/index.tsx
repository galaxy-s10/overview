import React, { memo } from 'react';
import { Button } from 'antd';
import { UserStore } from '../../store';
import { useModel } from 'umi';
const Dashboard = function (props) {
  const { history } = props;
  console.log(UserStore);
  const userInfo = UserStore();
  const initState = useModel('@@initialState');
  console.log(initState, '====');
  return (
    <div>
      Dashboard页面
      <div>
        {Object.keys(userInfo).map((item, index) => {
          return (
            <div key={index}>
              <span style={{ color: 'red' }}>{item}: </span>
              <span style={{ width: '300px', wordBreak: 'break-word' }}>
                {userInfo[item]}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Dashboard;
