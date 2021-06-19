let guess
let capital = document.getElementById("capital");
let risk = document.getElementById("risk");
let entry = document.getElementById("entry");
let stopLoss = document.getElementById("stoploss");
const getTotal = document.getElementById("calculate");
const positionSize = document.getElementById("pSize");

getTotal.addEventListener("click", calculatePosition);

function calculatePosition() {
  if (!capital.value || !risk.value || !entry.value || !stopLoss.value) {

    pSize.style.color = "red"
    pSize.innerHTML = "Fill The Details First!";

  } else {

    let percentRisk = risk.value/100;
    if(percentRisk > 0.25){
      swal("Seriously!","Serious Traders only risk 1% - 5%", "warning")
    }
    let x = +capital.value * +percentRisk;
    let y = +entry.value - +stopLoss.value;

    if(entry.value< stopLoss.value){
       guess = 'Short'

    }else{

       guess = 'Long'

    }
    let z = x / y;
    let total = z * +entry.value;

    total = Math.abs(Math.round(total))
    
    pSize.style.color = "green"
    pSize.innerHTML = "Your position size is : " + total + ' USDT'+ '<br> Good Luck With Your ' + guess
  }
}
