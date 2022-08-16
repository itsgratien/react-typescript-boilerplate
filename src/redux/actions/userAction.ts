import { Dispatch } from '@reduxjs/toolkit';
import { mockApiEndPoint } from 'src/utils/MockApiEndPoint';
import {
  setUsersError,
  setUsersLoading,
  setUsersSuccess,
} from 'src/redux/slices/userSlice';
import axios from 'src/utils/AxiosService';

export const getUsersAction = () => async (dispatch: Dispatch) => {
  dispatch(setUsersLoading(true));

  return await axios({
    method: 'GET',
    uri: mockApiEndPoint.getUsers,
    onError: (e) => {
      dispatch(setUsersLoading(false));
      dispatch(setUsersError(e.data));
    },
    onSuccess: (res) => {
      dispatch(setUsersLoading(false));
      dispatch(setUsersSuccess(res.data.data));
    },
  });
};
