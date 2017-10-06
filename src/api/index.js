import * as Fixtures from './__fixtures__';

const MAX_DELAY = 1500;

const rndDelay = delay => Math.round(delay * Math.random());

const delayedResolve = (f, delay = MAX_DELAY) => resolve => setTimeout(
  () => resolve(f()),
  rndDelay(delay)
);

const toUserInstance = (page, pageSize) => user => ({
  ...user,
  name: `${user.name} (${page})`,
  id: user.id + (page - 1) * pageSize,
});

export const loadAllUsers = page => new Promise(
  delayedResolve(() => Fixtures.users.map(
    toUserInstance(page, Fixtures.users.length)
  ))
);

export const saveAllUsers = users => new Promise(
  delayedResolve(() => !!(users.length & 1))
);
