import { memo, useContext } from 'react';
import { observer } from 'mobx-react';
// import ThemeStore from '../../../store/theme';
import GlobalStore, { ThemeStore } from '../../../store/index';
import { ButtonWraper } from './style';

const Button = function (props) {
  console.log('Button的props', props);
  const { Light, Dark } = ThemeStore();
  const { theme } = GlobalStore();
  console.log('bottom-theme', Light, Dark);
  console.log('GlobalStore', GlobalStore);
  return (
    <ButtonWraper
      style={{
        backgroundColor: theme == 'light' ? Light.background : Dark.background,
        color: theme == 'light' ? Light.foreground : Dark.foreground,
      }}
    >
      Toolbar组件里的Button组件
    </ButtonWraper>
  );
};
export default memo(observer(Button));
