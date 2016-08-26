console.log('Hello, front end');

document.addEventListener("DOMContentLoaded", function(event) {
  console.log("DOM fully loaded and parsed");


var tempType;

document.getElementById("submit").addEventListener('click', function() {
  if (tempType === "c") {
    toCelsius()
  }
  else if (tempType === "f") {
    toFahrenheit()
  }
})

console.log("it's working")

function toFahrenheit() {
  var temp = document.getElementById("input").value
  var fahResults = (temp * (9/5)) + 32
  document.getElementById("result").textContent = fahResults
}

function toCelsius() {
  var temp = document.getElementById("input").value
  var celResults = (temp - 32) * 5/9
  document.getElementById("result").textContent = celResults
}

document.getElementsByClassName("tempSelect")[0].addEventListener('click', function() {
  clearResults();
  tempType = "f"
  console.log(tempType);
})

document.getElementsByClassName("tempSelect")[1].addEventListener('click', function() {
  clearResults();
  tempType = "c"
  console.log(tempType);
})

document.getElementById("submit").addEventListener('click', function() {
  if (tempType = "c")
    // if degree C selected then this:
    document.getElementById("input").innerHTML = toFahrenheit();
  else if (tempType = "f")
    //else if degree F selected then this:
    document.getElementById("input").innerHTML = toCelsius();
  else
    console.log("Wrong Option");
});



console.log("pls work")


// creating function for clearing page
document.getElementById("clear").addEventListener('click',clearResults)

function clearResults() {
  document.getElementById("result").textContent='';
  document.getElementById("input").value='';
}

});
