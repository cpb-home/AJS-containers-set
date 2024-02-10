// TODO: write your code here
import Team from './classes/Team';
import Zombie from './classes/Zombie';
import Undead from './classes/Undead';
import Daemon from './classes/Daemon';
import Magician from './classes/Magician';
import Swordsman from './classes/Swordsman';
import Bowerman from './classes/Bowerman';

const zombie = new Zombie('zo', 'Zombie');
const bower = new Bowerman('bo', 'Bowman');
const sword = new Swordsman('swo', 'Swordsman');
const magic = new Magician('ma', 'Magician');
const daemon = new Daemon('da', 'Daemon');
const undead = new Undead('un', 'Undead');

const currentTeam = new Team;
currentTeam.add(zombie);
console.log(currentTeam);

currentTeam.add(bower);
currentTeam.add(sword);
console.log(currentTeam);

currentTeam.addAll([magic, daemon, undead, sword]);
console.log(currentTeam);

currentTeam.add(zombie);
console.log(currentTeam);