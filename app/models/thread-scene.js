import Ember from 'ember';
import DS from 'ember-data';

const {
  attr,
  Model,
  belongsTo
} = DS;

export default Model.extend({
  dateAdded: attr('date'),
  scene: belongsTo('scene'),
  thread: belongsTo('thread'),

  // computed properties
  heading: Ember.computed('scene', function() {
    return this.get('scene.heading');
  }),
  text: Ember.computed('scene', function() {
    return this.get('scene.text');
  })
});
