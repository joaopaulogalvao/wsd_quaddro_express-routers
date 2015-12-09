'use strict';

var gulp = require('gulp');

gulp.task('default', [
	// body...
	'concatAndMinify'
]);

gulp.task('concatAndMinify', function () {
	// body...
	var scripts = [

		'./app.js',
		'./config.js'

	];

	gulp
		.src(scripts) //src lê arquivos
		.pipe(concat('concat.js'))
		.pipe(gulp.dest('./meuTeste')); // copia os arquivos

});