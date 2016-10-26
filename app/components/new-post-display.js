import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    makeNewPost() {
      var dizate = new Date();
      var params = {
        author: this.get('author') ? this.get('author'):'',
        title: this.get('title') ? this.get('title'):'',
        tags: this.get('tags') ? this.get('tags'):'',
        content: this.get('content') ? this.get('content'):'',
        image: this.get('image') ? this.get('image'):'',
        date: dizate.toDateString(),
      };
      this.sendAction('makeNewPost', params);
    }
  }
});
