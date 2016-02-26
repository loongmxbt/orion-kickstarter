FlowRouter.route('/', {
  name: "home",
  action: function() {
    BlazeLayout.render("mainLayout", {content: "home"});
  }
});

FlowRouter.route('/posts/:postId', {
  name: "postItem",
  action: function() {
    BlazeLayout.render("mainLayout", {content: "postItem"});
  }
});