const accountId = 144553
let accountEmail = "vpiyush@gmail.com"
var accountPassword = "12345"
accountCity = "Jaipur"
let accountState;
// undefined

// accountId = 2 // not allowed

accountEmail = "hc@hc.com"
accountPassword = "2212212"
accountCity = "Delhi"
console.log(accountId);

/* 
Prefer not to use var 
because of issue in block and functional scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])

