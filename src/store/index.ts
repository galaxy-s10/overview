import { makeAutoObservable, configure } from 'mobx';
// export default new globalStore();

import GlobalStore from './global/index';

configure({
  useProxies: 'never',
});

class globalStore {
  constructor() {
    makeAutoObservable(this);
  }

  version = '1.0.0';

  logo = '';

  title = 'React-Umi-Admin';

  theme = 'light';

  // 不能使用普通函数，会拿不到this，得使用箭头函数
  // setTheme(theme: string) {
  setTheme = (theme: string) => {
    console.log('触发了setTheme');
    this.theme = theme;
  };
}
export default GlobalStore;

// import _UserStore from './user/index';
// export const UserStore = _UserStore;
// 上面两行代码约等于：
export { default as UserStore } from './user/index';

export { default as ThemeStore } from './theme/index';
export { default as ArticleStore } from './article/index';
