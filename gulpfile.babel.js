import gulp from 'gulp';
import copy from 'gulp-copy';
import webpack from 'webpack-stream';
import webserver from 'gulp-webserver';
import webpackConfig from './webpack.config.babel';

const path = {
  dist: 'dist',
};

gulp.task('build', () => gulp
  .src(webpackConfig.entry.application)
  .pipe(webpack({
    ...webpackConfig,
    watch: true,
  }))
  .pipe(gulp.dest('dist/')));

gulp.task('copy', () => gulp
  .src('./test/fixture/**/*')
  .pipe(copy('dist/data/', {
    prefix: 2,
  })));

gulp.task('server', () => gulp.src(path.dist)
  .pipe(webserver({
    directoryListing: {
      enable: true,
      path: path.dist,
    },
    host: '0.0.0.0',
    port: 9001,
  })));

gulp.task('start', ['build', 'server', 'copy']);

gulp.task('default', ['build']);
