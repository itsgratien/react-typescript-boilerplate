import React from 'react';
import style from './Landing.module.scss';
import classname from 'classnames';
import { handIcon } from 'src/assets/images';

const Landing = () => {
  return (
    <div className={classname('relative flex items-center justify-center flex-col pt-10', style.landing)}>
      <img src={handIcon} />
      <div className='mt-10 font-bold'>Welcome to landing page</div>
    </div>
  );
};
export default Landing;
