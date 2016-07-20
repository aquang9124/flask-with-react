var gulp = require('gulp');

// import plugins
var sass = require('gulp-sass');
var webpack = require('webpack-stream');
var webpackConfig = require('./webpack.config.js');

// set paths to src files and output directories
var paths = {
	scss: './app/static/sass/*.scss',
	cssOutput: './app/static/css',
	entryPoint: './src/index.js',
	jsx: './src/components/*.jsx'
};

// set up sass compilation task
gulp.task('sass', function() {
	return gulp.src(paths.scss)
		.pipe(sass())
		.pipe(gulp.dest(paths.cssOutput));
});

// set up webpack task
gulp.task('webpack', function() {
	return gulp.src([paths.entryPoint, paths.jsx])
		.pipe(webpack(webpackConfig))
		.pipe(gulp.dest(webpackConfig.output.path));
});

gulp.task('watch', function() {
	gulp.watch(paths.scss, ['sass']);
	gulp.watch(paths.jsx, ['webpack']);
});

gulp.task('default', ['sass', 'webpack', 'watch']);