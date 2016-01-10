import DS from 'ember-data';

const {
  attr,
  Model,
  hasMany
} = DS;

export default Model.extend({
  heading: attr('string'),
  text: attr('string'),

  // relationships
  outboundChoices: hasMany('choice', {
    inverse: 'belongsToScene'
  }),
  inboundChoices: hasMany('choice', {
    inverse: 'destinationScene'
  })
});
