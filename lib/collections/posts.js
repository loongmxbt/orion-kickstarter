Posts = new orion.collection('posts', {
  singularName: 'post', // The name of one of these items
  pluralName: 'posts', // The name of more than one of these items
  title: '管理文章', // The title in the index of the collection
  link: {
    /**
     * The text that you want to show in the sidebar.
     * The default value is the name of the collection, so
     * in this case it is not necessary.
     */
    title: '文章'
  },
  /**
   * Tabular settings for this collection
   */
  tabular: {
    columns: [
      { data: "title", title: "Title" },
      { data: "category", title: "Category"},
      /**
       * If you want to show a custom orion attribute in
       * the index table you must call this function
       * orion.attributeColumn(attributeType, key, label)
       */
      orion.attributeColumn('summernote', 'body', 'Content'),
      orion.attributeColumn('createdBy', 'createdBy', 'Created By')
    ]
  }
});

Posts.attachSchema(new SimpleSchema({
  title: {
    label: 'Title for a post',
    type: String
  },
  /**
   * The file attribute is a custom orion attribute
   * This is where orion does its magic. Just set
   * the attribute type and it will automatically
   * create the form for the file.
   * WARNING: the url of the image will not be saved in
   * .image, it will be saved in .image.url.
   */
  image: orion.attribute('file', {
      label: 'Image',
      optional: true
  }),

  category: {
    label: 'Post Category',
    type: String,
    autoform: {
      type: "select-radio-inline",
      options: function () {
        return [
          {label: "News", value: "News"},
          {label: "Blog", value: "Blog"},
          {label: "Draft", value: 'Draft'}
        ];
      }
    }
  },

  /**
   * Here it's the same with an image attribute.
   * summernote is an html editor.
   */
  body: orion.attribute('summernote', {
      label: 'Body'
  }),
  /**
   * This attribute sets the user id to that of the user that created
   * this post automatically.
   */
  createdBy: orion.attribute('createdBy')
}));