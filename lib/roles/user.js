UserRole = new Roles.Role('user');

// index
UserRole.allow('collections.posts.index', true);
UserRole.helper('collections.posts.indexFilter', function() {
	return { createdBy: this.userId };
});


// create
UserRole.allow('collections.posts.showCreate', true); 
UserRole.allow('collections.posts.insert', true);


// edit
UserRole.allow('collections.posts.showUpdate', true); 
UserRole.allow('collections.posts.update', function(userId, doc, fields, modifier) {
  return doc.createdBy === userId;
});

// delete
UserRole.allow('collections.posts.showRemove', function(doc) {
  return doc.createdBy == this.userId;
});

UserRole.allow('collections.posts.remove', function(userId, doc) {
  return doc.createdBy === userId; 
});
