var gulp = require('gulp');
var gutil = require('gulp-util');
var source = require('vinyl-source-stream');
var browserify = require('browserify');
var babelify = require('babelify');

var entryPoint = 'js/index.js';
gulp.task('build', function() {
  return browserify({
    entries: [entryPoint], //puntos de entrada donde corre borwserify
    debug: true, //permite ebugger
    cache: {},
    packageCache: {},
    fullPaths: false, 
    extensions: ['.jsx'] //posibles extensiones
    })
  .transform('babelify', {presets: ['es2015', 'react']}) //transforma a los presets indicados
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