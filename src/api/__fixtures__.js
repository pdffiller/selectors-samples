let _id = 0;

export const user = (name, email, avaUrl) => ({ id: ++_id, name, email, avaUrl });

export const users = [
  user('Batman', 'batman@dc-comics.org', 'images/batman.jpg'),
  user('Superman', 'sudo@dc-comics.org', 'images/superman.jpg'),
  user('Joker', 'joker@anti-heros.org', 'images/joker.jpg'),
  user('Rocket', 'rocket-raccoon@marvel.com', 'images/rocket-raccoon.jpg'),
  user('Iron Man', 'ironman@marvel.com', 'images/iron-man.jpg'),
  user('Mad Titan Thanos', 'thanos@anit-heors.org', 'images/thanos.jpg'),
  user('Gamora', 'gamora@dc-ladies.com', 'images/gamora.jpg'),
];
