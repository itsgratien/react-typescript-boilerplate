import React from 'react';
import style from './Landing.module.scss';
import classname from 'classnames';

const Landing = () => {
  return (
    <div className={classname('relative', style.landing)}>
      <h1>Landing</h1>
    </div>
  );
};
export default Landing;
