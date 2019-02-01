const myPin = 1234;
const curbalance = 1000;

const checkPin = (pin) => {
   if (pin == myPin) {
       return true  
    } else {
       return "Wrong Password"
   }
};
const withdrawamount = (withdraw) => {
    if (checkPin(1234)== true && withdraw <= curbalance){
        console.log("Amount can be withdrawn")
    } else {
        console.log(false)
        //  console.log("Withdrawal amount is less than current balance")
    }
};

// const checkbalance = (balance) => {
//     if (balance=>curbalance){
//         return console.log("Amount can be withdrawn")
//     } else {
//         return console.log("Amount exceeds current balance")
//     }
// }
// console.log(checkPin(1234))
withdrawamount(110);


// const checkPin = (pin) => {
//    if (pin != myPin) {
//        return false
//    } else {
//        return true
//    }
// }