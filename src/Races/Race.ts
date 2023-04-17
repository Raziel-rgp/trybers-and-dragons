export default abstract class Race {
  constructor(private _name: string, private _dexterty: number) { }

  get name(): string {
    return this._name
  }
  
  get dexterty(): number {
    return this._dexterty
  }

  static createRacesInstances(): number {
    throw new Error('Not implemented');
  }
  
  abstract get maxLifePoints(): number
}