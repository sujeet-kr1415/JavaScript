const accountId = 12345
let accountEmail = "sujeet.kr1416@gmail.com"
accountCity = "Bengaluru"
var accountPassword = "123656"
let accountState;

// accountId = 2 not allowed
console.log(accountCity)
accountEmail = "hc@hc.com"
accountPassword = "122312"
accountCity = "Patna"

console.log(accountId)


console.table([accountEmail,accountId,accountPassword,accountCity,accountState])

/*
prefer to use const and let rather than var
Prefer not use var
becsuse of issue in block scope and functional scope
*/