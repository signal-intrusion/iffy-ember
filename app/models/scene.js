import DS from 'ember-data';

const {
  attr,
  Model,
  hasMany,
  belongsTo
} = DS;

export default Model.extend({
  heading: attr('string'),
  text: attr('string'),

  // relationships
  threadScenes: hasMany('thread-scene'),

  outboundChoices: hasMany('choice', {
    inverse: 'belongsToScene'
  }),

  inboundChoices: hasMany('choice', {
    inverse: 'destinationScene'
  }),

  story: belongsTo('story', {
    inverse: 'scenes'
  }),

  storyForFirstScene: belongsTo('story', {
    inverse: 'firstScene'
  })
});
