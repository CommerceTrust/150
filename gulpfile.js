// Paths
var dest = "./";
var src  = './src';


var sources = {
  jade: "jade/**/*.jade",
  stylus: "stylus/**/*.stylus",
};

var destinations = {
  html: "public/",
  css: "public/css"
};


// Modules
var gulp           = require('gulp');
var browserSync    = require('browser-sync');
var reload         = browserSync.reload;
var sourcemaps     = require('gulp-sourcemaps');
var please         = require('gulp-pleeease');
var stylus         = require('gulp-stylus');

//evil             = require('evil-icons');
//var marked       = require('marked'); For :markdown filter in jade
//var csswring     = require('gulp-stylus');
//var html mini    = require('gulp-stylus');

//var front
//var yaml


// Pleeease Post-Prosessor options
var pleaseOptions  = {
  autoprefixer: {
    browsers: ['ie >= 8', 'ie_mob >= 10', 'ff >= 3.6', 'chrome >= 10', 'safari >= 5.1', 'opera >= 11', 'ios >= 7', 'android >= 4.1', 'bb >= 10']
  },
  filters: true,
  rem: true,
  pseudoElements: true,
  opacity: true,

  import: true,
  minifier: true, //CSS Wring is being used here
  mqpacker: true,

  sourcemaps: false,

  next: {
    calc: false,
    customProperties: false,
    customMedia: false,
    colors: false
  }
};





gulp.task('stylus', function () {
  return gulp.src('/stylus/*.styl')
    .pipe(sourcemaps.init())
    .pipe(stylus())
    .on('error', handleErrors)
    .pipe(sourcemaps.write())
    .pipe(please(pleaseOptions))
    .pipe(gulp.dest(dest))
    .pipe(reload({ stream: true }));
});


gulp.task("jade", function(event) {
  return gulp.src("jade/**/*.jade")
    .pipe(jade({pretty: true }))
    .pipe(evilIcons())
    .pipe(gulp.dest(dest));
});


gulp.task('browser-sync', function() {
  browserSync({
    files: [
      themePath + '/**/*.php',
      themePath + '/js/**/*.js'
      ],
    proxy: devUrl
  });
});


gulp.task('default', ['stylus', 'browser-sync'], function () {
  gulp.watch(sassWatch, ['stylus']);
});
