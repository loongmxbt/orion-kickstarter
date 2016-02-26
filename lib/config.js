// Orion options

Options.set('forbidClientAccountCreation', false);

Options.set('defaultRoles', ['user']);

Options.set('showExportTab', true);



// Orion Config
orion.config.add('AWS_API_KEY', 'aws');
orion.config.add('AWS_API_SECRET', 'aws', { secret: true });
orion.config.add('AWS_S3_BUCKET', 'aws');

orion.config.add('APP_NAME', 'app', {public: true});
orion.config.add('APP_LANG', 'app');

// Templates
ReactiveTemplates.set('pages.notFound', 'notFound');

