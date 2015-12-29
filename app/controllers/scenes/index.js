import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    saveNewScene(text, heading) {
      console.log(heading);

      let scene = this.store.createRecord('scene', {
        heading,
        text
      });

      return scene.save();
    }
  }
});
