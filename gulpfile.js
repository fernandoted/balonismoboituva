// responsive website project to balonismoboituva.com.br
// https://github.com/fernandoted/balonismoboituva
// author: Fernando Ted
//09-08-16


var gulp = require("gulp");
var sass = require("gulp-sass");
var notify = require("gulp-notify")

gulp.task("css-compile", function(){
	return gulp.src("./source/sass/*.scss")
	.pipe(sass({outputstyle: 'compressed'}))
	.on('error', notify.onError({title: 'Erro ao compilar css', message: '<%= error.message %>'}))
	.pipe(gulp.dest('./dist/css'));
});

gulp.task("move-fonts", function(){
	return gulp.src("./source/components/font-awesome/fonts/**")
	.pipe(gulp.dest("./dist/fonts"));
});

gulp.task("build-js", function(){
	return gulp.src([
		'./source/components/jquery/dist/jquery.js',
		'./source/components/bootstrap/dist/js/bootstrap.js',
		'./source/components/jquery.mobile.custom/jquery.mobile.custom.js',
		'./source/components/picturefill/dist/picturefill.js'
	])
	.pipe(gulp.dest("./dist/js"));
});

gulp.task("move-js", function(){
	return gulp.src("./source/js/*.js")
	.pipe(gulp.dest("dist/js"));
});

gulp.task("listen-files", function(){
	gulp.watch("./source/sass/*.scss", ['css-compile']);
	gulp.watch("./source/js/*.js", ['move-js']);
});

gulp.task("default", ["build-js","move-js","css-compile","listen-files"]);