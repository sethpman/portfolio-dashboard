'use strict';

var webdriverjs = require('webdriverjs');
var assert = require('assert');

function HomePage() {
  var client = webdriverjs.remote({
    desiredCapabilities: {
      browserName: 'chrome'
    },
    logLevel: 'silent'
  });
  
  client.init();
  
  
};

module.exports = HomePage;