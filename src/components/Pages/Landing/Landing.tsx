import React from 'react';
import style from './Landing.module.scss';
import classname from 'classnames';
import { handIcon } from 'src/assets/images';
import { useAppDispatch, useAppSelector } from 'src/hooks/useRedux';
import { getUsersAction } from 'src/redux/actions/userAction';

const Landing = () => {
  const dispatch = useAppDispatch();

  const selector = useAppSelector((state) => ({
    loading: state.userReducer.getUsersLoading,
    users: state.userReducer.getUsersSuccess,
  }));

  const { loading, users } = selector;

  React.useEffect(() => {
    dispatch(getUsersAction());
  }, []);
  
  return (
    <div
      className={classname(
        'relative flex items-center justify-center flex-col pt-10',
        style.landing,
      )}
    >
      <img src={handIcon} />
      <div className="mt-10 font-bold">Welcome to landing page</div>
      {!loading && users && (
        <ul>
          {users.map((item) => (
            <li key={item.id}>{item.username}</li>
          ))}
        </ul>
      )}
      {loading && <div>Loading ....</div>}
    </div>
  );
};
export default Landing;
