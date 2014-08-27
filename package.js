Package.describe({
  summary: "Timezone support for moment.js, packaged for Meteor. See http://momentjs.com/timezone. Currently includes all timezone data files."
});

Package.on_use(function (api, where) {
  where = where || ['client', 'server']
  api.use("moment", where);
  if (api.imply) {
    api.imply("moment", where);
  }
  api.add_files('require-shim.js', where);
  api.add_files('lib/moment-timezone/moment-timezone.js', where);
  api.add_files('lib/moment-timezone-data/moment-timezone-data.js', where);
  api.add_files('revert-require-shim.js', where);
});

if (Package.on_test) {
  Package.on_test(function (api) {
    if (Package.onTest) {
      api.use(['mrt:moment-timezone', 'tinytest', 'test-helpers'], ['client', 'server']);
    } else {
      api.use(['moment-timezone', 'tinytest', 'test-helpers'], ['client', 'server']);
    }
    api.add_files('test-mrt:moment-timezone.js', ['client', 'server']);
  });
}
