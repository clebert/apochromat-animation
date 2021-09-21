// @ts-check

const {print} = require('@apochromat/print');
const {Lens} = require('apochromat');
const {AnimationLens} = require('./lib/cjs');
const greeting = new Lens();
const spinner = new AnimationLens();

print(greeting);
greeting.render`Hello, World! ${spinner}`;
spinner.startAnimation(['⠋', '⠙', '⠹', '⠸', '⠼', '⠴', '⠦', '⠧', '⠇', '⠏'], 80);
setTimeout(() => greeting.render`Hello, World!`, 2000);
