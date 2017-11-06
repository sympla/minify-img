const gulp = require('gulp');
const imagemin = require('gulp-imagemin');
const jpegtran = require('imagemin-jpegtran');
const optipng = require('imagemin-optipng');
const gifsicle = require('imagemin-gifsicle');
const svgo = require('imagemin-svgo');


gulp.task('default', () =>
	gulp.src('./images/*')
	.pipe(imagemin([
		imagemin.gifsicle({interlaced: true}),
		imagemin.jpegtran({progressive: true}),
		imagemin.optipng({optimizationLevel: 5}),
		imagemin.svgo({
			plugins: [
			{removeViewBox: true},
			{cleanupIDs: false}
			]
		})
		],
		{
			verbose: true
		}
		))
	.pipe(gulp.dest('./dist'))
	);