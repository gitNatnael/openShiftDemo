module.exports = {
  ng_appname: 'pep-ui',

  build_dir: 'build',
  compile_dir: 'dist',
  config_dir: './config/',

  config_files: {
    json: ['config/*.json']
  },
  app_files: {
    js: ['src/app/**/*.js'],

    atpl: ['src/app/**/**/*.html'],

    less: 'src/less/themes/default/master.less'
  },

  vendor_files: {
    js: [
      'bower_components/jquery/dist/jquery.min.js',
      'bower_components/jquery-resize/jquery.ba-resize.min.js',
      'bower_components/showdown/compressed/showdown.js',
      'bower_components/respond/dest/respond.min.js',
      'bower_components/angular/angular.js',
      'bower_components/angular-mocks/angular-mocks.js',
      'bower_components/angular-route/angular-route.js',
      'bower_components/angular-resource/angular-resource.js',
      'bower_components/angular-promise-tracker/promise-tracker.js',
      'bower_components/angular-animate/angular-animate.js',
      'bower_components/angular-sanitize/angular-sanitize.js',
      'bower_components/angular-cookies/angular-cookies.js',
      'bower_components/ng-multi-transclude/src/multi-transclude.js',
      'git_modules/pep-commons/dist/assets/pep-commons-0.0.0.js',
      'git_modules/mvk-framework/dist/assets/mvk-framework-0.0.0.js',
      'git_modules/ng-commons/dist/assets/ng-commons-0.0.0.js'
    ],
    css: [
      'bower_components/normalize.css/normalize.css',
      'src/assets/jquery-ui.min.css',
      'git_modules/mvk-framework/vendor/mvk-virtual-portal/vp-portal_2.1.css'
    ],
    assets: [
      'git_modules/*/src/assets/**/*.*' // see copy:build_vendor_assets in Gruntfile for submodule asset copying
    ],
    less: [
      'git_modules/pep-commons/src/less/master.less',
      'git_modules/pep-styleguide/less/master.less'
    ]
  }
};
