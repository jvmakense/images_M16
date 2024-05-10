const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const uglify = require('gulp-uglify');
const imagemin = require('gulp-imagemin');

function compilaSass() {
    return gulp.src('./source/style/main.sass')
        .pipe(sass({
            outputStyle: 'compressed'
        }))
        .pipe(gulp.dest('./build/style'));
}

function comprimeimg() {
    return gulp.src('./source/images/*')
        .pipe(imagemin())
        .pipe(gulp.dest('build/images'));
}

function comprimeJS() {
    return gulp.src('./source/scripts/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('build/scripts'))
}


exports.sass = compilaSass;
exports.watch = function() {
    gulp.watch('./source/style/*sass', {ignoreInitial: false }, gulp.series(compilaSass));
}

exports.javascript = comprimeJS;
exports.images = comprimeimg;