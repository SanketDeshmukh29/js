const accountId = 144553
let accountEmail = "sanket@gmail.com"
var accountPassword = "12345"
accountCity = "Pune"
let accountState;

//accountId = 2     //  we can't change the const variables

accountEmail = "sank@gmail.com"
accountPassword = "121212"
accountCity = "Solapur"
console.log(accountId);
console.log(accountEmail);
console.table([accountId,accountEmail,accountPassword, accountCity]);

console.log(accountState);   // if not given value then it will give undefined as output value 

/*  
prefer not to use var 
because of issues in block scope and funcitional scope
*/