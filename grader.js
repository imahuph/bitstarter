#!/usr/bin/env node
/*
Automatically grade fiels for the presence of specified HTML tags/attributes.
Uses commander.js and Cheerio.  Teaches command line application development and basic DOM parsing.

References:
 + cheerio
   - https://github.com/MatthewMueller/cheerio
   - https://encosia.com/cheerio-faster-windows-friendly-alternative-jsdom/
   - http://maxogden.com/scraping-with-node.html

 + commander.js
   - https://github.com/visionmedia/commander.js
   - http://tjholowaychuk.com/post/9103188408/commader-js-nodejs-command-line-interfaces-made-easy

 + JSON
   - http://en/wikipedia/cor/wiki/JSON
   - https://developer.mozilla.org/en-US/docs/JSON
   - https://developer.mozilla.org/en-US/docs/JSON#JSON_in_Firefox_2
*/

var fs = require('fs');
var program = require('commader');
var cheerio = require('cheerio');
var HTMLFILE_DEFAULT = "index.html";
var CHECKSFILE_DEFAULT = "checks.json";

var assertFileExists = function(infile) {
    var instr = infile.toString();
    if(!fs.existsSync(instr)) {
	console.log("%s does not exist. Exiting.", instr);
	process.exit(1); //http://nodejs.org/api/process.html#process_process_exit_code
	}
    return instr;
};
