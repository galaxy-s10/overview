import { makeAutoObservable, configure } from 'mobx';
configure({
  useProxies: 'never',
});

class gobalStore {
  user = { name: 'admin', pwd: '123456', token: null };
  buyCar = { showBuyCar: false, list: [] };

  constructor() {
    makeAutoObservable(this);
  }

  setUserToken = (data: any) => {
    console.log('触发了setUserToken', data);
    this.user.token = data;
  };
}
export default new gobalStore();
