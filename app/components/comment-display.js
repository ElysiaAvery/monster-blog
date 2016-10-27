import Ember from 'ember';

export default Ember.Component.extend({
  updating: false,
  actions: {
    activateUpdateForm() {
      this.set('updating', true);
    },
    deactivateUpdateForm() {
      this.set('updating', false);
    },
    destroyComment(comment) {
      if (confirm("Rest upon the heapen ash, cans't thou read?")) {
        this.sendAction('destroyComment', comment);
      }
    },
    updateComment(comment) {
      var params = {
        author: this.get('author'),
        content: this.get('content')
      };
      this.set('updating', false);
      this.sendAction('updateComment', comment, params);
    }
  }
});
