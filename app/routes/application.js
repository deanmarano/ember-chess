import Route from '@ember/routing/route';

export default Route.extend({
  model() {
    let name = localStorage.getItem('name');
    let player;
    if(!name) {
      name = window.prompt("Please enter your name","");
      localStorage.setItem('name', name);
      player = this.store.createRecord('player', {name: name});
      player.save();
      return player;
    } else {
      return this.store.query('player', {name: name, limit: 1}).then(result => {
        return result.get('firstObject');
      });
    }
  }
});
