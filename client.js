// חוברת בירור מידות לשידוכים - לוגיקה אינטראקטיבית ראשית

class ShidduchApp {
  constructor() {
    this.data = SHIDDUCH_DATA;
    this.activeTab = 'game';
    this.genderMode = 'female'; // 'female' (שואל את בת הזוג), 'male' (שואלת את בן הזוג), 'original'
    this.selectedChapter = 'all';
    this.statusFilter = 'all'; // 'all', 'golden', 'starred', 'asked', 'redflag'
    this.searchQuery = '';
    this.currentCardIndex = 0;
    this.isCardTipRevealed = false;
    this.deckAnimationClass = '';
    
    // Timer for Date Mode
    this.dateTimerSeconds = 0;
    this.dateTimerInterval = null;
    this.isTimerRunning = false;

    // Load LocalStorage
    this.loadState();

    // Set font theme
    this.setFontTheme(this.fontTheme);

    // DOM Elements
    this.initElements();
    this.bindEvents();

    // Initial render
    this.render();
  }

  loadState() {
    try {
      this.starredQuestions = new Set(JSON.parse(localStorage.getItem('shidduch_starred') || '[]'));
      this.askedQuestions = new Set(JSON.parse(localStorage.getItem('shidduch_asked') || '[]'));
      this.questionNotes = JSON.parse(localStorage.getItem('shidduch_notes') || '{}');
      this.matrixRatings = JSON.parse(localStorage.getItem('shidduch_matrix') || '{}');
      this.matrixNotes = JSON.parse(localStorage.getItem('shidduch_matrix_notes') || '{}');
      this.selectedExternalQuestions = new Set(JSON.parse(localStorage.getItem('shidduch_external') || '[]'));
      this.genderMode = localStorage.getItem('shidduch_gender') || 'female';
      this.fontTheme = localStorage.getItem('shidduch_font_theme') || 'rubik';
    } catch (e) {
      console.error('Error loading state:', e);
      this.starredQuestions = new Set();
      this.askedQuestions = new Set();
      this.questionNotes = {};
      this.matrixRatings = {};
      this.matrixNotes = {};
      this.selectedExternalQuestions = new Set();
      this.genderMode = 'female';
      this.fontTheme = 'rubik';
    }
  }

  saveState() {
    try {
      localStorage.setItem('shidduch_starred', JSON.stringify([...this.starredQuestions]));
      localStorage.setItem('shidduch_asked', JSON.stringify([...this.askedQuestions]));
      localStorage.setItem('shidduch_notes', JSON.stringify(this.questionNotes));
      localStorage.setItem('shidduch_matrix', JSON.stringify(this.matrixRatings));
      localStorage.setItem('shidduch_matrix_notes', JSON.stringify(this.matrixNotes));
      localStorage.setItem('shidduch_external', JSON.stringify([...this.selectedExternalQuestions]));
      localStorage.setItem('shidduch_gender', this.genderMode);
      localStorage.setItem('shidduch_font_theme', this.fontTheme);
    } catch (e) {
      console.error('Error saving state:', e);
    }
  }

  setFontTheme(theme) {
    this.fontTheme = theme || 'rubik';
    document.body.classList.remove('font-theme-rubik', 'font-theme-heebo', 'font-theme-secular');
    document.body.classList.add(`font-theme-${this.fontTheme}`);
    try {
      localStorage.setItem('shidduch_font_theme', this.fontTheme);
    } catch(e) {}
    const sel = document.getElementById('font-theme-select');
    if (sel) sel.value = this.fontTheme;
  }

  initElements() {
    this.tabButtons = document.querySelectorAll('[data-tab-target]');
    this.tabPanels = document.querySelectorAll('.tab-panel');
    this.genderSelectors = document.querySelectorAll('[name="gender-mode"]');
  }

  bindEvents() {
    // Navigation Tabs
    this.tabButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        const targetTab = btn.getAttribute('data-tab-target');
        this.switchTab(targetTab);
      });
    });

    // Gender Switcher
    this.genderSelectors.forEach(radio => {
      radio.addEventListener('change', (e) => {
        this.genderMode = e.target.value;
        this.saveState();
        this.render();
      });
    });

    // Search bar
    const searchInput = document.getElementById('search-input');
    if (searchInput) {
      searchInput.addEventListener('input', (e) => {
        this.searchQuery = e.target.value.trim().toLowerCase();
        this.renderQuestionsList();
      });
    }

    // Reset Search
    const clearSearchBtn = document.getElementById('clear-search-btn');
    if (clearSearchBtn) {
      clearSearchBtn.addEventListener('click', () => {
        if (searchInput) searchInput.value = '';
        this.searchQuery = '';
        this.renderQuestionsList();
      });
    }

    // Window keyboard shortcuts for date mode
    window.addEventListener('keydown', (e) => {
      if (this.activeTab === 'date-mode') {
        if (e.key === 'ArrowLeft') this.nextCard();
        if (e.key === 'ArrowRight') this.prevCard();
        if (e.key === ' ') {
          e.preventDefault();
          this.toggleCardTip();
        }
      }
    });
  }

  switchTab(tabName) {
    this.activeTab = tabName;
    this.tabPanels.forEach(panel => {
      if (panel.id === `tab-${tabName}`) {
        panel.classList.remove('hidden');
      } else {
        panel.classList.add('hidden');
      }
    });

    this.tabButtons.forEach(btn => {
      const isTarget = btn.getAttribute('data-tab-target') === tabName;
      if (isTarget) {
        btn.classList.add('bg-amber-600', 'text-white', 'shadow-md');
        btn.classList.remove('text-slate-600', 'hover:bg-slate-100');
      } else {
        btn.classList.remove('bg-amber-600', 'text-white', 'shadow-md');
        btn.classList.add('text-slate-600', 'hover:bg-slate-100');
      }
    });

    window.scrollTo({ top: 0, behavior: 'smooth' });
    this.render();
  }

  // Smart Hebrew Gender Conjugation
  adaptQuestionText(text) {
    if (this.genderMode === 'original') return text;

    let res = text;

    if (this.genderMode === 'female') {
      // Wording when a man is asking his prospective bride
      res = res.replace(/ספר\/י/g, 'ספרי');
      res = res.replace(/^ספר /g, 'ספרי ');
      res = res.replace(/בן\/בת הזוג/g, 'בן הזוג');
      res = res.replace(/\bאתה\b/g, 'את');
      res = res.replace(/\bשאתה\b/g, 'שאת');
      res = res.replace(/\bכשאתה\b/g, 'כשאת');
      res = res.replace(/\bכועס\b/g, 'כועסת');
      res = res.replace(/\bעייף\b/g, 'עייפה');
      res = res.replace(/\bסבלני\b/g, 'סבלנית');
      res = res.replace(/\bיכול\b/g, 'יכולה');
      res = res.replace(/\bמסוגל\b/g, 'מסוגלת');
      res = res.replace(/\bצודק\b/g, 'צודקת');
      res = res.replace(/\bחרוץ\b/g, 'חרוצה');
      res = res.replace(/\bאחראי\b/g, 'אחראית');
      res = res.replace(/\bמסודר\b/g, 'מסודרת');
      res = res.replace(/\bיציב\b/g, 'יציבה');
      res = res.replace(/\bשמח\b/g, 'שמחה');
      res = res.replace(/\bנדיב\b/g, 'נדיבה');
      res = res.replace(/\bמתנהג\b/g, 'מתנהגת');
      res = res.replace(/\bמגיב\b/g, 'מגיבה');
      res = res.replace(/\bמרגיש\b/g, 'מרגישה');
      res = res.replace(/\bתגיב\b/g, 'תגיבי');
      res = res.replace(/\bתעשה\b/g, 'תעשי');
      res = res.replace(/\bתספר\b/g, 'תספרי');
      res = res.replace(/\bתרצה\b/g, 'תרצי');
      res = res.replace(/\bתחשוב\b/g, 'תחשבי');
      res = res.replace(/\bמוכן\b/g, 'מוכנה');
      res = res.replace(/\bפגעת\b/g, 'פגעת');
      res = res.replace(/\bגאה\b/g, 'גאה');
      res = res.replace(/\bשלך\b/g, 'שלך');
      res = res.replace(/\bאיתך\b/g, 'איתך');
      res = res.replace(/\bעליך\b/g, 'עליך');
      res = res.replace(/\bאותך\b/g, 'אותך');
      res = res.replace(/\bאדם נדיב בעיניך\b/g, 'אדם נדיב בעינייך');
    } else if (this.genderMode === 'male') {
      // Wording when a woman is asking her prospective groom
      res = res.replace(/ספר\/י/g, 'ספר');
      res = res.replace(/בן\/בת הזוג/g, 'בת הזוג');
    }

    return res;
  }

  // ---------------- DATE MODE (CARD DECK) ----------------

  getActiveQuestionsForDeck() {
    let list = this.data.questions;
    if (this.selectedChapter !== 'all') {
      list = list.filter(q => q.chapterId === parseInt(this.selectedChapter));
    }
    if (this.statusFilter === 'golden') {
      list = list.filter(q => q.isGolden);
    } else if (this.statusFilter === 'starred') {
      list = list.filter(q => this.starredQuestions.has(q.id));
    } else if (this.statusFilter === 'unasked') {
      list = list.filter(q => !this.askedQuestions.has(q.id));
    }
    return list;
  }

  nextCard() {
    const list = this.getActiveQuestionsForDeck();
    if (list.length === 0) return;
    this.deckAnimationClass = 'slide-next';
    this.isCardTipRevealed = false;
    this.currentCardIndex = (this.currentCardIndex + 1) % list.length;
    this.renderDateMode();
  }

  prevCard() {
    const list = this.getActiveQuestionsForDeck();
    if (list.length === 0) return;
    this.deckAnimationClass = 'slide-prev';
    this.isCardTipRevealed = false;
    this.currentCardIndex = (this.currentCardIndex - 1 + list.length) % list.length;
    this.renderDateMode();
  }

  randomCard() {
    const list = this.getActiveQuestionsForDeck();
    if (list.length <= 1) return;
    let nextIdx = Math.floor(Math.random() * list.length);
    if (nextIdx === this.currentCardIndex) {
      nextIdx = (nextIdx + 1) % list.length;
    }
    this.deckAnimationClass = 'slide-next';
    this.isCardTipRevealed = false;
    this.currentCardIndex = nextIdx;
    this.renderDateMode();
  }

  toggleCardTip() {
    this.isCardTipRevealed = !this.isCardTipRevealed;
    const tipsBox = document.getElementById('card-tips-box');
    const toggleBtnText = document.getElementById('toggle-tip-btn-text');
    if (tipsBox) {
      if (this.isCardTipRevealed) {
        tipsBox.classList.remove('hidden');
        if (toggleBtnText) toggleBtnText.textContent = 'הסתר רמזים ומדריך למראיין ✕';
      } else {
        tipsBox.classList.add('hidden');
        if (toggleBtnText) toggleBtnText.textContent = 'הצג רמזים ומדריך למראיין 💡';
      }
    }
  }

  toggleStarQuestion(id, event) {
    if (event) event.stopPropagation();
    if (this.starredQuestions.has(id)) {
      this.starredQuestions.delete(id);
    } else {
      this.starredQuestions.add(id);
    }
    this.saveState();
    this.render();
  }

  toggleAskedQuestion(id, event) {
    if (event) event.stopPropagation();
    if (this.askedQuestions.has(id)) {
      this.askedQuestions.delete(id);
    } else {
      this.askedQuestions.add(id);
    }
    this.saveState();
    this.render();
  }

  openNoteModal(id, event) {
    if (event) event.stopPropagation();
    const question = this.data.questions.find(q => q.id === id);
    if (!question) return;

    const modal = document.getElementById('note-modal');
    const noteTextarea = document.getElementById('note-textarea');
    const modalTitle = document.getElementById('note-modal-title');

    if (modal && noteTextarea && modalTitle) {
      modalTitle.textContent = `הערה אישית — שאלה ${question.id}`;
      noteTextarea.value = this.questionNotes[id] || '';
      modal.setAttribute('data-question-id', id);
      modal.classList.remove('hidden');
      noteTextarea.focus();
    }
  }

  saveNoteFromModal() {
    const modal = document.getElementById('note-modal');
    const noteTextarea = document.getElementById('note-textarea');
    if (!modal || !noteTextarea) return;

    const id = parseInt(modal.getAttribute('data-question-id'));
    const val = noteTextarea.value.trim();
    if (val) {
      this.questionNotes[id] = val;
    } else {
      delete this.questionNotes[id];
    }
    this.saveState();
    modal.classList.add('hidden');
    this.render();
  }

  closeNoteModal() {
    const modal = document.getElementById('note-modal');
    if (modal) modal.classList.add('hidden');
  }

  toggleDateTimer() {
    const timerBtn = document.getElementById('date-timer-btn');
    const timerDisplay = document.getElementById('date-timer-display');
    if (!this.isTimerRunning) {
      this.isTimerRunning = true;
      this.dateTimerInterval = setInterval(() => {
        this.dateTimerSeconds++;
        const mins = String(Math.floor(this.dateTimerSeconds / 60)).padStart(2, '0');
        const secs = String(this.dateTimerSeconds % 60).padStart(2, '0');
        if (timerDisplay) timerDisplay.textContent = `${mins}:${secs}`;
      }, 1000);
      if (timerBtn) timerBtn.textContent = 'עצור טיימר ⏸';
    } else {
      this.isTimerRunning = false;
      clearInterval(this.dateTimerInterval);
      if (timerBtn) timerBtn.textContent = 'המשך טיימר ▶';
    }
  }

  resetDateTimer() {
    this.isTimerRunning = false;
    clearInterval(this.dateTimerInterval);
    this.dateTimerSeconds = 0;
    const timerDisplay = document.getElementById('date-timer-display');
    const timerBtn = document.getElementById('date-timer-btn');
    if (timerDisplay) timerDisplay.textContent = '00:00';
    if (timerBtn) timerBtn.textContent = 'הפעל טיימר שיחה ▶';
  }

  renderDateMode() {
    const container = document.getElementById('date-mode-card-container');
    if (!container) return;

    const list = this.getActiveQuestionsForDeck();

    if (list.length === 0) {
      container.innerHTML = `
        <div class="bg-white rounded-3xl p-12 text-center border border-amber-200/60 shadow-lg">
          <div class="w-16 h-16 bg-amber-100 text-amber-700 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">
            🔍
          </div>
          <h3 class="text-2xl font-bold font-serif-hebrew text-slate-800 mb-2">לא נמצאו שאלות בסינון שנבחר</h3>
          <p class="text-slate-600 mb-6">נסה לשנות את הפרק או את מסנני המועדפים/זהב.</p>
          <button onclick="app.setDeckFilter('all')" class="bg-amber-600 hover:bg-amber-700 text-white px-6 py-2.5 rounded-full font-medium transition shadow">
            הצג את כל 120 השאלות
          </button>
        </div>
      `;
      return;
    }

    if (this.currentCardIndex >= list.length) {
      this.currentCardIndex = 0;
    }

    const q = list[this.currentCardIndex];
    const chapter = this.data.chapters.find(c => c.id === q.chapterId);
    const isStarred = this.starredQuestions.has(q.id);
    const isAsked = this.askedQuestions.has(q.id);
    const hasNote = !!this.questionNotes[q.id];
    const adaptedText = this.adaptQuestionText(q.text);

    container.innerHTML = `
      <div class="deck-card ${this.deckAnimationClass} bg-white rounded-3xl p-6 sm:p-10 border border-amber-100 shadow-xl relative overflow-hidden">
        
        <!-- Top Metadata & Action Bar -->
        <div class="flex flex-wrap items-center justify-between gap-3 mb-6 pb-4 border-b border-slate-100">
          <div class="flex items-center gap-2">
            <span class="bg-amber-50 text-amber-900 border border-amber-200 font-semibold px-3 py-1 rounded-full text-xs sm:text-sm">
              שאלה ${q.id} מתוך 120
            </span>
            <span class="bg-slate-100 text-slate-700 px-3 py-1 rounded-full text-xs sm:text-sm font-medium">
              ${chapter ? chapter.title + ' — ' + chapter.name : ''}
            </span>
            ${q.isGolden ? `
              <span class="badge-gold px-2.5 py-0.5 rounded-full text-xs font-bold flex items-center gap-1 shadow-sm">
                ⭐ שאלת זהב (#${q.goldenNumber})
              </span>
            ` : ''}
          </div>

          <div class="flex items-center gap-2">
            <!-- Note Indicator -->
            <button onclick="app.openNoteModal(${q.id}, event)" title="הוסף או צפה בהערה אישית" class="p-2 rounded-xl transition ${hasNote ? 'bg-amber-100 text-amber-700' : 'bg-slate-50 text-slate-400 hover:bg-slate-100'}">
              📝 ${hasNote ? 'יש הערה' : ''}
            </button>
            <!-- Star Question -->
            <button onclick="app.toggleStarQuestion(${q.id}, event)" title="שמור למועדפים" class="p-2 rounded-xl transition ${isStarred ? 'bg-amber-400 text-white shadow-sm' : 'bg-slate-50 text-slate-400 hover:bg-slate-100'}">
              ⭐
            </button>
            <!-- Mark as Asked -->
            <button onclick="app.toggleAskedQuestion(${q.id}, event)" title="סמן כשאלה שנשאלה" class="px-3 py-1.5 rounded-xl text-xs sm:text-sm font-medium transition flex items-center gap-1.5 ${isAsked ? 'bg-emerald-600 text-white shadow-sm' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'}">
              ${isAsked ? '✓ נשאלה בדייט' : 'סמן כנשאלה'}
            </button>
          </div>
        </div>

        <!-- Question Body -->
        <div class="py-6 sm:py-8 text-center sm:text-right">
          <span class="text-xs uppercase tracking-wider text-amber-600/80 font-bold block mb-2">
            שאל/י את בן/בת הזוג:
          </span>
          <h2 class="text-2xl sm:text-4xl font-extrabold font-black-hebrew text-slate-900 leading-snug tracking-tight">
            ${adaptedText}
          </h2>

          ${hasNote ? `
            <div class="mt-4 p-3 bg-amber-50/70 border border-amber-200/60 rounded-xl text-sm text-slate-700 text-right">
              <span class="font-bold text-amber-800">הערה פרטית שלך:</span> ${this.questionNotes[q.id]}
            </div>
          ` : ''}
        </div>

        <!-- Toggle Interviewer Guide Button -->
        <div class="mt-2 pt-4 border-t border-slate-100 flex flex-col items-center">
          <button onclick="app.toggleCardTip()" class="text-sm font-semibold text-amber-700 hover:text-amber-800 bg-amber-50 hover:bg-amber-100/80 px-5 py-2.5 rounded-full transition flex items-center gap-2 border border-amber-200">
            <span id="toggle-tip-btn-text">
              ${this.isCardTipRevealed ? 'הסתר רמזים ומדריך למראיין ✕' : 'הצג רמזים ומדריך למראיין 💡'}
            </span>
          </button>
        </div>

        <!-- Hidden Interviewer Guide Box -->
        <div id="card-tips-box" class="${this.isCardTipRevealed ? '' : 'hidden'} mt-6 bg-slate-50/90 rounded-2xl p-5 border border-slate-200/80 text-sm space-y-4 text-right">
          
          ${q.sampleAnswer ? `
            <div class="bg-white p-3.5 rounded-xl border border-slate-200/60 shadow-2xs">
              <span class="font-bold text-slate-800 block mb-1 flex items-center gap-1.5">
                💬 תשובה בריאה לדוגמה:
              </span>
              <p class="text-slate-600 italic leading-relaxed">
                “${q.sampleAnswer}”
              </p>
            </div>
          ` : ''}

          <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
            ${q.desirable ? `
              <div class="bg-emerald-50/70 border border-emerald-200/60 p-3 rounded-xl">
                <span class="font-bold text-emerald-800 block mb-0.5">🟢 מה רצוי לראות:</span>
                <p class="text-emerald-950">${q.desirable}</p>
              </div>
            ` : ''}

            ${q.toCheck ? `
              <div class="bg-blue-50/70 border border-blue-200/60 p-3 rounded-xl">
                <span class="font-bold text-blue-800 block mb-0.5">🔎 מה לבדוק:</span>
                <p class="text-blue-950">${q.toCheck}</p>
              </div>
            ` : ''}
          </div>

          ${q.redFlag ? `
            <div class="bg-rose-50 border border-rose-200 p-3.5 rounded-xl">
              <span class="font-bold text-rose-800 block mb-0.5 flex items-center gap-1">
                🔴 נורה אדומה (זהירות):
              </span>
              <p class="text-rose-900 font-medium">“${q.redFlag}”</p>
            </div>
          ` : ''}

          ${q.followUp ? `
            <div class="bg-amber-50/70 border border-amber-200 p-3 rounded-xl">
              <span class="font-bold text-amber-800 block mb-0.5">🔎 שאלת המשך מומלצת:</span>
              <p class="text-amber-950 font-medium">“${q.followUp}”</p>
            </div>
          ` : ''}

          ${q.externalInquiry ? `
            <div class="bg-purple-50/70 border border-purple-200 p-3 rounded-xl">
              <span class="font-bold text-purple-800 block mb-0.5">👥 לבירור מול מכרים חיצוניים:</span>
              <p class="text-purple-950">“${q.externalInquiry}”</p>
            </div>
          ` : ''}

        </div>

      </div>

      <!-- Card Index Navigation Pill -->
      <div class="text-center mt-3 text-xs text-slate-500">
        שאלה ${this.currentCardIndex + 1} מתוך ${list.length} במסנן הנוכחי
      </div>
    `;

    // Reset animation class after paint
    setTimeout(() => {
      this.deckAnimationClass = '';
    }, 400);
  }

  setDeckFilter(type, value) {
    if (type === 'chapter') {
      this.selectedChapter = value;
    } else if (type === 'status') {
      this.statusFilter = value;
    }
    this.currentCardIndex = 0;
    this.renderDateMode();
    this.renderFilterPills();
  }

  renderFilterPills() {
    const pills = document.querySelectorAll('.filter-pill');
    pills.forEach(p => {
      const isChapter = p.getAttribute('data-filter-chapter');
      const isStatus = p.getAttribute('data-filter-status');
      if (isChapter) {
        if (isChapter === this.selectedChapter) {
          p.classList.add('bg-amber-600', 'text-white');
          p.classList.remove('bg-white', 'text-slate-700');
        } else {
          p.classList.remove('bg-amber-600', 'text-white');
          p.classList.add('bg-white', 'text-slate-700');
        }
      }
      if (isStatus) {
        if (isStatus === this.statusFilter) {
          p.classList.add('bg-amber-600', 'text-white');
          p.classList.remove('bg-white', 'text-slate-700');
        } else {
          p.classList.remove('bg-amber-600', 'text-white');
          p.classList.add('bg-white', 'text-slate-700');
        }
      }
    });
  }

  // ---------------- QUESTIONS EXPLORER & LIST ----------------

  renderQuestionsList() {
    const listContainer = document.getElementById('questions-list-container');
    const countDisplay = document.getElementById('questions-count-display');
    if (!listContainer) return;

    let filtered = this.data.questions.filter(q => {
      // Chapter filter
      if (this.selectedChapter !== 'all' && q.chapterId !== parseInt(this.selectedChapter)) {
        return false;
      }

      // Status filter
      if (this.statusFilter === 'golden' && !q.isGolden) return false;
      if (this.statusFilter === 'starred' && !this.starredQuestions.has(q.id)) return false;
      if (this.statusFilter === 'asked' && !this.askedQuestions.has(q.id)) return false;
      if (this.statusFilter === 'redflag' && !q.redFlag) return false;

      // Search query
      if (this.searchQuery) {
        const text = q.text.toLowerCase();
        const sample = (q.sampleAnswer || '').toLowerCase();
        const desirable = (q.desirable || '').toLowerCase();
        const red = (q.redFlag || '').toLowerCase();
        const note = (this.questionNotes[q.id] || '').toLowerCase();
        if (!text.includes(this.searchQuery) &&
            !sample.includes(this.searchQuery) &&
            !desirable.includes(this.searchQuery) &&
            !red.includes(this.searchQuery) &&
            !note.includes(this.searchQuery)) {
          return false;
        }
      }

      return true;
    });

    if (countDisplay) {
      countDisplay.textContent = `נמצאו ${filtered.length} שאלות`;
    }

    if (filtered.length === 0) {
      listContainer.innerHTML = `
        <div class="bg-white rounded-2xl p-10 text-center border border-slate-200">
          <p class="text-lg text-slate-600">לא נמצאו שאלות תואמות לחיפוש או לסינון.</p>
        </div>
      `;
      return;
    }

    listContainer.innerHTML = filtered.map(q => {
      const chapter = this.data.chapters.find(c => c.id === q.chapterId);
      const isStarred = this.starredQuestions.has(q.id);
      const isAsked = this.askedQuestions.has(q.id);
      const note = this.questionNotes[q.id];
      const adaptedText = this.adaptQuestionText(q.text);

      return `
        <div class="interactive-card bg-white rounded-2xl border ${isAsked ? 'border-emerald-300 bg-emerald-50/20' : 'border-slate-200/90'} overflow-hidden" id="q-card-${q.id}">
          
          <!-- Card Header / Always visible -->
          <div class="p-5 flex flex-wrap items-center justify-between gap-3 cursor-pointer select-none" onclick="app.toggleQuestionAccordion(${q.id})">
            
            <div class="flex items-center gap-3">
              <span class="w-8 h-8 rounded-full bg-slate-100 text-slate-800 font-bold text-sm flex items-center justify-center shrink-0">
                ${q.id}
              </span>

              <div>
                <div class="flex items-center gap-2 mb-1">
                  <span class="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-700">
                    ${chapter ? chapter.name : ''}
                  </span>
                  ${q.isGolden ? `<span class="badge-gold px-2 py-0.5 rounded-full text-xs font-bold">⭐ שאלת זהב</span>` : ''}
                  ${isAsked ? `<span class="badge-green px-2 py-0.5 rounded-full text-xs font-medium">✓ נשאלה</span>` : ''}
                  ${note ? `<span class="badge-blue px-2 py-0.5 rounded-full text-xs font-medium">📝 הערה</span>` : ''}
                </div>
                <h3 class="text-lg sm:text-xl font-bold font-serif-hebrew text-slate-900 leading-snug">
                  ${adaptedText}
                </h3>
              </div>
            </div>

            <!-- Action buttons -->
            <div class="flex items-center gap-2" onclick="event.stopPropagation()">
              <button onclick="app.jumpToDateCard(${q.id})" title="שאל שאלה זו במצב דייט מוגדל" class="text-xs bg-amber-50 hover:bg-amber-100 text-amber-800 font-semibold px-3 py-1.5 rounded-lg border border-amber-200 transition">
                שאל בדייט 🃏
              </button>
              <button onclick="app.toggleStarQuestion(${q.id}, event)" title="סמן במועדפים" class="p-2 rounded-lg text-lg transition ${isStarred ? 'text-amber-500' : 'text-slate-300 hover:text-amber-500'}">
                ${isStarred ? '★' : '☆'}
              </button>
              <button onclick="app.toggleAskedQuestion(${q.id}, event)" title="סמן כנשאלה" class="p-2 rounded-lg text-base transition ${isAsked ? 'text-emerald-600 bg-emerald-100' : 'text-slate-300 hover:text-emerald-600'}">
                ✓
              </button>
              <button onclick="app.openNoteModal(${q.id}, event)" title="ערוך הערה" class="p-2 rounded-lg text-base transition ${note ? 'text-blue-600 bg-blue-50' : 'text-slate-300 hover:text-blue-600'}">
                ✏️
              </button>
              <span class="accordion-arrow text-slate-400 text-sm transform transition duration-200" id="arrow-${q.id}">
                ▼
              </span>
            </div>

          </div>

          <!-- Accordion Detail (Expandable) -->
          <div class="accordion-content border-t border-slate-100" id="accordion-${q.id}">
            <div class="p-5 bg-slate-50/70 text-sm space-y-3">
              
              ${note ? `
                <div class="p-3 bg-amber-50 border border-amber-200 rounded-xl text-slate-800">
                  <span class="font-bold text-amber-900">הערה פרטית שלך:</span> ${note}
                </div>
              ` : ''}

              ${q.sampleAnswer ? `
                <div class="bg-white p-3.5 rounded-xl border border-slate-200">
                  <span class="font-bold text-slate-800 block mb-1">💬 תשובה לדוגמה:</span>
                  <p class="text-slate-600 italic">“${q.sampleAnswer}”</p>
                </div>
              ` : ''}

              <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
                ${q.desirable ? `
                  <div class="bg-emerald-50/90 border border-emerald-200 p-3 rounded-xl">
                    <span class="font-bold text-emerald-800 block mb-0.5">🟢 מה רצוי לראות:</span>
                    <p class="text-emerald-950">${q.desirable}</p>
                  </div>
                ` : ''}

                ${q.toCheck ? `
                  <div class="bg-blue-50/90 border border-blue-200 p-3 rounded-xl">
                    <span class="font-bold text-blue-800 block mb-0.5">🔎 מה לבדוק:</span>
                    <p class="text-blue-950">${q.toCheck}</p>
                  </div>
                ` : ''}
              </div>

              ${q.redFlag ? `
                <div class="bg-rose-50 border border-rose-200 p-3 rounded-xl">
                  <span class="font-bold text-rose-800 block mb-0.5">🔴 נורה אדומה:</span>
                  <p class="text-rose-900 font-semibold">“${q.redFlag}”</p>
                </div>
              ` : ''}

              ${q.followUp ? `
                <div class="bg-amber-50 border border-amber-200 p-3 rounded-xl">
                  <span class="font-bold text-amber-800 block mb-0.5">🔎 שאלת המשך:</span>
                  <p class="text-amber-950">“${q.followUp}”</p>
                </div>
              ` : ''}

              ${q.externalInquiry ? `
                <div class="bg-purple-50 border border-purple-200 p-3 rounded-xl">
                  <span class="font-bold text-purple-800 block mb-0.5">👥 בירור חיצוני:</span>
                  <p class="text-purple-950">“${q.externalInquiry}”</p>
                </div>
              ` : ''}

            </div>
          </div>

        </div>
      `;
    }).join('');
  }

  toggleQuestionAccordion(id) {
    const el = document.getElementById(`accordion-${id}`);
    const arrow = document.getElementById(`arrow-${id}`);
    if (!el) return;
    if (el.classList.contains('expanded')) {
      el.classList.remove('expanded');
      if (arrow) arrow.style.transform = 'rotate(0deg)';
    } else {
      el.classList.add('expanded');
      if (arrow) arrow.style.transform = 'rotate(180deg)';
    }
  }

  jumpToDateCard(questionId) {
    this.selectedChapter = 'all';
    this.statusFilter = 'all';
    const list = this.getActiveQuestionsForDeck();
    const idx = list.findIndex(q => q.id === questionId);
    if (idx !== -1) {
      this.currentCardIndex = idx;
    }
    this.switchTab('date-mode');
  }

  // ---------------- 20 GOLDEN QUESTIONS ----------------

  renderGoldenQuestions() {
    const container = document.getElementById('golden-questions-container');
    if (!container) return;

    container.innerHTML = this.data.goldenQuestionsList.map((g) => {
      const matchedQ = g.qId ? this.data.questions.find(q => q.id === g.qId) : null;
      const isAsked = g.qId && this.askedQuestions.has(g.qId);

      return `
        <div class="bg-white rounded-2xl p-5 border border-amber-200/80 hover:border-amber-400 transition shadow-xs flex flex-col justify-between">
          <div>
            <div class="flex items-center justify-between mb-3">
              <span class="w-7 h-7 rounded-full bg-amber-100 text-amber-900 font-bold text-xs flex items-center justify-center">
                #${g.num}
              </span>
              ${g.qId ? `
                <span class="text-xs bg-slate-100 text-slate-700 px-2 py-0.5 rounded font-medium">
                  שאלה ${g.qId} בחוברת
                </span>
              ` : ''}
            </div>

            <h3 class="text-lg font-bold font-serif-hebrew text-slate-900 mb-2">
              ${this.adaptQuestionText(g.text)}
            </h3>

            ${matchedQ && matchedQ.desirable ? `
              <p class="text-xs text-emerald-800 bg-emerald-50 p-2 rounded-lg mb-3">
                <strong>מה לחפש:</strong> ${matchedQ.desirable}
              </p>
            ` : ''}
          </div>

          <div class="pt-3 border-t border-slate-100 flex items-center justify-between">
            ${g.qId ? `
              <button onclick="app.jumpToDateCard(${g.qId})" class="text-xs bg-amber-600 hover:bg-amber-700 text-white font-medium px-3 py-1.5 rounded-lg transition shadow-2xs">
                שאל עכשיו בדייט 🃏
              </button>
              <button onclick="app.toggleAskedQuestion(${g.qId}, event)" class="text-xs px-2.5 py-1.5 rounded-lg border ${isAsked ? 'bg-emerald-100 text-emerald-800 border-emerald-300' : 'bg-slate-50 text-slate-600 border-slate-200'}">
                ${isAsked ? '✓ נשאלה' : 'סמן כנשאלה'}
              </button>
            ` : `
              <span class="text-xs text-slate-400">שאלה עקרונית לשיחה</span>
            `}
          </div>
        </div>
      `;
    }).join('');
  }

  // ---------------- CHARACTER MATRIX (SCORECARD) ----------------

  renderMatrix() {
    const container = document.getElementById('matrix-table-body');
    const statsContainer = document.getElementById('matrix-stats-bar');
    if (!container) return;

    // Calculate stats
    let highCount = 0;
    let medCount = 0;
    let checkCount = 0;
    let filledCount = 0;

    this.data.characterMatrix.forEach((m, idx) => {
      const val = this.matrixRatings[idx];
      if (val) {
        filledCount++;
        if (val === 'גבוהה' || val === 'גבוה' || val === 'טובה' || val === 'טוב' || val === 'נמוכה') {
          highCount++;
        } else if (val === 'בינונית' || val === 'בינוני') {
          medCount++;
        } else if (val.includes('בירור')) {
          checkCount++;
        }
      }
    });

    if (statsContainer) {
      statsContainer.innerHTML = `
        <div class="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center">
          <div class="bg-white p-3 rounded-xl border border-slate-200 shadow-2xs">
            <span class="text-xs text-slate-500 block">מידות שנבדקו</span>
            <span class="text-xl font-bold text-slate-800">${filledCount} / 25</span>
          </div>
          <div class="bg-emerald-50 p-3 rounded-xl border border-emerald-200 shadow-2xs">
            <span class="text-xs text-emerald-700 block">מידה חזקה / טובה</span>
            <span class="text-xl font-bold text-emerald-800">${highCount}</span>
          </div>
          <div class="bg-amber-50 p-3 rounded-xl border border-amber-200 shadow-2xs">
            <span class="text-xs text-amber-700 block">בינונית / מאוזנת</span>
            <span class="text-xl font-bold text-amber-800">${medCount}</span>
          </div>
          <div class="bg-rose-50 p-3 rounded-xl border border-rose-200 shadow-2xs">
            <span class="text-xs text-rose-700 block">דורשת בירור נוסף</span>
            <span class="text-xl font-bold text-rose-800">${checkCount}</span>
          </div>
        </div>
      `;
    }

    container.innerHTML = this.data.characterMatrix.map((item, idx) => {
      const selectedRating = this.matrixRatings[idx] || '';
      const traitNote = this.matrixNotes[idx] || '';

      return `
        <tr class="border-b border-slate-100 hover:bg-slate-50/50 transition">
          <td class="p-4 font-semibold text-slate-800">
            ${item.trait}
            <span class="block text-xs font-normal text-slate-400">${item.category}</span>
          </td>

          <td class="p-4">
            <div class="flex flex-wrap items-center gap-2">
              
              <!-- Option 1: Good / High -->
              <label class="rating-pill">
                <input type="radio" name="matrix-${idx}" value="${item.options[0]}" ${selectedRating === item.options[0] ? 'checked' : ''} onchange="app.setMatrixRating(${idx}, '${item.options[0]}')">
                <span class="rate-high px-3 py-1 rounded-full text-xs cursor-pointer border ${selectedRating === item.options[0] ? 'bg-emerald-600 text-white border-emerald-600' : 'bg-slate-100 text-slate-700 border-slate-200'}">
                  🟢 ${item.options[0]}
                </span>
              </label>

              <!-- Option 2: Medium -->
              <label class="rating-pill">
                <input type="radio" name="matrix-${idx}" value="${item.options[1]}" ${selectedRating === item.options[1] ? 'checked' : ''} onchange="app.setMatrixRating(${idx}, '${item.options[1]}')">
                <span class="rate-med px-3 py-1 rounded-full text-xs cursor-pointer border ${selectedRating === item.options[1] ? 'bg-amber-500 text-white border-amber-500' : 'bg-slate-100 text-slate-700 border-slate-200'}">
                  🟡 ${item.options[1]}
                </span>
              </label>

              <!-- Option 3: Needs inquiry -->
              <label class="rating-pill">
                <input type="radio" name="matrix-${idx}" value="${item.options[2]}" ${selectedRating === item.options[2] ? 'checked' : ''} onchange="app.setMatrixRating(${idx}, '${item.options[2]}')">
                <span class="rate-check px-3 py-1 rounded-full text-xs cursor-pointer border ${selectedRating === item.options[2] ? 'bg-rose-600 text-white border-rose-600' : 'bg-slate-100 text-slate-700 border-slate-200'}">
                  🔴 ${item.options[2]}
                </span>
              </label>

            </div>
          </td>

          <td class="p-4">
            <input 
              type="text" 
              placeholder="הוסף הערה או דוגמה מהדייט..." 
              value="${traitNote.replace(/"/g, '&quot;')}"
              onchange="app.setMatrixNote(${idx}, this.value)"
              class="w-full text-xs sm:text-sm bg-white border border-slate-200 rounded-lg px-3 py-1.5 focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500"
            />
          </td>
        </tr>
      `;
    }).join('');
  }

  setMatrixRating(idx, value) {
    this.matrixRatings[idx] = value;
    this.saveState();
    this.renderMatrix();
  }

  setMatrixNote(idx, note) {
    const val = note.trim();
    if (val) {
      this.matrixNotes[idx] = val;
    } else {
      delete this.matrixNotes[idx];
    }
    this.saveState();
  }

  copyMatrixSummary() {
    let summaryText = `📋 סיכום מפת מידות אישית (חוברת בירור מידות לשידוכים)\n\n`;
    this.data.characterMatrix.forEach((m, idx) => {
      const rating = this.matrixRatings[idx] || 'טרם נבדק';
      const note = this.matrixNotes[idx] ? ` (${this.matrixNotes[idx]})` : '';
      summaryText += `• ${m.trait}: ${rating}${note}\n`;
    });

    navigator.clipboard.writeText(summaryText).then(() => {
      alert('סיכום מפת המידות הועתק ללוח בהצלחה!');
    }).catch(err => {
      console.error('Copy failed:', err);
    });
  }

  resetMatrix() {
    if (confirm('האם לאפס את כל הסימונים וההערות במפת המידות?')) {
      this.matrixRatings = {};
      this.matrixNotes = {};
      this.saveState();
      this.renderMatrix();
    }
  }

  // ---------------- EXTERNAL INQUIRY (CHAPTER 13) ----------------

  renderExternalQuestions() {
    const container = document.getElementById('external-questions-container');
    const selectedCountDisplay = document.getElementById('external-selected-count');
    if (!container) return;

    if (selectedCountDisplay) {
      selectedCountDisplay.textContent = `${this.selectedExternalQuestions.size} שאלות נבחרו לשיחה`;
    }

    container.innerHTML = this.data.externalQuestions.map((qText, idx) => {
      const isSelected = this.selectedExternalQuestions.has(idx);

      return `
        <div class="p-3.5 rounded-xl border transition ${isSelected ? 'bg-amber-50/80 border-amber-300' : 'bg-white border-slate-200 hover:border-slate-300'} flex items-start gap-3">
          <input 
            type="checkbox" 
            id="ext-q-${idx}" 
            ${isSelected ? 'checked' : ''} 
            onchange="app.toggleExternalQuestion(${idx})"
            class="mt-1 w-4 h-4 text-amber-600 rounded border-slate-300 focus:ring-amber-500 cursor-pointer"
          />
          <label for="ext-q-${idx}" class="text-sm font-medium text-slate-800 cursor-pointer select-none flex-1">
            <span class="text-xs text-amber-700 font-bold ml-1">${idx + 1}.</span>
            ${qText}
          </label>
        </div>
      `;
    }).join('');
  }

  toggleExternalQuestion(idx) {
    if (this.selectedExternalQuestions.has(idx)) {
      this.selectedExternalQuestions.delete(idx);
    } else {
      this.selectedExternalQuestions.add(idx);
    }
    this.saveState();
    this.renderExternalQuestions();
  }

  selectAllExternal(select) {
    if (select) {
      this.selectedExternalQuestions = new Set(this.data.externalQuestions.map((_, i) => i));
    } else {
      this.selectedExternalQuestions.clear();
    }
    this.saveState();
    this.renderExternalQuestions();
  }

  copySelectedExternal() {
    if (this.selectedExternalQuestions.size === 0) {
      alert('אנא סמן לפחות שאלה אחת להעתקה.');
      return;
    }
    let text = `📞 שאלות מפתח לבירור טלפוני אצל מכרים:\n\n`;
    [...this.selectedExternalQuestions].sort((a,b) => a - b).forEach((idx, i) => {
      text += `${i + 1}. ${this.data.externalQuestions[idx]}\n`;
    });

    navigator.clipboard.writeText(text).then(() => {
      alert('השאלות הנבחרות הועתקו ללוח בהצלחה! ניתן להדביק בווטסאפ או בפתקים.');
    });
  }

  // ---------------- GENERAL STATS & RENDER ----------------

  renderGlobalStats() {
    const totalCount = this.data.questions.length;
    const askedCount = this.askedQuestions.size;
    const starredCount = this.starredQuestions.size;

    const statsEl = document.getElementById('global-progress-stats');
    if (statsEl) {
      const pct = Math.round((askedCount / totalCount) * 100);
      statsEl.innerHTML = `
        <div class="flex items-center gap-4 text-xs sm:text-sm font-medium">
          <span>נשאלו בדייטים: <strong class="text-emerald-700">${askedCount} / ${totalCount}</strong> (${pct}%)</span>
          <span>•</span>
          <span>מועדפים: <strong class="text-amber-700">${starredCount}</strong></span>
        </div>
      `;
    }

    const progressBar = document.getElementById('global-progress-bar');
    if (progressBar) {
      const pct = Math.round((askedCount / totalCount) * 100);
      progressBar.style.width = `${pct}%`;
    }
  }

  render() {
    this.renderGlobalStats();

    if (this.activeTab === 'date-mode') {
      this.renderDateMode();
      this.renderFilterPills();
    } else if (this.activeTab === 'questions') {
      this.renderQuestionsList();
    } else if (this.activeTab === 'golden') {
      this.renderGoldenQuestions();
    } else if (this.activeTab === 'matrix') {
      this.renderMatrix();
    } else if (this.activeTab === 'external') {
      this.renderExternalQuestions();
    }
  }
}

// Global instance initialized on DOM ready
let app;
document.addEventListener('DOMContentLoaded', () => {
  app = new ShidduchApp();
  window.app = app;
});
