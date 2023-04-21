import Archetype from './Archetypes';
import { EnergyType } from '../Energy';

export default class Warrior extends Archetype {
  private _energy: EnergyType;
  static _mageInstance = 0;

  constructor(name: string) {
    super(name);
    this._energy = 'stamina';
    Warrior._mageInstance += 1;
  }

  get energyType(): EnergyType {
    return this._energy;
  }

  public static createdArchetypeInstances(): number {
    return Warrior._mageInstance;
  }
}