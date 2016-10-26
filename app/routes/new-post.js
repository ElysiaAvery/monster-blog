import Ember from 'ember';

export default Ember.Route.extend({
  beforeModel(){
    this._super(...arguments);
    if (typeof tinymce == 'undefined'){
      return Ember.$.getScript('//cdn.tinymce.com/4/tinymce.min.js');
    }
  },
  model: function(){
    return this.store.findAll('post');
  },
  actions: {
    makeNewPost(params) {
      var newPost = this.store.createRecord('post', params);
      newPost.save();
      this.transitionTo('index');
    }
  }
});
