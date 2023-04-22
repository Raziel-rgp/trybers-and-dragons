import Archetype, { Mage } from './Archetypes';
import Energy from './Energy';
import Fighter, { SimpleFighter } from './Fighter';
import Race, { Elf } from './Races';
import getRandomInt from './utils';

const numAle = getRandomInt(1, 10);

export default class Character implements Fighter {
  private _race: Race;
  private _archetype: Archetype;
  private _maxLifePoints: number;
  private _lifePoints: number;
  private _strength: number;
  private _defense: number;
  private _dexterity: number;
  private _energy: Energy;
  constructor(name: string) {
    this._dexterity = numAle;
    this._strength = numAle;
    this._defense = numAle;

    this._race = new Elf(name, this._dexterity);
    this._archetype = new Mage(name);
    this._maxLifePoints = (this._race.maxLifePoints / 2);
    this._lifePoints = this._maxLifePoints;
    this._energy = {
      type_: this._archetype.energyType,
      amount: numAle,
    };
  }

  receiveDamage(attackPoints: number): number {
    const damage = attackPoints - this._defense;
    if (damage > 0) {
      this._lifePoints -= damage;
    }
    if (damage <= 0) {
      this._lifePoints -= 1;
    }
    if (this._lifePoints <= 0) {
      this._lifePoints = -1;
    }
    return this._lifePoints;
  }

  attack(enemy: Fighter | SimpleFighter): void {
    enemy.receiveDamage(this._strength);
  }

  levelUp(): void {
    this._maxLifePoints += numAle;
    if (this._maxLifePoints > this._race.maxLifePoints) {
      this._maxLifePoints = this._race.maxLifePoints;
    }
    this._strength += numAle;
    this._dexterity += numAle;
    this._defense += numAle;
    this._energy.amount = 10;
    this._lifePoints = this._maxLifePoints;
  }

  especial(enemy: Fighter): void {
    console.log('jutso estilo apelação infinita RasenShinaTsukiomi');
    console.log('Shinu gomi');
    
    enemy.receiveDamage(this._strength + 999);
  }

  get lifePoints(): number {
    return this._lifePoints;
  }

  get strength(): number {
    return this._strength;
  }

  get defense(): number {
    return this._defense;
  }

  get energy(): Energy {
    return { ...this._energy };
  }

  get race(): Race {
    return this._race;
  }

  get archetype(): Archetype {
    return this._archetype;
  }

  get maxLifePoinst(): number {
    return this._maxLifePoints;
  }

  get dexterity(): number {
    return this._dexterity;
  }
}