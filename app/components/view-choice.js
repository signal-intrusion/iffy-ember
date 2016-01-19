import Ember from 'ember';

export default Ember.Component.extend({
  choice: null,

  actions: {
    selectChoice() {
      let choice = this.get('choice');
      this.get('onSelect')({ choice });
    }
  }

});
