import Ember from 'ember';

export default Ember.Route.extend({
  model({ id }) {
    return Ember.RSVP.hash({
      scene: this.modelFor('scenes').findBy('id', id),
      allScenes: this.modelFor('scenes')
    });
  }
});
