import { memo, useState } from 'react';
import { observer } from 'mobx-react';
// import ThemeStore from '../../store/theme';
// import GlobalStore from '../../store/index';
import GlobalStore, { ThemeStore } from '../../store/index';
import Toolbar from './Toolbar';
import { Button } from 'antd';

const ThemeCpt = function () {
  console.log('ThemeCptThemeCpt', ThemeStore());
  const { Light, Dark, Theme } = ThemeStore();
  const { theme, setTheme } = GlobalStore;

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
export default memo(observer(ThemeCpt));
