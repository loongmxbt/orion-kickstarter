Meteor.publish('postsList', function() {
	return Posts.find({}, {field: {body: 0}});
})

Meteor.publish('postById', function(postId) {
	return Posts.find(postId);
})