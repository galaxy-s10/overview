import { memo, useState, useContext } from 'react';
import AButton from '../Button';
import { ToolbarWraper } from './style';
const Toolbar = function (props) {
  console.log('Toolbar的props', props);
  return (
    <ToolbarWraper>
      <div>Toolbar组件</div>
      <AButton></AButton>
    </ToolbarWraper>
  );
};
export default memo(Toolbar);
