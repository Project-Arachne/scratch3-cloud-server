var Scratch = require('scratch-api');
//const prompt = require('prompt');
Scratch.UserSession.load(function(err, user) {
  user.getProject(id, function(err,project){
    console.log("Got data:", project);
  }
}
