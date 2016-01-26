import Ember from 'ember';

export default Ember.Route.extend({
  model({ id }) {
    return Ember.RSVP.hash({
      scene: this.store.find('scene', id),
      allScenes: this.modelFor('stories.single.edit.scenes')
    });
  }
});
