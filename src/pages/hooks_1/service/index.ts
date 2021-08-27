import axios from '@/plugins/axios';
import { GetAppVersionCode } from '@4fun/funlib';

const appVer = GetAppVersionCode();
// 添加请求注入
// @ts-ignore
axios.$addReqInterceptor((config: any) => {
  // console.log(config, 765)
  try {
    config.headers['appVersion'] = appVer;
    return config;
  } catch (error) {
    console.error(error);
    return config;
  }
});

/**
 * 获取活动配置
 */
export const getPageList = () => {
  return axios.get(`/user/virtual-figure-store/get-store-type`, {
    ordername: 'createdAt',
    orderby: 'desc',
    type_id: null,
    nowPage: 1,
    pageSize: 10,
  });
};
