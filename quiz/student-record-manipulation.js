/*
Returns a value depending on operation
  - if operation is delete then it returns a new object literal with the same properties and their values as obj has except that if obj has property prop then this property must not be in the returned object literal
  - if operation is edit then it returns a new object literal with the same properties and their values as obj has except that if obj hasproperty prop then this propertiy value must be updated to the newValue parameter

Input :
name John
lastName Bliss
city Florida
edit city Seattle

Output:
city Seattle
lastName Bliss
name John

Input :
name John
lastName Bliss
city Florida
delete city

Output:
lastName Bliss
name John
*/

{
  function manipulateRecord(obj, operation, prop, newValue) {
    if (operation === "delete") {
      if (obj && obj.hasOwnProperty(prop)) {
        delete obj[prop];
      }
    } else if (operation === "edit") {
      if (obj && obj.hasOwnProperty(prop)) {
        obj[prop] = newValue;
        return obj;
      } else {
        return obj;
      }
    }
  }
}
