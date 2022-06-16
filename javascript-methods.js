/*----------------------------------------------------------
JavaScript Prototype: Method
Every object in JavaScript has a built-in property called "prototype." 
The prototype constructor is used to add new methods (functions) and properties to a JavaScript object. 
- If a method is constructed, then it will be available for the object. 
- If a property is constructed, then the object will be given the property and its value, as default.

In this Assignment, we use the prototype constructor to add new methods to the Array() object.
----------------------------------------------------------*/

// MAP //
Array.prototype.myMap = function(callbackFn) {
  
   //creating new array to store mapped values
   let new_arr = [];
   for (let i = 0; i < this.length; i++) {
      new_arr.push(callbackFn(this[i]));
   }
  return new_arr;
};

// FILTER //
Array.prototype.myFilter = function(callbackFn) {
  let new_array = [];
    for (let i = 0; i < this.length; i++){
        if (callbackFn(this[i])) { // if callback fn returns true
          new_array.push(this[i]);
        }
    }
  return new_array;
};

// SOME //
Array.prototype.mySome = function(callbackFn) {
  let temp = false;
    for (let i = 0; i < this.length; i++){
        if (callbackFn(this[i])) {
          temp = true;
        }
    }
    return temp;
};

// EVERY //
Array.prototype.myEvery = function(callbackFn) {
  let temp = true;
    for (let i = 0; i < this.length; i++){
        if (!callbackFn(this[i])) {
            temp = false;
        }
    }
    return temp;
};

// REDUCE //
Array.prototype.myReduce = function(callbackFn, InitialValue = 0) {

  let temp = 0;
  let initial = InitialValue;
  
  for (let i = 0; i < this.length; i++){
    initial  = callbackFn(initial, this[i]);

  }
  return initial;
};

// INCLUDES //
Array.prototype.myIncludes = function(searchElement) {
   for (let i = 0; i < this.length; i++){
      if (this[i] == searchElement){
        return true;
      }
    }
    return false;
};

// INDEXOF //
Array.prototype.myIndexOf = function(searchElement, fromIndex = 0){
  for (let i = fromIndex; i < this.length; i++){
      if (this[i] == searchElement){
        return i;      
      }
  }
  return -1;
};

// LASTINDEXOF //
Array.prototype.myLastIndexOf = function(searchElement, fromIndex = this.length -1) {
  for (let i = fromIndex; i >= 0; i--){
      if (this[i] == searchElement){
        return i;      
      }
  }
  return -1;
};

// KEYS //
Object.myKeys = function(object) {
  // Place your code here.
};

// VALUES //
Object.myValues = function(object) {
  // Place your code here.
};