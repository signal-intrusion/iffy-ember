import DS from 'ember-data';

const {
  attr,
  Model
} = DS;

export default Model.extend({
  heading: attr('string'),
  text: attr('string')
});
