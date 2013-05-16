module = {exports:undefined};
require(['/assets/js/text.js!.require.cfg.json', 'require'], function(pkg, req) {
  var component,  pkgObj;
  var components = {};

  pkgObj = JSON.parse(pkg);

  require.config({
    baseUrl: '/',
    paths: pkgObj.paths,
    shim: pkgObj.shim
  });
  // start the app
  return req(['app']);
});

