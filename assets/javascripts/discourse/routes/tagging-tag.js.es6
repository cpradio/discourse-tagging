export default Ember.Route.extend({
  model: function(tag) {
    var self = this;
    return Discourse.TopicList.list('tagging/tag/' + tag.tag_id).then(function(list) {
      self.set('list', list);
      tag.tag_id = Handlebars.Utils.escapeExpression(tag.tag_id);
      return tag;
    });
  },

  setupController: function(controller, model) {
    controller.set('tag', model);
    controller.set('list', this.get('list'));
  }
});
