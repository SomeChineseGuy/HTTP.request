var https = require('https');


function getAndPrintHTML (options) {

  var space = [];
  // var space = "";



  https.get(options, function (response) {

    // set encoding of received data to UTF-8
    response.setEncoding('utf8');

    // the callback is invoked when a `data` chunk is received
    response.on('data', function (data) {
      // console.log(data.length);

      space.push(data);

      // space = space + data;
      // console.log('type of data', typeof data)

      // for (var i = 0; i < data.length; i++) {
      //   space.push(data[i]);
      // }

    });

    // the callback is invoked when all of the data has been received
    // (the `end` of the stream)
    response.on('end', function() {
      console.log(space.join(""));
    });
  });
}

  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step3.html'
  };

  var requestOptions1 = {
    host: 'sytantris.github.io',
    path: '/http-examples/step2.html'
  };

getAndPrintHTML(requestOptions1);