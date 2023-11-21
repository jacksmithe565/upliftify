/*
Filename: SophisticatedCode.js
Content: A sophisticated and elaborate JavaScript code example showcasing the implementation of a text-based role-playing game with multiple characters, items, and interactive gameplay mechanics.
*/

// Characters
class Character {
  constructor(name, health, attack) {
    this.name = name;
    this.health = health;
    this.attack = attack;
  }

  attackCharacter(character) {
    character.health -= this.attack;
  }
}

class Hero extends Character {
  constructor(name, health, attack, level) {
    super(name, health, attack);
    this.level = level;
  }

  levelUp() {
    this.level++;
    this.attack += 10;
    this.health += 50;
    console.log(`${this.name} leveled up to level ${this.level}!`);
  }
}

class Enemy extends Character {
  constructor(name, health, attack) {
    super(name, health, attack);
  }

  evilLaugh() {
    console.log(`${this.name} says: Bwahahaha!`);
  }
}

// Items
class Item {
  constructor(name, power) {
    this.name = name;
    this.power = power;
  }
}

class Weapon extends Item {
  constructor(name, power) {
    super(name, power);
  }

  attackBoost(character) {
    character.attack += this.power;
  }
}

class Armor extends Item {
  constructor(name, power) {
    super(name, power);
  }

  defend(character) {
    character.health += this.power;
  }
}

// Gameplay Mechanics
const hero = new Hero("Brave Warrior", 100, 50, 1);
const enemy = new Enemy("Evil Villain", 150, 30);

const weapon = new Weapon("Sword of Justice", 20);
const armor = new Armor("Iron Shield", 30);

hero.attackCharacter(enemy);
enemy.evilLaugh();

weapon.attackBoost(hero);
armor.defend(hero);

console.log(`${hero.name} defeated ${enemy.name}!`);

// Interactive Gameplay
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("What would you like your hero to do? (1 - Attack, 2 - Level Up): ", (choice) => {
  if (choice === '1') {
    hero.attackCharacter(enemy);
    if (enemy.health <= 0) {
      console.log(`${hero.name} defeated ${enemy.name}!`);
    } else {
      console.log(`${hero.name} attacked ${enemy.name}!`);
      enemy.attackCharacter(hero);
      console.log(`${enemy.name} counter-attacked! ${hero.name} health: ${hero.health}`);
    }
  } else if (choice === '2') {
    hero.levelUp();
  }

  rl.close();
});


/* 
Output Example:

Evil Villain says: Bwahahaha!
Brave Warrior defeated Evil Villain!
What would you like your hero to do? (1 - Attack, 2 - Level Up): 1
Brave Warrior attacked Evil Villain!
Evil Villain counter-attacked! Brave Warrior health: 110
*/