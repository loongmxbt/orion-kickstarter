orion.pages.addTemplate({
    template: 'pagesSimple',
    name: 'Simple',
    description: 'Simple template'
}, {
    content: orion.attribute('summernote', {
      label: 'Content'
    })
})

orion.pages.addTemplate({
    template: 'pagesDefault',
    name: 'Default',
    description: 'Default template'
}, {
    content: orion.attribute('summernote', {
      label: 'Content'
    })
})