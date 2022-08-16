import React from 'react';

const useAuth = () => {
  const [loading, setLoading] = React.useState<boolean>(true);

  const [isAuth, setIsAuth] = React.useState<boolean>(false);

  React.useEffect(() => {
    setLoading(false);
    setIsAuth(true);
  }, []);

  return { loading, isAuth };
};

export default useAuth;
