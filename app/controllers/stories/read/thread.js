import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    addSceneToThread({ choice }) {
      let thread = this.get('model');
      let destinationScene = choice.get('destinationScene');

      let newThreadScene = this.store.createRecord('thread-scene', {
        dateAdded: new Date(),
        scene: destinationScene,
        thread
      });

      destinationScene.get('threadScenes').addObject(newThreadScene);
      thread.get('threadScenes').addObject(newThreadScene);

      return newThreadScene.save().then( () => {
        // return destinationScene.save().then( () => {
          return thread.save();
        // });
      });
    }
  }
});
