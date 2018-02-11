const gulp = require('gulp')
const typescriptFormatter = require('gulp-typescript-formatter')
const jsonlint = require("gulp-jsonlint")
const watch = require('gulp-watch')


gulp.task('beautify', function() {
    watch('src/**/*.ts')
        .pipe(typescriptFormatter({
            // see RootOptions interface for available options: https://github.com/vvakame/typescript-formatter/blob/master/lib/cli.ts#L25-L35
            baseDir: '.',
            tslint: true, // use tslint.json file?
            tsfmt: true, // use tsfmt.json file? Overrides settings in tslint.json (at least indentSize)
            editorconfig: true // use .editorconfig file? Overrides tsfmt settings (at least indentSize)
        }))
        .pipe(gulp.dest('src'))

    watch('src/**/*.json')
        .pipe(jsonlint())
        .pipe(jsonlint.reporter());
})
