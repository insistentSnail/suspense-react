import React from 'react';
import style from './index.module.scss';
import { Spin } from 'antd';

export default function Loading() {
  return (
    <div className={style.loadingBg}>
      <div className={style.loadingBox}>
        <Spin size="large" />
        <span>正在加载...</span>
      </div>
    </div>
  );
}
