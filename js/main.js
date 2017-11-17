var keys = document.querySelectorAll(".key");
var output = document.querySelector("#output");
var clear =  document.querySelector("#clear");
var firstVal;
var secondVal;
var operator;
var total = 0;


keys.forEach(function(key){
  key.addEventListener("click", function(){
    keypress(this);
    if ((/\*|X|\/|-|\+|\./g).test(key.id)) {
      firstVal = output.textContent;
      operator = key.id;
      output.textContent = ""
    } else if (key.id == "=") {
      secondVal = output.textContent;
      output.textContent = ""
      total = calculation();
      output.append(total);
    } else {
      output.append(key.id);
    }
  });
});

clear.addEventListener("click", function(){
  keypress(this);
  reset();
});

function keypress(selector){
  selector.classList.add("clicked");
  setTimeout(function(){
    selector.classList.remove("clicked");
    }, 100);
}

function calculation() {
  firstVal = parseInt(firstVal);
  secondVal = parseInt(secondVal);
  switch (operator) {
    case "+":
      return firstVal + secondVal;
      break;
    case "-":
      return firstVal - secondVal;
      break;
    case "*":
      return firstVal * secondVal;
      break;
    case "/":
      return firstVal / secondVal;
  }
}

function reset() {
  output.textContent = ""
  firstVal = 0;
  secondVal = 0;
}
