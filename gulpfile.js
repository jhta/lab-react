var gulp = require('gulp');
var gutil = require('gulp-util');
var source = require('vinyl-source-stream');
var browserify = require('browserify');

var entryPoint = 'js/index.js';
gulp.task('build', function() {
  return browserify(entryPoint)
  .bundle() //compileme
  .on('err', function(err) { //detecte errores
    gutil.log(err)
  })
  .pipe(source('bundle.js'))
  .pipe(gulp.dest('./dist/'))
});

gulp.task('watch', function() {
  gulp.watch('js/**/**.*', ['build']);
});

gulp.task('default',['watch'])