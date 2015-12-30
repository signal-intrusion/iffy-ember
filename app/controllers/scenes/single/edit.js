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
      let scene = this.get('model');
      return scene.save();
    },

    deleteScene() {
      let scene = this.get('model');
      return scene.destroyRecord().then( () => {
        this.transitionToRoute('scenes');
      });
    }
  }
});
