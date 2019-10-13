// Karma configuration
// Generated on Sat Mar 03 2018 12:57:38 GMT+0800 (CST)
let gulp = require('gulp');
let _paths = require("./files.js");
let files = (function(){
  let fls = [
    "speculation/**/**.js",
    {pattern: 'files.js', included: false, served: true, watched: false, nocache: true},
    {pattern: 'toolkit/**/*.js', included: false, served: true, watched: false, nocache: true},
    {pattern: 'js/directives/**/*.js', included: false, served: true, watched: false, nocache: true},
    {pattern: 'js/services/**/*.js', included: false, served: true, watched: false, nocache: true},
    {pattern: '**/**.map', included: false, served: true, watched: false, nocache: true}
  ];
  for(let i in _paths){
    fls.push({pattern: _paths[i] + ".js", included: false, served: true, watched: false, nocache: true})
  };
  return fls;
})();
module.exports = function(config) {
  config.set({
    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: './',
    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine', 'requirejs'],
    // list of files / patterns to load in the browser
    files: files,
    // list of files to exclude
    exclude: [
      "**jasmine**"
    ],
    /** 所有加载的文件必须要在PLUGINS里面添加，官方文档都不写，坑！！！ */
    plugins: [
      'karma-chrome-launcher',
      'karma-coverage',
      'karma-sourcemap-loader',
      'karma-babel-preprocessor',
      'karma-jasmine',
      'karma-requirejs'
    ],
    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
      "speculation/**/*.js" : ['babel', 'coverage']
    },
    coverageReporter: {
      type: 'html',
      dir: './docs/coverage/'
    },
    babelPreprocessor: {
      options: {
        "presets": ["@babel/preset-env"],
        sourceMap: 'inline'
      },
      filename: function (file) {
        return file.originalPath.replace(/\.js$/, '.es5.js');
      },
      sourceFileName: function (file) {
        return file.originalPath;
      }
    },
    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress'],
    // web server port
    port: 9876,
  // enable / disable colors in the output (reporters and logs)
    colors: true,
    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,
    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,
    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['Chrome', 'Chrome_without_security'],
    customLaunchers: {
      Chrome_without_security: {
        base: 'Chrome',
        flags: ['--disable-web-security']
      }
    },
    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false,
    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity,
    gulp: gulp
  })
}
