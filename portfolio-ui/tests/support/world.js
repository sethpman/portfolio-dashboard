'use strict';

var webdriverjs = require('webdriverjs');

var World = function World(callback) {
  
  var client = webdriverjs.remote({
    desiredCapabilities: {
      browserName: 'chrome'
    },
    logLevel: 'silent'
  });
  
  client.init();
  
  var world = {
    client: client,
    tmpResult: null
  };

  callback(world);
};

exports.World = World;