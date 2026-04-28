---
layout: opencs
title: I'm Aneesh Deevi
hide: true
show_reading_time: false
---

## Me and Team

Hi! My name is Aneesh Deevi.

| Role | Name | Repo Location | Stream | Repo Name |
|------|------|---------------|--------|-----------|
| Scrum Master | Aneesh | https://github.com/whitelunarium/Aneesh_2026 | downstream (OCS fork) | Aneesh_2026 |
| Scrummer | Ethan | https://github.com/EthanP2010/student | downstream (fork) | student |
| Scrummer | Moiz | https://github.com/MoizL163/student | downstream (fork) | student |
| Scrummer | Neil | https://github.com/neilM-3/student | downstream (fork) | student |
| Scrummer | Tanay | https://github.com/tp254/student | downstream (fork) | student |
| Scrummer | Perry | https://github.com/hotpotcarrots/portfolio | downstream (fork) | portfolio |

## Links to Learning

### Development Environment

<div style="display: flex; flex-wrap: wrap; gap: 10px; margin-bottom: 1rem;">
  <a href="https://opencodingsociety.com" style="text-decoration: none; display: inline-flex; align-items: center; gap: 8px; padding: 10px 14px; border: 1px solid #FA8072; border-radius: 6px; font-weight: 700;">
    <img src="{{ '/favicon.ico' | relative_url }}" alt="OCS logo" style="width: 16px; height: 16px;">
    OCS
  </a>
  <a href="https://github.com/Open-Coding-Society/portfolio" style="text-decoration: none; display: inline-flex; align-items: center; gap: 8px; padding: 10px 14px; border: 1px solid #fff; border-radius: 6px; font-weight: 700;">
    <img src="https://github.githubassets.com/favicons/favicon.svg" alt="GitHub logo" style="width: 16px; height: 16px;">
    GitHub
  </a>
  <a href="https://vscode.dev/" style="text-decoration: none; display: inline-flex; align-items: center; gap: 8px; padding: 10px 14px; border: 1px solid #007ACC; border-radius: 6px; font-weight: 700;">
    <img src="https://vscode.dev/favicon.ico" alt="VSCode logo" style="width: 16px; height: 16px;">
    VSCode.dev
  </a>
</div>

### Class Progress

<div style="display: flex; flex-wrap: wrap; gap: 10px; margin-bottom: 2rem;">
  <a href="{{site.baseurl}}/snake" style="text-decoration: none;">
    <div style="background-color: #00FF00; color: black; padding: 10px 20px; border-radius: 5px; font-weight: bold;">
      Snake
    </div>
  </a>
  <a href="{{site.baseurl}}/gamify/parallax" style="text-decoration: none;">
    <div style="background-color: #3c1de8; color: white; padding: 10px 20px; border-radius: 5px; font-weight: bold;">
      Fish
    </div>
  </a>
  <a href="{{site.baseurl}}/gamify/water" style="text-decoration: none;">
    <div style="background-color: #b71dc5; color: white; padding: 10px 20px; border-radius: 5px; font-weight: bold;">
      Squid
    </div>
  </a>
</div>

## Unit Converter

<style>
  .unit-converter-home * { box-sizing: border-box; }

  .unit-converter-home {
    font-family: Arial, sans-serif;
    background: #f7f2e8;
    color: #222;
    border: 2px solid #d8cdbd;
    border-radius: 12px;
    padding: 20px;
    margin: 16px 0 28px;
  }

  .unit-converter-home .converter-box {
    max-width: 620px;
    margin: 0 auto;
  }

  .unit-converter-home h3 {
    margin: 0 0 6px;
    font-size: 24px;
  }

  .unit-converter-home .converter-note {
    margin: 0 0 16px;
    color: #5b5248;
    font-size: 14px;
  }

  .unit-converter-home .mode-row,
  .unit-converter-home .top-row {
    display: flex;
    gap: 10px;
    margin-bottom: 14px;
  }

  .unit-converter-home .mode-btn {
    flex: 1;
    padding: 10px 12px;
    border: 1px solid #b8aa96;
    border-radius: 8px;
    background: #efe7da;
    color: #3e352c;
    cursor: pointer;
    font-size: 14px;
  }

  .unit-converter-home .mode-btn.current {
    background: #3f352d;
    color: #fff;
    border-color: #3f352d;
  }

  .unit-converter-home input,
  .unit-converter-home select {
    border: 1px solid #b8aa96;
    border-radius: 8px;
    padding: 11px 12px;
    background: #fffdf8;
    color: #222;
    font-size: 16px;
  }

  .unit-converter-home input {
    flex: 1.3;
  }

  .unit-converter-home select {
    flex: 1;
  }

  .unit-converter-home .results {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    gap: 10px;
  }

  .unit-converter-home .result {
    background: #efe7da;
    border-radius: 8px;
    padding: 12px;
  }

  .unit-converter-home .result.source {
    background: #fffdf8;
    border: 1px solid #b8aa96;
  }

  .unit-converter-home .number {
    font-size: 22px;
    font-weight: 700;
    margin-bottom: 4px;
  }

  .unit-converter-home .label {
    font-size: 13px;
    color: #64584d;
  }

  @media (max-width: 640px) {
    .unit-converter-home .mode-row,
    .unit-converter-home .top-row {
      flex-direction: column;
    }
  }
</style>

<div class="unit-converter-home">
  <div class="converter-box">
    <h3>Unit Converter</h3>
    <p class="converter-note">Pick a type, enter a value, and it converts to the rest.</p>

    <div class="mode-row" id="unit-converter-cats"></div>

    <div class="top-row">
      <input type="number" id="unit-converter-val-input" value="1" placeholder="Type a number" />
      <select id="unit-converter-from-select"></select>
    </div>

    <div class="results" id="unit-converter-results-grid"></div>
  </div>
</div>

<script>
  (() => {
    const unitGroups = {
      length: [
        { name: "meters", symbol: "m", toBase: 1 },
        { name: "kilometers", symbol: "km", toBase: 1000 },
        { name: "centimeters", symbol: "cm", toBase: 0.01 },
        { name: "miles", symbol: "mi", toBase: 1609.34 },
        { name: "feet", symbol: "ft", toBase: 0.3048 },
        { name: "inches", symbol: "in", toBase: 0.0254 }
      ],
      weight: [
        { name: "kilograms", symbol: "kg", toBase: 1 },
        { name: "grams", symbol: "g", toBase: 0.001 },
        { name: "pounds", symbol: "lb", toBase: 0.453592 },
        { name: "ounces", symbol: "oz", toBase: 0.0283495 }
      ],
      temperature: [
        { name: "Celsius", symbol: "°C", toBase: null },
        { name: "Fahrenheit", symbol: "°F", toBase: null },
        { name: "Kelvin", symbol: "K", toBase: null }
      ]
    };

    function convertValue(amount, fromUnit, groupName) {
      const output = [];
      const units = unitGroups[groupName];

      if (groupName === "temperature") {
        let celsius;
        if (fromUnit.symbol === "°C") celsius = amount;
        else if (fromUnit.symbol === "°F") celsius = (amount - 32) * 5 / 9;
        else celsius = amount - 273.15;

        for (let i = 0; i < units.length; i++) {
          let nextValue;
          if (units[i].symbol === "°C") nextValue = celsius;
          else if (units[i].symbol === "°F") nextValue = celsius * 9 / 5 + 32;
          else nextValue = celsius + 273.15;
          output.push({ unit: units[i], value: nextValue });
        }
      } else {
        const baseAmount = amount * fromUnit.toBase;

        for (let i = 0; i < units.length; i++) {
          output.push({
            unit: units[i],
            value: baseAmount / units[i].toBase
          });
        }
      }

      return output;
    }

    let currentGroup = "length";
    let currentUnitIndex = 0;

    const numberInput = document.getElementById("unit-converter-val-input");
    const unitSelect = document.getElementById("unit-converter-from-select");
    const resultsBox = document.getElementById("unit-converter-results-grid");
    const buttonRow = document.getElementById("unit-converter-cats");

    function prettyNumber(num) {
      if (Math.abs(num) >= 0.01 && Math.abs(num) < 10000000) {
        return parseFloat(num.toFixed(4)).toString();
      }
      return num.toExponential(3);
    }

    function drawResults() {
      const amount = parseFloat(numberInput.value) || 0;
      const units = unitGroups[currentGroup];
      const fromUnit = units[currentUnitIndex];
      const converted = convertValue(amount, fromUnit, currentGroup);

      resultsBox.innerHTML = converted.map((item) => {
        const sourceClass = item.unit === fromUnit ? " source" : "";
        return `
          <div class="result${sourceClass}">
            <div class="number">${prettyNumber(item.value)}</div>
            <div class="label">${item.unit.name} (${item.unit.symbol})</div>
          </div>
        `;
      }).join("");
    }

    function drawButtons() {
      buttonRow.innerHTML = Object.keys(unitGroups).map((group) => `
        <button class="mode-btn${group === currentGroup ? " current" : ""}" data-group="${group}">
          ${group}
        </button>
      `).join("");

      buttonRow.querySelectorAll(".mode-btn").forEach((btn) => {
        btn.addEventListener("click", () => {
          currentGroup = btn.dataset.group;
          currentUnitIndex = 0;
          drawButtons();
          drawSelect();
          drawResults();
        });
      });
    }

    function drawSelect() {
      const units = unitGroups[currentGroup];
      unitSelect.innerHTML = units.map((u, i) => `
        <option value="${i}">${u.name} (${u.symbol})</option>
      `).join("");
      unitSelect.value = currentUnitIndex;
    }

    unitSelect.addEventListener("change", () => {
      currentUnitIndex = parseInt(unitSelect.value, 10);
      drawResults();
    });

    numberInput.addEventListener("input", drawResults);

    drawButtons();
    drawSelect();
    drawResults();
  })();
</script>
