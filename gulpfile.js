"use strict";

var gulp = require('gulp');
var browserify = require('browserify'); // Bundles the JS
var reactify = require('reactify'); // Transforms React JSX to JS
var source = require('vinyl-source-stream'); // Use Conventional text streams with gulp
var concat = require('gulp-concat');
var lint = require('gulp-eslint'); // Lint JS Files, including JSX
var path = require('path');
var less = require('gulp-less');
var streamify = require('gulp-streamify');
var uglify = require('gulp-uglify');

var config = {
    paths: {
        html: './views/*.html',
        bin: './bin',
        images: './views/images/*.*',
        video: './views/video/*.*',
        appJs: [
            './src/js/components/app.jsx'
        ],
        js: [
            './src/js/**/*.js'
        ],
        jsx: [
            './src/js/**/*.jsx'
        ],
        less: [
            './src/less/**/*.less'
        ]
    }
};

// Move Html to Dist
gulp.task('html', function () {
    gulp.src(config.paths.html)
        .pipe(gulp.dest(config.paths.bin));
});

gulp.task('images', function() {
    gulp.src(config.paths.images)
        .pipe(gulp.dest(config.paths.bin + '/images'));
});

gulp.task('video', function() {
    gulp.src(config.paths.video)
        .pipe(gulp.dest(config.paths.bin + '/video'));
});

// Transpile JSX to JS and move to Dist
gulp.task('js', function () {
    browserify(config.paths.appJs)
        .transform(reactify)
        .bundle()
        .on('error', console.error.bind(console))
        .pipe(source('bundle.js'))
        .pipe(gulp.dest(config.paths.bin + '/scripts'));
});

// Transpile JSX to JS & Minify. Move to Dist
gulp.task('jsmin', function () {
    browserify(config.paths.appJs)
        .transform(reactify)
        .bundle()
        .on('error', console.error.bind(console))
        .pipe(source('bundle.min.js'))
        .pipe(streamify(uglify()))
        .pipe(gulp.dest(config.paths.bin + '/scripts'));
});


// Compile Less Files to a bundled Css File
gulp.task('less', function() {
	return gulp.src(config.paths.less)
		.pipe(less({
			paths: [ path.join(__dirname, 'less', 'includes') ]
		}))
		.pipe(concat('site.css'))
		.pipe(gulp.dest(config.paths.bin + '/css'));
});

// Compile Less files whenever a css file is changed
gulp.task('watchcss', function() {
	gulp.watch(config.paths.less, ['less']);
});

// Watch Files
gulp.task('watch', function () {
    gulp.watch(config.paths.html, ['html']);
});

// LINT JS
gulp.task('lintjs', function () {
    return gulp.src(config.paths.js)
        .pipe(lint())
        .pipe(lint.format())
        .pipe(lint.failAfterError());
});

gulp.task('lintjsx', function () {
    return gulp.src(config.paths.jsx)
        .pipe(lint())
        .pipe(lint.format())
        .pipe(lint.failAfterError());
});

gulp.task('watchjsx', function () {
    gulp.watch(config.paths.jsx, ['js', 'jsmin', 'lintjsx']);
});

gulp.task('watchjs', function() {
    gulp.watch(config.paths.js, ['js', 'jsmin', 'lintjs']);
});

// Default
gulp.task('default', ['html', 'images', 'video', 'js', 'jsmin', 'less', 'lintjs', 'lintjsx', 'watch', 'watchjs', 'watchjsx', 'watchcss']);