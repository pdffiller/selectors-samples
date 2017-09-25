import * as Fixtures from './__fixtures__';

const MAX_DELAY = 1000;

const delayedResolve = (f, delay = MAX_DELAY) => resolve => setTimeout(
  () => resolve(f()), Math.round(delay * Math.random())
);

export const loadAllUsers = () => new Promise(
  delayedResolve(() => Fixtures.users)
);

export const saveAllUsers = users => new Promise(
  delayedResolve(() => !!(users.length & 1))
);
