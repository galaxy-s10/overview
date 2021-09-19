import { action, makeAutoObservable } from 'mobx';
import { observer } from 'mobx-react-lite';

class gobalStore {
  // @observable
  gobalState: any = {
    user: { token: undefined },
    buyCar: { showBuyCar: false, list: [] },
    tabList: {},
  };

  constructor() {
    makeAutoObservable(this);
  }

  // @action.bound
  setGobalState = (data: any) => {
    this.gobalState.user = { sex: 100 };
    console.log('触发了setGobalState', data);
  };
}
export default new gobalStore();
