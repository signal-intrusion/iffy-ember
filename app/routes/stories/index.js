import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.modelFor('stories');
  },

  actions: {
    startNewThread(story) {
      let newThread = this.store.createRecord('thread', {
        dateStarted: new Date(),
        story: story
      });

      story.get('threads').addObject(newThread);

      newThread.save().then( (thread) => {
        story.save().then( () => {
          this.transitionTo('stories.read.thread', thread.get('id'));
        });
      });
    },

    startNewStory() {
      let story = this.store.createRecord('story');
      this.transitionTo('stories.read.thread', thread.get('id'));
    }
  }
});
