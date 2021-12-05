import axios from '@/libs/axios';

export const getThemeList = () => axios.get('/theme/list');
