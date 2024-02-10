export default class Character {
  constructor(name, type) {
    this.health = 100;
    this.level = 1;

    if (['Bowman', 'Undead', 'Swordsman', 'Zombie', 'Magician', 'Daemon'].includes(type)) {
      this.type = type;
    } else {
      throw new Error('Ошибка type: Указан неверный тип персонажа');
    }
    
    if (typeof name !== 'string') {
      throw new Error('Ошибка name: Указан неверный тип переменной (должна быть строка)');
    } else {
      if (name.length < 2 || name.length > 10) {
        throw new Error('Ошибка name: длина имени должна быть от 2 до 10 символов');
      } else {
        this.name = name;
      }
    }
  }

  levelUp() {
    if (this.health <= 0) {
      throw new Error('Ошибка: персонаж уже умер.');
    } else {
      this.level += 1;
      this.health = 100;
      this.attack += this.attack * .2;
      this.defence += this.defence * .2;
    }
  }

  damage(points) {
    this.health -= points * (1 - this.defence / 100);
    this.health = this.health < 0 ? 0 : this.health;
  }
}