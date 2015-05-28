var gulp       = require('gulp');
var less       = require('gulp-less');
var csso       = require('gulp-csso');
var plumber    = require('gulp-plumber');
var sizereport = require('gulp-sizereport');
var connect    = require('gulp-connect');
var rename     = require('gulp-rename');
var header     = require('gulp-header');
var pkg        = require('./package.json');
var pkgName    = pkg.name.toLowerCase();
var port       = 9000;

// project paths
var paths      = {
    css: 'docs/css',
    dist: 'dist'
};

// Header banner text
var banner     = [
    '/*!',
    ' *',
    ' * <%= pkg.name %> v<%= pkg.version %>',
    ' *',
    ' * @homepage <%= pkg.homepage %>',
    ' * @license <%= pkg.license %>',
    ' * @built <%= date %>',
    ' *',
    ' * Reflex is a flexbox grid which provides a way to take advantage of emerging',
    ' * flexbox support while providing a fall back to inline-block on older browsers',
    ' *',
    ' * Built by <%= pkg.author %>',
    ' * email: <%= pkg.email %>',
    ' * github: <%= pkg.github %>',
    ' *',
    ' * Structure and calculations are inspired by twitter bootstrap',
    ' *',
    ' */',
    '',
    ''
    ].join('\n');

// Make CSS from LESS
gulp.task('less', function () {
    return gulp.src('less/reflex.less')
        .pipe(plumber())
        .pipe(less({compress: false}))
        .pipe(rename(pkgName + '.css'))
        .pipe(gulp.dest(paths.css))
        .pipe(gulp.dest(paths.dist));
});

// compress CSS
gulp.task('compress-css', ['less', 'header'], function() {
    return gulp.src(paths.css + '/' + pkgName + '.css')
        .pipe(plumber())
        .pipe(csso())
        .pipe(rename(pkgName + '.min.css'))
        .pipe(gulp.dest(paths.css))
        .pipe(gulp.dest(paths.dist));
});


// Add header baner with name, version, author etc.
gulp.task('header', ['less'], function() {
    return gulp.src(paths.css + '/' + pkgName + '.css')
        .pipe(plumber())
        .pipe(header(banner, { pkg: pkg, date: Date() }))
        .pipe(gulp.dest(paths.css))
        .pipe(gulp.dest(paths.dist));
});

// Show file size after all tasks
gulp.task('sizereport', ['less', 'header', 'compress-css'], function () {
    return gulp.src(paths.dist + '/*')
        .pipe(sizereport({
            total: false,
            gzip: true
        }))
        .pipe(connect.reload());
});

// Watch task
gulp.task('watch', function () {

    gulp.watch(['less/**/*.less'], ['sizereport']);

});

// Start server for tests
gulp.task('connect', ['compress-css'], function() {
    connect.server({
        root: 'docs',
        port: port,
        livereload: true,
        middleware: function() {
            return [
                require('connect-gzip').gzip()
            ];
        }

    });
});

// Default Gulp task
gulp.task('default', ['less', 'header', 'compress-css', 'sizereport', 'connect', 'watch']);
