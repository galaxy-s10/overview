import request from '@/libs/axios';

export const getArticleList = ({ nowPage = 1, pageSize = 10 }) =>
  request({
    url: '/api/article/pageList',
    method: 'get',
    params: { nowPage, pageSize },
  });
