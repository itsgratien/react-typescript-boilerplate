import { RestRequest, ResponseFunction, RestContext } from 'msw';

export const getUsers = (
  _req: RestRequest,
  res: ResponseFunction,
  ctx: RestContext,
) => {
  const users = [
    {
      username: 'John Doe',
      id: Math.random,
    },
  ];

  return res(ctx.status(200), ctx.json({ data: users }), ctx.delay(3000));
};
