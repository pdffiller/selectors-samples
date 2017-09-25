import { ADD_USER } from '../actions/types';


const user = (name, email, avaUrl) => ({ name, email, avaUrl });

const initialState = [
  user('Batman', 'batman@dc-comics.org', 'images/batman.ico'),
  user('Superman', 'sudo@dc-comics.org', 'images/superman.jpg'),
  user('Joker', 'joker@anti-heros.org', 'images/joker.png'),
];

export const users = (state = initialState, action) => {
  switch (action.type) {
    case ADD_USER:
      return state.concat(action.payload);

    default:
      return state;
  }
};
