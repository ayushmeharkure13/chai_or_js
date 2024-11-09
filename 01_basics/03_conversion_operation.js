//CASE 1
let score = 23
console.log(typeof score)

//CASE 2
let num = "45"
console.log(typeof num);
let num_data  = Number(num)
console.log(typeof num_data)
console.log(num_data)

//CASE 3   
let num_1 = "34abc"
let conver = Number(num_1)
console.log(typeof conver)
console.log(conver)      
// the num_1 is a string but external type conversion in number is possible
// since its value is 34abc which is invalid as a number 
//it shows Nan (Not a number)


//CASE 4
let is_valid = true 
console.log(typeof is_valid)
let valueInNumber = Number(is_valid)
console.log(valueInNumber);



//CASE 5 
let is_num = null
console.log(typeof is_num)
let convertToNumber = Number(is_num)
console.log(convertToNumber);

//case 6 
let val = undefined
console.log(val);
let toNumber = Number(val)
console.log(toNumber);


//INVESTIGATION_1 NOTES :-->
//CONVERSION TO NUMBER
/*
"33" ==> 33
true ==> 1 
false ==> 0
null ==> 0
undefined == > Nan 
"33abc" ==> Nan 
*/ 




//CASE 7
let isLoggedin = 1 
let isLoggedinBool = Boolean(isLoggedin)
console.log(isLoggedinBool);
 
let isUser = ""  //EMPTY STRING 
let isUserBool = Boolean(isUser)
console.log(isUserBool);

let isPwd = undefined   
let isPwdBool = Boolean(isPwd)
console.log(isPwdBool);

let isString = "aayush"   
let isStringBool = Boolean(isString)
console.log(isStringBool);

let isNum = null
let isNumBool = Boolean(isNum)
console.log(isNumBool);


//INVESTIGATION_2 NOTES
/*
CONVERSION TO BOOLEAN 
1 ==> true
0 ==> false 
undefined ==> false 
"aayush" ==> true 
"" ==> false    //for empty string corresponding boolean value is false 
null ==> false
34 ==>  true 
*/

