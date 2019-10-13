const gulp = require('gulp'),
  cleanCSS = require('gulp-clean-css'),
  uglify = require('gulp-uglify'),
  concat = require('gulp-concat'),
  imagemin = require('gulp-imagemin'),
  htmlmin = require('gulp-htmlmin'),
  less = require('gulp-less'),
  babel = require('gulp-babel'),
  del = require('del'),
  plumber = require('gulp-plumber'),
  ngAnnotate = require('gulp-ng-annotate'),
  replace = require('gulp-replace'),
  rename = require('gulp-rename'),
  sourceMap = require("gulp-sourcemaps"),
  babelOption = {
    sourceType: "script"
  },
  config = {
    exclude: ['!bower_components/**', '!node_modules/**', '!release/**', '!gulpfile.js', '!nodeapi/**', '!webpack.config.js', '!ps-core.config.js', '!ps-core/**', '!ps-baogang/**', '!handsontable/**', '!toolkit/rappid/**', '!toolkit/video_play/**'],
    compress: ["app-oc",
      "app-ac",
      "app-configure",
      "app-flowsheet",
      "app-free-style",
      "app-freeboard",
      "app-help",
      "app-uc",
      "js",
      "solution",
      "toolkit"
    ].map(d => `**/${d}/**/*.js`),
    outDir: 'release',
    mapDir: "map",
    devDir: 'css/abc',
    configDir: ['**/fonts/**', '**/localdb/**', '**/ckplayer/**'],
    libDir: ['**/node_modules/**', "**/handsontable/**", "**/rappid/**"]
  },
  outpuConfig = ["core", "baogang"]
gulp.task('clean', function () {
  return del(config.outDir);
});

'./a/b/c/*/less.less'
'./d/less.less'

gulp.task('less-public', function () {
  return gulp.src(['./less/**/AdminLTE.less', './less/**/skins/*.less', './less/**/dashboard.less', './less/**/displayMain.less', './less/**/theme/*.less', './less/**/proudsmart-tree/*.less', './less/**/tree-menu/*.less'].concat(config.exclude))
    .pipe(plumber())
    .pipe(less()) //执行less编译
    .pipe(gulp.dest(config.devDir))
});
gulp.task('less-private', function () {
  return gulp.src(['./app-*/**/*.less'].concat(config.exclude))
    .pipe(plumber())
    .pipe(less()) //执行less编译
    .pipe(rename(function (path) {
      path.dirname = path.dirname.replace('/less', '/css')
    }))
    .pipe(gulp.dest('./'))
});
gulp.task('minify-css', gulp.series(gulp.parallel('less-public', 'less-private'), function () {
  return gulp.src(['**/*.css'].concat(config.exclude))
    .pipe(sourceMap.init())
    .pipe(plumber())
    .pipe(cleanCSS({
      rebase: false
    }))
    .pipe(sourceMap.write(config.mapDir, {
      addComment: true
    }))
    .pipe(gulp.dest(config.outDir));
}));
gulp.task('compress1', function () {
  return gulp.src(['./solution/**/*.js'])
    .pipe(babel(babelOption))
    .pipe(sourceMap.init())
    .pipe(plumber())
    .pipe(ngAnnotate())
    .pipe(uglify())
    .pipe(sourceMap.write(config.mapDir, {
      addComment: true
    }))
    .pipe(gulp.dest(config.outDir));
});
gulp.task('compress2', function () {
  return gulp.src(['./dashboard-view/**/*.js', '!./dashboard-view/**/b.js'])
    .pipe(babel(babelOption))
    .pipe(concat("dashboard-view.min.js"))
    .pipe(uglify())
    .pipe(gulp.dest(config.outDir + '/dashboard-view'));
});
gulp.task('compress', function () {
  return gulp.src(config.compress.concat(config.exclude))
    .pipe(babel(babelOption))
    .pipe(sourceMap.init())
    .pipe(plumber())
    .pipe(ngAnnotate())
    .pipe(uglify())
    .pipe(sourceMap.write(config.mapDir, {
      addComment: true
    }))
    .pipe(gulp.dest(config.outDir));
});
gulp.task('images', function () {
  return gulp.src(['**/*.jpg', '**/*.png', '**/*.gif', '**/*.svg', '**/*.eot', '**/*.ttf', '**/*.woff'].concat(config.exclude))
    .pipe(plumber())
    .pipe(imagemin())
    .pipe(gulp.dest(config.outDir))
});
gulp.task('mp3', function () {
  return gulp.src(['**/*.mp3'].concat(config.exclude))
    .pipe(plumber())
    .pipe(gulp.dest(config.outDir))
});
gulp.task('cp_core', function () {
  return gulp.src([`**/ps-core/build/output.js`, `**/ps-core/build/output.js.map`, `**/ps-core/build/output.css`])
    .pipe(plumber())
    .pipe(gulp.dest(config.outDir))
});
gulp.task('cp_baogang', function () {
  return gulp.src([`**/ps-baogang/build/**/*.js`, `**/ps-baogang/build/**/*.js.map`, `**/ps-baogang/build/**/*.css`])
    .pipe(plumber())
    .pipe(gulp.dest(config.outDir))
});
gulp.task('copyhtml', function () {
  return gulp.src(['**/*.html'].concat(config.exclude))
    .pipe(plumber())
    .pipe(gulp.dest(config.outDir))
});
gulp.task('copyconfigs', function () {
  return gulp.src(config.configDir.concat(config.exclude))
    .pipe(plumber())
    .pipe(gulp.dest(config.outDir))
});
gulp.task('copylibs', function () {
  return gulp.src(config.libDir)
    .pipe(plumber())
    .pipe(gulp.dest(config.outDir))
});
gulp.task('copyjs', function () {
  return gulp.src(['**/*.js'].concat(config.exclude))
    .pipe(plumber())
    .pipe(ngAnnotate())
    .pipe(gulp.dest(config.outDir));
});
gulp.task('release-version', gulp.series('compress', function () {
  return gulp.src([config.outDir + '/**/js/main.js'])
    .pipe(plumber())
    .pipe(replace('==version==', (new Date()).getTime()))
    .pipe(gulp.dest(config.outDir));
}));
gulp.task('daily-version', gulp.series('copyjs', function () {
  return gulp.src([config.outDir + '/**/js/main.js'])
    .pipe(plumber())
    .pipe(replace('==version==', (new Date()).getTime()))
    .pipe(gulp.dest(config.outDir));
}));
gulp.task('daily', gulp.series('clean', 'daily-version', 'minify-css', 'mp3', 'images', 'copyhtml', 'copyconfigs', 'copylibs'))
gulp.task('release', gulp.series('clean', 'release-version', 'minify-css', 'mp3', 'images', 'copyhtml', 'copyconfigs', 'copylibs'));
