import React, { useState, useEffect } from 'react';

export default function ZdyAsyncCom() {
  const [list, setLists] = useState([]);
  useEffect(() => {
    new Promise((resolve) => {
      setTimeout(() => {
        resolve(['苹果', '香蕉', '葡萄']);
      }, 3000);
    }).then((res) => {
      setLists(res);
    });
  }, []);
  return (
    <div>
      {list.map((ele, index) => {
        return <div key={index}>{ele}</div>;
      })}
    </div>
  );
}
