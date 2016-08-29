// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className) {

  //declare the result to be returned as an array
  var result = [];

  //the function to be called recursively, takes a node, checks it for className
  //then if it has children, call itself on the children
  var getNodes = function(node){

  	//makes sure there is a node
    if(node.classList == undefined || node == undefined) {
    	return;
    }
    //if the node has the class, add to result
    if(node.classList.contains(className)){
   		result.push(node);
    }
    //if this node has child nodes, do the same thing for all its children
    if(node.childNodes.length > 0){
    	for (var i = 0; i < node.childNodes.length; i++){
    		getNodes(node.childNodes[i]);
    	}
    }   
  }

  //call the recursion on document.body
  getNodes(document.body);

  return result;

};