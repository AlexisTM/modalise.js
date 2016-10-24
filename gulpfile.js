'use strict';

var watchify = require('watchify');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var assign = require('lodash.assign');
var jade = require('jade');
var gulp = require('gulp');
var uglify = require('gulp-uglify');
var uglifycss = require('gulp-uglifycss');
var sass = require('gulp-sass');
var gulpJade = require('gulp-jade');
var gutil = require('gulp-util');
var concat = require('gulp-concat');


var opts = assign({}, watchify.args, {entries: ['index.js']});
var b = watchify(browserify(opts)); 

gulp.task('js', bundleJS); // so you can run `gulp js` to build the file
b.on('update', bundleJS); // on any dep update, runs the bundler
b.on('log', gutil.log); // output build logs to terminal

gulp.task('sass', bundleSass);

gulp.task('default', bundleAll);

gulp.task('jade', bundleJade)

function bundleAll(){
  bundleJS();
  bundleJade();
  bundleSass();
  gulp.watch('css/*.scss', ['sass']);
  gulp.watch('examples/*/*.jade', ['jade']);
}

function bundleSass(){
  return gulp.src('css/modalise.scss')
    .pipe(sass().on('error', gutil.log))
    .pipe(gulp.dest('dist'))
    .pipe(uglifycss())
    .pipe(concat('modalise.min.css'))
    .pipe(gulp.dest('dist'));
}

function bundleJade(){
  return gulp.src('examples/bottom/index.jade')
    .pipe(gulpJade({
      jade: jade
    }))
    .pipe(gulp.dest('examples/bottom/'))
}

function bundleJS() {
  return b.bundle()
    // log errors if they happen
    .on('error', gutil.log.bind(gutil, 'Browserify Error'))
    .pipe(source('modalise.js'))
    .pipe(buffer())
    .pipe(gulp.dest('dist'))
    .pipe(uglify())
    .pipe(concat('modalise.min.js'))
    .pipe(gulp.dest('dist'));
}