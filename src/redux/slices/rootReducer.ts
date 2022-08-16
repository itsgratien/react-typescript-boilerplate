import { combineReducers } from '@reduxjs/toolkit';
import { userReducer } from './userSlice';

const rootReducer = combineReducers({ userReducer });

export default rootReducer;
