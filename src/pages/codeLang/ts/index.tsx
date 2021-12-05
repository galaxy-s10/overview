import { memo } from 'react';
import Wrap from '@/components/componentWrap';

const codeLangTs = (props) => <div>Ts是Js的超集{props.children}</div>;
export default memo(codeLangTs);
