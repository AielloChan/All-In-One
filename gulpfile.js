var gulp = require('gulp'),
    inline = require('gulp-inline'),
    uglify = require('gulp-uglify'),
    cleanCSS = require('gulp-clean-css');


gulp.task('default', function () {

    gulp.src('src/index.html')
        .pipe(inline({
            base: './',
            js: uglify,
            css: [cleanCSS],
            disabledTypes: ['svg'],
            ignore: ['./css/do-not-inline-me.css']
        }))
        .pipe(gulp.dest('dist/'));
});