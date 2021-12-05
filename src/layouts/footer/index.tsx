import { memo } from 'react';
import style from './index.scss';

const Footer = function () {
  return <div className={style.footerWrap}>Footer页面</div>;
};
export default memo(Footer);
