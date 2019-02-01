    const name="Abin";
var age=30;
let colour="White";
console.log (`My favourite drink is ${favouriteDrink}`)
console.log(`My Name is ${name} and am ${age} years old. My favourite colour is ${colour}.`);
age+=1
console.log(`My Name is ${name} and am ${age} years old. My favourite colour is ${colour}.`);

const cashWithdrawal = (amount, accnum) => {
console.log(`Withdrawing ${amount} from account number ${accnum}`)}
cashWithdrawal(300,59448821);

const coffee = (size, typeofdrink) => {
    console.log(`Coffee Size ${size} and type of drink ${typeofdrink}`)}
    coffee("450oz","latte");
    coffee("150oz","Cappuccino");

const factorial = (n) => {
    if ((n===0) || (n===1)){
        return 1;
    }else {
        return (n*factorial(n-1));
    }
}
console.log(factorial(33));
// Dispense cash if pin is correct. balance => amount

const CashMachine =  (pinnumber,balance) => {
 if((pinnumber===1234)||(balance=>1000)){
     return console.log("Amount withdrawn");
 } else {
     console.log("Wrong Password")
 }
 }
CashMachine(1234,1010);
const checkbalance = (balance) => {
    if (balance => curbalance) {
        return console.log ("amount withdrawn")
    } else {
        return console.log ("amount exceeds current balance")
    }
}