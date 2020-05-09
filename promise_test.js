var Scratch = require('scratch-api');
var decoder = require('./decode.js'); //TODO: implement this
const prompt = require('prompt');

//Functions

function connect(id, user) { //TODO: allow option to not listen to changes in the variables
  user.cloudSession(id, function(err, cloud) { //start a cloud session
    var session=cloud;
    listen_for_change(session);
    return session; //return the session
  });
}

function listen_for_change(session) {
  session.on('set', function(name, value) { //when any variable is set,
    on_change(name,value,session);
  });
}

function on_change(name,value,session) {
  console.log("Project", session.projectID, "-", name, " changed to ", value, "."); //log it
  session.set(name, 0); //do something
  console.log("Set", name, "to 0.")
}


//TODO: Implement this later to decode data
//var res= decoder.test("Hello World");
//console.log(res);


prompt.message = "Please enter the project id of the ";
prompt.delimiter = "";
prompt.start();

prompt.get(['dns'], function (err, result) {
  if (err) {console.log("Error:", err);};
  var dns=result.dns;
  prompt.message="Please enter your ";
  
}).then(function(dns) {
  return Scratch.UserSession.load();
  
}).then(function(err,user) {
  if (err) {console.log("Error 1:", err);};
  console.log("Session loaded");
  console.log("Loading DNS");
  return user.getProject(dns);
  
}).then(function(err,project) {
  if (err) {console.log("Error 2:",err);};
  console.log("Before parse:", project);
  var parsed = JSON.parse(project.toString().trim());
  console.log("Project:", parsed);
  //last function doesn't have to return anything
  
});

//prompt.stop(); //This returns an error, probably because Scratch.UserSession.load also uses prompt and probably calls stop();
