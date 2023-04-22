import Fighter, { SimpleFighter } from '../Fighter';
import Battle from './Battle';

export default class PVP extends Battle {
  constructor(protected player: Fighter, protected mobs: SimpleFighter[]) {
    super(player);
  }

  fight(): number {
    let mobTotalLife = 0;
    this.mobs.forEach((mob) => {
      if (mob.lifePoints > 0) {
        mobTotalLife += mob.lifePoints;
      }
    });
    return mobTotalLife > this.player.lifePoints ? -1 : 1;
  }
}