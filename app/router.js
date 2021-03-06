import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('scenes', function() {
    this.route('single', { path: ':id' }, function() {
      this.route('edit');
    });
  });

  this.route('stories', function() {
    this.route('read', function() {
      this.route('thread', { path: ':threadId' });
    });

    this.route('edit', function() {
      this.route('single', { path: ':id' }, function() {
        this.route('scenes', function() {
          this.route('single', { path: ':id' });
        });
      });
    });
  });
});

export default Router;
