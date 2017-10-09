var gulp=require('gulp');
var concat=require('gulp-concat');
var uglify=require('gulp-uglify');
gulp.task('webTask',function(){
	gulp.src(['script1.js','script2.js'])
		.pipe(concat('script.js'))
		.pipe(uglify())
		.pipe(gulp.dest('./dest'));
});
gulp.task('default',['webTask']);
