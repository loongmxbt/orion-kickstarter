Template.postsList.onCreated(function() {
  var self = this;
  self.autorun(function() {
    self.subscribe('postsList');  
  });
});

Template.postsList.helpers({
  posts: function() {
  	return Posts.find({}, {sort: {created: -1}});
  },

  pathForPost: function() {
    var post = this;
    var params = {
        postId: post._id
    };
    var queryParams = {};
    var routeName = "postItem";
    var path = FlowRouter.path(routeName, params, queryParams);

    return path;
  }

});