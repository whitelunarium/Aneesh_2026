---
title: Multiple Choice Questions
comments: true
hide: true
layout: base
description: Quiz about Variables and Assignments
permalink: /mcq
---

## JavaScript Quick Quiz  
Answer **all questions correctly** to win. One wrong answer restarts the quiz!

<div id="quiz"></div>

<script>
const questions = [
  { q: "What would the data type be for the variable shoeSize?",
    opts: ["Boolean", "String", "Integer", "Plus"], correct: 2 }, // Integer = index 2
  { q: "What would the data type be for the variable isHot?",
    opts: ["Integer","Boolean","Minus","String"], correct: 1 },   // Boolean = index 1
  { q: "For variables should you use = or == ?",
    opts: ["==","="], correct: 1 }                                // "=" = index 1
];

let current = 0;
function loadQuestion() {
  const q = questions[current];
  const letters = ["A","B","C","D"]; // add labels
  document.getElementById("quiz").innerHTML = `
    <h4>${q.q}</h4>
    ${q.opts.map((opt,i)=>
      `<button onclick="checkAnswer(${i})">
         ${letters[i] || ""}. ${opt}
       </button>`
    ).join("<br>")}
    <p>Question ${current+1} of ${questions.length}</p>
  `;
}

function checkAnswer(choice) {
  if (choice === questions[current].correct) {
    current++;
    if (current < questions.length) {
      loadQuestion();
    } else {
      document.getElementById("quiz").innerHTML =
        `<h3>Perfect! You answered all ${questions.length} correctly!</h3>`;
    }
  } else {
    alert("Wrong! Starting over…");
    current = 0;
    loadQuestion();
  }
}

loadQuestion();
</script>