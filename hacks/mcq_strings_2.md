---
title: Multiple Choice Questions
comments: true
hide: true
layout: base
description: Quiz about strings
permalink: /mcq_strings2
---

## JavaScript Quick Quiz  
Answer **all questions correctly** to win. One wrong answer restarts the quiz!

<div id="quiz"></div>

<script>
const questions = [
  { q: "Can numbers be inside of strings: let x = '123'?, choose best option",
    opts: ["Yes", "No", "I don't know", "Yes, but it cannot do math"], correct: 3 },
  { q: "How do you get multiline strings in Python?",
    opts: ["Triple quotes", "Double quotes", "Quadruple quotes", "Single quotes"], correct: 0 },
  { q: "What will len do in Python?",
    opts: ["Ouput the number of spaces", "Output the length of the string", "Combine two strings", "Multiply two strings"], correct: 1 },
  { q: "In Python, what will print(name[0])?",
    opts: ["The whole string", "Last character", "First character", "All of the above"], correct: 2 },
  
    
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