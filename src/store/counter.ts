import { createSlice } from '@reduxjs/toolkit';
// 创建store
const counterSlice = createSlice({
  name: 'counter',
  initialState: { num: 10, age: 12 },
  reducers: {
    addNum(state, { payload }) {
      state.num += payload;
    },
  },
});

// 返回actions
export const { addNum } = counterSlice.actions;
// 返回reducer
export const { reducer } = counterSlice;
// 返回slice
export default counterSlice;
