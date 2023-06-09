import { SimpleFighter } from './Fighter';

export default class Monster implements SimpleFighter {
  protected _lifePoints: number;
  private _strength: number;
  constructor() {
    this._lifePoints = 85;
    this._strength = 63;
  }

  get lifePoints(): number { return this._lifePoints; }
  set setLifePoints(value: number) { this._lifePoints = value; }
  get strength(): number { return this._strength; }

  receiveDamage(attackPoints: number) {
    const damage = attackPoints - this.lifePoints;
    if (damage > 0) {
      this._lifePoints -= damage;
    } else { this._lifePoints -= 1; }
    if (this._lifePoints === 0 || this._lifePoints < 0) {
      this._lifePoints = -1;
    }
    return this.lifePoints;
  }

  attack(enemy: SimpleFighter) {
    this._lifePoints = this.lifePoints - enemy.strength;
    return this.lifePoints;
  }
}