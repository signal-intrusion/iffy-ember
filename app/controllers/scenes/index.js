import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    saveNewScene(text, heading) {
      let scene = this.store.createRecord('scene', {
        heading,
        text
      });

      return scene.save();
    },

    deleteScene(scene) {
      return scene.destroyRecord();
    }
  }
});
