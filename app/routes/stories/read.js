import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return Ember.RSVP.hash({
      threads: this.store.findAll('thread'),
      stories: this.store.findAll('story')
    });
  }
});
