import GameControl from '/assets/js/GameEnginev1.1/essentials/GameControl.js';
import GameEnvBackground from '/assets/js/GameEnginev1.1/essentials/GameEnvBackground.js';
import Player from '/assets/js/GameEnginev1.1/essentials/Player.js';
import NPC from '/assets/js/GameEnginev1.1/essentials/Npc.js';
import AiNpc from '/assets/js/GameEnginev1.1/essentials/AiNpc.js';
import Collectible from '/assets/js/GameEnginev1.1/essentials/Collectible.js';
import Barrier from '/assets/js/GameEnginev1.1/essentials/Barrier.js';

const STYLE_ID = 'network-stack-quest-ui';
const HUD_ID = 'network-stack-quest-hud';

function svgDataUrl(svg) {
  return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;
}

function tokenSprite(label, fill, accent = '#0f172a') {
  return svgDataUrl(`
    <svg xmlns="http://www.w3.org/2000/svg" width="96" height="96" viewBox="0 0 96 96">
      <rect x="10" y="12" width="76" height="72" rx="16" fill="${fill}" stroke="${accent}" stroke-width="6"/>
      <rect x="22" y="24" width="52" height="14" rx="7" fill="rgba(255,255,255,0.25)"/>
      <text x="48" y="58" text-anchor="middle" font-family="Arial, sans-serif" font-size="18" font-weight="700" fill="#ffffff">${label}</text>
    </svg>
  `);
}

function npcSprite(label, fill) {
  return svgDataUrl(`
    <svg xmlns="http://www.w3.org/2000/svg" width="96" height="96" viewBox="0 0 96 96">
      <rect x="12" y="16" width="72" height="64" rx="14" fill="${fill}" stroke="#e2e8f0" stroke-width="4"/>
      <circle cx="36" cy="42" r="8" fill="#e2e8f0"/>
      <circle cx="60" cy="42" r="8" fill="#e2e8f0"/>
      <rect x="28" y="58" width="40" height="8" rx="4" fill="#e2e8f0"/>
      <text x="48" y="90" text-anchor="middle" font-family="Arial, sans-serif" font-size="13" font-weight="700" fill="#0f172a">${label}</text>
    </svg>
  `);
}

function baseSpriteData(id, src, scaleFactor, initPosition) {
  return {
    id,
    src,
    SCALE_FACTOR: scaleFactor,
    STEP_FACTOR: 1000,
    ANIMATION_RATE: 12,
    INIT_POSITION: initPosition,
    pixels: { width: 96, height: 96 },
    orientation: { rows: 1, columns: 1 },
    down: { row: 0, start: 0, columns: 1 },
    right: { row: 0, start: 0, columns: 1 },
    left: { row: 0, start: 0, columns: 1 },
    up: { row: 0, start: 0, columns: 1 },
    upRight: { row: 0, start: 0, columns: 1 },
    upLeft: { row: 0, start: 0, columns: 1 },
    downRight: { row: 0, start: 0, columns: 1 },
    downLeft: { row: 0, start: 0, columns: 1 },
    hitbox: { widthPercentage: 0.45, heightPercentage: 0.45 }
  };
}

function ensureUiStyles() {
  if (document.getElementById(STYLE_ID)) return;

  const style = document.createElement('style');
  style.id = STYLE_ID;
  style.textContent = `
    #${HUD_ID} {
      position: absolute;
      top: 16px;
      right: 16px;
      width: min(360px, calc(100% - 32px));
      padding: 16px 18px;
      border-radius: 18px;
      border: 1px solid rgba(255, 255, 255, 0.18);
      background: linear-gradient(180deg, rgba(15, 23, 42, 0.94), rgba(15, 23, 42, 0.8));
      color: #e2e8f0;
      font-family: "Trebuchet MS", "Segoe UI", sans-serif;
      z-index: 40;
      box-shadow: 0 18px 48px rgba(15, 23, 42, 0.28);
      backdrop-filter: blur(8px);
    }
    #${HUD_ID} * { box-sizing: border-box; }
    #${HUD_ID} h3 {
      margin: 0 0 6px;
      font-size: 1.15rem;
      letter-spacing: 0.02em;
    }
    #${HUD_ID} p {
      margin: 0;
      line-height: 1.45;
      color: #cbd5e1;
    }
    #${HUD_ID} .quest-bar {
      margin-top: 12px;
      height: 10px;
      border-radius: 999px;
      background: rgba(255, 255, 255, 0.12);
      overflow: hidden;
    }
    #${HUD_ID} .quest-fill {
      height: 100%;
      border-radius: inherit;
      background: linear-gradient(90deg, #38bdf8, #f97316);
      transition: width 160ms ease;
    }
    #${HUD_ID} .quest-grid {
      display: grid;
      grid-template-columns: repeat(2, minmax(0, 1fr));
      gap: 10px;
      margin-top: 14px;
    }
    #${HUD_ID} .quest-card {
      padding: 10px 12px;
      border-radius: 14px;
      background: rgba(255, 255, 255, 0.05);
      border: 1px solid rgba(255, 255, 255, 0.08);
    }
    #${HUD_ID} .quest-card strong {
      display: block;
      margin-bottom: 4px;
      color: #f8fafc;
      font-size: 0.92rem;
    }
    #${HUD_ID} .quest-tags {
      display: flex;
      flex-wrap: wrap;
      gap: 8px;
      margin-top: 14px;
    }
    #${HUD_ID} .quest-tag {
      padding: 6px 10px;
      border-radius: 999px;
      background: rgba(56, 189, 248, 0.14);
      border: 1px solid rgba(56, 189, 248, 0.24);
      color: #dbeafe;
      font-size: 0.85rem;
    }
    #${HUD_ID} .quest-tag.locked {
      background: rgba(148, 163, 184, 0.14);
      border-color: rgba(148, 163, 184, 0.22);
      color: #cbd5e1;
    }
    #${HUD_ID} .quest-log {
      margin-top: 14px;
      padding-left: 18px;
      color: #cbd5e1;
    }
    #${HUD_ID} .quest-log li {
      margin-top: 6px;
      line-height: 1.35;
    }
    #${HUD_ID} .quest-action {
      margin-top: 14px;
      padding: 10px 14px;
      border: 0;
      border-radius: 12px;
      background: linear-gradient(135deg, #f97316, #fb7185);
      color: white;
      font: inherit;
      font-weight: 700;
      cursor: pointer;
    }
    #${HUD_ID} .quest-action:hover {
      filter: brightness(1.05);
    }
    @media (max-width: 900px) {
      #${HUD_ID} {
        left: 12px;
        right: 12px;
        top: 12px;
        width: auto;
      }
    }
  `;
  document.head.appendChild(style);
}

function createQuestState() {
  return {
    integrity: 3,
    maxIntegrity: 3,
    payloadBytes: 0,
    mtuLimit: 1460,
    completed: false,
    objective: 'Collect the client-side tokens that represent OSI Layers 7, 6, and 5 before crossing into Transport.',
    tokens: {
      fetch: false,
      tls: false,
      session: false,
      tcp: false,
      route: false,
      proxy: false
    },
    logs: [
      'Mission start: move left to right and press E at each object.',
      'Your project path is browser -> DNS/TLS -> TCP -> IP -> Nginx -> backend.'
    ],
    barriers: {}
  };
}

function addLog(state, message) {
  state.logs.unshift(message);
  state.logs = state.logs.slice(0, 5);
}

function tokenCount(state) {
  return Object.values(state.tokens).filter(Boolean).length;
}

function progressPercent(state) {
  return Math.round(((tokenCount(state) + (state.payloadBytes === state.mtuLimit ? 1 : 0) + (state.completed ? 1 : 0)) / 8) * 100);
}

function setBarrier(barrier, enabled) {
  if (!barrier) return;
  barrier.visible = enabled;
  barrier.update();
}

function updateObjective(state) {
  if (state.completed) {
    state.objective = 'Delivery complete: the request survived the stack and reached the deployed app.';
    return;
  }
  if (!(state.tokens.fetch && state.tokens.tls && state.tokens.session)) {
    state.objective = 'Collect the Application, Presentation, and Session tokens. In TCP/IP, OSI 5-7 collapse into Application.';
    return;
  }
  if (!(state.tokens.tcp && state.payloadBytes === state.mtuLimit)) {
    state.objective = 'Unlock Transport by taking the TCP key and assembling exactly 1460 payload bytes under a 1500-byte MTU.';
    return;
  }
  if (!(state.tokens.route && state.tokens.proxy)) {
    state.objective = 'Bring the IP route map and Nginx reverse-proxy pass to open the EC2 deployment lane.';
    return;
  }
  state.objective = 'Reach the backend dock and explain why your request path is a real deployment story, not just a diagram.';
}

function syncBarriers(gameEnv) {
  const state = gameEnv.networkQuestState;
  const appReady = state.tokens.fetch && state.tokens.tls && state.tokens.session;
  const mtuReady = state.tokens.tcp && state.payloadBytes === state.mtuLimit;
  const deployReady = state.tokens.route && state.tokens.proxy;

  setBarrier(state.barriers.clientGate, !appReady);
  setBarrier(state.barriers.transportGate, !mtuReady);
  setBarrier(state.barriers.backendGate, !deployReady);
  updateObjective(state);
  renderHud(gameEnv);
}

function renderHud(gameEnv) {
  const state = gameEnv.networkQuestState;
  ensureUiStyles();

  let hud = document.getElementById(HUD_ID);
  if (!hud) {
    hud = document.createElement('aside');
    hud.id = HUD_ID;
    gameEnv.container.style.position = 'relative';
    gameEnv.container.appendChild(hud);
  }

  const tags = [
    state.tokens.fetch ? 'fetch() online' : 'fetch() missing',
    state.tokens.tls ? 'TLS shielded' : 'TLS missing',
    state.tokens.session ? 'Session mapped' : 'Session missing',
    state.tokens.tcp ? 'TCP keyed' : 'TCP missing',
    state.tokens.route ? 'IP routed' : 'IP route missing',
    state.tokens.proxy ? 'Nginx pass' : 'Proxy pass missing'
  ].map((label) => {
    const locked = label.includes('missing');
    return `<span class="quest-tag${locked ? ' locked' : ''}">${label}</span>`;
  }).join('');

  const restartMarkup = state.integrity <= 0 || state.completed
    ? '<button class="quest-action" id="network-stack-quest-restart">Restart mission</button>'
    : '';

  hud.innerHTML = `
    <h3>Network Stack Raid</h3>
    <p>${state.objective}</p>
    <div class="quest-bar"><div class="quest-fill" style="width:${progressPercent(state)}%"></div></div>
    <div class="quest-grid">
      <div class="quest-card">
        <strong>Integrity</strong>
        <span>${'█'.repeat(Math.max(state.integrity, 0))}${'░'.repeat(Math.max(state.maxIntegrity - state.integrity, 0))}</span>
      </div>
      <div class="quest-card">
        <strong>MTU Payload</strong>
        <span>${state.payloadBytes} / ${state.mtuLimit} bytes</span>
      </div>
      <div class="quest-card">
        <strong>OSI vs TCP/IP</strong>
        <span>Layers 5-7 merge into Application</span>
      </div>
      <div class="quest-card">
        <strong>Deployment Path</strong>
        <span>GitHub Pages -> EC2 -> Nginx -> app</span>
      </div>
    </div>
    <div class="quest-tags">${tags}</div>
    <ul class="quest-log">${state.logs.map((item) => `<li>${item}</li>`).join('')}</ul>
    ${restartMarkup}
  `;

  const restartButton = document.getElementById('network-stack-quest-restart');
  if (restartButton) {
    restartButton.onclick = () => {
      if (gameEnv.game?.returnHome) {
        gameEnv.game.returnHome();
      }
    };
  }
}

function showMessage(entity, message) {
  if (entity.dialogueSystem) {
    entity.dialogueSystem.showDialogue(message, entity.spriteData?.id || '', entity.spriteData?.src || null, entity.spriteData);
  }
}

function takeDamage(entity, message) {
  const state = entity.gameEnv.networkQuestState;
  state.integrity -= 1;
  addLog(state, message);
  if (state.integrity <= 0) {
    state.integrity = 0;
    state.objective = 'Packet lost. Restart the mission and rebuild the stack correctly.';
  }
  renderHud(entity.gameEnv);
}

function registerToken(entity, key, message) {
  const state = entity.gameEnv.networkQuestState;
  if (state.integrity <= 0 || state.completed) {
    showMessage(entity, 'The packet is no longer moving. Restart the mission to continue.');
    return;
  }
  if (state.tokens[key]) {
    showMessage(entity, `Already collected. ${message}`);
    return;
  }

  state.tokens[key] = true;
  entity.visible = false;
  entity.update();
  addLog(state, message);
  syncBarriers(entity.gameEnv);
  showMessage(entity, message);
}

function registerPayload(entity, bytes) {
  const state = entity.gameEnv.networkQuestState;
  if (state.integrity <= 0 || state.completed) {
    showMessage(entity, 'The payload run is over. Restart the mission to rebuild the segment.');
    return;
  }
  if (!state.tokens.tcp) {
    showMessage(entity, 'Take the TCP key first. Transport owns sequencing, ports, acknowledgments, and retransmission.');
    return;
  }
  if (entity.collected) {
    showMessage(entity, `This fragment was already packed. Current payload: ${state.payloadBytes} bytes.`);
    return;
  }

  entity.collected = true;
  entity.visible = false;
  entity.update();
  state.payloadBytes += bytes;
  addLog(state, `Packed ${bytes} bytes. Current TCP payload is ${state.payloadBytes} bytes.`);

  if (state.payloadBytes === state.mtuLimit) {
    addLog(state, 'MTU checkpoint cleared: 1500-byte frame budget leaves a 1460-byte TCP payload.');
    showMessage(entity, 'Exact fit. With MTU 1500 and 20-byte IP + 20-byte TCP headers, you filled the 1460-byte TCP payload budget.');
  } else {
    showMessage(entity, `${bytes} bytes packed. Keep building toward exactly 1460 bytes for the Transport gate.`);
  }

  syncBarriers(entity.gameEnv);
}

function talkArchivist() {
  const state = this.gameEnv.networkQuestState;
  const appReady = state.tokens.fetch && state.tokens.tls && state.tokens.session;
  if (!appReady) {
    showMessage(this, 'OSI is seven layers because it teaches jobs separately. TCP/IP is four layers because real stacks usually merge OSI 5, 6, and 7 into Application. Bring me those three client-side tokens first.');
    return;
  }
  addLog(state, 'Model checkpoint cleared: OSI 5-7 mapped to TCP/IP Application.');
  syncBarriers(this.gameEnv);
  showMessage(this, 'Correct. Application, Presentation, and Session are distinct in OSI but usually discussed together as TCP/IP Application in real deployment diagrams.');
}

function talkTransportChief() {
  const state = this.gameEnv.networkQuestState;
  if (!state.tokens.tcp) {
    takeDamage(this, 'Integrity lost: tried to enter Transport without the TCP key.');
    showMessage(this, 'Transport is not optional. Without TCP, your browser loses sequencing, acknowledgments, retransmission, and the destination port.');
    return;
  }
  if (state.payloadBytes !== state.mtuLimit) {
    takeDamage(this, `Integrity lost: MTU math was wrong at ${state.payloadBytes} bytes instead of 1460.`);
    showMessage(this, `Your payload is ${state.payloadBytes} bytes. MTU 1500 minus 20-byte IPv4 and 20-byte TCP headers leaves 1460 bytes for TCP data.`);
    return;
  }
  addLog(state, 'Transport lane opened: TCP key and MTU math are both correct.');
  syncBarriers(this.gameEnv);
  showMessage(this, 'Transport approved. The segment is correctly formed and small enough to cross the Ethernet MTU without fragmentation.');
}

function talkRouter() {
  const state = this.gameEnv.networkQuestState;
  if (!state.tokens.route) {
    showMessage(this, 'Routers do not inspect your JSON meaning. They forward toward the destination IP. Bring the route map token first.');
    return;
  }
  showMessage(this, 'Route acknowledged. This is where the packet becomes an internet journey across Wi-Fi, the ISP, and cloud infrastructure toward AWS.');
}

function talkBackend() {
  const state = this.gameEnv.networkQuestState;
  if (state.integrity <= 0) {
    showMessage(this, 'The request did not survive. Rebuild the packet and try again.');
    return;
  }
  if (!(state.tokens.route && state.tokens.proxy && state.tokens.tcp && state.payloadBytes === state.mtuLimit)) {
    takeDamage(this, 'Integrity lost: attempted backend delivery before the route and reverse-proxy path were complete.');
    showMessage(this, 'The backend refuses the request because the path is incomplete. You still need routing, reverse proxy, or Transport work.');
    return;
  }

  state.completed = true;
  addLog(state, 'Deployment complete: browser request reached Nginx on EC2 and returned through the stack.');
  syncBarriers(this.gameEnv);
  showMessage(this, 'Mission complete. Your project request now has a real story: browser fetch(), DNS/TLS, TCP reliability, IP routing, Nginx reverse proxy, and finally the backend app.');
}

class NetworkStackQuestLevel {
  constructor(gameEnv) {
    const state = createQuestState();
    gameEnv.networkQuestState = state;
    const path = gameEnv.path;
    const width = gameEnv.innerWidth;
    const height = gameEnv.innerHeight;

    const playerData = {
      id: 'Packet Runner',
      src: path + '/images/gamify/chillguy.png',
      SCALE_FACTOR: 5,
      STEP_FACTOR: 950,
      ANIMATION_RATE: 40,
      INIT_POSITION: { x: width * 0.04, y: height * 0.72 },
      pixels: { height: 512, width: 384 },
      orientation: { rows: 4, columns: 3 },
      down: { row: 0, start: 0, columns: 3 },
      downRight: { row: 1, start: 0, columns: 3, rotate: Math.PI / 16 },
      downLeft: { row: 2, start: 0, columns: 3, rotate: -Math.PI / 16 },
      right: { row: 1, start: 0, columns: 3 },
      left: { row: 2, start: 0, columns: 3 },
      up: { row: 3, start: 0, columns: 3 },
      upRight: { row: 1, start: 0, columns: 3, rotate: -Math.PI / 16 },
      upLeft: { row: 2, start: 0, columns: 3, rotate: Math.PI / 16 },
      hitbox: { widthPercentage: 0.45, heightPercentage: 0.2 },
      keypress: { up: 87, left: 65, down: 83, right: 68 }
    };

    const bgData = {
      name: 'network_stack_quest_bg',
      src: path + '/images/gamify/comics/network-stack/7-layers-of-osi-model.png'
    };

    const clientGate = {
      id: 'client-gate',
      x: 0.30,
      y: 0.16,
      width: 0.02,
      height: 0.72,
      visible: true,
      color: 'rgba(249, 115, 22, 0.48)',
      zIndex: 15
    };

    const transportGate = {
      id: 'transport-gate',
      x: 0.58,
      y: 0.16,
      width: 0.02,
      height: 0.72,
      visible: true,
      color: 'rgba(56, 189, 248, 0.48)',
      zIndex: 15
    };

    const backendGate = {
      id: 'backend-gate',
      x: 0.83,
      y: 0.16,
      width: 0.02,
      height: 0.72,
      visible: true,
      color: 'rgba(34, 197, 94, 0.48)',
      zIndex: 15
    };

    state.barriers = {
      clientGate,
      transportGate,
      backendGate
    };

    const appMentor = {
      ...baseSpriteData('Client Mentor', npcSprite('APP', '#f97316'), 9, { x: width * 0.08, y: height * 0.50 }),
      greeting: 'Start on the client side. Collect the three tokens that represent building a real web request.',
      dialogues: [
        'Layer 7 Application is where your browser code calls fetch().',
        'Layer 6 Presentation is where TLS, encoding, and compression are explained conceptually.',
        'Layer 5 Session tracks the conversation, even if TCP/IP usually groups it into Application.'
      ],
      interact: function() {
        showMessage(this, 'Your project uses browser JavaScript first. Think real deployment: fetch() from GitHub Pages, then DNS/TLS, then TCP and IP.');
      }
    };

    const archivist = {
      ...baseSpriteData('TCP/IP Archivist', npcSprite('MAP', '#0ea5e9'), 9, { x: width * 0.24, y: height * 0.34 }),
      greeting: 'OSI teaches seven jobs. TCP/IP explains the practical internet stack.',
      dialogues: [
        'Do not pretend the models are identical. They overlap, but they are not the same diagram.',
        'In this lesson, OSI Layers 5 through 7 are conceptually important because students confuse them.',
        'For real deployment debugging, TCP/IP is usually the faster model.'
      ],
      interact: talkArchivist
    };

    const transportChief = {
      ...baseSpriteData('Transport Chief', npcSprite('TCP', '#38bdf8'), 9, { x: width * 0.44, y: height * 0.34 }),
      greeting: 'Transport only opens for a well-formed segment.',
      dialogues: [
        'TCP owns reliability: ports, sequencing, acknowledgments, retransmission, and flow control.',
        'MTU math matters because the request is still made of bytes.',
        'Common Ethernet MTU is 1500 bytes. IPv4 and TCP headers often leave 1460 bytes for payload.'
      ],
      interact: talkTransportChief
    };

    const routerNpc = {
      ...baseSpriteData('Router Relay', npcSprite('IP', '#22c55e'), 9, { x: width * 0.67, y: height * 0.34 }),
      greeting: 'Now the packet must cross the internet toward AWS.',
      dialogues: [
        'Routers forward by destination IP and next hop, not by your API meaning.',
        'MAC addresses change each local hop. IP addresses stay end to end.',
        'Weak Wi-Fi, packet loss, or bad routing can break a correct app.'
      ],
      interact: talkRouter
    };

    const backendDock = {
      ...baseSpriteData('Backend Dock', npcSprite('EC2', '#16a34a'), 9, { x: width * 0.91, y: height * 0.50 }),
      greeting: 'Final checkpoint: deployed backend behind Nginx.',
      dialogues: [
        'Nginx listens on 80 and 443, terminates HTTPS, and forwards to internal services.',
        'Your Flask or Spring app usually listens on an internal port such as 8587.',
        'The response climbs the stack in reverse on the way back to the browser.'
      ],
      interact: talkBackend
    };

    const aiDebugger = {
      ...baseSpriteData('AI Debugger', path + '/images/gamify/wizard.png', 7, { x: width * 0.52, y: height * 0.05 }),
      greeting: 'I am your AI debugger. Ask me to compare the models, explain MTU, or place Nginx in the request path.',
      pixels: { width: 163, height: 185 },
      dialogues: [
        'Ask: why do OSI Layer 5 responsibilities still matter if TCP/IP groups them?',
        'Ask: how do 1500-byte MTU and 1460-byte TCP payload relate?',
        'Ask: where does Nginx fit between public traffic and the backend app?'
      ],
      expertise: 'deployment',
      chatHistory: [],
      knowledgeBase: {
        deployment: [
          {
            question: 'Why are Layers 5 through 7 grouped in TCP/IP?',
            answer: 'TCP/IP is a practical internet model, so session, presentation, and application concerns are usually discussed together inside Application.'
          },
          {
            question: 'Why does MTU matter in a deployment lesson?',
            answer: 'Because real requests are still split into bytes and segments, and oversized traffic must be segmented or fragmented before it crosses the network.'
          },
          {
            question: 'What does Nginx do in this lesson?',
            answer: 'It acts as the reverse proxy on the EC2 side, receiving public traffic on 80 or 443 and forwarding to the internal app service.'
          }
        ]
      },
      interact: function() {
        AiNpc.showInteraction(this);
      }
    };

    const collectibles = [
      {
        ...baseSpriteData('fetch() Token', tokenSprite('GET', '#f97316'), 12, { x: width * 0.12, y: height * 0.72 }),
        greeting: 'Collected: browser fetch() starts the request.',
        dialogues: ['Browser JavaScript is the first visible step in your deployed request story.'],
        interact: function() {
          registerToken(this, 'fetch', 'Collected fetch(): the browser can now generate the HTTP request from GitHub Pages.');
        }
      },
      {
        ...baseSpriteData('TLS Shield', tokenSprite('TLS', '#0ea5e9'), 12, { x: width * 0.18, y: height * 0.72 }),
        greeting: 'Collected: TLS protects the bytes in transit.',
        dialogues: ['HTTPS usually means Nginx or another proxy terminates TLS before forwarding to the app.'],
        interact: function() {
          registerToken(this, 'tls', 'Collected TLS: OSI Presentation responsibilities secure and encode the message.');
        }
      },
      {
        ...baseSpriteData('Session Pass', tokenSprite('S5', '#8b5cf6'), 12, { x: width * 0.24, y: height * 0.72 }),
        greeting: 'Collected: session state keeps the conversation coherent.',
        dialogues: ['WebSocket upgrades and login sessions are examples of why OSI Layer 5 still matters conceptually.'],
        interact: function() {
          registerToken(this, 'session', 'Collected Session: OSI Layer 5 matters academically even when TCP/IP groups it into Application.');
        }
      },
      {
        ...baseSpriteData('TCP Key', tokenSprite('TCP', '#38bdf8'), 12, { x: width * 0.38, y: height * 0.72 }),
        greeting: 'Collected: TCP adds reliability and destination ports.',
        dialogues: ['Source port to destination port 443 is a real deployment detail, not a trivia fact.'],
        interact: function() {
          registerToken(this, 'tcp', 'Collected TCP: the request now has sequencing, acknowledgments, and port-based delivery.');
        }
      },
      {
        ...baseSpriteData('Payload 600A', tokenSprite('600', '#f59e0b'), 13, { x: width * 0.45, y: height * 0.72 }),
        greeting: 'Packed 600 bytes.',
        dialogues: ['Segments are built from data, not magic.'],
        interact: function() {
          registerPayload(this, 600);
        }
      },
      {
        ...baseSpriteData('Payload 600B', tokenSprite('600', '#fb7185'), 13, { x: width * 0.51, y: height * 0.72 }),
        greeting: 'Packed 600 bytes.',
        dialogues: ['Keep packing data until the segment reaches the MTU-safe target.'],
        interact: function() {
          registerPayload(this, 600);
        }
      },
      {
        ...baseSpriteData('Payload 260', tokenSprite('260', '#14b8a6'), 13, { x: width * 0.57, y: height * 0.72 }),
        greeting: 'Packed 260 bytes.',
        dialogues: ['This finishes the MTU-safe 1460-byte payload.'],
        interact: function() {
          registerPayload(this, 260);
        }
      },
      {
        ...baseSpriteData('Route Map', tokenSprite('IP', '#22c55e'), 12, { x: width * 0.72, y: height * 0.72 }),
        greeting: 'Collected: destination IP controls the route.',
        dialogues: ['Routers care about the next hop and destination address.'],
        interact: function() {
          registerToken(this, 'route', 'Collected IP route map: the packet can now be forwarded hop by hop toward AWS.');
        }
      },
      {
        ...baseSpriteData('Nginx Pass', tokenSprite('NG', '#16a34a'), 12, { x: width * 0.78, y: height * 0.72 }),
        greeting: 'Collected: reverse proxy pass.',
        dialogues: ['Nginx is the deployment checkpoint between the public internet and the internal app service.'],
        interact: function() {
          registerToken(this, 'proxy', 'Collected Nginx pass: HTTPS traffic can now enter the reverse proxy and reach the backend app.');
        }
      }
    ];

    this.classes = [
      { class: GameEnvBackground, data: bgData },
      { class: Barrier, data: clientGate },
      { class: Barrier, data: transportGate },
      { class: Barrier, data: backendGate },
      { class: Player, data: playerData },
      { class: NPC, data: appMentor },
      { class: NPC, data: archivist },
      { class: NPC, data: transportChief },
      { class: NPC, data: routerNpc },
      { class: NPC, data: backendDock },
      { class: NPC, data: aiDebugger },
      ...collectibles.map((data) => ({ class: Collectible, data }))
    ];
  }

  initialize() {
    const barrierById = (id) => this.gameEnv.gameObjects.find((obj) => obj?.canvas?.id === id);
    this.gameEnv.networkQuestState.barriers = {
      clientGate: barrierById('client-gate'),
      transportGate: barrierById('transport-gate'),
      backendGate: barrierById('backend-gate')
    };
    syncBarriers(this.gameEnv);
    renderHud(this.gameEnv);
  }

  update() {
    renderHud(this.gameEnv);
  }

  destroy() {
    const hud = document.getElementById(HUD_ID);
    if (hud) {
      hud.remove();
    }
  }
}

export const gameLevelClasses = [NetworkStackQuestLevel];
export { GameControl };
