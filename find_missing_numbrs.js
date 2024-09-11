
// the find missing numbers function
function findMisNums(nums) {
    if (!Array.isArray(nums)) {
      
      return "Error: Not an array.";
    }
  
    if (nums.length === 0) {
      return "Error: Empty Array.";
      
    }
  
    //sort first
    nums.sort((a, b) => a - b);
  
    // Find maximum and minimum
    const min = nums[0];
    const max = nums[nums.length - 1];
  
    // using set for easy cheking and uniqu numbers storing
    const numberSet = new Set(nums);
  
    //missing numbers
    const missingNums = [];
    for (let i = min; i <= max; i++) {
      if (!numberSet.has(i)) {
        missingNums.push(i);
      }
    }
  

    if (missingNums.length > 0) {
      return "Missing numbers:", missingNums;
    }else{
      
      return "No missing numbers"
    }
  }
  
  //egxamples:
  console.log(findMisNums([]));                         // result: Error: Empty array.
  console.log(findMisNums("not an array"));             // result: Error: Not an array.
  console.log(findMisNums([3, 1, 5, 4, 6, 7, 8, 10]));  // result: Missing numbers: [2,9]
  console.log(findMisNums([1, 2, 3, 4, 5]));            // result: No missing numbers.
  console.log(findMisNums([1, 1, 2, ,2, 3, 4, 5]));     // result: No missing numbers.
  