import { makeAutoObservable } from 'mobx';

class Global {
  constructor() {
    makeAutoObservable(this);
  }
  version = '1.0.0';
  logo = '';
  title = 'React-Umi-Admin';
  theme = 'light';

  //不能使用普通函数，会拿不到this，得使用箭头函数
  // setTheme(theme: string) {
  setTheme = (theme: string) => {
    console.log('触发了setTheme', theme);
    this.theme = theme;
  };
}

export default new Global();
