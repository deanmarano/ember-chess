import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('new-game', {path: 'game'});
  this.route('game', {path: 'game/:board_id'});
  this.route('home', {path: ''});
});

export default Router;
