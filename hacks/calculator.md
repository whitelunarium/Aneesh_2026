---
title: JS Calculator
comments: true
hide: true
layout: base
description: A common way to become familiar with a language is to build a calculator.  This calculator shows off button with actions.
permalink: /calculator
---

<!-- 
Hack 0: Right justify result
Hack 1: Test conditions on small, big, and decimal numbers, report on findings. Fix issues.
Hack 2: Add the common math operation that is missing from calculator
Hack 3: Implement 1 number operation (ie SQRT) 
-->

<!-- 
HTML implementation of the calculator. 
-->

<!-- 
    Style and Action are aligned with HRML class definitions
    style.css contains majority of style definition (number, operation, clear, and equals)
    - The div calculator-container sets 4 elements to a row
    Background is credited to Vanta JS and is implemented at bottom of this page
-->
<style>
  .calculator-output {
    /*
      calulator output
      top bar shows the results of the calculator;
      result to take up the entirety of the first row;
      span defines 4 columns and 1 row
    */
    grid-column: span 4;
    grid-row: span 1;
  
    border-radius: 10px;
    padding: 0.25em;
    font-size: 20px;
    border: 2px solid black;
  
    display: flex;
    align-items: center;
  }
  canvas {
    filter: none;
  }
</style>

<!-- Add a container for the animation -->
<div id="animation">
  <div class="calculator-container">
      <!--result-->
      <div class="calculator-output" id="output">0</div>
      <!--row 1-->
      <div class="calculator-number">1</div>
      <div class="calculator-number">2</div>
      <div class="calculator-number">3</div>
      <div class="calculator-operation">+</div>
      <!--row 2-->
      <div class="calculator-number">4</div>
      <div class="calculator-number">5</div>
      <div class="calculator-number">6</div>
      <div class="calculator-operation">-</div>
      <!--row 3-->
      <div class="calculator-number">7</div>
      <div class="calculator-number">8</div>
      <div class="calculator-number">9</div>
      <div class="calculator-operation">*</div>
      <!--row 4-->
      <div class="calculator-operation">√</div>  <!-- <-- square root button -->
      <div class="calculator-number">0</div>
      <div class="calculator-number">.</div>
      <div class="calculator-operation">/</div>
      <!--row 5-->
      <div class="calculator-equals">=</div>
      <div class="calculator-clear">A/C</div>

  </div>
</div>

<script>
// initialize important variables to manage calculations
var firstNumber = null;
var operator = null;
var nextReady = true;

// build objects containing key elements
const output = document.getElementById("output");
const numbers = document.querySelectorAll(".calculator-number");
const operations = document.querySelectorAll(".calculator-operation");
const clear = document.querySelectorAll(".calculator-clear");
const equals = document.querySelectorAll(".calculator-equals");

// helper to format results (avoid long floating-point tails)
function formatResult(val) {
  // if not finite or NaN, return "ERR"
  if (!isFinite(val) || Number.isNaN(val)) return "ERR";
  // round to max 10 decimal places, then remove trailing zeros
  let s = parseFloat(parseFloat(val).toFixed(10)).toString();
  return s;
}

// Number buttons listener
numbers.forEach(button => {
  button.addEventListener("click", function() {
    number(button.textContent);
  });
});

// Number action
function number (value) { // function to input numbers into the calculator
    if (value != ".") {
        if (nextReady == true) { // nextReady is used to tell the computer when the user is going to input a completely new number
            output.innerHTML = value;
            if (value != "0") { // if statement to ensure that there are no multiple leading zeroes
                nextReady = false;
            }
        } else {
            output.innerHTML = output.innerHTML + value; // concatenation is used to add the numbers to the end of the input
        }
    } else { // special case for adding a decimal; can't have two decimals
        if (output.innerHTML.indexOf(".") == -1) {
            output.innerHTML = output.innerHTML + value;
            nextReady = false;
        }
    }
}

// Operation buttons listener
operations.forEach(button => {
  button.addEventListener("click", function() {
    operation(button.textContent);
  });
});

// Operator action (now supports unary ops like √)
function operation (choice) {
    // define unary ops
    const unaryOps = {
        "√": function(v) { return Math.sqrt(v); }
        // you can add more unary ops here, e.g. "x²": v => v*v
    };

    // If user clicked a unary op, apply it to the displayed number
    if (Object.prototype.hasOwnProperty.call(unaryOps, choice)) {
        let current = parseFloat(output.innerHTML);
        let result = unaryOps[choice](current);
        // check for invalid results
        if (!isFinite(result) || Number.isNaN(result)) {
            output.innerHTML = "ERR";
            nextReady = true;
            // optional: reset stored operation so user can start fresh
            firstNumber = null;
            operator = null;
            return;
        }
        output.innerHTML = formatResult(result);
        nextReady = true;
        // Important: if there's a pending binary operation (firstNumber != null),
        // we leave firstNumber and operator intact so the user can continue (e.g. 9 + 16 √ -> 9 + 4)
        return;
    }

    // Otherwise handle binary operations (+, -, *, /) like before
    if (firstNumber == null) { // store displayed number as firstNumber and wait for next input
        firstNumber = parseFloat(output.innerHTML);
        nextReady = true;
        operator = choice;
        return; // exits function
    }
    // occurs if there is already a number stored in the calculator
    firstNumber = calculate(firstNumber, parseFloat(output.innerHTML)); 
    operator = choice;
    output.innerHTML = formatResult(firstNumber);
    nextReady = true;
}

// Calculator
function calculate (first, second) { // function to calculate the result of the equation
    let result = 0;
    switch (operator) {
        case "+":
            result = first + second;
            break;
        case "-":
            result = first - second;
            break;
        case "*":
            result = first * second;
            break;
        case "/":
            result = first / second;
            break;
        case "%":
            result = first % second;
            break;
        default: 
            break;
    }
    return result;
}

// Equals button listener
equals.forEach(button => {
  button.addEventListener("click", function() {
    equal();
  });
});

// Equal action
function equal () {
    // Only compute if we have a stored operator and a firstNumber
    if (operator == null || firstNumber == null) {
        // nothing to evaluate; do nothing
        return;
    }
    firstNumber = calculate(firstNumber, parseFloat(output.innerHTML));
    output.innerHTML = formatResult(firstNumber);
    nextReady = true;
    // reset operator so next number press starts a new calculation
    operator = null;
}

// Clear button listener
clear.forEach(button => {
  button.addEventListener("click", function() {
    clearCalc();
  });
});

// A/C action
function clearCalc () { // clears calculator
    firstNumber = null;
    operator = null;
    output.innerHTML = "0";
    nextReady = true;
}
</script>

</script>

<!-- 
Vanta animations just for fun, load JS onto the page
-->
<script src="{{site.baseurl}}/assets/js/three.r119.min.js"></script>
<script src="{{site.baseurl}}/assets/js/vanta.halo.min.js"></script>
<script src="{{site.baseurl}}/assets/js/vanta.birds.min.js"></script>
<script src="{{site.baseurl}}/assets/js/vanta.net.min.js"></script>
<script src="{{site.baseurl}}/assets/js/vanta.rings.min.js"></script>

<script>
// setup vanta scripts as functions
var vantaInstances = {
  halo: VANTA.HALO,
  birds: VANTA.BIRDS,
  net: VANTA.NET,
  rings: VANTA.RINGS
};

// obtain a random vanta function
var vantaInstance = vantaInstances[Object.keys(vantaInstances)[Math.floor(Math.random() * Object.keys(vantaInstances).length)]];

// run the animation
vantaInstance({
  el: "#animation",
  mouseControls: true,
  touchControls: true,
  gyroControls: false
});
</script>
