// export const locale = {
//   getLocale() {
//     if (isBrowser()) {
//       let lang = '';
//       const { lang: langT } = GetQuery();
//       !lang && (lang = langT);
//       if (!lang && !DeviceJudge('other')) {
//         const userInfo = GetUserInfo() || { uiLang: '' };
//         lang = `${userInfo.uiLang}`.toLowerCase();
//       }
//       return lang || 'en';
//     }
//   },
// };

// export function reduxToolkit() {
//   return {
//     initialState: () => ({
//       counter: {
//         value: 0,
//       },
//     }), // 也可以是一个函数来初始化redux的值
//     ignoreOptions: {}, // 同上面的ignoreOptions配置，会做合并处理
//     warnAfter: 800, // immutableCheck和serializableCheck的检查时间超过32ms会有警告，修改警告时间
//   };
// }
