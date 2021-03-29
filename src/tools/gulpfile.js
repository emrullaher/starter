var gulp = require('gulp'),
  plumber = require('gulp-plumber'),
  concat = require('gulp-concat'),
  connect = require('gulp-connect'),
  babel = require('gulp-babel'),
  sourcemaps = require('gulp-sourcemaps'),
  autoprefixer = require('gulp-autoprefixer'),
  rename = require('gulp-rename'),
  uglify = require('gulp-uglify'),
  minify = require('gulp-minify'),
  clean = require('gulp-clean'),
  cleanCSS = require('gulp-clean-css'),
  sass = require('gulp-sass'),
  pump = require('pump'),
  nop = require('gulp-nop'),
  mmq = require('gulp-merge-media-queries'),
  babelenv = require('babel-preset-env'),
  fileinclude = require('gulp-file-include'),
  merge = require('merge-stream'),
  htmlbeautify = require('gulp-html-beautify'),
  sassGlob = require('gulp-sass-glob');

sass.compiler = require('node-sass');

var isBuild = true;

var paths = {
  sassFile: ['../css/scss/app.scss', '!..scss/**/_*.[scss|sass'],
  sassSrc: "../css/scss/**/*.scss",
  mediaSrc: ['../media/img/**/*.{gif,jpg,png,svg}'],
  docSrc:['../media/documents/**/*.{pdf,word,xlxs}'],
  videoSrc:['../media/video/**/*.{mp4,webp,mov}'],
  fontsSrc: ['../fonts/**/*.{woff,woff2,otf,ttf}'],
  jsSrc: "../js/**/*.js",
  jsFiles: [
    './node_modules/jquery/dist/jquery.min.js',
    './node_modules/popper.js/dist/umd/popper.min.js',
    './node_modules/bootstrap/dist/js/bootstrap.min.js',
    '../js/core/**/*.js',
    '../js/app.js'
  ],
  pages: [
    {
      name: 'css',
      files: ["../css/pages/**/*.css"],
    },
    {
      name: 'js',
      files: ["../js/pages/**/*.js"],
    },
  ],
  plugins: [
    // {
    //     name: 'fancybox',
    //     bundle: false,
    //     files: {
    //         css: [
    //           "./node_modules/@fancyapps/fancybox/dist/jquery.fancybox.css",
    //         ],
    //         js: [
    //           "./node_modules/@fancyapps/fancybox/dist/jquery.fancybox.js",
    //         ]
    //     },
    // },
    // {
    //     name: 'dropzone',
    //     bundle: false,
    //     files: {
    //         css: [
    //           "./node_modules/dropzone/dist/min/dropzone.min.css",
    //         ],
    //         js: [
    //           "./node_modules/dropzone/dist/min/dropzone.min.js",
    //         ]
    //     },
    // },
  ],
  htmlSrc:['../html/**/*.html'],
  htmlPages:['../html/pages/**/*.html'],
  dist: "../../dist",
  distMedia: "../../dist/media/img",
  distVideo:"../../dist/media/video",
  distDoc:"../../dist/media/documents",
  distFonts: "../../dist/fonts",
  distPages: "/pages",
  temp: "../../dist/temp",
}

gulp.task('copy-plugins', function (done) {
  paths.plugins.forEach(plugin => {
       if (plugin.bundle) {
         var tasks = [];
          if (plugin.files.css != undefined) {
                  tasks.push(gulp.src(plugin.files.css, {
                      allowEmpty: true,
                  })
                  .pipe(concat(plugin.name + '.css'))
                  .pipe(autoprefixer({
                      cascade: false
                  })).pipe(cleanCSS({
                      compatibility: 'ie8'
                  }))
                  .pipe(gulp.dest(paths.dist + '/css/plugins/' + plugin.name))) 
          }

          if (plugin.files.js != undefined) {
                  tasks.push(gulp.src(plugin.files.js, {
                      allowEmpty: true,
                  })
                  .pipe(babel({
                      presets: [babelenv]
                  }))
                  .pipe(uglify())
                  .pipe(concat(plugin.name + '.js'))
                  .pipe(gulp.dest(paths.dist + '/js/plugins/' + plugin.name))) 
          }
          return merge(tasks);

      } else {
        var tasks = [];

          if (plugin.files.css != undefined) {

              tasks.push(gulp.src(plugin.files.css, {
                  allowEmpty: true,
              })
              .pipe(gulp.dest(paths.dist + '/css/plugins/' + plugin.name))) 
            }

          if (plugin.files.js != undefined) {
              tasks.push(gulp.src(plugin.files.js, {
                  allowEmpty: true,
              })
              .pipe(gulp.dest(paths.dist + '/js/plugins/' + plugin.name))) 
            }
         

          return merge(tasks);

      }
})
 done();
})

gulp.task('copy-document', function (done) {
  return gulp.src(paths.docSrc)
    .pipe(gulp.dest(paths.distDoc));
  done();
});

gulp.task('copy-videos', function (done) {
  console.log(paths.videoSrc)
  return gulp.src(paths.videoSrc)
    .pipe(gulp.dest(paths.distVideo));
  done();
});

gulp.task('copy-images', function (done) {
  return gulp.src(paths.mediaSrc)
    .pipe(gulp.dest(paths.distMedia));
  done();
});

gulp.task('copy-fonts', function (done) {
  return gulp.src(paths.fontsSrc)
    .pipe(gulp.dest(paths.distFonts));
  done();
});

gulp.task('connect', function () {
  connect.server({
    root: ['wwwroot'],
    livereload: true
  })
})

gulp.task('sass', function (done) {
  return gulp.src(paths.sassFile)
    .pipe(sassGlob())
    .pipe(sass({
      outputStyle: 'compressed',
      includePaths: ['./node_modules']
    }).on('error', sass.logError))
    .pipe(autoprefixer({
      cascade: false
    }))
    .pipe(gulp.dest(paths.dist + '/css'));
  done();
});

gulp.task('scripts', function (done) {
  return gulp.src(paths.jsFiles)
  .pipe( isBuild ? uglify() : nop())
  .pipe(concat('app.js'))
  .pipe(gulp.dest(paths.dist + '/js'));
  done();
});

gulp.task('page-assets', function (done) {
  paths.pages.forEach((el) => {
    if (el.name == 'js') {
      return gulp.src(el.files)
        .pipe(plumber())
        .pipe( isBuild ? uglify() : nop())
        .pipe(gulp.dest(paths.dist + '/js/' + paths.distPages))
    } else {
      return gulp.src(el.files)
        .pipe(autoprefixer({
          cascade: false
        })).pipe(cleanCSS({ compatibility: 'ie8' }))
        .pipe(gulp.dest( paths.dist + '/css/' + paths.distPages));
    }
  })
  done();
});

gulp.task('watch', function () {
  isBuild = false;
  gulp.watch(paths.sassSrc, gulp.series('sass'));
  gulp.watch(paths.jsSrc, gulp.series('scripts'));
  gulp.watch(paths.mediaSrc, gulp.series('copy-images'));
  gulp.watch(paths.videoSrc, gulp.series('copy-videos'));
  gulp.watch(paths.htmlSrc,gulp.series('html'));
  paths.pages.map((page) => { return gulp.watch(page.files, gulp.series('page-assets')) });
})

gulp.task('clean-all', function (done) {
  return gulp.src(paths.dist, { read: false, allowEmpty: true })
    .pipe(clean({ force: true }));
  done();
});

gulp.task('html',function(done){
  return gulp.src(paths.htmlPages).pipe(fileinclude({
        prefix: '@@',
        basepath: '@file'
    }))
    .pipe(htmlbeautify({indentSize: 2}))
    .pipe(gulp.dest('../../'))
     done();
})


gulp.task('build', gulp.series('clean-all', 'sass','scripts', 'copy-plugins','copy-videos','copy-document','copy-images', 'copy-fonts','page-assets'));
gulp.task('default', gulp.series(function(done){
  isBuild = false;
  done();
},'build', 'watch'));


gulp.task('build-html', gulp.series('html','clean-all', 'sass','scripts', 'copy-plugins','copy-videos','copy-document','copy-images', 'copy-fonts','page-assets'));
gulp.task('watch-html', gulp.series(function(done){
  isBuild = false;
  done();
},'build', 'watch'));