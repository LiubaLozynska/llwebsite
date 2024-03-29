function defaultTask(cb) {
    // place code for your default task here
    cb();
  }
  
  exports.default = defaultTask

'use strict';
 
var gulp = require('gulp');
var sass = require('gulp-sass');
 
sass.compiler = require('node-sass');
 
gulp.task('sass', function () {
  return gulp.src('scss/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('css'));
});
 
gulp.task('watch', function(){
   gulp.watch('scss/*.scss', function () {
    return gulp.src('scss/*.scss')
      .pipe(sass().on('error', sass.logError))
      .pipe(gulp.dest('css'));
  }); 
})

const autoprefixer = require('gulp-autoprefixer');
 
gulp.task('prefix', () =>
    gulp.src('css/*.css')
        .pipe(autoprefixer({
            browsers: ['last 99 versions'],
            cascade: false
    }))
    .pipe(gulp.dest('styles'))
);