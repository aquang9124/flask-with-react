var gulp = require('gulp');

// import plugins
var sass = require('gulp-sass');
var webpack = require('webpack-stream');
var webpackConfig = require('./webpack.config.js');

// set paths to src files and output directories
var paths = {
	scss: './app/static/sass/*.scss',
	cssOutput: './app/static/css',
	jsx: './src/components/*.jsx',
	dashedJsx: './src/components/*-*.jsx'
};

// set up sass compilation task
gulp.task('sass', function() {
	return gulp.src(paths.scss)
		.pipe(sass())
		.pipe(gulp.dest(paths.cssOutput));
});

// set up webpack task
gulp.task('webpack', function() {
	return gulp.src([webpackConfig.entry[0], paths.jsx, paths.dashedJsx])
		.pipe(webpack(webpackConfig))
		.pipe(gulp.dest(webpackConfig.output.path));
});

gulp.task('watch', function() {
	gulp.watch(paths.scss, ['sass']);
	gulp.watch([webpackConfig.entry[0], paths.jsx, paths.dashedJsx], ['webpack']);
});

gulp.task('default', ['sass', 'webpack', 'watch']);