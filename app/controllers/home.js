import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
  player: computed.alias('model.player.content.firstObject._data')
});
