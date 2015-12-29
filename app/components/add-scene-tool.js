import Ember from 'ember';

export default Ember.Component.extend({
  newSceneHeading: '',
  newSceneText: '',
  addingScene: false,

  resetSceneInputs() {
    this.set('newSceneText', '');
    this.set('newSceneHeading', '');
  },

  actions: {
    saveScene() {
      let text = this.get('newSceneText');
      let heading = this.get('newSceneHeading');

      if (text.length && heading.length) {
        this.get('onSave')(text, heading).then( () => {
          this.resetSceneInputs();
          this.send('toggleTool');
        });
      }
    },

    toggleTool() {
      this.toggleProperty('addingScene');
    }
  }
});
