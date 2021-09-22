import { createContext } from 'react';
import { default as User } from './User';

//集中store管理，并做Context方便子组件使用，避免使用Mobx的Inject和Provide带来的不变
export const StoresContext = createContext(User);
// export const StoresContext = createContext({
//   User,
// });