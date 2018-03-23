import Route from '@ember/routing/route';

export default Route.extend({
  model() {
    let player = this.modelFor('application');
    return {
      player: player,
      players: this.store.findAll('player'),
      games: this.store.query('board', {white: player})
    };
  }
});
