// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className) {

  // your code here
  var result = [];

  var getNodes = function(name, node){
    if(node.classList == undefined || node == undefined) {
    	return;
    }
    if(node.classList.contains(name)){
   		result.push(node);
    }
    if(node.childNodes.length > 0){
    	for (var i = 0; i < node.childNodes.length; i++){
    		getNodes(name, node.childNodes[i]);
    	}
    }
    
  }

  getNodes(className, document.body);
  return result;

};