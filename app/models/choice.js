import DS from 'ember-data';

const {
  attr,
  Model,
  belongsTo
} = DS;

export default Model.extend({
  description: attr('string'),

  // relationships
  belongsToScene: belongsTo('scene', {
    inverse: 'outboundChoices'
  }),
  destinationScene: belongsTo('scene', {
    inverse: 'inboundChoices'
  })
});
