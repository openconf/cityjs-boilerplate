require(['/assets/js/text.js!package.json', 'require'], function(pkg, req) {
  var component,  pkgObj;
  var components = {};

  pkgObj = JSON.parse(pkg);
  
  for (component in pkgObj.components) {
    components[component] = "components/" + component + "/index";
  }
  
  require.config({
    baseUrl: '/',
    paths: components
  });
  // start the app
  return req(['app']);
});

