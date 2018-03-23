import Component from '@ember/component';
import { computed } from '@ember/object';

let pieceToUnicode = {
  white: {
    king: '&#9812;',
    queen: '&#9813;',
    rook: '&#9814;',
    bishop: '&#9815;',
    knight: '&#9816;',
    pawn: '&#9817;'
  }, black: {
    king: '&#9818;',
    queen: '&#9819;',
    rook: '&#9820;',
    bishop: '&#9821;',
    knight: '&#9822;',
    pawn: '&#9823;'
  }
}

export default Component.extend({
  classNames: 'chess-piece',
  attributeBindings: ['draggable:draggable'],
  draggable: 'true',
  glyph: computed('piece.color', 'piece.name', function() {
    if(this.get('piece')) {
      return pieceToUnicode[this.get('piece.color')][this.get('piece.name')];
    }
  }),
  dragStart(event) {
    console.log('dragStart');
    return event.dataTransfer.setData('text/data', JSON.stringify(this.piece));
  },
  dragEnd(event) {
    console.log('dragEnd');
  },
  drop(event) {
    console.log('dropped');
  }
});
