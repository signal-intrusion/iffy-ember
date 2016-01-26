import Ember from 'ember';

export default Ember.Controller.extend({
  hasThreadScenes: Ember.computed('model.threadScenes' ,function() {
    return !this.get('model.threadScenes.length');
  }),

  actions: {
    addSceneToThread({ choice }) {
      let thread = this.get('model');
      let destinationScene = choice.get('destinationScene');

      let newThreadScene = this.store.createRecord('thread-scene', {
        dateAdded: new Date(),
        thread
      });

      // destinationScene.get('threadScenes').addObject(newThreadScene);
      thread.get('threadScenes').addObject(newThreadScene);
      newThreadScene.set('scene', destinationScene);

      return newThreadScene.save().then( () => {
        // return destinationScene.save().then( () => {
          return thread.save();
        // });
      });
    }
  }
});
