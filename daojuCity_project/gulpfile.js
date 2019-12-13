const gulp = require("gulp");

//html
gulp.task("copy-html",function(){
    return gulp.src("*.html")
    .pipe(gulp.dest("dist"))
    .pipe(connect.reload());
})

//js,第三方框架不能压缩与合并
gulp.task("scripts",function(){
    return gulp.src(["*.js","!gulpfile.js"])
    .pipe(gulp.dest("dist/js"))
    .pipe(connect.reload());
})

//处理css
const sass = require("gulp-sass");
gulp.task("sass",function(){
    gulp.src("stylesheet/*.scss")
    .pipe(sass())
    .pipe(gulp.dest("dist/css"))
    .pipe(connect.reload());
})

//数据源
gulp.task("data",function(){
    gulp.src(["*.json","!package.json"])
    .pipe(gulp.dest("dist/data"))
    .pipe(connect.reload());
})

//图片
gulp.task("images",function(){
    gulp.src("*.{jpg,png}")
    .pipe(gulp.dest("dist/images"))
    .pipe(connect.reload());
})

//一次性执行
gulp.task("build",["copy-html","scripts","sass","data","images"],function(){
    console.log("项目建立成功");
})

//监听
gulp.task("watch",function(){
    gulp.watch("*.html",["copy-html"]);
    gulp.watch(["*.js","!gulpfile.js"],["scripts"]);
    gulp.watch("stylesheet/*.scss",["sass"]);
    gulp.watch(["*.json","!package.json"],["data"]);
    gulp.watch("*.{jpg,png}",["images"]);
})

//启动一个临时服务器 cnpm i gulp-connect -D
const connect = require("gulp-connect");
gulp.task("server",function(){
    connect.server({
        root:"dist",
        port:8888,
        livereload:true
    })
})

//同时开启监听与临时服务器
gulp.task("default",["watch","server"]);