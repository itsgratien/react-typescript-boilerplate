import React from 'react';
import { AuthContextState } from 'src/types/Auth';

export const AuthContext = React.createContext<AuthContextState>({});

export default AuthContext;
