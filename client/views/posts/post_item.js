Template.postItem.onCreated(function() {
  var self = this;
  var postId = FlowRouter.getParam('postId');
  self.autorun(function() {
    self.subscribe('postById', postId);  
  });
});

Template.postItem.helpers({
  post: function() {
    var postId = FlowRouter.getParam('postId');
    var post = Posts.findOne({_id: postId}) || {};
    return post;
  }
});