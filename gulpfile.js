const { src, dest, watch, series } = require("gulp");
const sass = require("gulp-sass")(require('sass'));

function buildStyles(){
    return src('library_sass/**/*.scss')
           .pipe(sass())
           .pipe(dest('css')) 
}

function watchTask(){
    watch(['library_sass/**/*.scss'],buildStyles)
}

exports.default = series(buildStyles,watchTask)