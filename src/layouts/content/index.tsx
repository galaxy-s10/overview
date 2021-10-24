import { memo } from 'react';

const Content = function (props) {
  console.log('content页面', props);
  return <div>{props.routes}</div>;
};
export default memo(Content);
