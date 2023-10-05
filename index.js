function hasTargetSum(arr, target) {
  // Create an empty object to store seen numbers
  const seenNumbers = {};

  // Iterate through the array
  for (const num of arr) {
    // Calculate the complement needed to reach the target
    const complement = target - num;

    // If the complement is in the 'seenNumbers' object, a pair is found
    if (seenNumbers[complement]) {
      return true;
    }

    // Otherwise, mark the current number as seen in the 'seenNumbers' object
    seenNumbers[num] = true;
  }

  // If no pair is found, return false
  return false;
}

/* 
  Write the Big O time complexity of your function here

  The function iterates through the input array once using a for...of loop. This loop runs for each element in the array, resulting in 'n' iterations.

  Inside the loop, the function performs constant-time operations, such as arithmetic calculations, object property lookups, and assignments. These operations do not depend on the size of the input array and are executed in constant time for each element.
*/

/* 
  Add your pseudocode here
  iterate over the array of numbers
  for the current number, identify a complementary number that adds to our target
  (for example: if our number is 2, and the target is 5, the complementary number is 3)
  iterate over the remaining numbers in the array
    check if any of the remaining numbers is the complement
      if so, return true
  if we reach the end of the array, return false
*/

/*
  Add written explanation of your solution here
  function hasTargetSum(arr, target) {: This line defines a JavaScript function called hasTargetSum that takes two arguments: an array of integers (arr) and a target integer (target).

  numbers seen during the iteration.

  for (const num of arr) {: This line starts a for...of loop, which iterates through each element (num) in the arr array.

  The complement represents the value that, when added to the current number, would result in the target sum.

  a pair of numbers in the array that adds up to the target, and the function immediately returns true.

  a property in the seenNumbers object with a value of true.

  After iterating through the entire array, if no pair is found that adds up to the target, the function reaches this point and returns false.
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
