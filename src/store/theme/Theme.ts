import { makeAutoObservable } from 'mobx';

class Theme {
  constructor() {
    makeAutoObservable(this);
  }
  current = 'light';
  light = {
    foreground: 'white',
    background: '#448ef7',
  };
  dark = {
    foreground: 'white',
    background: 'gray',
  };

  setCurrentTheme = (data: string) => {
    console.log('mobx-setCurrentTheme');
    this.current = data;
  };

  setLight = (data: any) => {
    console.log('mobx-setLight');
    this.light = data;
  };

  setDark = (data: any) => {
    console.log('mobx-setDark');
    this.dark = data;
  };
}

export default new Theme();
