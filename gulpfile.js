var gulp = require('gulp'),
    inline = require('gulp-inline'),
    uglify = require('gulp-uglify'),
    cleanCSS = require('gulp-clean-css');


gulp.task('default', function () {

    gulp.src('src/*.html')
        .pipe(inline({
            base: './',
            js: uglify,
            css: [cleanCSS],
            disabledTypes: [],
            ignore: []
        }))
        .pipe(gulp.dest('dist/'));
});