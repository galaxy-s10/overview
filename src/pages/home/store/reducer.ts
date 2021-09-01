const homeState = {
  buyCat: { showBuyCat: false },
  tabList: {},
};

function reducer(state = homeState, action) {
  switch (action.type) {
    case 'changeShowBuyCat':
      console.log('执行redux action: changeShowBuyCat');
      return { ...state, showBuyCat: true, aaa: 23, bbb: 436 };
    default:
      return state;
  }
}

export default reducer;
