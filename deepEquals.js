function deepEqual(valueA, valueB) {
  
  // Check for type equality
  if(typeof valueA !== typeof valueB) return false;
  // Check for Primitives
  // Note: Object.is is handy for checking primitives and covers NaN
  if(typeof valueA !== 'object') {    
    return Object.is(valueA, valueB);
  }
 
  // Check for null equality
  if(valueA === null || valueB===null) return valueA === valueB

  // Check for both to be arrays
  if(Array.isArray(valueA) && Array.isArray(valueB)) {
    // check the length
    if(valueA.length !== valueB.length) {
      return false;
    }
    for(let i =0; i < valueA.length; i++) {
      if(!deepEqual(valueA[i], valueB[i])) {
        return false;
      }
    }
    return true;
  }

  // Edge case, If we still have any that is an array then false
  if(Array.isArray(valueA) || Array.isArray(valueB)) return false;
  
  // Check for equal objects
  const valueAKeys = Object.keys(valueA);
  const valueBKeys = Object.keys(valueB);
  // check if btoh objects have equal number of keys
  if(valueAKeys.length !== valueBKeys.length) {
    return false;
  }

  // Once they have equal numbers of keys
  for(let key of Object.keys(valueA)) {
    // check keys in object 1 are present in object 2
    //NOTE: Use object.hasOwn
    if(!Object.hasOwn(valueB, key)) {
      return false;
    }
    // do recursion and check both values are equal
    if(!deepEqual(valueA[key], valueB[key])) {
      return false;
    }
  }
  return true;
}
