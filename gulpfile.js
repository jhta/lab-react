var gulp = require('gulp');
var gutil = require('gulp-util');
var source = require('vinyl-source-stream');
var browserify = require('browserify');
var watchify = require('watchify');
var browserSync = require('browser-sync').create();

var entryPointJS = './src/js/app.js'

//funcion para transpilar el codigo
//recibe un objeto de browserify con sus opciones
function bundle(bundler) {
  return bundler
    .transform('babelify', {presets: ['es2015', 'react']}) //transforma a es6 con babel
    .bundle() //constuye o transpila el codigo
    .on('error', function(e) { //verifica errores
      gutil.log(gutil.colors.red(e));
    })
    .pipe(source('bundle.js')) //nombre
    .pipe(gulp.dest('./dist')) //destino
    .pipe(browserSync.stream()) //emitiendo que cambio
    .on('end', function() { //finalizo el cambio
      return gutil.log(gutil.colors.green('bundle: OK'));
    })
}

//opciones de browserify
var browserifySettings = {
  entries: [entryPointJS],
  debug: true,
  cache: {},
  packageCache: {},
  fullPaths: false,
  extensions: ['.jsx'],
};

//Tarea para compilar js con browserify
gulp.task('build', function() {
    return bundle(browserify(browserifySettings));
  }
);

// Observa constantemente los cambios en los archivos mencionados
gulp.task('watch', function() {
  //watcher recibe objeto broserify con opcioens
  var watcher = watchify(browserify(browserifySettings))
  bundle(watcher);
  watcher.on('update', function() {
    bundle(watcher)
  })
  watcher.on('log', gutil.log);

  browserSync.init({
    server: './',
    logFileChanges: false
    });
});

// Tarea que corre por defecto, en este caso watch
gulp.task('default', ['watch']);