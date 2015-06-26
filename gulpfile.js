// Paths
var theme          = 'pbj';
var themePath      = './wp-content/themes/' + theme;
var sassSrc        = themePath + '/sass/style.sass';
var sassWatch      = themePath + '/sass/**/*.{sass,scss}';
var dest           = themePath;

// Dev ULR (Use this with your MAMPPro settings)
var devUrl         = 'jiffy.dev';

// Modules
var gulp           = require('gulp');
var browserSync    = require('browser-sync');
var reload         = browserSync.reload;
var sourcemaps     = require('gulp-sourcemaps');
var please         = require('gulp-pleeease');
var sass           = require('gulp-sass');

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
  minifier: true,
  mqpacker: true,

  sourcemaps: false,

  next: {
    calc: false,
    customProperties: false,
    customMedia: false,
    colors: false
  }
};


gulp.task('sass', function () {
  return gulp.src(sassSrc)
    .pipe(sourcemaps.init())
    .pipe(sass({
        errLogToConsole: true,
        indentedSyntax: true,
        includePaths : sassSrc
      }))
    .pipe(sourcemaps.write())
    .pipe(please(pleaseOptions))
    .pipe(gulp.dest(dest))
    .pipe(reload({ stream: true }));
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


gulp.task('default', ['sass', 'browser-sync'], function () {
  gulp.watch(sassWatch, ['sass']);
});
