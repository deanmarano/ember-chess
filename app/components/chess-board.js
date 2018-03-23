import Component from '@ember/component';


export default Component.extend({
  validMove(board, piece, rank, file) {
    let pieceFile = piece.get('file');
    let pieceRank = piece.get('rank');
    let pieceColor = piece.get('color');
    switch(piece.get('name')) {
      case 'pawn':
        break;
      case 'knight':
        break;
      case 'bishop':
        break;
      case 'rook':
        break;
      case 'queen':
        break;
      case 'king':
        break;
    }
    return true;
  },

  actions: {
    attemptMove(space, piece) {
      let board = this.get('board');
      let existingPiece = board.pieceAt(piece.rank, piece.file);
      let pieceToTake = board.pieceAt(space.rank, space.file);
      if(this.validMove(board, existingPiece, space.rank, space.file)) {
        if(pieceToTake) pieceToTake.destroyRecord();
        existingPiece.setProperties({
          rank: space.rank,
          file: space.file
        });
        existingPiece.save();
      }
    }
  }
});
