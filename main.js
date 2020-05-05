var Scratch = require('scratch-api');
const prompt = require('prompt');

prompt.message = "What is the id number of ";
prompt.delimiter = "";

prompt.start();

prompt.get(['project1', 'project2'], function (err, result) {
  if (err) {console.log("Error:", err);}
  var project1= result.project1;
  var project2= result.project2;
  prompt.message="Please enter your ";
  Scratch.UserSession.load(function(err, user) { //get the username/password from file or prompt for it
  
    user.cloudSession(project1, function(err, cloud) { //start a cloud session
      cloud.on('set', function(name, value) { //when any variable is set,
        console.log("Project 1:", name, " changed to ", value, "."); //log it
        cloud.set(name, 0) //set it to itself +1
      });
    });

    user.cloudSession(project2, function(err, cloud) { //start a cloud session (project 2)
      cloud.on('set', function(name, value) { //when any variable is set,
        console.log("Project 2:", name, " changed to ", value, "."); //log it
        cloud.set(name, 0) //set it to itself +1
      });
    });
  });
});
//prompt.stop(); //This returns an error, probably because Scratch.UserSession.load also uses prompt and probably calls stop();

