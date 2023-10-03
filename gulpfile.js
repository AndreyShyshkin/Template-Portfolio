'use strict';

const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const { watch, series } = require("gulp");
const pagesScssLocation = "./assets/scss/pages/*.scss";
const scssLocation = "./assets/scss/**/*.scss";
const scssBuildLocation = "./assets/css";
function buildStyles() {
  return gulp.src(pagesScssLocation)
    .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(gulp.dest(scssBuildLocation));
};

exports.build = buildStyles;

exports.watch = function () {
    watch(scssLocation, buildStyles);
}