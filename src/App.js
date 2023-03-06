import React, { lazy, Suspense, useState } from 'react';
import { Button } from 'antd';
import 'antd/dist/reset.css';

import Loading from './components/Loading/index.js';
const ZdyAsyncCom = lazy(() => import('./components/ZdyAsyncCom.js'));
// const Content = lazy(() => import('./components/Content.js'));
function App() {
  const [isShow, setIsShow] = useState(true);
  return (
    <div className="App">
      <Button type="primary" onClick={() => setIsShow(!isShow)}>
        点我加载
      </Button>
      <div className="title">标题</div>
      {isShow && (
        <Suspense fallback={<Loading />}>
          <ZdyAsyncCom />
          {/* <Content /> */}
        </Suspense>
      )}
    </div>
  );
}

export default App;
