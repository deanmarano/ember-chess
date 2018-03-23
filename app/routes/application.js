import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default Route.extend({
  peers: service(),
  model() {
    let name = localStorage.getItem('name');
    if(!name) {
      name = window.prompt("Please enter your name","");
      localStorage.setItem('name', name);
    }
    let player = this.store.createRecord('player', {name: name});
    player.save();
    return player;
  }
});
