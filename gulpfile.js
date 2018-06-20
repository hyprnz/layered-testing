"use strict";
const gulp = require("gulp");
const mocha = require('gulp-mocha');
const cucumber = require('gulp-cucumber');
const ts = require("gulp-typescript");
const tsProject = ts.createProject("tsconfig.json");
const reporter = ts.reporter.defaultReporter(); //see reporters https://github.com/ivogabe/gulp-typescript
const del = require('del');
const spawn = require('child_process').spawn;
const addsrc = require('gulp-add-src');
const tslint = require("gulp-tslint");

gulp.task('clean', function () {
    return del(['dist']);
});

gulp.task('tslint', function () {
    return gulp
        .src(['src/**/**.ts', 'typings/index.d.ts'])
        .pipe(tslint({formatter: "prose"}))
        .pipe(tslint.report({emitError: false, summarizeFailureOutput: true}))
});

gulp.task("compile", ["clean"], function () {
    return gulp
        .src(['src/**/**.ts', 'typings/index.d.ts', '!node_modules/**'])
        .pipe(tsProject(reporter))
        .pipe(addsrc('src/**/**.json')) // ts only processes .ts files
        .pipe(addsrc('src/**/**.data.txt')) // add data load files
        .pipe(addsrc('src/**/**.feature')) // add cucumber files
        .pipe(gulp.dest("dist"));
});

const dir = {
    dist: "dist",
};

const testTypes = {
    micro: "micro",
    integration: "integration",
    component: "component",
    system: "sys",
    deploy: "deploy",
    data: "data"
};

function testWithMocha(dir, testType, options) {
    process.chdir(dir);
    process.env = options.env;
    return gulp
        .src(['**/*.' + testType + '.js'])
        .pipe(mocha({
            ui: "bdd",
            reporter: "dot"
        }))
        .once('end', function () {
            process.exit();
        });
}

// http://www.hacksparrow.com/difference-between-spawn-and-exec-of-node-js-child_process.html
// http://stackoverflow.com/questions/20825157/using-spawn-function-with-node-env-production
function spawnecute(dir, command, args, options) {
    process.chdir(dir);
    let child = spawn(command, args, options);
    child.stdout.on('data',
        function (data) {
            console.log("" + data);
        }
    );
    child.stderr.on('data',
        function (data) {
            console.log("ERROR: " + data);
        }
    );
}

gulp.task('server-run', ["compile"], function (cb) {
    spawnecute(dir.animalGroupService, 'node', ['runAnimalGroup.js'], {env: makeAnimalGroupEnv("local")});
});


// GENERAL TESTS

gulp.task('micro-tests', ['compile'], function () {
    return testWithMocha(dir.dist, testTypes.micro, {env: []});
});

gulp.task('integration-tests', ['compile'], function () {
    return testWithMocha(dir.animalGroupService, testTypes.integration, {env: []});
});

gulp.task('system-tests', ['compile'], function () {
    process.chdir(dir.dist);
    return gulp.src('*features/*').pipe(cucumber({
        'steps': '*features/matingStartDate/steps/*.js',
        'support': '*features/matingStartDate/support/*.js',
        'tags': '@current'
    }));
});
