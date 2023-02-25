# deep-equals-implementation-js
Common interview questions asked for a FE role. This readme contains sequence/algorithm to follow when implementing `deepEquals` of two values

## Steps
### Check for primitives(Numbers, Strings, NaN too)
- Check if either of the value is not an object using `typeof !=="object"` or the either of the value is not null. 
- If true, then use `Object.is` to compare both the values.
- `Object.is` covers edge cases like comparing `NaN`, null, undefined, +1 and -1. Using Object.is helps in reducing checks for null equality, type checks and much more. More details can be found [here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is).
### Check for Arrays
- Check if both the parameters are arrays using `Array.isArray`.
- If both are arrays, check for length.
- If both are of same length, loop over the values of any of the two and recursively call the same function with value at the current index
- If the recursive call returns false, then return true. Else move to next step.
### Check for Edge case(if any one is an array)
- Check if any of the parameter is an array and simply return false. This was not checked in the previous step.
### Big check for objects
- Check if both of same number of keys. If not same return false.
- Loop over the keys in one parameter and check if its present in second parameter.
- If key presence passes, recursively call the same function with the value assigned to the key

If all passes then simply return true.

