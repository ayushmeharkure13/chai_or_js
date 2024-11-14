/* How the data actually stored in memory and how we can access it 
 on that basis the datatypes has been classified as 
 PRIMITIVE and NON-PRIMITIVE
 PRIMITIVE dtypes ==> CALL BY VALUE :-
 1.String
 2.Number
 3.Boolean
 4.null (means only empty , neither 0 nor empty string)
 5.undefined
 6.Symbol
 7.BigInt
*/

//Number
let num = 100
//String
let str = "aayush"
//bool
let isLoggedin = true
//null
const isfilled = null 
//undefined
let number 
// symbol --->it is unique
let id = Symbol('125')
//Bigint
let num2 = 234234564634776786n
                                      
/*NON PRIMITIVE dtypes ==> CALL BY REFERENCE
1.Array
2.Objects
3.Functions
*/
//ARRAY
const flowers = ['rose' , 'lotus' , 'lilly' , 'tulip'];
//OBJECT IS IN THE FORM OF :----> key value pair
let my_obj =  {
   name : "aayush",
   age : 23, 
   rank : 0
}
console.log(typeof(my_obj));





/* node --> C++ program which includes google's V8 JS engine--->
with this code we can run JS outside of the browser 
hence we can pass our js code for execution to node and this means we can build   
the backend for web applications using node .
*/
//browsers and node provides the runtime environment for JS code 
//difference between the website and web applicaton 
//MAIN difference between 
//web applications run on the web server and it can be accessed through the web browser



// TYPES OF MEMORY :---> Stack and Heap
//Stack --> (primitive dtypes)
//Heap ---> (Non primitive dtypes) 