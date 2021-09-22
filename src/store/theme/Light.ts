import { makeAutoObservable } from 'mobx';

class Light {
  constructor() {
    makeAutoObservable(this);
  }
  foreground = 'white';
  background = '#448ef7';

  setLightForeground = (data: string) => {
    console.log('mobx-setLightForeground');
    this.foreground = data;
  };
  setLightBackground = (data: string) => {
    console.log('mobx-setLightBackground');
    this.background = data;
  };
}

export default new Light();
