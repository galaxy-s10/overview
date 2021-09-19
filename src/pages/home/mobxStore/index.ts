import { action, observable } from 'mobx';
class HomeStore {
  @observable
  homeState: any = {
    user: { token: undefined },
    buyCar: { showBuyCar: false, list: [] },
    tabList: {},
  };

  @action.bound
  setHomeBuyCar = (data: any) => {
    this.ActBaseConf = data;
  };
}
export default new HomeStore();
