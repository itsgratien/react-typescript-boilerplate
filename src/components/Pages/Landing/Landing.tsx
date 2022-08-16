import React from 'react';
import style from './Landing.module.scss';
import classname from 'classnames';
import { handIcon } from 'src/assets/images';
import { mockApiEndPoint } from 'src/utils/MockApiEndPoint';
import { User } from 'src/types/Shared';
import axios from 'src/utils/AxiosService';

const Landing = () => {
  const [users, setUsers] = React.useState<User[]>();

  const [loading, setLoading] = React.useState<boolean>(true);

  React.useEffect(() => {
    const find = async () => {
      await axios({
        method: 'GET',
        uri: mockApiEndPoint.getUsers,
        onError: () => {
          setLoading(false);
        },
        onSuccess: (res: any) => {
          setUsers(res.data);
          setLoading(false);
        },
      });
    };

    find();
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
