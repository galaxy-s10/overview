import { useState, useContext } from 'react';
import { memo } from 'react';
import { ThemeContext, themes } from './context';
import { Button } from 'antd';
import Toolbar from './Toolbar';
// import { ThemeContext } from '../../store/theme/context';

const ThemeCpt = function () {
  const [phone, setPhone] = useState('apple');
  const [pet, setPet] = useState('cat');
  // const [currentTheme, setCurrentTheme] = useState(themes.dark);
  console.log('ThemeCpt重新渲染', ThemeContext);
  // const themes = useContext(ThemeContext);
  const [mytheme, setMytheme] = useState(themes);
  function setLight() {
    console.log('设置light主题');
    // warn:useState不是响应式的，需要添加一层
    // themes.setCurrentTheme('light');
    // console.log(themes);
    const mythemeClone = { ...mytheme };
    mythemeClone.current = 'light';
    setMytheme(mythemeClone);
  }
  function setDark() {
    console.log('设置dark主题');
    const mythemeClone = { ...mytheme };
    mythemeClone.current = 'dark';
    setMytheme(mythemeClone);
  }

  return (
    <ThemeContext.Provider value={mytheme}>
      <div style={{ backgroundColor: 'skyblue', padding: '10px' }}>
        {/* <ThemeContext.Provider value={currentTheme}> */}
        {/* <ThemeContext.Provider value={{ foreground: 'ggg', background: 'ppp' }}> */}
        React中的context
        <Toolbar></Toolbar>
        当前主题是：{mytheme.current}，
        <Button onClick={() => setLight()}>点击切换light</Button>
        <Button onClick={() => setDark()}>点击切换dark</Button>
        {/* </ThemeContext.Provider> */}
      </div>
    </ThemeContext.Provider>
  );
};
export default memo(ThemeCpt);
