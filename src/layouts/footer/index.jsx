import React, { memo } from 'react';
import styles from './index.scss';

const Footer = function (props) {
  const { history } = props;

  return <div className={styles.footerWrap}>Footer页面</div>;
};
export default memo(Footer);
