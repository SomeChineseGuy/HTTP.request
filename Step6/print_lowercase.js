var getHTML = require('./http-functions');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/uppercase.html'
};

function printLowerCase (html) {
var lower = html.toLowerCase();
console.log(lower)
}

getHTML(requestOptions, printLowerCase);