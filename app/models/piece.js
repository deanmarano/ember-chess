import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  color: DS.attr('string'),
  rank: DS.attr('number'),
  file: DS.attr('string'),
  board: DS.belongsTo('board')
});
