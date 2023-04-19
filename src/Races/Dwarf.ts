import Race from './Race';

export default class Dwarf extends Race {
  private static _instanceCount = 0;
  private _maxLifePoints: number;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this._maxLifePoints = 80;
    Dwarf._instanceCount += 1;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  static get instanceCount(): number {
    return Dwarf._instanceCount;
  }

  static createdRacesInstances(): number {
    return Dwarf.instanceCount;
  }
}