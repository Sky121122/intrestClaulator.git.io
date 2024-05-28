let compound = document.getElementById("compound");
let simple = document.getElementById("simple");
let daily = document.getElementById("daily");
let head = document.getElementById("head");



// ========= heading change according button ========= 
compound.onclick = function(){
    head.innerHTML = "Calulate Compund"
}
simple.onclick = function(){
    head.innerHTML = "Calulate Simple"
}
// daily.onclick = function(){
//     head.innerHTML = "Calulate Daily Comp"
// }
// ======= calculate compound intrest ======== 
compound.addEventListener('click', function calCompund(){
    let amountPay = document.getElementById("amount").value;
    let intrestPay = document.getElementById("intrest").value;
    let monthPay = document.getElementById("month").value;
    let payment = document.getElementById("payment");

    const compundIntrest = amountPay * 12 / 100 * monthPay / 12;

    payment.innerHTML = `Monthly Payment: ${(compundIntrest).toFixed(2)}`;

})


// ======= calculate simple intrest ======= 
simple.addEventListener('click', function calIntrest(){
    let amountPay = document.getElementById("amount").value;
    let intrestPay = document.getElementById("intrest").value;
    let monthPay = document.getElementById("month").value;
    let payment = document.getElementById("payment");

    simpleIntrest = (amountPay * intrestPay * monthPay)/(12*100)

    payment.innerHTML = `Monthly Payment: ${(simpleIntrest).toFixed(2)}`;
} )

// ======= calculate daily compund ======= 

// daily.addEventListener('click', function calDaily(){
//     let amountPay = document.getElementById("amount").value;
//     let intrestPay = document.getElementById("intrest").value;
//     let monthPay = document.getElementById("month").value;
//     let payment = document.getElementById("payment");
//     let forMonth = document.getElementById("forMonth")

//     const newrate = monthPay;

//     totalAmount = amountPay * (1 + intrestPay/100)^newrate;
//     payment.innerHTML = `Monthly Payment: ${(totalAmount).toFixed(2)}`;
// })