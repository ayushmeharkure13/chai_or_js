//COMPARISON OPERATORS do convert the null to 0 (null ==> 0)
//but equality operator (==) can't do the same 
console.log(2 >=1 );
console.log(2 <=1 );
console.log(2 == 1 );
console.log(2 > 1 );
console.log(2 < 1 );
console.log(2 != 1);


console.log("2" >= 1);
console.log(null >= 1);
//console.log(null == 0);   //it does not converts the null to 0 as like comparison operators do
console.log(null < 1);



//STRICT CHECK
//it strictly checks for dtype also 
console.log("2" === 2);
