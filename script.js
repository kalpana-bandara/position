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
    pSize.innerText = "What The Fuck? Fill The Details First";
  } else {
    let x = +capital.value * +risk.value;
    let y = +entry.value - +stopLoss.value;
    if(entry.value< stopLoss.value){
       guess = 'short'
    }else{
       guess = 'long'
    }
    let z = x / y;
    let total = z * +entry.value;
    total = Math.abs(Math.round(total))
    
    pSize.style.color = "green"
    pSize.innerText = "Your position size is : " + total + '. Good luck with your ' + guess
  }
}
