import { getUsers } from './users';

describe('Users.getUsers()', () => {
  test('it should return an empty array for unregistered list', () => {
    const state = {
      users: {
        lists: {},
        byId: {
          1: { id: '1', name: 'Name', email: 'email' },
        },
      },
    };

    expect(
      getUsers(state, { listId: 'users' })
    ).toEqual([]);
  });

  test('it should return an array with 2 elements', () => {
    const state = {
      users: {
        lists: {
          users: ['1', '10'],
        },
        byId: {
          1: { id: '1', name: 'Name', email: 'email' },
          10: { id: '10', name: 'Name - 10', email: 'email-10' },
        },
      },
    };

    expect(
      getUsers(state, { listId: 'users' })
    ).toEqual([
      { id: '1', name: 'Name', email: 'email' },
      { id: '10', name: 'Name - 10', email: 'email-10' },
    ]);
  });

  test('it should return the same value on the same state', () => {
    const state = {
      users: {
        lists: {
          users: ['1', '10'],
        },
        byId: {
          1: { id: '1', name: 'Name', email: 'email' },
          10: { id: '10', name: 'Name - 10', email: 'email-10' },
        },
      },
    };
    const list = getUsers(state, { listId: 'users' });
    expect(list).toEqual([
      { id: '1', name: 'Name', email: 'email' },
      { id: '10', name: 'Name - 10', email: 'email-10' },
    ]);

    expect(
      getUsers(state, { listId: 'users' })
    ).toBe(list);
  });

  test('it should return the same value on the new state but with the same branches', () => {
    let state = {
      users: {
        lists: {
          users: ['1', '10'],
        },
        byId: {
          1: { id: '1', name: 'Name', email: 'email' },
          10: { id: '10', name: 'Name - 10', email: 'email-10' },
        },
      },
    };
    const list = getUsers(state, { listId: 'users' });
    expect(list).toEqual([
      { id: '1', name: 'Name', email: 'email' },
      { id: '10', name: 'Name - 10', email: 'email-10' },
    ]);

    state = { ...state, someNewBranch: 'some-new-data' };
    expect(
      getUsers(state, { listId: 'users' })
    ).toBe(list);
  });

  test('it should return the new value value if state changes (branch lists)', () => {
    let state = {
      users: {
        lists: {
          users: ['1', '10'],
        },
        byId: {
          1: { id: '1', name: 'Name', email: 'email' },
          10: { id: '10', name: 'Name - 10', email: 'email-10' },
        },
      },
    };
    const list = getUsers(state, { listId: 'users' });
    expect(list).toEqual([
      { id: '1', name: 'Name', email: 'email' },
      { id: '10', name: 'Name - 10', email: 'email-10' },
    ]);

    state = {
      ...state,
      users: {
        ...state.users,
        lists: {
          ...state.users.lists,
          users: ['1', '10']
        }
      }
    };
    const newList = getUsers(state, { listId: 'users' });
    expect(newList).toEqual(list);
    expect(newList).not.toBe(list);
  });

  test('it should return the new value value if state changes (branch byId)', () => {
    let state = {
      users: {
        lists: {
          users: ['1', '10'],
        },
        byId: {
          1: { id: '1', name: 'Name', email: 'email' },
          10: { id: '10', name: 'Name - 10', email: 'email-10' },
        },
      },
    };
    const list = getUsers(state, { listId: 'users' });
    expect(list).toEqual([
      { id: '1', name: 'Name', email: 'email' },
      { id: '10', name: 'Name - 10', email: 'email-10' },
    ]);

    state = {
      ...state,
      users: {
        ...state.users,
        byId: {
          ...state.users.byId,
          100: { id: '100', name: '100', email: '100' },
        }
      }
    };
    const newList = getUsers(state, { listId: 'users' });
    expect(newList).toEqual(list);
    expect(newList).not.toBe(list);
  });
});
