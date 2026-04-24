function adds(n) {
  let x = 0; 
  for ( i = 0; i <= n; i++) { 
    x = x + i; 
    console.log(x);
  }
}

adds(4);

function area(a, b) {
  // Check if either a OR b is NOT a number
  if (typeof a !== "number" || typeof b !== "number") {
    return "Error: Both arguments must be numbers.";
  } else {
    var area1 = (a * b) / 2;
    return area1; // Return the calculated result
  }
}

console.log(area(2, 3)); // Output: 3

function calc(a,b,c){
  let calculated =3*a + b + c*0;
  console.log(calculated);
}
  let object="fdgfchjh";
  
let objectcopy=object;
objectcopy="habtamu";
console.log(object);
console.log(objectcopy);
