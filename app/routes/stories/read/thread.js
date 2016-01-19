import Ember from 'ember';

export default Ember.Route.extend({
  model({ threadId }) {
    return this.store.findRecord('thread', threadId );
  }
});
