import React, { lazy, Suspense } from 'react';
// const ZdyAsyncCom = lazy(() => import('./components/ZdyAsyncCom.js'));
const Content = lazy(() => import('./components/Content.js'));
function App() {
  return (
    <div className="App">
      <div className="title">标题</div>
      <Suspense fallback={<div>Loading...</div>}>
        {/* <ZdyAsyncCom /> */}
        <Content />
      </Suspense>
    </div>
  );
}

export default App;
