---
layout: base
title: I'm Aneesh Deevi
hide: true
---

### Me and Team

Hi! My name is Aneesh Deevi.

| Role         | Name     | Repo Location                       | Stream                | Repo Name |
|--------------|----------|-------------------------------------|-----------------------|-----------|
| Scrum Master | John     | github.com/jm1021/student           | upstream (OCS fork)   | student   |
| Scrummer     | Torin    | github.com/torin/student            | downstream (fork)     | student   |
| Scrummer     | Avantika | github.com/avantika/student         | downstream (fork)     | student   |
| Scrummer     | Aadit    | github.com/aaadit/student           | downstream (fork)     | student   |


## Links to Learning

### Development Environment

> Coding starts with tools, explore these tools and procedures with a click.

<a href="https://github.com/Open-Coding-Society/student">
    <img src="https://img.shields.io/badge/GitHub-181717?logo=github&logoColor=white" alt="GitHub">
</a>
<a href="https://open-coding-society.github.io/student">
    <img src="https://img.shields.io/badge/GitHub%20Pages-327FC7?logo=github&logoColor=white" alt="GitHub Pages">
</a>
<a href="https://kasm.opencodingsociety.com/" class="button small" style="background-color: #6b4bd3ff">
    KASM
</a>
<a href="https://vscode.dev/" class="button small" style="background-color: #d38a4bff">
    <span style="color: #FFFFFF">VSCODE</span>
</a>

<br>

### Class Progress

<a href="{{site.baseurl}}/snake" class="button small" style="background-color: #6b4bd3ff">
    Snake Game
</a>
<a href="{{site.baseurl}}/turtle" class="button small" style="background-color: #2A7DB1">
    <span style="color: #000000">Turtle</span>
</a>

<br>

<!-- Contact Section -->
### Get in Touch

> Feel free to reach out if you'd like to collaborate or learn more about our work.

<p style="color: #2A7DB1;">Open Coding Society: <a href="https://opencodingsociety.com" style="color: #2A7DB1; text-decoration: underline;">Socials</a></p>

## Truth or False?
---
### Do you live in California?

<div style="display: flex; flex-wrap: wrap; gap: 10px;">
    <div class="button" 
         style="background: linear-gradient(145deg, #16a085, #1abc9c); color: white; padding: 12px 24px; border-radius: 10px; font-weight: bold; transition: all 0.3s ease; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); cursor: pointer;"
         onclick="alert('You answered YES')">
        Yes
    </div>

    <div class="button" 
         style="background: linear-gradient(145deg, #e74c3c, #ff6b6b); color: white; padding: 12px 24px; border-radius: 10px; font-weight: bold; transition: all 0.3s ease; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); cursor: pointer;"
         onclick="alert('You answered NO')">
        No
    </div>
</div>

### Did or do you major Computer Science?

<div style="display: flex; flex-wrap: wrap; gap: 10px;">
    <div class="button" 
         style="background: linear-gradient(145deg, #16a085, #1abc9c); color: white; padding: 12px 24px; border-radius: 10px; font-weight: bold; transition: all 0.3s ease; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); cursor: pointer;"
         onclick="alert('You answered YES')">
        Yes
    </div>

    <div class="button" 
         style="background: linear-gradient(145deg, #e74c3c, #ff6b6b); color: white; padding: 12px 24px; border-radius: 10px; font-weight: bold; transition: all 0.3s ease; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); cursor: pointer;"
         onclick="alert('You answered NO')">
        No
    </div>
</div>

### What is your name?

<input type="text" id="name" placeholder="Enter your name" 
       style="padding: 8px; border-radius: 6px; border: 1px solid #ccc; margin-right: 10px;">
<div class="button" 
     style="background: linear-gradient(145deg, #3498db, #2980b9); color: white; padding: 10px 20px; border-radius: 10px; font-weight: bold; cursor: pointer; display: inline-block;"
     onclick="calculateName()">
    Submit
</div>

<script>
  function calculateName() {
    const name = document.getElementById('name').value.trim();
    if (!name) {
      alert("Please enter your name first!");
      return;
    }
    alert("Calculating your name...");
    setTimeout(() => {
      alert("Your name is: " + name);
    }, 1500); // delay in milliseconds
  }
</script>



<style>
  /* Hover effect on the buttons */
  .button:hover {
    transform: scale(1.1);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.3);
  }

  .button {
    display: inline-block;
    font-size: 16px;
    text-align: center;
    user-select: none; /* Prevent accidental text selection */
  }
</style>


