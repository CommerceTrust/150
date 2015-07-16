// Paths
// var dest = "./";
// var src  = './src';
//
//
// var destinations = {
//   html: "public/",
//   css: "public/css"
// };


// Modules
var gulp           = require('gulp');

// Automagicly refreshes browser when you save
var browserSync    = require('browser-sync');
var reload         = browserSync.reload;

//PreProcessor
var stylus         = require('gulp-stylus');

// SourceMaps for CSS and JS
var sourcemaps     = require('gulp-sourcemaps');

// PostProcessor for (auto-prefixing, minifying, and IE fallbacks)
var please         = require('gulp-pleeease');

// SVG Icon Library
var evilIcons      = require('evil-icons');

// Jade for HTML
var jade           = require('gulp-jade');

// Enable MarkDown with Jade. :markdown filter
var marked         = require('marked');

// Prevent pipe from breaking even if and error is encountered
var plumber        = require('gulp-plumber');

// Used to Create a static DB
var data           = require('gulp-data');
var path           = require('path');
var fs             = require('fs');
var frontMatter    = require('gulp-front-matter');
var rename         = require('gulp-rename');
var yaml           = require('gulp-yaml');


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

gulp.task('yaml', function () {
  return gulp.src(config.src)
    .pipe(plumber())
    .pipe(yaml({ space: 2 }))
    .pipe(rename("index.jade.json"))
    .pipe(gulp.dest(dest))
    .pipe(browserSync.reload({stream:true}));
});


gulp.task('jade', function() {
  return gulp.src('jade/**/*.jade')
    //.pipe(plumber())
    //.pipe(frontMatter({ property: 'data' }))
    //.pipe(data(function(file) {
      // Use this one when not watching and related to current page
      //return require('./src/data/' + path.basename(file.path) + '.json');

      //Use this one when watchgin JSON files related to the current page
      //return JSON.parse(fs.readFileSync('./src/data/' + path.basename(file.path) + '.json'));

      //Use this when watching a global JSON file for all pages
    //  return JSON.parse(fs.readFileSync('./data/index.jade.json'));
    //}))
    .pipe(jade({ pretty: true }))
    //.pipe(evilIcons())
    //.pipe(rename('index.html'))
    .pipe(gulp.dest('./'))
    .pipe(browserSync.reload({stream:true}));
});

gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: "../"
        }
        // ,
        // files: [
        //   themePath + '/**/*.php',
        //   themePath + '/js/**/*.js'
        //   ]
    });
});



gulp.task('default', ['stylus', 'yaml', 'jade' ,'browser-sync'], function () {
  gulp.watch(sassWatch, ['stylus']);
});

gulp.task('jb', ['jade' ,'browser-sync'], function () {
  //gulp.watch(sassWatch, ['stylus']);
});
