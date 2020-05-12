var Scratch = require('scratch-api');
var decoder = require('./decode.js'); //TODO: implement this
const prompt = require('prompt');
const promisify = require('util').promisify;
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

prompt_get=util.promisify(prompt.get);

prompt.message = "Please enter the project id of the ";
prompt.delimiter = "";
prompt.start();
var r1 = await prompt_get(['dns']);
//prompt.get(['dns'], function (err, result) {
//  if (err) {console.log("Error:", err);};
//  var dns=result.dns;
//  prompt.message="Please enter your ";
concole.log(r1,"and",r2);
Scratch.UserSession.load(function(err,user) {
  if (err) {console.log("Error 1:", err);};
  console.log("Session loaded");
});

console.log("Loading DNS");
await user.getProject(id, function(err,project) {
  if (err) {console.log("Error 2:",err);};
  console.log("Before parse:", project);
  var parsed = JSON.parse(project.toString().trim());
  console.log("Project:", parsed);
  //last function doesn't have to return anything
});

//prompt.stop(); //This returns an error, probably because Scratch.UserSession.load also uses prompt and probably calls stop();
