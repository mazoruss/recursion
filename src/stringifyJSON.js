var stringifyJSON = function(obj) {
  
  //creates a function to check if an item is not convertable to string
  var notGood = function(item) {
    return typeof item == 'function' || 
    	   typeof item == 'symbol' || 
    	   typeof item == 'undefined' ?
    	   true : false;
  }
  //if obj is "notGood" return undefined;
  if (notGood(obj)) {
    return undefined;
  }
  //if obj is number or booleans, return it as a string value
  if(typeof obj == "number" || typeof obj == "boolean") {
    return obj.toString();
  }
  //if obj is a string, add quotation 
  if(typeof obj == 'string') {
    return '"'+obj+'"';
  }
  //finally, if it's not a primitive value, it's either null, array, or object
  if (typeof obj == 'object') {
  	//if null, return 'null'
    if (obj === null) {
      return 'null';
    }
    //if it's an array, iterate through everything with .map to not screw with original
    //stringify everything inside, and replace anything "notGood" with 'null';
    //finally add [] around the whole thing
    else if(Array.isArray(obj)) {
      return '[' + obj.map(x => notGood(x) ? "null" : stringifyJSON(x)).join(',') + ']';
    }
    //lastly, if it's an object, iterate through the object stringifying both key and value
    //anything "notGood" is ignored
    //add all the stringified results into an array, join together with comma, and put {} around it
    else {
      var result = [];
      for (var x in obj) {
        if(!notGood(x) && !notGood(obj[x])) {
          result.push(stringifyJSON(x) + ':' + stringifyJSON(obj[x]));
        }
      }
      return '{' + result.join(',') + '}';
    }
  }
};