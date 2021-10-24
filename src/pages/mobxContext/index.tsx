import { memo, useState, useContext } from 'react';
import { observer } from 'mobx-react';
// import ThemeStore from '../../store/theme';
// import GlobalStore from '../../store/index';
import { Button } from 'antd';
import GlobalStore, { ThemeStore } from '../../store/index';
import Toolbar from './Toolbar';

const ThemeCpt = function () {
  const { Light } = ThemeStore();
  const { theme, setTheme } = GlobalStore();
  console.log('ThemeCpt当前的mobx状态：', GlobalStore(), ThemeStore());

  function setLightTheme() {
    console.log('修改light主题色');
    Light.setLightBackground('yellow');
    Light.setLightForeground('red');
    // setTheme('light');
  }

  function setLight() {
    console.log('设置light主题');
    // Theme.setCurrentTheme('light');
    setTheme('light');
  }
  function setDark() {
    console.log('设置dark主题');
    // Theme.setCurrentTheme('dark');
    setTheme('dark');
  }

  return (
    <div style={{ backgroundColor: 'skyblue', padding: '10px' }}>
      在mobx使用React的context
      <Toolbar></Toolbar>
      当前主题：{theme}，
      {/* <Button onClick={() => setLight()}>切换light主题</Button>
      <Button onClick={() => setDark()}>切换dark主题</Button> */}
      <Button onClick={() => setLight()}>切换light主题</Button>
      <Button onClick={() => setDark()}>切换dark主题</Button>
      <Button onClick={() => setLightTheme()}>修改light的主题色</Button>
    </div>
  );
};
// export default memo(ThemeCpt);
export default memo(observer(ThemeCpt));
