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
      model.destroyRecord();
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
    }
  }
});
