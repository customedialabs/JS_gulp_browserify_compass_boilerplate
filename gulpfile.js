var gulp = require('gulp'),
    gutil = require('gulp-util'),
    minifyCss = require('gulp-minify-css'),
    rename = require('gulp-rename'),
    browserify = require('browserify'),
    source = require('vinyl-source-stream'),
    uglify = require('gulp-uglify'),
    buffer = require('vinyl-buffer'),
    sourcemaps = require('gulp-sourcemaps'),
    compass = require('gulp-compass'),
    header = require('gulp-header'),
    htmlprocessor = require('gulp-htmlprocessor'),
    pkg = require('./package.json');

var banner = [
    '/**',
    ' * <%= pkg.name %>',
    ' * @description <%= pkg.description %>',
    ' * @version v<%= pkg.version %>',
    ' * @author <%= pkg.author %>',
    ' * @homepage <%= pkg.homepage %>',
    ' * @repository <%= pkg.repository.url %>',
    ' */',
    ''
].join('\n');

/**
 * ---------------------------------
 * TASKS FOR DEVELOPMENT ENVIRONMENT
 * ---------------------------------
 */
gulp.task('bundle_js', function () {
    return browserify('./src/js/main.js', {
        debug: true,
        paths: ['./', './node_modules', './src/js']
    }).
    bundle().
    pipe(source('app.js')).
    pipe(buffer()).
    pipe(sourcemaps.init({
        loadMaps: true
    })).
    on('error', gutil.log).
    pipe(header(banner, {
        pkg: pkg
    })).
    pipe(sourcemaps.write('./')).
    pipe(gulp.dest('./dist/js'));
});

gulp.task('compile_styles', function () {
    gulp.
    src('./src/scss/app.scss').
    pipe(compass({
        config_file: './config.rb',
        css: './dist/css',
        sass: './src/scss',
        sourcemap: true,
        style: 'expanded',
        comments: 'normal'
    })).
    pipe(gulp.dest('./dist/css'));
});

gulp.task('build:dev', ['bundle_js', 'compile_styles']);

gulp.task('watch', function () {
    gulp.watch(['./src/**/*.js', './src/**/*.scss'], ['build:dev']);
});

/**
 * --------------------------------
 * TASKS FOR PRODUCTION ENVIRONMENT
 * --------------------------------
 */
gulp.task('bundle_uglify_js', function () {
    return browserify('./src/js/main.js', {
        debug: true,
        paths: ['./', './node_modules', './src/js']
    }).
    bundle().
    pipe(source('app.js')).
    pipe(buffer()).
    pipe(uglify()).
    pipe(rename({
        extname: '.min.js'
    })).
    pipe(header(banner, {
        pkg: pkg
    })).
    pipe(gulp.dest('./dist/js'));
});

gulp.task('compile_minify_styles', function () {
    gulp.
    src('./src/scss/app.scss').
    pipe(compass({
        config_file: './config.rb',
        css: './dist/css',
        sass: './src/scss',
        sourcemap: true,
        style: 'expanded',
        comments: 'normal'
    })).
    pipe(minifyCss({
        keepSpecialComments: 0
    })).
    pipe(rename({
        extname: '.min.css'
    })).
    pipe(gulp.dest('./dist/css'));
});

gulp.task('processhtml', function () {
    return gulp.src('./index.dev.html').
        pipe(htmlprocessor()).
        pipe(rename('index.html')).
        pipe(gulp.dest('./'));
});

gulp.task('build:live', ['bundle_uglify_js', 'compile_minify_styles', 'processhtml']);
gulp.task('build:all', ['build:dev', 'build:live']);
