"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var yargs_1 = require("yargs");
function main() {
    yargs_1.default
        .scriptName("pirate-parser")
        .usage('$0 <cmd> [args]')
        .command('hello [name]', 'welcome ter yargs!', function (yargs) {
        yargs.positional('name', {
            type: 'string',
            default: 'Cambi',
            describe: 'the name to say hello to'
        });
    }, function (argv) {
        console.log('hello', argv.name, 'welcome to yargs!');
    })
        .help()
        .argv;
}
