var Scratch = require('scratch-api');

Scratch.UserSession.load(function(err, user) {
  user.cloudSession(<project>, function(err, cloud) {
    cloud.on('set', function(name, value) {
      console.log(name, value);
    });
  });
});
