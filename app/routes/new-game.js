import Route from '@ember/routing/route';

export default Route.extend({
  async beforeModel(transition) {
    let player = this.modelFor('application');
    let otherPlayer = await this.store.findRecord('player', transition.queryParams.against);
    let board =  this.store.createRecord('board');
    if(transition.queryParams.as == 'white') {
      board.setProperties({
        white: player,
        black: otherPlayer
      });
    } else {
      board.setProperties({
        black: player,
        white: otherPlayer
      });
    }
    let savedBoard = await board.save();
    board.set('pieces', [
      this.store.createRecord('piece', {board: this, name: 'rook', color: 'white', file: 'a', rank: 1}),
      this.store.createRecord('piece', {board: this, name: 'knight', color: 'white', file: 'b', rank: 1}),
      this.store.createRecord('piece', {board: this, name: 'bishop', color: 'white', file: 'c', rank: 1}),
      this.store.createRecord('piece', {board: this, name: 'king', color: 'white', file: 'd', rank: 1}),
      this.store.createRecord('piece', {board: this, name: 'queen', color: 'white', file: 'e', rank: 1}),
      this.store.createRecord('piece', {board: this, name: 'bishop', color: 'white', file: 'f', rank: 1}),
      this.store.createRecord('piece', {board: this, name: 'knight', color: 'white', file: 'g', rank: 1}),
      this.store.createRecord('piece', {board: this, name: 'rook', color: 'white', file: 'h', rank: 1}),
      this.store.createRecord('piece', {board: this, name: 'pawn', color: 'white', file: 'a', rank: 2}),
      this.store.createRecord('piece', {board: this, name: 'pawn', color: 'white', file: 'b', rank: 2}),
      this.store.createRecord('piece', {board: this, name: 'pawn', color: 'white', file: 'c', rank: 2}),
      this.store.createRecord('piece', {board: this, name: 'pawn', color: 'white', file: 'd', rank: 2}),
      this.store.createRecord('piece', {board: this, name: 'pawn', color: 'white', file: 'e', rank: 2}),
      this.store.createRecord('piece', {board: this, name: 'pawn', color: 'white', file: 'f', rank: 2}),
      this.store.createRecord('piece', {board: this, name: 'pawn', color: 'white', file: 'g', rank: 2}),
      this.store.createRecord('piece', {board: this, name: 'pawn', color: 'white', file: 'h', rank: 2}),

      this.store.createRecord('piece', {board: this, name: 'rook', color: 'black', file: 'a', rank: 8}),
      this.store.createRecord('piece', {board: this, name: 'knight', color: 'black', file: 'b', rank: 8}),
      this.store.createRecord('piece', {board: this, name: 'bishop', color: 'black', file: 'c', rank: 8}),
      this.store.createRecord('piece', {board: this, name: 'king', color: 'black', file: 'd', rank: 8}),
      this.store.createRecord('piece', {board: this, name: 'queen', color: 'black', file: 'e', rank: 8}),
      this.store.createRecord('piece', {board: this, name: 'bishop', color: 'black', file: 'f', rank: 8}),
      this.store.createRecord('piece', {board: this, name: 'knight', color: 'black', file: 'g', rank: 8}),
      this.store.createRecord('piece', {board: this, name: 'rook', color: 'black', file: 'h', rank: 8}),
      this.store.createRecord('piece', {board: this, name: 'pawn', color: 'black', file: 'a', rank: 7}),
      this.store.createRecord('piece', {board: this, name: 'pawn', color: 'black', file: 'b', rank: 7}),
      this.store.createRecord('piece', {board: this, name: 'pawn', color: 'black', file: 'c', rank: 7}),
      this.store.createRecord('piece', {board: this, name: 'pawn', color: 'black', file: 'd', rank: 7}),
      this.store.createRecord('piece', {board: this, name: 'pawn', color: 'black', file: 'e', rank: 7}),
      this.store.createRecord('piece', {board: this, name: 'pawn', color: 'black', file: 'f', rank: 7}),
      this.store.createRecord('piece', {board: this, name: 'pawn', color: 'black', file: 'g', rank: 7}),
      this.store.createRecord('piece', {board: this, name: 'pawn', color: 'black', file: 'h', rank: 7}),
    ]);
    board.get('pieces').map(piece => piece.save());
    board.save();
    this.transitionTo('game', savedBoard.id);
  }
});
