const {task} = require('gulp');

var gulp = require('gulp'),
  plumber = require('gulp-plumber'),
  concat = require('gulp-concat'),
  connect = require('gulp-connect'),
  babel = require('gulp-babel'),
  autoprefixer = require('gulp-autoprefixer'),
  uglify = require('gulp-uglify'),
  clean = require('gulp-clean'),
  sass = require('gulp-sass'),
  nop = require('gulp-nop'),
  babelenv = require('babel-preset-env'),
  fileinclude = require('gulp-file-include'),
  merge = require('merge-stream'),
  htmlbeautify = require('gulp-html-beautify'),
  sassGlob = require('gulp-sass-glob'),
  strip_comments=require('gulp-strip-json-comments'),
  connect = require('gulp-connect')
  watch = require('gulp-watch');

sass.compiler = require('node-sass');

var isBuild = false;
var hasHtml = false;
var paths = require('./constants');
var theme = require('./theme');


task('clean', function (cb) {
  if(hasHtml) {
    return gulp.src(paths.output, {
            read: false,
            allowEmpty: true
          })
          .pipe(clean({
            force: true
          }));
  }
  cb();
});

task('html', function (cb) {
  return gulp.src(paths.srcHtmlPages).pipe(fileinclude({
      prefix: '@@',
      basepath: '@file'
    }))
    .pipe(htmlbeautify({
      indentSize: 2
    }))
    .pipe(gulp.dest(paths.output))

  cb();
})

task('connect', function (cb) {
  connect.server({
    root: [paths.output],
    livereload: true,
  })

  cb()
})

task('scripts', function (cb) {
  var layoutJs = gulp.src(theme.jsFiles, {
      allowEmpty: true
    })
    .pipe(plumber())
    .pipe(isBuild ? uglify() : nop())
    .pipe(isBuild ? babel({
      presets: [babelenv]
    }) : nop())
    .pipe(concat(`${paths.name}.js`))
    .pipe(gulp.dest(paths.distJs));

  var pagesJs = gulp.src(paths.srcJsPages, {
      allowEmpty: true
    })
    .pipe(plumber())
    .pipe(isBuild ? babel({
      presets: [babelenv]
    }) : nop())
    .pipe(isBuild ? uglify() : nop())
    .pipe(gulp.dest(paths.distJsPages))

  var pluginsJs = gulp.src(paths.srcJsPlugins, {
      allowEmpty: true
    })
    .pipe(plumber())
    .pipe(isBuild ? babel({
      presets: [babelenv]
    }) : nop())
    .pipe(isBuild ? uglify() : nop())
    .pipe(gulp.dest(paths.distJsPlugins))

  return merge(layoutJs, pagesJs,pluginsJs);
  cb();
});

task('styles', function (cb) {
  var layoutScss = gulp.src(paths.scssFile, {
      allowEmpty: true
    })
    .pipe(sassGlob())
    .pipe(sass({
      outputStyle: 'compressed',
      includePaths: ['./node_modules']
    }).on('error', sass.logError))
    .pipe(autoprefixer({
      cascade: false
    }))
    .pipe(strip_comments({
      whitespace: false,
    }))
    .pipe(gulp.dest(paths.distCss));

  var pagesScss = gulp.src(paths.srcScssPages, {
      allowEmpty: true
    })
    .pipe(sassGlob())
    .pipe(sass({
      outputStyle: 'compressed',
      includePaths: ['./node_modules']
    }).on('error', sass.logError))
    .pipe(autoprefixer({
      cascade: false
    }))
    .pipe(strip_comments({
      whitespace: false,
    }))
    .pipe(gulp.dest(paths.distCssPages));

  var pluginsScss = gulp.src(paths.srcScssPlugins, {
      allowEmpty: true
    })
    .pipe(sassGlob())
    .pipe(sass({
      outputStyle: 'compressed',
      includePaths: ['./node_modules']
    }).on('error', sass.logError))
    .pipe(autoprefixer({
      cascade: false
    }))
    .pipe(strip_comments({
      whitespace: false,
    }))
    .pipe(gulp.dest(paths.distCssPlugins));

  return merge(layoutScss, pagesScss, pluginsScss)
  cb();
});

task('fonts', function (cb) {
 return gulp.src(paths.srcFonts)
        .pipe(gulp.dest(paths.distFonts));
  cb();
});

task('media', function (done) {
  return gulp.src(paths.srcMedia)
      .pipe(gulp.dest(paths.distMedia));
  done();
});

task('theme', function (cb) {
  var tasks = [];

  theme.others.forEach(el => {
    tasks.push(
      gulp.src(el.file,{
            allowEmpty:true
           })
          .pipe(gulp.dest(el.dist))
    )
  })

  var plugins = gulp.src(theme.pluginFiles,{
    allowEmpty:true
   })
  .pipe(gulp.dest(paths.distJsPlugins))
   
  return merge(tasks,plugins);

  cb();
});

task('watch',function(cb){
  gulp.watch([paths.srcScss,paths.srcScssPages,paths.srcScssPlugins], gulp.series('styles'))
  gulp.watch([paths.srcJs,paths.srcJsPages,paths.srcJsPlugins], gulp.series('scripts'))
  gulp.watch(paths.srcMedia, gulp.series('media'))
  gulp.watch(paths.srcHtml, gulp.series('html'))

  watch(paths.output).pipe(connect.reload())
  cb()
})

task('build', gulp.series(function (cb) {
  isBuild = true
  cb()
},'clean','styles', 'scripts', 'fonts', 'media','theme'))

task('build-html', gulp.series(function (cb) {
  isBuild = true
  hasHtml = true
  cb()
},'clean', 'html', 'styles', 'scripts', 'fonts', 'media','theme'))

task('watch-html', gulp.series('clean', 'html', 'styles', 'scripts', 'fonts', 'media','theme','connect','watch'))

task('default', gulp.series('clean','styles', 'scripts', 'fonts', 'media','theme','watch'))