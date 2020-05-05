var Scratch = require('scratch-api');
const prompt = require('prompt');

prompt.message = "What is the id number of ";
prompt.delimiter = ">";

prompt.start();

prompt.get(['project1', 'project2'], function (err, result) {
  if (err) {console.log("Error:", err);}
  var project1= result.project1;
  var project2= result.project2;
  
  Scratch.UserSession.load(function(err, user) { //get the username/password from file or prompt for it
  
    user.cloudSession(project1, function(err, cloud) { //start a cloud session
      cloud.on('set', function(name, value) { //when any variable is set,
        console.log("Project 1:", name, value); //log it
        cloud.set(name, "Project 1:"+value) //set it to itself +1
      });
    });

    user.cloudSession(project2, function(err, cloud) { //start a cloud session (project 2)
      cloud.on('set', function(name, value) { //when any variable is set,
        console.log("project 2:", name, "Project 2:",value); //log it
        cloud.set(name, "Project 2:"+value+1) //set it to itself +1
      });
    });
  });
});
prompt.stop();

