import Component from '@ember/component';
import { computed } from '@ember/object';

export default Component.extend({
  tagName: 'td',
  classNames: ['dropable', 'chess-space'],
  classNameBindings: ['light:light:dark'],
  light: computed('rank', 'fileNumber', function() {
    console.log('color changed');
    return ((this.get('rank') + this.get('fileNumber')) - 1) % 2 === 0;
  }),
  fileNumber: computed('file', function() {
    return ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'].indexOf(this.attrs.file);
  }),
  piece: computed('board.pieces.@each.rank', 'board.pieces.@each.file', function() {
    console.log('piece moved');
    return this.get('board').pieceAt(this.get('rank'), this.get('file'));
  }),

  dragOver(e) { e.preventDefault();},
  drop(e) {
    console.log('space:drop');
    this.get('attemptMove')(this, JSON.parse(e.dataTransfer.getData('text/data')));
  },
});
