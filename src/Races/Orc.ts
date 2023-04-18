import Race from './Race';

export default class Orc extends Race {
  private static _instanceCount = 0;
  private _maxLifePoints: number;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this._maxLifePoints = 74;
    Orc._instanceCount += 1;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }
  
  static get instanceCount(): number {
    return Orc._instanceCount;
  }
  
  static createdRacesInstances(): number {
    return Orc.instanceCount;
  }
}