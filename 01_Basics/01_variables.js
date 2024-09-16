const accountId =123
let accEmail ="abc@gmail.com"
var accPassword ="1234"
accCity="Jaipur"
let accState;
// accountId =2 // not allowed
accEmail="def@gmail.com"
accPassword="5678"
console.log(accountId);
console.table([accEmail,accPassword,accountId,accCity,accState]);
/*
prefer not to use var 
becuase of issue in block scope & functional scope
*/
