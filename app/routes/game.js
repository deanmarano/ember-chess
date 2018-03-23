import Route from '@ember/routing/route';

export default Route.extend({
  async model(params) {
    let board = await this.store.findRecord('board', params.board_id);
    await board.get('pieces');
    return board;
  }
});
