import { makeAutoObservable } from 'mobx';

class Article {
  constructor() {
    makeAutoObservable(this);
  }
  list: any[] = [{ id: 1, msg: 'xxx' }];
  type = 1;
  nowPage = 1;
  pageSize = 10;

  setArticleList = (data: any[]) => {
    this.list = data;
  };
}

export default new Article();
