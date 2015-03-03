var gulp = require('gulp');

var imagemin = require('gulp-imagemin'),
	// smushit = require('gulp-smushit'),
	pngquant = require('imagemin-pngquant');


gulp.task('imagemin', function () {
	return gulp.src('images/*')
		.pipe(imagemin({
			progressive: true,
			use: [pngquant()]
		}))
		.pipe(gulp.dest('img'));
});
