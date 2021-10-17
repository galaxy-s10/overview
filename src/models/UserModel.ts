import { Effect, Reducer, Subscription } from 'umi';
export interface IagentInfo {
  name: string;
  phoneNum: string;
  totalDiamondCount: number;
  uiLanguage?: string;
  currency: string;
  countryCode: string;
  showAgentBalance: boolean;
}
export interface IUserModelState {
  agentInfo: IagentInfo;
  token: string;
}
export interface IUserModelType {
  namespace: string;
  state: IUserModelState;
  effects?: {
    login?: Effect;
  };
  reducers?: {
    setUserModel: Reducer<IUserModelState>;
  };
  subscriptions?: { setup: Subscription };
}
const UserModel: IUserModelType = {
  namespace: 'UserModel',
  state: {
    agentInfo: {
      name: '',
      phoneNum: '',
      totalDiamondCount: 0,
      uiLanguage: '',
      showAgentBalance: true,
    },
    token: '',
  },
  reducers: {
    setUserModel(state: IUserModelState, action: any) {
      state = action.payload;
      return {
        ...state,
        ...action.payload,
      };
    },
  },
};
export default UserModel;
