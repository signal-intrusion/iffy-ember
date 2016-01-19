import DS from 'ember-data';

const {
  attr,
  Model,
  hasMany,
  belongsTo
} = DS;

export default Model.extend({
  dateStarted: attr('date'),
  threadScenes: hasMany('thread-scene'),
  story: belongsTo('story')
});
