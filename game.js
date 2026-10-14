// חוברת בירור מידות לשידוכים - מנוע משחק הדייטים הזוגי

// Web Audio API Synthesizer (צלילים עשירים ללא קבצים חיצוניים)
class GameAudio {
  constructor() {
    this.ctx = null;
    this.enabled = true;
  }

  init() {
    if (!this.ctx && (window.AudioContext || window.webkitAudioContext)) {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      this.ctx = new AudioCtx();
    }
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  playTone(freq, type = 'sine', duration = 0.15, gain = 0.1) {
    if (!this.enabled) return;
    try {
      this.init();
      if (!this.ctx) return;
      const osc = this.ctx.createOscillator();
      const gainNode = this.ctx.createGain();
      osc.type = type;
      osc.frequency.setValueAtTime(freq, this.ctx.currentTime);
      gainNode.gain.setValueAtTime(gain, this.ctx.currentTime);
      gainNode.gain.exponentialRampToValueAtTime(0.0001, this.ctx.currentTime + duration);
      osc.connect(gainNode);
      gainNode.connect(this.ctx.destination);
      osc.start();
      osc.stop(this.ctx.currentTime + duration);
    } catch (e) {
      // Audio autoplay policy fallback
    }
  }

  playFlip() {
    this.playTone(320, 'sine', 0.1, 0.08);
    setTimeout(() => this.playTone(480, 'sine', 0.12, 0.06), 40);
  }

  playCoinToss() {
    [600, 750, 900, 1100, 1300].forEach((f, i) => {
      setTimeout(() => this.playTone(f, 'triangle', 0.08, 0.05), i * 50);
    });
  }

  playReaction() {
    [523.25, 659.25, 783.99, 1046.5].forEach((f, i) => {
      setTimeout(() => this.playTone(f, 'sine', 0.2, 0.07), i * 65);
    });
  }

  playCelebration() {
    const notes = [440, 554, 659, 880, 1108, 1318];
    notes.forEach((f, i) => {
      setTimeout(() => this.playTone(f, 'triangle', 0.35, 0.09), i * 80);
    });
  }
}

// הרחבת ShidduchApp עם מנוע המשחק
(function() {
  if (typeof ShidduchApp === 'undefined') return;

  const audio = new GameAudio();

  // אתחול נתוני המשחק ב-ShidduchApp
  const origInit = ShidduchApp.prototype.initElements;
  ShidduchApp.prototype.initElements = function() {
    origInit.call(this);

    // הגדרות שחקנים
    this.player1Name = localStorage.getItem('shidduch_p1') || 'הוא';
    this.player2Name = localStorage.getItem('shidduch_p2') || 'היא';
    this.gameTier = localStorage.getItem('shidduch_game_tier') || 'tier1';
    this.gameCurrentTurn = localStorage.getItem('shidduch_game_turn') || 'p1'; // 'p1' (שואל את p2) או 'p2' (שואלת את p1)
    this.gameScore = parseInt(localStorage.getItem('shidduch_game_score') || '0', 10);
    this.gameQuestionsCompleted = parseInt(localStorage.getItem('shidduch_game_completed') || '0', 10);
    this.gameReactions = JSON.parse(localStorage.getItem('shidduch_game_reactions') || '{"inspire":0,"honest":0,"insight":0,"relate":0}');
    this.currentWildcard = null;
    this.isCoinFlipping = false;

    this.initGameQuestions();
  };

  ShidduchApp.prototype.initGameQuestions = function() {
    const tierData = this.data.gameConfig.tiers.find(t => t.id === this.gameTier) || this.data.gameConfig.tiers[0];
    let pool = [];
    if (tierData.questionIds && tierData.questionIds.length > 0) {
      pool = this.data.questions.filter(q => tierData.questionIds.includes(q.id));
    } else {
      pool = [...this.data.questions];
    }

    // ערבוב קלפים (Fisher-Yates)
    for (let i = pool.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [pool[i], pool[j]] = [pool[j], pool[i]];
    }

    this.gameQuestions = pool;
    this.gameIndex = 0;
  };

  ShidduchApp.prototype.startNewGame = function(tierId) {
    if (tierId) {
      this.gameTier = tierId;
      localStorage.setItem('shidduch_game_tier', tierId);
    }
    this.initGameQuestions();
    this.gameScore = 0;
    this.gameQuestionsCompleted = 0;
    this.gameReactions = { inspire: 0, honest: 0, insight: 0, relate: 0 };
    this.currentWildcard = null;
    this.saveGameState();
    audio.playFlip();
    this.renderGameMode();
  };

  ShidduchApp.prototype.saveGameState = function() {
    try {
      localStorage.setItem('shidduch_p1', this.player1Name);
      localStorage.setItem('shidduch_p2', this.player2Name);
      localStorage.setItem('shidduch_game_tier', this.gameTier);
      localStorage.setItem('shidduch_game_turn', this.gameCurrentTurn);
      localStorage.setItem('shidduch_game_score', this.gameScore.toString());
      localStorage.setItem('shidduch_game_completed', this.gameQuestionsCompleted.toString());
      localStorage.setItem('shidduch_game_reactions', JSON.stringify(this.gameReactions));
    } catch (e) {
      console.error('Error saving game state:', e);
    }
  };

  ShidduchApp.prototype.flipGameTurn = function(autoNext = false) {
    this.gameCurrentTurn = this.gameCurrentTurn === 'p1' ? 'p2' : 'p1';
    localStorage.setItem('shidduch_game_turn', this.gameCurrentTurn);
    audio.playFlip();
    if (autoNext) {
      this.nextGameCard();
    } else {
      this.renderGameMode();
    }
  };

  ShidduchApp.prototype.tossCoin = function() {
    if (this.isCoinFlipping) return;
    this.isCoinFlipping = true;
    audio.playCoinToss();

    const coinEl = document.getElementById('game-coin-element');
    if (coinEl) {
      coinEl.classList.remove('coin-flip-anim');
      void coinEl.offsetWidth; // trigger reflow
      coinEl.classList.add('coin-flip-anim');
    }

    setTimeout(() => {
      const winner = Math.random() < 0.5 ? 'p1' : 'p2';
      this.gameCurrentTurn = winner;
      this.isCoinFlipping = false;
      this.saveGameState();
      audio.playTone(880, 'sine', 0.2, 0.1);
      this.renderGameMode();
    }, 1200);
  };

  ShidduchApp.prototype.nextGameCard = function() {
    if (this.currentWildcard) {
      this.currentWildcard = null;
      this.renderGameMode();
      return;
    }

    this.gameIndex++;
    if (this.gameIndex >= this.gameQuestions.length) {
      this.gameIndex = 0;
    }

    // בדיקה האם להזריק קלף הפתעה כל 4 שאלות
    if (this.gameQuestionsCompleted > 0 && this.gameQuestionsCompleted % 4 === 0 && Math.random() < 0.7) {
      this.triggerWildcard();
      return;
    }

    this.isCardTipRevealed = false;
    audio.playFlip();
    this.renderGameMode();
  };

  ShidduchApp.prototype.skipGameQuestion = function() {
    audio.playTone(280, 'sine', 0.12, 0.05);
    this.gameIndex = (this.gameIndex + 1) % this.gameQuestions.length;
    this.isCardTipRevealed = false;
    this.renderGameMode();
  };

  ShidduchApp.prototype.triggerWildcard = function() {
    const list = this.data.gameConfig.wildcards;
    const randomCard = list[Math.floor(Math.random() * list.length)];
    this.currentWildcard = randomCard;
    audio.playTone(700, 'triangle', 0.25, 0.08);
    this.renderGameMode();
  };

  ShidduchApp.prototype.dismissWildcard = function() {
    this.currentWildcard = null;
    audio.playFlip();
    this.renderGameMode();
  };

  ShidduchApp.prototype.reactInGame = function(reactionId, event) {
    const reaction = this.data.gameConfig.reactions.find(r => r.id === reactionId);
    if (!reaction) return;

    this.gameScore += reaction.points;
    this.gameQuestionsCompleted++;
    this.gameReactions[reactionId] = (this.gameReactions[reactionId] || 0) + 1;
    this.saveGameState();

    audio.playReaction();

    // אפקט לב/כוכב צף במקום הלחיצה
    if (event) {
      const rect = event.currentTarget.getBoundingClientRect();
      const floater = document.createElement('div');
      floater.className = 'floating-heart text-3xl z-50';
      floater.style.left = `${rect.left + rect.width / 2}px`;
      floater.style.top = `${rect.top}px`;
      floater.textContent = reaction.emoji;
      document.body.appendChild(floater);
      setTimeout(() => floater.remove(), 1000);
    }

    // סימון אוטומטי של השאלה כנשאלה בדייט!
    const currentQ = this.gameQuestions[this.gameIndex];
    if (currentQ) {
      this.askedQuestions.add(currentQ.id);
      this.saveState();
    }

    // החלפת תור אוטומטית ומעבר לשאלה הבאה לאחר תגובה
    setTimeout(() => {
      this.gameCurrentTurn = this.gameCurrentTurn === 'p1' ? 'p2' : 'p1';
      this.nextGameCard();
    }, 450);
  };

  ShidduchApp.prototype.setPlayerNames = function(p1, p2) {
    this.player1Name = p1.trim() || 'הוא';
    this.player2Name = p2.trim() || 'היא';
    this.saveGameState();
    this.renderGameMode();
  };

  ShidduchApp.prototype.openPlayerSetupModal = function() {
    const p1 = prompt('הזן שם עבור שחקן 1 (הוא):', this.player1Name);
    if (p1 !== null) {
      const p2 = prompt('הזן שם עבור שחקן 2 (היא):', this.player2Name);
      if (p2 !== null) {
        this.setPlayerNames(p1, p2);
      }
    }
  };

  ShidduchApp.prototype.finishGameRound = function() {
    audio.playCelebration();
    if (typeof confetti === 'function') {
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
      });
    }

    const modal = document.getElementById('game-finish-modal');
    const summaryEl = document.getElementById('game-finish-summary');
    if (modal && summaryEl) {
      summaryEl.innerHTML = `
        <div class="space-y-4 text-center">
          <div class="text-4xl mb-2">🎉</div>
          <h3 class="text-2xl font-black text-slate-900 font-bold-hebrew">סבב שיחה מוצלח ומקרב!</h3>
          <p class="text-sm text-slate-600">
            השלמתם יחד <strong>${this.gameQuestionsCompleted}</strong> שאלות עומק, וצברתם <strong>${this.gameScore}</strong> נקודות חיבור הדדי!
          </p>
          <div class="grid grid-cols-2 gap-2 max-w-xs mx-auto text-xs font-bold pt-2">
            <div class="bg-amber-50 p-2.5 rounded-xl border border-amber-200">
              🌟 ${this.gameReactions.inspire || 0} תובנות השראה
            </div>
            <div class="bg-emerald-50 p-2.5 rounded-xl border border-emerald-200">
              💚 ${this.gameReactions.honest || 0} רגעי כנות
            </div>
            <div class="bg-blue-50 p-2.5 rounded-xl border border-blue-200">
              💡 ${this.gameReactions.insight || 0} נקודות למחשבה
            </div>
            <div class="bg-purple-50 p-2.5 rounded-xl border border-purple-200">
              🤝 ${this.gameReactions.relate || 0} רגעי הזדהות
            </div>
          </div>
        </div>
      `;
      modal.classList.remove('hidden');
    }
  };

  ShidduchApp.prototype.closeGameFinishModal = function() {
    const modal = document.getElementById('game-finish-modal');
    if (modal) modal.classList.add('hidden');
  };

  // רינדור ממשק המשחק
  ShidduchApp.prototype.renderGameMode = function() {
    const container = document.getElementById('tab-game');
    if (!container) return;

    const currentTier = this.data.gameConfig.tiers.find(t => t.id === this.gameTier) || this.data.gameConfig.tiers[0];
    const isP1Asking = this.gameCurrentTurn === 'p1';
    const askingName = isP1Asking ? this.player1Name : this.player2Name;
    const answeringName = isP1Asking ? this.player2Name : this.player1Name;
    
    // ניסוח מותאם לפי מי שעונה (אם גבר שואל אשה - נוסח נקבה; אם אשה שואלת גבר - נוסח זכר)
    const effectiveGender = isP1Asking ? 'female' : 'male';
    const savedGenderMode = this.genderMode;
    this.genderMode = effectiveGender;

    // האם מוצג קלף הפתעה (Wildcard) או שאלה רגילה
    let cardContentHtml = '';

    if (this.currentWildcard) {
      const w = this.currentWildcard;
      cardContentHtml = `
        <div class="wildcard-card rounded-3xl p-6 sm:p-10 text-center relative overflow-hidden animate-in zoom-in duration-300">
          <div class="inline-block bg-amber-500 text-white font-extrabold text-xs px-3.5 py-1 rounded-full uppercase tracking-wider mb-3 shadow-xs">
            🎁 קלף הפתעה זוגי!
          </div>
          <div class="text-5xl sm:text-6xl mb-4 animate-bounce">${w.icon}</div>
          <h2 class="text-2xl sm:text-4xl font-black font-bold-hebrew text-slate-900 mb-4">
            ${w.title}
          </h2>
          <p class="text-base sm:text-xl font-medium text-slate-800 leading-relaxed max-w-xl mx-auto mb-8 bg-white/70 backdrop-blur-xs p-5 rounded-2xl border border-amber-300/80 shadow-2xs">
            ${w.instruction}
          </p>
          <div class="flex items-center justify-center gap-3">
            <button onclick="app.dismissWildcard()" class="bg-amber-600 hover:bg-amber-700 text-white font-bold px-6 py-3 rounded-2xl transition shadow-md flex items-center gap-2">
              <span>ביצענו! המשך במשחק ⬅</span>
            </button>
          </div>
        </div>
      `;
    } else {
      const q = this.gameQuestions[this.gameIndex] || this.data.questions[0];
      const adaptedQuestionText = this.adaptQuestionText(q.text);
      const chapter = this.data.chapters.find(c => c.id === q.chapterId);
      const hasNote = !!this.questionNotes[q.id];

      cardContentHtml = `
        <div class="bg-white rounded-3xl p-6 sm:p-10 border-2 ${isP1Asking ? 'border-emerald-300 glow-turn-p1' : 'border-amber-300 glow-turn-p2'} shadow-xl relative overflow-hidden transition-all duration-300">
          
          <!-- Turn Indicator Badge -->
          <div class="flex flex-wrap items-center justify-between gap-3 mb-6 pb-4 border-b border-slate-100">
            <div class="flex items-center gap-2.5">
              <span class="w-3.5 h-3.5 rounded-full ${isP1Asking ? 'bg-emerald-500 ring-4 ring-emerald-100 animate-pulse' : 'bg-amber-500 ring-4 ring-amber-100 animate-pulse'}"></span>
              <span class="text-sm sm:text-base font-extrabold text-slate-900 font-bold-hebrew">
                תור <span class="${isP1Asking ? 'text-emerald-700' : 'text-amber-700'} underline">${askingName}</span> לשאול את <span class="text-slate-800 font-bold">${answeringName}</span>
              </span>
            </div>

            <div class="flex items-center gap-2">
              <span class="text-xs bg-slate-100 text-slate-600 font-bold px-2.5 py-1 rounded-full">
                שאלה ${this.gameIndex + 1} מתוך ${this.gameQuestions.length}
              </span>
              <button onclick="app.triggerWildcard()" title="שלב קלף הפתעה עכשיו" class="text-xs bg-purple-50 hover:bg-purple-100 text-purple-800 font-bold px-3 py-1 rounded-full border border-purple-200 transition flex items-center gap-1">
                <span>🎁</span>
                <span class="hidden sm:inline">קלף הפתעה</span>
              </button>
            </div>
          </div>

          <!-- Question Body -->
          <div class="py-6 sm:py-8 text-center sm:text-right">
            <span class="text-xs uppercase tracking-wider ${isP1Asking ? 'text-emerald-600' : 'text-amber-600'} font-extrabold block mb-2">
              ${askingName}, שאל/י את ${answeringName}:
            </span>
            <h2 class="text-2xl sm:text-4xl font-black font-black-hebrew text-slate-900 leading-snug tracking-tight mb-4">
              ${adaptedQuestionText}
            </h2>

            <div class="inline-flex items-center gap-2 text-xs text-slate-500 font-medium bg-slate-50 px-3 py-1 rounded-lg">
              <span>נושא: ${chapter ? chapter.name : ''}</span>
              ${q.isGolden ? '<span class="text-amber-600 font-bold">• שאלת זהב ⭐</span>' : ''}
            </div>
          </div>

          <!-- Listener Feedback & Reaction Buttons (Gamification!) -->
          <div class="mt-4 pt-6 border-t border-slate-100">
            <span class="text-xs font-bold text-slate-500 block mb-3 text-center sm:text-right">
              ${askingName}, איך הייתה התשובה של ${answeringName}? (בחרו תגובה כדי לנקד ולהעביר תור):
            </span>
            <div class="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
              ${this.data.gameConfig.reactions.map(r => `
                <button 
                  onclick="app.reactInGame('${r.id}', event)" 
                  class="bg-slate-50 hover:bg-amber-50 hover:border-amber-300 border border-slate-200 p-2.5 rounded-2xl text-xs font-bold text-slate-800 transition flex items-center justify-center gap-1.5 shadow-2xs hover:scale-[1.02] active:scale-95"
                >
                  <span class="text-base">${r.emoji}</span>
                  <span>${r.label}</span>
                </button>
              `).join('')}
            </div>
          </div>

          <!-- Interviewer Hint Accordion Toggle -->
          <div class="mt-4 pt-3 flex items-center justify-between text-xs border-t border-slate-50">
            <button onclick="app.toggleCardTip()" class="text-amber-700 hover:text-amber-800 font-bold flex items-center gap-1.5 py-1">
              <span>💡</span>
              <span>רמזים למראיין/ת (תשובה רצויה, נורות אדומות)</span>
            </button>

            <button onclick="app.skipGameQuestion()" class="text-slate-400 hover:text-slate-600 font-bold">
              דלג שאלה ↷
            </button>
          </div>

          <!-- Hidden Interviewer Guide Box -->
          <div id="card-tips-box" class="${this.isCardTipRevealed ? '' : 'hidden'} mt-4 bg-slate-50 rounded-2xl p-4 border border-slate-200 text-xs space-y-3 text-right">
            ${q.sampleAnswer ? `
              <div class="bg-white p-3 rounded-xl border border-slate-200">
                <span class="font-bold text-slate-800 block mb-0.5">💬 תשובה לדוגמה:</span>
                <p class="text-slate-600 italic">“${q.sampleAnswer}”</p>
              </div>
            ` : ''}

            ${q.desirable ? `
              <div class="bg-emerald-50 border border-emerald-200 p-2.5 rounded-xl">
                <span class="font-bold text-emerald-800 block">🟢 מה רצוי לראות:</span>
                <p class="text-emerald-950">${q.desirable}</p>
              </div>
            ` : ''}

            ${q.redFlag ? `
              <div class="bg-rose-50 border border-rose-200 p-2.5 rounded-xl">
                <span class="font-bold text-rose-800 block">🔴 נורה אדומה:</span>
                <p class="text-rose-950 font-semibold">“${q.redFlag}”</p>
              </div>
            ` : ''}
          </div>

        </div>
      `;
    }

    // שחזור מגדר מקורי
    this.genderMode = savedGenderMode;

    // בניית הממשק השלם של מסך המשחק
    container.innerHTML = `
      <div class="max-w-4xl mx-auto space-y-6">
        
        <!-- Game Arena Top Bar: Players, Level, Score -->
        <div class="bg-white rounded-3xl p-4 sm:p-6 border border-slate-200 shadow-2xs">
          <div class="flex flex-wrap items-center justify-between gap-4">
            
            <!-- Players Info & Coin Toss -->
            <div class="flex items-center gap-3">
              <div id="game-coin-element" onclick="app.tossCoin()" title="לחצו להטלת מטבע - קביעת תור אקראית!" class="w-12 h-12 rounded-2xl bg-gradient-to-br from-amber-400 to-amber-600 text-white flex items-center justify-center text-xl font-black shadow-md cursor-pointer hover:scale-105 active:scale-95 transition">
                🪙
              </div>
              <div>
                <div class="flex items-center gap-2">
                  <span class="text-base sm:text-lg font-black font-bold-hebrew text-slate-900">
                    ${this.player1Name} & ${this.player2Name}
                  </span>
                  <button onclick="app.openPlayerSetupModal()" title="ערוך שמות שחקנים" class="text-xs text-slate-400 hover:text-amber-600">
                    ✏️
                  </button>
                </div>
                <div class="text-xs text-slate-500 font-medium">
                  תור נוכחי: <strong class="${isP1Asking ? 'text-emerald-700' : 'text-amber-700'}">${askingName}</strong>
                </div>
              </div>
            </div>

            <!-- Tier Selector Pills -->
            <div class="flex items-center gap-1.5 flex-wrap">
              ${this.data.gameConfig.tiers.map(t => `
                <button 
                  onclick="app.startNewGame('${t.id}')" 
                  class="px-3 py-1.5 rounded-xl text-xs font-bold transition ${this.gameTier === t.id ? 'bg-amber-600 text-white shadow-xs' : 'bg-slate-100 text-slate-700 hover:bg-slate-200'}"
                >
                  ${t.badge}
                </button>
              `).join('')}
            </div>

            <!-- Score & Finish Action -->
            <div class="flex items-center gap-3">
              <div class="bg-amber-50 px-3.5 py-1.5 rounded-2xl border border-amber-200 text-center">
                <span class="text-[10px] uppercase font-bold text-amber-800 block">נקודות חיבור</span>
                <span class="text-lg font-black text-amber-900">${this.gameScore}</span>
              </div>
              <button onclick="app.finishGameRound()" class="bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs sm:text-sm px-4 py-2 rounded-xl transition shadow-xs">
                סיום סבב 🏁
              </button>
            </div>

          </div>
        </div>

        <!-- MAIN GAME CARD ARENA -->
        <div class="max-w-3xl mx-auto">
          ${cardContentHtml}
        </div>

        <!-- GAME CONTROLS ROW -->
        <div class="max-w-3xl mx-auto flex items-center justify-between gap-3">
          <button onclick="app.flipGameTurn()" class="flex-1 bg-white hover:bg-slate-50 text-slate-800 border-2 border-slate-200 py-3.5 px-4 rounded-2xl font-bold transition flex items-center justify-center gap-2 shadow-xs">
            <span>🔄</span>
            <span>העבר תור ל${answeringName}</span>
          </button>

          <button onclick="app.tossCoin()" class="bg-amber-100 hover:bg-amber-200 text-amber-900 border border-amber-300 py-3.5 px-5 rounded-2xl font-bold transition flex items-center justify-center gap-1.5 shadow-xs" title="הטלת מטבע לקביעת מי שואל">
            <span>🪙</span>
            <span class="hidden sm:inline">הטלת מטבע</span>
          </button>

          <button onclick="app.nextGameCard()" class="flex-1 bg-amber-600 hover:bg-amber-700 text-white py-3.5 px-4 rounded-2xl font-bold transition flex items-center justify-center gap-2 shadow-md">
            <span>שאלה הבאה</span>
            <span>⬅</span>
          </button>
        </div>

      </div>
    `;
  };

  // עטיפת הרינדור הראשית כדי לרנדר גם את המשחק
  const origRender = ShidduchApp.prototype.render;
  ShidduchApp.prototype.render = function() {
    origRender.call(this);
    if (this.activeTab === 'game') {
      this.renderGameMode();
    }
  };

})();
