var gulp = require('gulp');

var csscomb = require('gulp-csscomb');
var htmlhint = require('gulp-htmlhint');
var minifyCSS = require('gulp-minify-css');
var postcss = require('gulp-postcss');
var sass = require('gulp-sass');

gulp.task('default', function() {
    // place code for your default task here
});

gulp.task('HTMLlint', function(){
    return gulp.src(['*.html'])
    .pipe(htmlhint())
    .pipe(htmlhint.failReporter());
});

gulp.task('csscomb', function(){
    return gulp.src(['./sass/**/*.scss'])
    .pipe(csscomb())
    .pipe(gulp.dest('./sass'));
});

gulp.task('sass', function(){
    var processors = [
        require('autoprefixer')
    ];
    gulp.src('./sass/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(postcss(processors))
    .pipe(minifyCSS({
      keepBreaks: true
    }))
    .pipe(gulp.dest('./css'));
});

gulp.task('sass:watch', function(){
    gulp.watch('./sass/**/*.scss', ['sass']);
});
