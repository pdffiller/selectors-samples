import * as Fixtures from './__fixtures__';

const MAX_DELAY = 1500;

const rndDelay = delay => Math.round(delay * Math.random());

const delayedResolve = (f, delay = MAX_DELAY) => resolve => setTimeout(
  () => resolve(f()), rndDelay(delay)
);

export const loadAllUsers = () => new Promise(
  delayedResolve(() => Fixtures.users)
);

export const saveAllUsers = users => new Promise(
  delayedResolve(() => !!(users.length & 1))
);
