const {src, dest, series} = require('gulp');
const uglify = require('gulp-uglify');
const concat = require('gulp-concat');
const inlineSource = require('gulp-inline-source-html');
const processHtml = require('gulp-processhtml');
// const rename = require('gulp-rename');

function javascript() {
    return src('src/js/*.js')
        .pipe(concat('script.min.js'))
        .pipe(uglify())
        .pipe(dest('assets/js/'))
}

function html() {
    return src('src/index.html')
        .pipe(processHtml({environment: 'production'}))
        .pipe(inlineSource())
        // .pipe(rename('index.html'))
        .pipe(dest('./'))
}

exports.default = series(html, javascript)
