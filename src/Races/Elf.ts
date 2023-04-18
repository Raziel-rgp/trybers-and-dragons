import Race from './Race';

export default class Elf extends Race {
  private static _instanceCount = 0;
  private _maxLifePoints: number;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this._maxLifePoints = 99;
    Elf._instanceCount += 1;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }
  
  static get instanceCount(): number {
    return Elf._instanceCount;
  }
  
  static createdRacesInstances(): number {
    return Elf.instanceCount;
  }
}