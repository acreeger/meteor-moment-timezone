Package.describe({
  summary: "Timezone support for moment.js, packaged for Meteor. See http://momentjs.com/timezone. Currently includes all data files."
});

Package.on_use(function (api, where) {
  where = where || ['client', 'server']
  api.add_files('require-shim.js', ['server']);
  api.add_files('lib/moment-timezone/moment-timezone.js', where);
  api.add_files('lib/moment-timezone-data/moment-timezone-data.js', where);
  api.add_files('revert-require-shim.js', ['server']);
});