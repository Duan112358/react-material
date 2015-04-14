'use strict';

var path = require('path'),
    gulp = require('gulp'),
    replace = require('gulp-replace'),
    less = require('gulp-less'),
    del = require('del'),
    browserSync = require('browser-sync'),
    reload = browserSync.reload,
    RevAll = require('gulp-rev-all'),
    runSequence = require('run-sequence'),
    cssmin = require('gulp-minify-css'),
    webpack = require('webpack'),
    webpackBuild = require('gulp-webpack-build');

var config = require('./config.json');
var webpackConfig = require('./webpack.config.js');

var src = './',
    dest = 'build' + config.static + '/js',
    webpackOptions = {
        watchDelay: 200,
        isConfigFile: function(file) {
            return file && file.path.indexOf(webpackBuild.config.CONFIG_FILENAME) >= 0;
        },
        isConfigObject: function(config) {
            return config && !config.ignore;
        },
        useMemoryFs: false
    };

gulp.task('webpack', function() {
    return gulp.src(src + webpackBuild.config.CONFIG_FILENAME)
        .pipe(webpackBuild.compile(webpackOptions))
        .pipe(webpackBuild.format({
            version: false,
            timings: true
        }))
        .pipe(webpackBuild.failAfter({
            errors: true,
            warnings: true
        }))
        .pipe(replace(/@@static/g, config.static))
        .pipe(gulp.dest('.'));
});

gulp.task('webpack:build', function(callback){
    var myConfig = Object.create(webpackConfig);
    myConfig.plugins = myConfig.plugins.concat(
        new webpack.DefinePlugin({
            'process.env': {
                "NODE_ENV": JSON.stringify('production')
            }
        }),
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.UglifyJsPlugin()
    );

    webpack(myConfig, function(err, stats){
        if(err){
            console.error('webpack:build', err);
        }
        callback();
    });
});

// Production build
gulp.task("build", ["clean", "images" ,"less", "html", "webpack:build"]);

gulp.task("release", ["clean"], function(){
    runSequence('webpack:build','images','less', 'html', 'rev');
});

gulp.task('clean', del.bind(null, ['.tmp', 'build/*'], {dot: true}));

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

gulp.task('rev', function(){
    var revAll = new RevAll({ 
        dontRenameFile: [/^\/favicon.ico$/g, /^\/index.html/g]
    });

  return gulp.src(['build/**'])
    .pipe(gulp.dest('build'))
    .pipe(revAll.revision())
    .pipe(gulp.dest('build'))
    .pipe(revAll.manifestFile())
    .pipe(gulp.dest('build'));
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
        .pipe(replace(/@@static/g, config.static))
        .pipe(gulp.dest('build'));
});
