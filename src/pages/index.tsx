import { memo } from 'react';
import { observer } from 'mobx-react';

import Layout from '../layout';

const Index = () => <div>Index页面</div>;
// return <Layout />;
// export default Index;
export default memo(observer(Index)); // observer包裹 + 使用memo，正确写法
