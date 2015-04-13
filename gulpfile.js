'use strict';

var path = require('path'),
    gulp = require('gulp'),
    replace = require('gulp-replace'),
    less = require('gulp-less'),
    browserSync = require('browser-sync'),
    reload = browserSync.reload,
    $ = require('gulp-load-plugins')(),
    cssmin = require('gulp-minify-css'),
    webpack = require('gulp-webpack-build');

var config = require('./config.json');
var webpackConfig = require('./webpack.config.js');

var src = './',
    dest = 'build' + config.static + '/js',
    webpackOptions = {
        watchDelay: 200,
        isConfigFile: function(file) {
            return file && file.path.indexOf(webpack.config.CONFIG_FILENAME) >= 0;
        },
        isConfigObject: function(config) {
            return config && !config.ignore;
        },
        useMemoryFs: false
    };

gulp.task('webpack', function() {
    return gulp.src(src + webpack.config.CONFIG_FILENAME)
        .pipe(webpack.compile(webpackOptions))
        .pipe(webpack.format({
            version: false,
            timings: true
        }))
        .pipe(webpack.failAfter({
            errors: true,
            warnings: true
        }))
        .pipe(replace(/@@static/g, config.static))
        .pipe(gulp.dest('.'));
});

// Production build
gulp.task("build", ["less", "html", "img"]);

gulp.task("images", function(){
    gulp.src(['images/**/*.png', 'images/**/*.svg', 'images/**/*.jpg'])
    .pipe(gulp.dest('build' + config.static + '/images'));
});

gulp.task('default', ['webpack', 'less', 'html', 'images'], function(){
    browserSync({
        notify: false,
        server: './build'
    }); 

    gulp.watch('less/**/*.less', ['less', reload]);
    gulp.watch('js/**/*.js', ['webpack', reload]);
    gulp.watch('index.html', ['html', reload]);
});

gulp.task('jshint', function(){
    return gulp.src('js/**/*.js')
        .pipe(reload({stream: true, once: true}))
        .pipe($.jshint())
        .pipe($.if(!browserSync.active, $.jshint.reporter('fail')));
});

gulp.task('less', function(){
    return gulp.src('less/app.less')
        .pipe(less())
        .pipe(replace(/@@static/g, config.static))
        .pipe(cssmin())
        .pipe(gulp.dest('build' + config.static + '/css'));
});

gulp.task('html', function(){
   return gulp.src('index.html')
        .pipe(replace(/@@hash/g, Date.now()))
        .pipe(replace(/@@static/g, config.static))
        .pipe(gulp.dest('build'));
});
