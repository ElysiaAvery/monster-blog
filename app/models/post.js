import DS from 'ember-data';

export default DS.Model.extend({
  author: DS.attr(),
  image: DS.attr(),
  title: DS.attr(),
  content: DS.attr(),
  date: DS.attr(),
  tags: DS.attr()
});
