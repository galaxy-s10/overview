import { memo } from 'react';
// import { renderRoutes } from 'react-router-config';
import { withRouter } from 'react-router-dom';

const Setting = function (props) {
  const { route } = props;
  return (
    <div>
      {/* <BrowserRouter> */}
      setting
      {/* {renderRoutes(route.routes)} */}
      {/* </BrowserRouter> */}
      {/* {props.children} */}
    </div>
  );
};
export default memo(withRouter(Setting));
