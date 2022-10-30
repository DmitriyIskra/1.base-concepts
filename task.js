"use strict";

function solveEquation(a, b, c) {
  
  let arr = [];
  
  let d = b**2-4*a*c;

  if (d === 0) {

    arr.push(-b/(2*a));

  }
  else if (d > 0) {

    arr.push( (-b + Math.sqrt(d) )/(2*a), (-b - Math.sqrt(d) )/(2*a) );

  };

  return arr; // array
}




function calculateTotalMortgage(percent, contribution, amount, date) {
  let totalAmount;
  let bodyCredit;
  let amountCreditMonths;
  let payment;
  

  const collectionInputs = document.querySelectorAll('.card > input[type="text"]');

  if ( Number.isNaN(+percent) ) {
    totalAmount = `параметр ${(collectionInputs[0].placeholder).toLowerCase()} содержит неправильное значение ${percent}`;
  }
  else if ( Number.isNaN(+contribution) ) {
    totalAmount = `параметр ${(collectionInputs[1].placeholder).toLowerCase()} содержит неправильное значение ${contribution}`;
  }
  else if ( Number.isNaN(+amount) ) {
    totalAmount = `параметр ${(collectionInputs[2].placeholder).toLowerCase()} содержит неправильное значение ${amount}`;
  }
  else {
    percent = +percent / 12 / 100;
    contribution = +contribution;
    amount = +amount;

    bodyCredit = amount - contribution;

    amountCreditMonths = Math.floor( (date.getTime() - Date.now()) / 1000/60/60/24/30 );

    payment = bodyCredit * (percent + (percent / (((1 + percent) ** amountCreditMonths) - 1)));

    totalAmount = (payment * amountCreditMonths).toFixed(2);
  };
  
  console.log(totalAmount);

  return totalAmount;
}

debugger;