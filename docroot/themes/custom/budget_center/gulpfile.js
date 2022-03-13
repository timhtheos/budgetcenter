'use strict';
 
var gulp = require('gulp');
var sass = require('gulp-sass');
var watch = require('gulp-watch');

sass.compiler = require('node-sass');

var sass = require('gulp-sass')(require('sass'));

gulp.task('compile:sass', function () {
  return gulp.src('./sass/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./css'));
});

gulp.task('watch:sass', function () {
  return gulp.watch([ './sass/**/*.scss' ], gulp.series('compile:sass'));
});
