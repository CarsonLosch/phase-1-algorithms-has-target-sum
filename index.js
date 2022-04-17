function hasTargetSum(array, target) {
  // Write your algorithm here
  // look through each # in array
  for(let i = 0; i < array.length; i++){
    // look through rest of array
    for(let j = i + 1; j < array.length; j++){
      // check if sum matches target value
      if ((array[i])+ (array[j]) === target) return true;
    }
  }
  return false;
}

/* 
  Write the Big O time complexity of your function here
O(n * n + 1 + 1)
O(n^2 + 2)
//drop constant
O(n^2)
*/

/* 
  Add your pseudocode here
  collection of an Array and a target value are inserted as arguments 
  [a,b,c,d,e] then we iterate through numbers adding a to b then c etc... and comparing sum to === the target value 
  if === target value return true
  else !== return false

*/

/*
  Add written explanation of your solution here
  write a function hasTargetsSum that recieves 2 Arg (array, target)
  should return true if a pair of numbers === the target value
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
