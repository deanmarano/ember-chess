import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
  player: computed.alias('model.player'),
  actions: {
    playGame(otherPlayer, myColor) {
      this.transitionToRoute('new-game', {queryParams:
        {
          against: otherPlayer.id,
          as: myColor
        }});
    }
  }
});
