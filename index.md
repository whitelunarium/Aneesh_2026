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
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
    background: #f5f4f0;
    color: #1a1a1a;
    border-radius: 18px;
    padding: 2rem 1rem;
    margin: 1rem 0 2rem;
  }

  .unit-converter-home .wrap { width: 100%; max-width: 580px; margin: 0 auto; }

  .unit-converter-home .header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 1.5rem;
  }

  .unit-converter-home .app-title { font-size: 15px; font-weight: 500; }

  .unit-converter-home .badge {
    font-size: 12px;
    background: #dbeafe;
    color: #1d4ed8;
    padding: 3px 10px;
    border-radius: 8px;
  }

  .unit-converter-home .category-row {
    display: flex;
    gap: 8px;
    margin-bottom: 1.5rem;
  }

  .unit-converter-home .cat-btn {
    flex: 1;
    padding: 9px 0;
    border: 1px solid #ccc;
    border-radius: 8px;
    background: #ebebea;
    color: #555;
    font-size: 13px;
    cursor: pointer;
    font-family: inherit;
    transition: all .15s;
    text-transform: capitalize;
  }

  .unit-converter-home .cat-btn:hover { background: #e0dfde; }

  .unit-converter-home .cat-btn.active {
    background: #1a1a1a;
    color: #fff;
    border-color: transparent;
  }

  .unit-converter-home .input-row {
    display: flex;
    gap: 10px;
    align-items: center;
    margin-bottom: 1.5rem;
  }

  .unit-converter-home .input-row input[type="number"] {
    flex: 1;
    font-size: 22px;
    padding: 10px 14px;
    border: 1px solid #ccc;
    border-radius: 8px;
    background: #fff;
    color: #1a1a1a;
    font-family: inherit;
    outline: none;
  }

  .unit-converter-home .input-row input[type="number"]:focus { border-color: #888; }

  .unit-converter-home .from-select {
    padding: 10px 12px;
    border: 1px solid #ccc;
    border-radius: 8px;
    background: #fff;
    color: #1a1a1a;
    font-size: 14px;
    font-family: inherit;
    cursor: pointer;
    outline: none;
  }

  .unit-converter-home .results-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
    gap: 10px;
  }

  .unit-converter-home .result-card {
    background: #ebebea;
    border-radius: 8px;
    padding: 14px 16px;
  }

  .unit-converter-home .result-card.from-unit {
    background: #fff;
    border: 1px solid #aaa;
  }

  .unit-converter-home .result-val {
    font-size: 20px;
    font-weight: 500;
    color: #1a1a1a;
    margin-bottom: 2px;
  }

  .unit-converter-home .result-unit { font-size: 13px; color: #666; }

  @media (max-width: 640px) {
    .unit-converter-home .input-row,
    .unit-converter-home .category-row {
      flex-direction: column;
    }

    .unit-converter-home .cat-btn,
    .unit-converter-home .from-select,
    .unit-converter-home .input-row input[type="number"] {
      width: 100%;
    }
  }
</style>

<div class="unit-converter-home">
  <div class="wrap">
    <div class="header">
      <span class="app-title">Unit Converter</span>
      <span class="badge">AP CSP Create PT</span>
    </div>

    <div class="category-row" id="unit-converter-cats"></div>

    <div class="input-row">
      <input type="number" id="unit-converter-val-input" value="1" placeholder="Enter value" />
      <select class="from-select" id="unit-converter-from-select"></select>
    </div>

    <div class="results-grid" id="unit-converter-results-grid"></div>
  </div>
</div>

<script>
  (() => {
    const categories = {
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

    function convert(value, fromUnit, category) {
      const results = [];
      const units = categories[category];

      if (category === "temperature") {
        let celsius;
        if (fromUnit.symbol === "°C") celsius = value;
        else if (fromUnit.symbol === "°F") celsius = (value - 32) * 5 / 9;
        else celsius = value - 273.15;

        for (let i = 0; i < units.length; i++) {
          let converted;
          if (units[i].symbol === "°C") converted = celsius;
          else if (units[i].symbol === "°F") converted = celsius * 9 / 5 + 32;
          else converted = celsius + 273.15;
          results.push({ unit: units[i], value: converted });
        }
      } else {
        const baseValue = value * fromUnit.toBase;

        for (let i = 0; i < units.length; i++) {
          const converted = baseValue / units[i].toBase;
          results.push({ unit: units[i], value: converted });
        }
      }

      return results;
    }

    let activeCategory = "length";
    let activeFromIndex = 0;

    const valInput = document.getElementById("unit-converter-val-input");
    const fromSelect = document.getElementById("unit-converter-from-select");
    const resultsGrid = document.getElementById("unit-converter-results-grid");
    const catsDiv = document.getElementById("unit-converter-cats");

    function formatNum(n) {
      if (Math.abs(n) >= 0.01 && Math.abs(n) < 1e7) {
        return parseFloat(n.toFixed(4)).toString();
      }
      return n.toExponential(3);
    }

    function render() {
      const value = parseFloat(valInput.value) || 0;
      const units = categories[activeCategory];
      const fromUnit = units[activeFromIndex];
      const results = convert(value, fromUnit, activeCategory);

      resultsGrid.innerHTML = results.map((r) => {
        const isFrom = r.unit === fromUnit;
        return `
          <div class="result-card${isFrom ? " from-unit" : ""}">
            <div class="result-val">${formatNum(r.value)}</div>
            <div class="result-unit">${r.unit.name} (${r.unit.symbol})</div>
          </div>
        `;
      }).join("");
    }

    function buildCategoryButtons() {
      catsDiv.innerHTML = Object.keys(categories).map((cat) => `
        <button class="cat-btn${cat === activeCategory ? " active" : ""}" data-cat="${cat}">
          ${cat}
        </button>
      `).join("");

      catsDiv.querySelectorAll(".cat-btn").forEach((btn) => {
        btn.addEventListener("click", () => {
          activeCategory = btn.dataset.cat;
          activeFromIndex = 0;
          buildCategoryButtons();
          buildFromSelect();
          render();
        });
      });
    }

    function buildFromSelect() {
      const units = categories[activeCategory];
      fromSelect.innerHTML = units.map((u, i) => `
        <option value="${i}">${u.name} (${u.symbol})</option>
      `).join("");
      fromSelect.value = activeFromIndex;
    }

    fromSelect.addEventListener("change", () => {
      activeFromIndex = parseInt(fromSelect.value, 10);
      render();
    });

    valInput.addEventListener("input", render);

    buildCategoryButtons();
    buildFromSelect();
    render();
  })();
</script>
