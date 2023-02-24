var total = 0

function add() {
  total = total + 1;
    document.getElementById("totalID").innerHTML = "Total: "+total.toFixed(1);
  if (total >= 10) {
    comprarA.style.display = "block"
  }
    console.log(total);
}

var totalA = 0
var precioA = 10+totalA*10*0.2


function loopA() {
  total = total + 0.1
  document.getElementById("totalID").innerHTML = "Total: "+total.toFixed(1)
}
function buyA() {
  console.log("Precio de A "+precioA)
  console.log("Total A "+totalA)
  if (total >= precioA) {
  totalA = totalA + 1;
   document.getElementById("AID").innerHTML = "Total A: "+totalA;
  total = total - precioA
  if (totalA >= 0.1) {
    setInterval(loopA,1000);
  }
  document.getElementById("totalID").innerHTML = "Total: "+total.toFixed(1);
  }
  precioA = 10+totalA*10*0.2
  document.getElementById("botonA").innerHTML = "Buy A: "+precioA+" clicks";
}

