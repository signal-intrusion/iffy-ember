import DS from 'ember-data';

const {
  attr,
  Model,
  hasMany,
  belongsTo
} = DS;

export default Model.extend({
  title: attr('string'),

  // relationships
  scenes: hasMany('scene', {
    inverse: 'story'
  }),

  firstScene: belongsTo('scene', {
    inverse: 'storyForFirstScene'
  }),

  threads: hasMany('thread')
});
