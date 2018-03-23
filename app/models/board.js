import DS from 'ember-data';

export default DS.Model.extend({
  ranks: [1,2,3,4,5,6,7,8],
  files: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'],
  pieces: DS.hasMany('piece'),
  white: DS.belongsTo('player'),
  black: DS.belongsTo('player'),
  pieceAt(rank, file) {
    return this.get('pieces').find(p => {
      return p.get('rank') === rank
        && p.get('file') === file;
    });
  }
});
