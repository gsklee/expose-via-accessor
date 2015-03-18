import Gulp from 'gulp';
import $ from 'gulp-load-plugins';

$ = $();

Gulp.task('build:scripts',
  () => Gulp.src('expose-via-accessor.babel.js')
            .pipe($.rename('expose-via-accessor.js'))
            .pipe($.babel({
              loose: 'all',
              experimental: true
            }))
            .pipe(Gulp.dest('.'))
);
