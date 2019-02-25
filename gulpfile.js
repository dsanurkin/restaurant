'use strict';
 
var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();
var reload = browserSync.reload;
var autoprefixer = require('gulp-autoprefixer');
 
gulp.task('serv', function () {
  var files = [
     '*.html',
     'css/**/*.css',
     'js/**/*.js',
     'sass/**/*.scss'
  ];

  browserSync.init(files, {
     server: {
        baseDir: './'
     }
  });
});

gulp.task('sass', function () {
  gulp.src('sass/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer({
      browsers: ['last 5 versions'],
      cascade: false
    }))
    .pipe(gulp.dest('css'));
});
 
gulp.task('sass:watch', function () {
  gulp.watch('sass/*.scss', ['sass']);
});

gulp.task('default', ['serv', 'sass:watch']);