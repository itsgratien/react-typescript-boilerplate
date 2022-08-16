import { rest } from 'msw';
import { getUsers } from './userHandler';
import { mockApiEndPoint } from 'src/utils/mockApiEndPoint';

export const handlers = [rest.get(mockApiEndPoint.getUsers, getUsers)];
