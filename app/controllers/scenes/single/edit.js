import Ember from 'ember';

export default Ember.Controller.extend({

  sceneDidChange: Ember.observer('model', function() {
    console.log('hey');
  }),

  hasChanges: Ember.computed('model.hasDirtyAttributes', function() {
    return this.get('model.hasDirtyAttributes');
  }),

  actions: {
    saveScene() {
      let scene = this.get('model.scene');
      return scene.save();
    },

    deleteScene() {
      let scene = this.get('model.scene');
      return scene.destroyRecord().then( () => {
        this.transitionToRoute('scenes');
      });
    },

    createChoice({ description, destinationScene }) {
      let currentScene = this.get('model.scene');
      let choice = this.store.createRecord('choice', {
        description
      });

      choice.set('destinationScene', destinationScene);
      currentScene.get('outboundChoices').pushObject(choice);

      return choice.save().then( () => {
        return currentScene.save().then( () => {
          return destinationScene.save();
        });
      });
    }
  }
});
