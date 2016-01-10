import Ember from 'ember';

export default Ember.Component.extend({
  choiceDescription: '',
  targetScene: null,
  scenes: null,
  currentScene: null,

  sceneOptions: Ember.computed('scenes', 'currentScene', function() {
    let currentSceneId = this.get('currentScene.id');
    let scenes = this.get('scenes').filter( (scene) => {
      return scene.get('id') !== currentSceneId;
    });

    return scenes;
  }),

  actions: {
    saveChoice() {
      let description = this.get('choiceDescription');
      let destinationScene = this.get('targetScene');
      this.get('onSave')({ description, destinationScene }).then( () => {
        this._resetTool();
      });
    },

    setTargetScene(scene) {
      this.set('targetScene', scene);
    }
  },

  _resetTool() {
    this.set('choiceDescription', '');
    this.set('targetScene', null);
  }
});
