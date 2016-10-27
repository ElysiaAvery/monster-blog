import Ember from 'ember';

export default Ember.Route.extend({
  beforeModel(){
    this._super(...arguments);
    if (typeof tinymce == 'undefined'){
      return Ember.$.getScript('//cdn.tinymce.com/4/tinymce.min.js');
    }
  },
  model: function(params) {
    return this.store.findRecord('post', params.post_id);
  },
  actions: {
    destroyPost(model) {
      var comment_destruction = model.get('comments').then(function(comment) {
        return comment.destroyRecord();
      });
      Ember.RSVP.all(comment_destruction).then(function() {
        return model.destroyRecord();
      });
      this.transitionTo('index');
    },
    updatePost(model, params) {
      Object.keys(params).forEach(function(key){
        if(params[key]!==undefined) {
          model.set(key, params[key]);
        }
      });
      model.save();
      this.transitionTo('index');
    },
    catchNewComment(params) {
      var newComment = this.store.createRecord('comment', params);
      var post = params.post;
      post.get('comments').addObject(newComment);
      newComment.save().then(function() {
        return post.save();
      });
      this.transitionTo('posts');
    },
    destroyComment(comment) {
      comment.destroyRecord();
      this.transitionTo('posts');
    },
    updateComment(comment, params) {
      Object.keys(params).forEach(function(key) {
        if(key !== undefined) {
          comment.set(key, params[key]);
        }
      });
      comment.save();
      this.transitionTo('posts');
    }
  }
});
