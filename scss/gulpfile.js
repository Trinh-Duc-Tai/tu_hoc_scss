const {src, dest, watch, parallel} = require('gulp');
const sass = require('gulp-sass');
const browserSync = require('browser-sync');

// task convert scss to css
function scss () {
    src('./src/scss/main.scss')
    .pipe(sass())
    .pipe(dest('./src/css'))
}

// task run server
function run () {
    browserSync.init({
        server: './src'
    })// create server with folder src

    watch('./src/index.html').on('change', browserSync.reload)// it will reload when index.html is modify
    watch('./src/css/main.css').on('change', browserSync.reload)// it will reload when index.html is modified
    watch('./src/scss/**/*.scss').on('change', scss)// It converts scss into css when modifying scss file
}

exports.default = parallel(scss, run)
