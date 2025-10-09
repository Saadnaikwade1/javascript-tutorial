// opps games
function Player(name) {
  this.name = name;
  this.lvl = 1;
  this.points = 0;
}

Player.prototype.gianXp = function (xp) {
  this.points += xp;

  if (this.points >= 10) {
    this.lvl++;
    this.points -= 10;
  }
  console.log(this.describe());
};

Player.prototype.describe = function () {
  return `${this.name} is level ${this.lvl} with ${this.points} experience points`;
};

const player1 = new Player("bob");
const player2 = new Player("Alice");

console.log(player1);

player1.gianXp(2);
player2.gianXp(3);
player1.gianXp(3);
player2.gianXp(5);
player1.gianXp(7);
player2.gianXp(5);
player1.gianXp(3);
player2.gianXp(1);
player1.gianXp(9);
player2.gianXp(8);

console.log(player1.describe());
console.log(player2.describe());
