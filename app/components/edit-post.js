import Ember from 'ember';

export default Ember.Component.extend({
  showEditForm: false,
  actions: {
    showEditPostForm() {
      this.set('showEditForm', true);
    },
    updatePost(post) {
      var params = {
        author: this.get('author'),
        title: this.get('title'),
        tags: this.get('tags'),
        content: this.get('content'),
        image: this.get('image')
      };
      this.set('showEditForm', false);
      this.sendAction('updatePost',post,params);
    }
  }
});
