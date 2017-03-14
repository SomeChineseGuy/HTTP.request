module.exports = function getHTML(options, callback) {
  var space = [];
  var https = require('https');
  https.get(options, function (response) {
    response.setEncoding('utf8');
    response.on('data', function (data) {
      space.push(data);
    });
    response.on('end', function() {
      callback(space.join(""));
    });
  });
};

