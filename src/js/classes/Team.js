export default class Team {
  constructor() {
    this.members = new Set();
  }

  add(char) {
    if (this.members.has(char.type)) {
      throw new Error('Такой персонаж уже есть в команде');
    } else {
      this.members.add(char.type);
    }
  }

  addAll(chars) {
    chars.forEach(char => this.members.add(char.type));
  }

  toArray() {
    return [...this.members];
  }
}