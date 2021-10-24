import { createContext } from 'react';
// import { default as Light } from './Light';
// import { default as Dark } from './Dark';
// import { default as Theme } from './Theme';
import Light from './Light';
import Dark from './Dark';
import Theme from './Theme';

// 集中store管理，并做Context方便子组件使用，避免使用Mobx的Inject和Provide带来的不变
export const ThemeContext = createContext({
  Light,
  Dark,
  // Theme,
});
