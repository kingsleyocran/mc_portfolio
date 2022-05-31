const gulp = require("gulp");
const autoprefixer = require("gulp-autoprefixer");

gulp.task("build", () =>
  gulp.src("css/style.css")
  .pipe(autoprefixer('last 5 versions', 'safari 5', 'ie6', 'ie7', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4'))
  .pipe(gulp.dest("css/build"))
);

gulp.task("watch", function () {
  gulp.watch("css/style.css", gulp.series("build"));
});
