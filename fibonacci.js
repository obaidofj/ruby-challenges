
// ----- fibonacci chalenge
//this function recurcivly calculate fibonacci sequence as 
//the base case is 0 and 1 if the number is 0 or 1 it will returned 
//otherwise fibonacci of n-1 + fibonacci of n-2 will returned

function fib(n) {
if(n>=0){
    if (n <= 1) {
      return n;
    } else {
      return fib(n - 1) + fib(n - 2);
    }
  }
  else
    return "error of parameter";
}
  
//eg. :
  console.log("Fib(0): "+fib(-2));  // Result: error of parameter
  console.log("Fib(1): "+fib(1));  // Result: 1
  console.log("Fib(2): "+fib(2));  // Result: 1
  console.log("Fib(3): "+fib(3));  // Result: 2
  console.log("Fib(11):"+fib(11)); // Result: 98   
  