import Ember from 'ember';

export default Ember.Component.extend({
  choice: null,

  destination: Ember.computed('choice.destinationScene', function() {
    return this.get('choice.destinationScene');
  })
});
