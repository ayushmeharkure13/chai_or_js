const account_id = 11
let account_email = "ayush@gmail.com"
var account_pwd = "11223344"
account_name = "aayush_meharkure"
let account_city
// not possible that account_id = 33 , account_id is a const type variable 
/*
    Prefer not use the var 
    because the issue with the block scope and functional scope   
    so use let over it  
*/
// if the variable is only declared then default value for it is undefined
console.log(account_id);
account_email = "nishant@gmail.com"
account_pwd = "1234"
console.table([account_email , account_id , account_pwd , account_name,account_city])




// node 01_basics/01_variables.js