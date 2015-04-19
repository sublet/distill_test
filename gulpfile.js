//TODO: https://github.com/sindresorhus/gulp-ftp

// npm install gulp gulp-sass gulp-util gulp-autoprefixer gulp-minify-css node-neat node-bourbon jshint-stylish gulp-concat gulp-jshint gulp-uglify gulp-coffee gulp-rename gulp-wait gulp-notify gulp-include gulp-plumber --save

// include gulp
var gulp        = require('gulp'),
  sass          = require('gulp-sass'),
  gutil         = require('gulp-util'),
  autoprefix    = require('gulp-autoprefixer'),
  minifyCSS     = require('gulp-minify-css'),
  neat          = require('node-neat').includePaths,
  bourbon       = require('node-bourbon').includePaths,
  stylish       = require('jshint-stylish'),
  concat        = require('gulp-concat'),
  jshint        = require('gulp-jshint'),
  uglify        = require('gulp-uglify'),
  coffee        = require('gulp-coffee'),
  rename        = require('gulp-rename'),
  wait          = require('gulp-wait'),
  notify        = require('gulp-notify'),
  include       = require('gulp-include'),
  plumber       = require('gulp-plumber');

var paths = {
  'scss': { 
    "src_watch": "./assets/scss/**", // Folder to watch when in "watch" mode
    "file_src": "./assets/scss/**.dev.scss",
    "dest": "./css/"
  },
  'coffee': { 
    "src_watch": "./assets/coffee/**", // Folder to watch when in "watch" mode
    "file_src": "./assets/coffee/**.dev.coffee",
    "dest": "./js/"
  }
};

// SASS - Compile, add Bourbon
gulp.task('styles', function(){
  return gulp.src(paths.scss.file_src)
    .pipe(plumber())
    .pipe(sass({includePaths: [bourbon,neat], outputStyle: 'expanded', errLogToConsole: true}))
    .pipe(autoprefix('last 2 version', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4'))
    .pipe(rename(function(path) { path.basename = path.basename.replace('.dev', '') }))
    .pipe(gulp.dest(paths.scss.dest))
    .pipe(rename({suffix: '.min'}))
    .pipe(minifyCSS())
    .pipe(gulp.dest(paths.scss.dest))
    .pipe(notify({onLast: true, message: 'You just got SASSY...consider it compiled, and minfied!'}));
});

gulp.task('scripts', function(){
  return gulp.src(paths.js.file_src)
    .pipe(changed(paths.js.dest))
    .pipe(plumber())
    .pipe(jshint())
    .pipe(jshint.reporter(stylish))
    .pipe(include())
    .pipe(rename(function(path) { path.basename = path.basename.replace('.dev', '') }))
    .pipe(gulp.dest(paths.js.dest))
    .pipe(rename({suffix: '.min'}))
    .pipe(uglify())
    .pipe(gulp.dest(paths.js.dest))
    .pipe(notify({onLast: true, message: "JS linted, concatenated, and minfied!"}))
});

gulp.task('coffee', function() {
  gulp.src(paths.coffee.file_src)
    .pipe(plumber())
    .pipe(jshint())
    .pipe(jshint.reporter(stylish))
    .pipe(include())
    .pipe(coffee({bare: true}).on('error', gutil.log))
    .pipe(rename(function(path) { path.basename = path.basename.replace('.dev', '') }))
    .pipe(gulp.dest(paths.coffee.dest))
    .pipe(rename({suffix: '.min'}))
    .pipe(uglify())
    .pipe(gulp.dest(paths.coffee.dest))
    .pipe(notify({onLast: true, message: "JS linted, concatenated, and minfied!"}))
});

//Run the tasks listed above
gulp.task('default', function(){
  gulp.start('styles','coffee');
  //gulp.start('coffee');
});

//Fire Up a Dev Server
// gulp.task('server:dev', function() {
//     browserSync({
//         server: {
//             baseDir: rootPath
//         }
//     });
// });

//Watch for changes and reload the page
gulp.task('watch', function(){
  gulp.watch(paths.scss.src_watch, ['styles']);
  gulp.watch(paths.coffee.src_watch, ['coffee']);
});