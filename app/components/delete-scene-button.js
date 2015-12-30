import Ember from 'ember';

export default Ember.Component.extend({
  scene: null,

  actions: {
    deleteScene() {
      let scene = this.get('scene');
      this.get('onDelete')(scene);
    }
  }
});
