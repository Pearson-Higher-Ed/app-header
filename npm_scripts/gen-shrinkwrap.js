'use strict';

const exec = require('./exec');
const fs = require("fs");

exec('npm shrinkwrap');

let objShrinkwrap = require("../npm-shrinkwrap.json");

delete objShrinkwrap.dependencies.phantomjs;

if (!objShrinkwrap.dependencies.phantomjs) {
  console.log('Deleted phantomjs from shrinkwrap.');
}

delete objShrinkwrap.dependencies.fsevents;

if (!objShrinkwrap.dependencies.fsevents) {
  console.log('Deleted fsevents from shrinkwrap.');
}

exec('rm npm-shrinkwrap.json');

fs.writeFile('npm-shrinkwrap.json', JSON.stringify(objShrinkwrap) , 'utf-8');
