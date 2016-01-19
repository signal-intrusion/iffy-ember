import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    startNewThread() {
      let newThread = this.store.createRecord('thread', {
        dateStarted: new Date()
      });
      newThread.save().then( (thread) => {
        this.transitionToRoute('stories.read.thread', thread.get('id'));
      });
    }
  }
});
