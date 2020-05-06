var methods;

methods.test = function(num) { //function named methods.test accepts variable num
  console.log("function called with arg ", num, "!");
  return "hi";
}


module.exports = methods; //export
