var Scratch = require('scratch-api');
var decoder = require('./decode.js'); //TODO: implement this
const prompt = require('prompt');

//Functions
function connect(id, user) { //TODO: allow option to not listen to changes in the variables
  user.cloudSession(id, function(err, cloud) { //start a cloud session
    var session=cloud;
    session.on('set', function(name, value) { //when any variable is set,
      console.log("Project", session.projectID, "-", name, " changed to ", value, "."); //log it
      //session.set(name, value); //do something
    });
    return session; //return the session
  });
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
  Scratch.UserSession.load(function(err, user) { //get the username/password from file or prompt for it
    //var p1;
    //var p2;
    
    var dns_session=connect(dns,user); //connect to DNS project
    console.log("DNS session started:", dns_session);
  });
});
//prompt.stop(); //This returns an error, probably because Scratch.UserSession.load also uses prompt and probably calls stop();

