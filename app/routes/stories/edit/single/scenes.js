import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.modelFor('stories.edit.single').get('scenes');
  }
});
