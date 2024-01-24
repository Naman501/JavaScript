const accountId = 1444532
let accountEmail = "naman@gmail.com"
var accountPassword = "Lawda_mera"
accountCity = "Noida"

// accountId = 2 //  not allowed

accountEmail = "nm@nm.com"
accountPassword = "LUND_lele"
accountCity="Solan"

let accountState;

console.log(accountId);
console.table([accountId,accountEmail,accountPassword,accountCity,accountState])

/*
prefer not to use var
because of issue in block scope and functional scope
*/