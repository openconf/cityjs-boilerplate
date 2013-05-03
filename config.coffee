require ['/assets/js/text.js!package.json','require'], (pkg, req)->
  components = {}
  pkgObj = JSON.parse(pkg)
  components[component]="components/#{component}/index" for component of pkgObj.components
  require.config {
    baseUrl: '/'
    paths: components
  }
  req ['app']