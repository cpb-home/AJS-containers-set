import Team from '../Team';
import Magician from '../Magician';
import Daemon from '../Daemon';
import Zombie from '../Zombie';

test('adding a new char', () => {
  const team = new Team;
  const mag = new Magician('Maggy', 'Magician');
  team.add(mag);

  expect([...team.members]).toEqual(['Magician']);
});

test('adding an added char', () => {
  const team = new Team;
  const mag = new Magician('Maggy', 'Magician');
  team.add(mag);

  expect(() => team.add(mag)).toThrow('Такой персонаж уже есть в команде');
});

test('adding many chars', () => {
  const team = new Team;
  const mag = new Magician('Maggy', 'Magician');
  const daemon = new Daemon('Demmy', 'Daemon');
  const zombie = new Zombie('Zomy', 'Zombie');
  team.addAll([mag, daemon, zombie]);

  expect([...team.members]).toEqual(['Magician', 'Daemon', 'Zombie']);
});

test('to array func', () => {
  const team = new Team;
  const mag = new Magician('Maggy', 'Magician');
  const daemon = new Daemon('Demmy', 'Daemon');
  team.addAll([mag, daemon]);

  expect(team.toArray()).toEqual(['Magician', 'Daemon']);
});
