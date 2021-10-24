import { makeAutoObservable } from 'mobx';

class Dark {
  constructor() {
    makeAutoObservable(this);
  }

  foreground = 'white';

  background = 'gray';

  setDarkForeground = (data: string) => {
    console.log('mobx-setDarkForeground');
    this.foreground = data;
  };

  setDarkBackground = (data: string) => {
    console.log('mobx-setDarkBackground');
    this.background = data;
  };
}

export default new Dark();
