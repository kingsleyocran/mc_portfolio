const gulp = require("gulp");
const autoprefixer = require("gulp-autoprefixer");

gulp.task("build", () =>
  gulp.src("css/style.css").pipe(autoprefixer()).pipe(gulp.dest("css/build"))
);

gulp.task("watch", function () {
  gulp.watch("css/style.css", gulp.series("build"));
});
