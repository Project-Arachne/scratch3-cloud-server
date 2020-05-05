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
      var p1=cloud
      p1.on('set', function(name, value) { //when any variable is set,
        console.log("Project 1:", name, " changed to ", value, "."); //log it
        p2.set(name, value) //set it to project 2
      });
    });

    user.cloudSession(project2, function(err, cloud) { //start a cloud session (project 2)
      var p2=cloud
      p2.on('set', function(name, value) { //when any variable is set,
        console.log("Project 2:", name, " changed to ", value, "."); //log it
        p1.set(name, value) //set it to project 1
      });
    });
  });
});
//prompt.stop(); //This returns an error, probably because Scratch.UserSession.load also uses prompt and probably calls stop();

