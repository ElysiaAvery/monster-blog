import Ember from 'ember';

export default Ember.Component.extend({
  showForm: false,
  actions: {
    activateDisplay() {
      console.log("hey");
      this.set("showForm", true);
    },
    deactivateDisplay() {
      this.set('showForm', false);
    },
    sendNewComment() {
      var date = new Date();
      var params = {
        author: this.get('author'),
        date: date.toDateString(),
        content: this.get('content'),
        post: this.get('post')
      };
      this.set('showForm', false);
      this.sendAction('sendNewComment', params);
    }
  }
});
