const GAME_STYLE_ID = 'deployment-run-style';

function ensureStyles() {
  if (document.getElementById(GAME_STYLE_ID)) return;

  const style = document.createElement('style');
  style.id = GAME_STYLE_ID;
  style.textContent = `
    .deployment-run {
      --ink: #e2e8f0;
      --muted: #cbd5e1;
      --panel: rgba(15, 23, 42, 0.86);
      --line: rgba(148, 163, 184, 0.25);
      --accent: #f97316;
      --accent2: #38bdf8;
      --good: #22c55e;
      --bad: #ef4444;
      margin: 28px 0;
      padding: 24px;
      border-radius: 28px;
      background:
        radial-gradient(circle at top left, rgba(56, 189, 248, 0.18), transparent 34%),
        radial-gradient(circle at bottom right, rgba(249, 115, 22, 0.16), transparent 30%),
        linear-gradient(135deg, #07111f, #0f172a 52%, #10283b);
      border: 1px solid rgba(255, 255, 255, 0.1);
      color: var(--ink);
      box-shadow: 0 20px 64px rgba(2, 6, 23, 0.28);
      font-family: "Trebuchet MS", "Segoe UI", sans-serif;
    }
    .deployment-run * { box-sizing: border-box; }
    .deployment-run__header {
      display: flex;
      justify-content: space-between;
      gap: 16px;
      align-items: flex-start;
      flex-wrap: wrap;
      margin-bottom: 18px;
    }
    .deployment-run__title {
      margin: 0;
      font-size: 2rem;
      line-height: 1;
    }
    .deployment-run__subtitle {
      margin: 8px 0 0;
      max-width: 62ch;
      color: var(--muted);
      line-height: 1.5;
    }
    .deployment-run__stats {
      display: flex;
      gap: 10px;
      flex-wrap: wrap;
    }
    .deployment-run__stat {
      padding: 10px 14px;
      border-radius: 999px;
      background: rgba(255, 255, 255, 0.08);
      border: 1px solid rgba(255, 255, 255, 0.12);
      white-space: nowrap;
    }
    .deployment-run__grid {
      display: grid;
      grid-template-columns: minmax(0, 1.5fr) minmax(280px, 0.9fr);
      gap: 18px;
      align-items: start;
    }
    .deployment-run__board-wrap,
    .deployment-run__side,
    .deployment-run__quiz {
      background: var(--panel);
      border: 1px solid rgba(255, 255, 255, 0.1);
      border-radius: 22px;
      padding: 16px;
    }
    .deployment-run__canvas {
      width: 100%;
      display: block;
      border-radius: 18px;
      background: linear-gradient(180deg, rgba(12, 24, 42, 0.9), rgba(8, 16, 28, 0.95));
      border: 1px solid rgba(255, 255, 255, 0.08);
    }
    .deployment-run__legend,
    .deployment-run__facts {
      margin: 14px 0 0;
      padding-left: 18px;
      color: var(--muted);
    }
    .deployment-run__legend li,
    .deployment-run__facts li {
      margin-top: 6px;
      line-height: 1.4;
    }
    .deployment-run__prompt {
      margin: 0;
      color: var(--muted);
      line-height: 1.5;
    }
    .deployment-run__choices {
      display: grid;
      gap: 10px;
      margin-top: 14px;
    }
    .deployment-run__choices button,
    .deployment-run__button {
      appearance: none;
      border: 1px solid rgba(255, 255, 255, 0.12);
      background: rgba(255, 255, 255, 0.06);
      color: var(--ink);
      border-radius: 14px;
      padding: 12px 14px;
      text-align: left;
      cursor: pointer;
      font: inherit;
    }
    .deployment-run__choices button:hover,
    .deployment-run__button:hover {
      background: rgba(255, 255, 255, 0.12);
    }
    .deployment-run__button--primary {
      background: linear-gradient(135deg, #f97316, #fb7185);
      border: 0;
      color: white;
      font-weight: 700;
    }
    .deployment-run__feedback {
      margin-top: 14px;
      min-height: 74px;
      padding: 14px;
      border-radius: 16px;
      background: rgba(14, 116, 144, 0.14);
      border: 1px solid rgba(125, 211, 252, 0.2);
      line-height: 1.45;
      color: var(--ink);
      white-space: pre-line;
    }
    .deployment-run__feedback.good {
      background: rgba(34, 197, 94, 0.15);
      border-color: rgba(134, 239, 172, 0.32);
    }
    .deployment-run__feedback.bad {
      background: rgba(239, 68, 68, 0.12);
      border-color: rgba(252, 165, 165, 0.32);
    }
    .deployment-run__mini-title {
      margin: 0 0 8px;
      font-size: 1.1rem;
    }
    .deployment-run__actions {
      display: flex;
      gap: 10px;
      flex-wrap: wrap;
      margin-top: 14px;
    }
    .deployment-run__quiz {
      margin-top: 18px;
    }
    .deployment-run__track {
      position: relative;
      display: grid;
      grid-template-columns: repeat(6, minmax(0, 1fr));
      gap: 10px;
      margin-top: 16px;
    }
    .deployment-run__track::before {
      content: '';
      position: absolute;
      left: 5%;
      right: 5%;
      top: 15px;
      height: 4px;
      border-radius: 999px;
      background: linear-gradient(90deg, rgba(56, 189, 248, 0.22), rgba(249, 115, 22, 0.65));
    }
    .deployment-run__node {
      position: relative;
      text-align: center;
      color: var(--muted);
      font-size: 0.85rem;
    }
    .deployment-run__node-dot {
      width: 18px;
      height: 18px;
      border-radius: 999px;
      margin: 0 auto 10px;
      background: #0f172a;
      border: 3px solid rgba(255,255,255,0.34);
    }
    .deployment-run__node.done .deployment-run__node-dot,
    .deployment-run__node.current .deployment-run__node-dot {
      background: var(--good);
      border-color: #dcfce7;
    }
    .deployment-run__node.current .deployment-run__node-dot {
      background: var(--accent);
      border-color: #fed7aa;
    }
    @media (max-width: 900px) {
      .deployment-run__grid {
        grid-template-columns: 1fr;
      }
      .deployment-run__title {
        font-size: 1.7rem;
      }
      .deployment-run__track {
        grid-template-columns: repeat(3, minmax(0, 1fr));
      }
      .deployment-run__track::before {
        display: none;
      }
    }
  `;
  document.head.appendChild(style);
}

function mountDeploymentGame(root) {
  ensureStyles();

  const stages = ['Browser', 'DNS / TLS', 'Transport', 'Internet', 'Nginx', 'Backend'];
  const checkpoints = [
    {
      id: 'browser',
      x: 90,
      y: 230,
      radius: 28,
      stage: 0,
      title: 'Browser Launch',
      lesson: 'Your frontend is on GitHub Pages. A real request starts when browser JavaScript calls fetch().',
      prompt: 'Which action actually launches the deployed request from the frontend?',
      choices: ['Calling fetch() in browser JavaScript', 'Changing the SQL schema', 'Rebooting the EC2 server', 'Updating the MAC address'],
      answer: 'Calling fetch() in browser JavaScript',
      explain: 'The deployment story begins in the browser. GitHub Pages serves HTML/CSS/JS, then JS makes the HTTP request.',
      fact: 'Frontend deployment matters because browser code is the first application-layer event.'
    },
    {
      id: 'dns_tls',
      x: 240,
      y: 130,
      radius: 28,
      stage: 1,
      title: 'DNS / TLS Gate',
      lesson: 'DNS maps the API domain to an IP. TLS protects bytes in transit. OSI Layers 5-7 are usually grouped into TCP/IP Application.',
      prompt: 'In this lesson, which TCP/IP layer absorbs OSI Application, Presentation, and Session?',
      choices: ['Application', 'Transport', 'Internet', 'Link'],
      answer: 'Application',
      explain: 'OSI is more granular for teaching. TCP/IP is more practical, so layers 5 through 7 are usually grouped into Application.',
      fact: 'This is the academic contrast the lesson needs: OSI is a 7-layer guideline; TCP/IP is the operational internet model.'
    },
    {
      id: 'transport',
      x: 395,
      y: 245,
      radius: 28,
      stage: 2,
      title: 'Transport Forge',
      lesson: 'TCP adds ports, sequence numbers, acknowledgments, retransmission, and flow control.',
      prompt: 'With MTU 1500, IPv4 header 20, and TCP header 20, how many bytes of TCP payload fit in one segment?',
      choices: ['1500', '1480', '1460', '1440'],
      answer: '1460',
      explain: '1500 - 20 - 20 = 1460. That is the classic classroom MTU number for TCP payload over Ethernet.',
      fact: 'MTU is not trivia. It governs how data is packaged as the request moves downward into packets and frames.'
    },
    {
      id: 'internet',
      x: 565,
      y: 120,
      radius: 28,
      stage: 3,
      title: 'Internet Route',
      lesson: 'IP routing moves packets across home Wi-Fi, the ISP, and internet routers toward AWS.',
      prompt: 'Which layer makes hop-by-hop routing decisions using destination IP addresses?',
      choices: ['Network / Internet', 'Presentation', 'Physical only', 'Application'],
      answer: 'Network / Internet',
      explain: 'Routers do not care about the meaning of your JSON. They care about IP addresses and the next hop.',
      fact: 'When deployment fails, the bug may be lower than your code: DNS, routing, packet loss, or link instability.'
    },
    {
      id: 'nginx',
      x: 735,
      y: 235,
      radius: 28,
      stage: 4,
      title: 'Reverse Proxy Checkpoint',
      lesson: 'Nginx often receives HTTPS traffic on ports 80 or 443 and forwards requests to an internal app service.',
      prompt: 'What is Nginx doing in this deployment path?',
      choices: ['Acting as a reverse proxy in front of the backend app', 'Replacing TCP with UDP', 'Serving as the DNS root server', 'Becoming the SQL database'],
      answer: 'Acting as a reverse proxy in front of the backend app',
      explain: 'Nginx is the deployment bridge between public traffic and internal app ports like Flask on localhost:8587.',
      fact: 'This is where the lesson becomes real deployment, not abstract networking.'
    },
    {
      id: 'backend',
      x: 900,
      y: 135,
      radius: 28,
      stage: 5,
      title: 'Backend Dock',
      lesson: 'The request reaches the EC2 host, Nginx forwards it, the app runs, and the response returns back through the stack.',
      prompt: 'Why is deployment a networking topic and not only a coding topic?',
      choices: ['Because code can be correct while DNS, TLS, routing, MTU, or proxy configuration still breaks the request', 'Because JavaScript replaces all protocols', 'Because OSI removed the need for deployment', 'Because SQL stores IP packets'],
      answer: 'Because code can be correct while DNS, TLS, routing, MTU, or proxy configuration still breaks the request',
      explain: 'A correct route handler can still fail in real life if lower layers or deployment infrastructure are wrong.',
      fact: 'The request returns through the stack in reverse once the backend responds.'
    }
  ];

  const quizRounds = [
    {
      title: 'Quick Check 1',
      prompt: 'Which pair best represents the real deployment path after the browser starts the request?',
      choices: [
        'DNS/TLS -> TCP -> IP -> Nginx -> app',
        'SQL -> CSS -> Wi-Fi -> app',
        'MAC -> SQL -> DNS root -> Docker',
        'TCP -> keyboard -> DNS -> monitor'
      ],
      answer: 'DNS/TLS -> TCP -> IP -> Nginx -> app',
      explain: 'That is the simplified path from frontend deployment to backend deployment in this lesson.'
    },
    {
      title: 'Quick Check 2',
      prompt: 'Why does Mr. M care about MTU in this networking lesson?',
      choices: [
        'Because data has to be formed into segments and packets, not just imagined as a single blob',
        'Because MTU is another name for a web framework',
        'Because OSI Layer 8 sets database columns',
        'Because Nginx disables packet sizes'
      ],
      answer: 'Because data has to be formed into segments and packets, not just imagined as a single blob',
      explain: 'MTU forces students to think about how application data becomes TCP segments, IP packets, and frames.'
    }
  ];

  const state = {
    packet: { x: 70, y: 230, size: 18, speed: 3.2 },
    keys: {},
    currentIndex: 0,
    score: 0,
    integrity: 3,
    maxIntegrity: 3,
    activePrompt: checkpoints[0],
    answered: new Set(),
    feedback: 'Move with WASD or arrow keys. Touch a checkpoint to answer the networking question and push the request deeper into deployment.',
    feedbackTone: '',
    facts: [],
    completed: false,
    quizIndex: 0,
    quizScore: 0,
    quizDone: false,
    promptLocked: false
  };

  root.className = 'deployment-run';
  root.innerHTML = `
    <div class="deployment-run__header">
      <div>
        <h2 class="deployment-run__title">Deployment Run</h2>
        <p class="deployment-run__subtitle">Guide one request from a GitHub Pages frontend to an EC2 backend. The game teaches networking by making deployment the map: browser code, DNS/TLS, TCP segmentation, IP routing, Nginx, and backend response.</p>
      </div>
      <div class="deployment-run__stats">
        <div class="deployment-run__stat" data-stat="score"></div>
        <div class="deployment-run__stat" data-stat="integrity"></div>
        <div class="deployment-run__stat" data-stat="stage"></div>
      </div>
    </div>
    <div class="deployment-run__track" data-track></div>
    <div class="deployment-run__grid">
      <div class="deployment-run__board-wrap">
        <canvas class="deployment-run__canvas" width="980" height="360" aria-label="Deployment Run game board"></canvas>
        <ul class="deployment-run__legend">
          <li>Orange nodes are the next deployment checkpoint.</li>
          <li>Blue lanes show the request path from browser to cloud.</li>
          <li>The packet loses integrity on wrong answers, just like a broken mental model loses a real request.</li>
        </ul>
      </div>
      <div class="deployment-run__side">
        <h3 class="deployment-run__mini-title" data-panel-title></h3>
        <p class="deployment-run__prompt" data-panel-lesson></p>
        <div class="deployment-run__choices" data-choices></div>
        <div class="deployment-run__feedback" data-feedback></div>
        <div class="deployment-run__actions">
          <button class="deployment-run__button deployment-run__button--primary" data-reset>Restart mission</button>
          <button class="deployment-run__button" data-hint>AI Debugger Hint</button>
        </div>
        <ul class="deployment-run__facts" data-facts></ul>
      </div>
    </div>
    <div class="deployment-run__quiz" data-quiz></div>
  `;

  const canvas = root.querySelector('canvas');
  const ctx = canvas.getContext('2d');
  const choicesEl = root.querySelector('[data-choices]');
  const feedbackEl = root.querySelector('[data-feedback]');
  const lessonTitleEl = root.querySelector('[data-panel-title]');
  const lessonEl = root.querySelector('[data-panel-lesson]');
  const factsEl = root.querySelector('[data-facts]');
  const resetEl = root.querySelector('[data-reset]');
  const hintEl = root.querySelector('[data-hint]');
  const quizEl = root.querySelector('[data-quiz]');
  const statScore = root.querySelector('[data-stat="score"]');
  const statIntegrity = root.querySelector('[data-stat="integrity"]');
  const statStage = root.querySelector('[data-stat="stage"]');
  const trackEl = root.querySelector('[data-track]');

  function hearts() {
    return `${'█'.repeat(Math.max(0, state.integrity))}${'░'.repeat(state.maxIntegrity - Math.max(0, state.integrity))}`;
  }

  function updateTrack() {
    trackEl.innerHTML = stages.map((label, index) => {
      let className = 'deployment-run__node';
      if (index < state.currentIndex) className += ' done';
      if (!state.completed && index === state.currentIndex) className += ' current';
      if (state.completed && index === stages.length - 1) className += ' done';
      return `<div class="${className}"><div class="deployment-run__node-dot"></div><div>${label}</div></div>`;
    }).join('');
  }

  function setPrompt(checkpoint) {
    state.activePrompt = checkpoint;
    lessonTitleEl.textContent = checkpoint.title;
    lessonEl.textContent = checkpoint.lesson;
    choicesEl.innerHTML = checkpoint.choices.map((choice) => `<button type="button" data-choice="${choice.replace(/"/g, '&quot;')}">${choice}</button>`).join('');
    choicesEl.querySelectorAll('[data-choice]').forEach((button) => {
      button.addEventListener('click', () => answerPrompt(checkpoint, button.getAttribute('data-choice')));
    });
  }

  function answerPrompt(checkpoint, choice) {
    if (state.promptLocked || state.completed || state.integrity <= 0) return;
    if (checkpoint !== checkpoints[state.currentIndex]) return;

    state.promptLocked = true;
    if (choice === checkpoint.answer) {
      state.score += 125;
      state.feedback = `Correct. ${checkpoint.explain}`;
      state.feedbackTone = 'good';
      state.facts.push(checkpoint.fact);
      state.answered.add(checkpoint.id);
      state.currentIndex += 1;
      if (state.currentIndex >= checkpoints.length) {
        state.completed = true;
        state.feedback = `Deployment complete. ${checkpoint.explain}\nThe request made it from browser code to the deployed backend.`;
      } else {
        setPrompt(checkpoints[state.currentIndex]);
      }
    } else {
      state.integrity -= 1;
      state.feedback = `Packet damaged. Correct answer: ${checkpoint.answer}. ${checkpoint.explain}`;
      state.feedbackTone = 'bad';
      if (state.integrity <= 0) {
        state.feedback += '\nThe request crashed before deployment completed. Restart and try again.';
      }
    }
    renderSide();
    updateTrack();
    state.promptLocked = false;
  }

  function renderSide() {
    statScore.textContent = `Score: ${state.score}`;
    statIntegrity.textContent = `Integrity: ${hearts()}`;
    statStage.textContent = `Stage: ${Math.min(state.currentIndex + 1, checkpoints.length)} / ${checkpoints.length}`;
    feedbackEl.textContent = state.feedback;
    feedbackEl.className = `deployment-run__feedback${state.feedbackTone ? ` ${state.feedbackTone}` : ''}`;
    factsEl.innerHTML = state.facts.length
      ? state.facts.slice(-4).map((fact) => `<li>${fact}</li>`).join('')
      : '<li>Clear checkpoints to unlock quick deployment facts.</li>';
    renderQuiz();
  }

  function renderQuiz() {
    if (!state.completed) {
      quizEl.innerHTML = `
        <h3 class="deployment-run__mini-title">Post-Run Quiz</h3>
        <p class="deployment-run__prompt">Finish the board first. Then the quick quiz checks whether the deployment story stuck.</p>
      `;
      return;
    }
    if (state.quizDone) {
      quizEl.innerHTML = `
        <h3 class="deployment-run__mini-title">Post-Run Quiz Complete</h3>
        <p class="deployment-run__prompt">Quiz score: ${state.quizScore} / ${quizRounds.length}. You can now explain networking through deployment rather than isolated vocabulary.</p>
      `;
      return;
    }

    const round = quizRounds[state.quizIndex];
    quizEl.innerHTML = `
      <h3 class="deployment-run__mini-title">${round.title}</h3>
      <p class="deployment-run__prompt">${round.prompt}</p>
      <div class="deployment-run__choices">
        ${round.choices.map((choice) => `<button type="button" data-quiz-choice="${choice.replace(/"/g, '&quot;')}">${choice}</button>`).join('')}
      </div>
      <div class="deployment-run__feedback" data-quiz-feedback>One more academic check after the run.</div>
    `;
    const quizFeedback = quizEl.querySelector('[data-quiz-feedback]');
    quizEl.querySelectorAll('[data-quiz-choice]').forEach((button) => {
      button.addEventListener('click', () => {
        const value = button.getAttribute('data-quiz-choice');
        if (value === round.answer) {
          state.quizScore += 1;
          quizFeedback.textContent = `Correct. ${round.explain}`;
          quizFeedback.className = 'deployment-run__feedback good';
        } else {
          quizFeedback.textContent = `Incorrect. Correct answer: ${round.answer}. ${round.explain}`;
          quizFeedback.className = 'deployment-run__feedback bad';
        }
        setTimeout(() => {
          state.quizIndex += 1;
          if (state.quizIndex >= quizRounds.length) {
            state.quizDone = true;
          }
          renderSide();
        }, 900);
      });
    });
  }

  function hint() {
    const hints = [
      'Deployment hint: OSI is the teaching diagram, but the real internet is usually discussed with TCP/IP Application, Transport, Internet, and Link.',
      'MTU hint: Ethernet MTU 1500 minus 20-byte IPv4 and 20-byte TCP headers leaves 1460 bytes of TCP payload.',
      'Proxy hint: Nginx sits between public traffic and the internal app. It is often the HTTPS termination point.',
      'Route hint: If your API code looks right and requests still fail, think DNS, ports, TLS, routing, or packet loss.'
    ];
    state.feedback = hints[state.currentIndex % hints.length];
    state.feedbackTone = '';
    renderSide();
  }

  function reset() {
    state.packet.x = 70;
    state.packet.y = 230;
    state.currentIndex = 0;
    state.score = 0;
    state.integrity = 3;
    state.activePrompt = checkpoints[0];
    state.answered.clear();
    state.feedback = 'Move with WASD or arrow keys. Touch a checkpoint to answer the networking question and push the request deeper into deployment.';
    state.feedbackTone = '';
    state.facts = [];
    state.completed = false;
    state.quizIndex = 0;
    state.quizScore = 0;
    state.quizDone = false;
    setPrompt(checkpoints[0]);
    updateTrack();
    renderSide();
  }

  function currentCheckpoint() {
    return checkpoints[Math.min(state.currentIndex, checkpoints.length - 1)];
  }

  function updatePacket() {
    if (state.integrity <= 0 || state.completed) return;
    const { packet, keys } = state;
    if (keys.ArrowUp || keys.KeyW) packet.y -= packet.speed;
    if (keys.ArrowDown || keys.KeyS) packet.y += packet.speed;
    if (keys.ArrowLeft || keys.KeyA) packet.x -= packet.speed;
    if (keys.ArrowRight || keys.KeyD) packet.x += packet.speed;
    packet.x = Math.max(24, Math.min(canvas.width - 24, packet.x));
    packet.y = Math.max(24, Math.min(canvas.height - 24, packet.y));

    const checkpoint = currentCheckpoint();
    const dx = packet.x - checkpoint.x;
    const dy = packet.y - checkpoint.y;
    if (Math.hypot(dx, dy) <= checkpoint.radius + packet.size) {
      state.feedback = `Checkpoint reached: ${checkpoint.title}\nAnswer the prompt to move the deployment request forward.`;
      state.feedbackTone = '';
      renderSide();
    }
  }

  function drawBoard() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
    gradient.addColorStop(0, '#09111d');
    gradient.addColorStop(1, '#0f2234');
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.strokeStyle = 'rgba(56, 189, 248, 0.34)';
    ctx.lineWidth = 6;
    ctx.beginPath();
    ctx.moveTo(checkpoints[0].x, checkpoints[0].y);
    checkpoints.forEach((cp) => ctx.lineTo(cp.x, cp.y));
    ctx.stroke();

    checkpoints.forEach((cp, index) => {
      ctx.beginPath();
      ctx.fillStyle = index < state.currentIndex ? '#22c55e' : index === state.currentIndex ? '#f97316' : '#1e293b';
      ctx.strokeStyle = 'rgba(255,255,255,0.36)';
      ctx.lineWidth = 4;
      ctx.arc(cp.x, cp.y, cp.radius, 0, Math.PI * 2);
      ctx.fill();
      ctx.stroke();

      ctx.fillStyle = '#e2e8f0';
      ctx.font = 'bold 14px Trebuchet MS';
      ctx.textAlign = 'center';
      ctx.fillText(cp.title, cp.x, cp.y - 40);
    });

    ctx.fillStyle = '#38bdf8';
    ctx.fillRect(0, canvas.height - 42, canvas.width, 42);
    ctx.fillStyle = '#e2e8f0';
    ctx.font = '14px Trebuchet MS';
    ctx.textAlign = 'left';
    ctx.fillText('Link / Physical travel lane: Ethernet or Wi-Fi frames carry the packet on each hop.', 18, canvas.height - 16);

    ctx.fillStyle = '#fde68a';
    ctx.strokeStyle = '#f97316';
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.roundRect(state.packet.x - 18, state.packet.y - 12, 36, 24, 8);
    ctx.fill();
    ctx.stroke();
    ctx.fillStyle = '#0f172a';
    ctx.font = 'bold 12px Trebuchet MS';
    ctx.textAlign = 'center';
    ctx.fillText('REQ', state.packet.x, state.packet.y + 4);
  }

  function loop() {
    updatePacket();
    drawBoard();
    requestAnimationFrame(loop);
  }

  window.addEventListener('keydown', (event) => {
    if (event.code.startsWith('Arrow') || ['KeyW', 'KeyA', 'KeyS', 'KeyD'].includes(event.code)) {
      state.keys[event.code] = true;
      event.preventDefault();
    }
  });

  window.addEventListener('keyup', (event) => {
    if (event.code.startsWith('Arrow') || ['KeyW', 'KeyA', 'KeyS', 'KeyD'].includes(event.code)) {
      state.keys[event.code] = false;
      event.preventDefault();
    }
  });

  resetEl.addEventListener('click', reset);
  hintEl.addEventListener('click', hint);

  setPrompt(checkpoints[0]);
  updateTrack();
  renderSide();
  loop();
}

function init() {
  const gameRoot = document.getElementById('deployment-run-game');
  if (gameRoot) {
    mountDeploymentGame(gameRoot);
  }
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
