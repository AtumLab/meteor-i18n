Package.describe({
  summary: "i18n package (inspired Telescope)",
  authors: "Le Hoang <particle4dev@gmail.com>"
});

Package.on_use(function (api) {
  api.use(['handlebars'], 'client');
  api.add_files(['i18n.js'], ['client', 'server']);
  api.export('i18n');
});

Package.on_test(function (api) {
  api.use('i18n', 'tinytest', 'test-helpers', ['client', 'server']);
});