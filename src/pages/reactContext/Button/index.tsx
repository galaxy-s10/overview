import { memo, useState, useContext } from 'react';
import { ThemeContext } from '../context';
import { ButtonWraper } from './style';

const Button = function (props) {
  console.log('Button的props', props);
  const theme = useContext(ThemeContext);
  const [themeTemp, setThemeTemp] = useState(theme);
  console.log('button-theme', theme);
  return (
    <ButtonWraper
      style={{
        backgroundColor: theme[theme.current].background,
        color: theme[theme.current].foreground,
      }}
    >
      Toolbar里的Button组件
    </ButtonWraper>
  );
};
export default memo(Button);
