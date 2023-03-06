import React, { Suspense, memo } from 'react';
import { fetch } from '../utils/fetch';
import { useRequest } from '../utils/useRequest';

const ZdyAsyncCon = memo(function () {
  const { data: info } = useRequest('/api/list1', fetch);
  return (
    <>
      {info.name && (
        <>
          <h1>姓名:{info.name}</h1>
          <h1>年龄:{info.age}</h1>
        </>
      )}
    </>
  );
});

const ZdyAsyncList = memo(function () {
  const {
    data: { list }
  } = useRequest('/api/list2', fetch);
  return (
    <>
      {list &&
        list.map((ele, index) => {
          return <div key={index}>{ele}</div>;
        })}
    </>
  );
});

export default function ZdyAsyncCom() {
  // const { data: info } = useRequest('/api/list1', fetch);
  // const {
  //   data: { list }
  // } = useRequest('/api/list2', fetch);
  return (
    <div>
      {/* {info.name && (
        <>
          <h1>姓名:{info.name}</h1>
          <h1>年龄:{info.age}</h1>
        </>
      )}

      {list &&
        list.map((ele, index) => {
          return <div key={index}>{ele}</div>;
        })} */}
      <Suspense fallback={<div>加载中</div>}>
        <ZdyAsyncCon />
      </Suspense>
      <Suspense fallback={<div>加载中</div>}>
        <ZdyAsyncList />
      </Suspense>
    </div>
  );
}
