// ============================================================
// Brenda Le Wellness - Nutrition Coaching App
// Enhanced Version - PDF fix, notes integration
// ============================================================

// --- Default Quick Add Notes ---
const DEFAULT_PRESET_NOTES = [
  'This is a higher protein, moderate carbohydrate approach that supports satiety and muscle mass while losing weight.',
  'Focus on whole, minimally processed foods and aim for 25-30g of fiber per day.',
  'Include a source of lean protein with each meal to support muscle maintenance and satiety.',
  'Stay well-hydrated — aim for at least 8 cups of water per day.',
  'Limit added sugars and refined carbohydrates to help manage blood sugar and cravings.',
  'Plan and prep meals ahead of time to stay on track with your nutrition goals.'
];

// --- Constants ---
const ACTIVITY_LABELS = {
  '1.2':   'Sedentary',
  '1.375': 'Lightly Active',
  '1.55':  'Moderately Active',
  '1.725': 'Very Active',
  '1.9':   'Super Active'
};

const CALORIE_ADJUSTMENTS = { maintenance: 0, mildLoss: -250, moderateLoss: -500, weightGain: 250 };

const CALORIE_NOTES = {
  maintenance:    '',
  mildLoss:       'approximately 0.5 lb per week',
  moderateLoss:   'approximately 1 lb per week',
  weightGain:     'approximately 0.5 lb per week',
  custom:         ''
};

const CALORIE_LABELS = {
  maintenance: 'Maintenance',
  mildLoss: 'Mild Weight Loss',
  moderateLoss: 'Moderate Weight Loss',
  weightGain: 'Weight Gain',
  custom: 'Custom Target'
};

const KCAL_PER_GRAM = { protein: 4, carbs: 4, fat: 9 };

// --- State ---
let presetNotes = [];
let addedPresets = new Set();
let currentUnit = 'metric';
let currentMacroMode = 'percent';
let selectedCalorieTarget = 'mildLoss';

// ============================================================
// INITIALIZATION
// ============================================================
document.addEventListener('DOMContentLoaded', function () {
  loadPresetNotes();
  setDefaultDate();
  syncHeaderLogo();
  renderPresetTags();
  setupEventListeners();
  calculateAll();
  updatePdfPreview();
});

function getLogoDataUri(filename) {
  if (typeof LOGO_DATA_URIS !== 'undefined' && LOGO_DATA_URIS[filename]) {
    return LOGO_DATA_URIS[filename];
  }
  return filename; // fallback to filename if data URIs not loaded
}

function syncHeaderLogo() {
  const logoChoice = document.getElementById('logoChoice').value;
  const dataUri = getLogoDataUri(logoChoice);
  document.getElementById('pdfLogo').src = dataUri;
}

// ============================================================
// EVENT LISTENERS
// ============================================================
function setupEventListeners() {
  // --- Unit toggle ---
  document.querySelectorAll('.unit-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const newUnit = btn.dataset.unit;
      if (newUnit === currentUnit) return;
      if (newUnit === 'imperial') {
        const cm = parseFloat(document.getElementById('heightCm').value) || 0;
        const kg = parseFloat(document.getElementById('weightKg').value) || 0;
        const totalInches = cm / 2.54;
        document.getElementById('heightFt').value = Math.floor(totalInches / 12);
        document.getElementById('heightIn').value = Math.round(totalInches % 12);
        document.getElementById('weightLbs').value = (kg * 2.20462).toFixed(1);
      } else {
        const ft = parseFloat(document.getElementById('heightFt').value) || 0;
        const inch = parseFloat(document.getElementById('heightIn').value) || 0;
        const lbs = parseFloat(document.getElementById('weightLbs').value) || 0;
        document.getElementById('heightCm').value = ((ft * 12 + inch) * 2.54).toFixed(0);
        document.getElementById('weightKg').value = (lbs / 2.20462).toFixed(1);
      }
      currentUnit = newUnit;
      updateUnitUI();
      calculateAll();
      updatePdfPreview();
    });
  });

  // --- Input changes ---
  ['clientName', 'handoutDate', 'gender', 'age', 'heightCm', 'weightKg', 'heightFt', 'heightIn', 'weightLbs', 'activityLevel', 'clientGoal'].forEach(id => {
    const el = document.getElementById(id);
    if (el) {
      const evt = (el.tagName === 'SELECT') ? 'change' : 'input';
      el.addEventListener(evt, () => { calculateAll(); updatePdfPreview(); });
    }
  });

  // --- Calorie target buttons ---
  document.querySelectorAll('.result-item[data-target]').forEach(item => {
    item.addEventListener('click', () => {
      selectedCalorieTarget = item.dataset.target;
      // Show/hide custom calorie input
      const customRow = document.getElementById('customCalorieRow');
      customRow.classList.toggle('hidden', selectedCalorieTarget !== 'custom');
      calculateAll();
      updatePdfPreview();
    });
  });

  // --- Custom calories input ---
  document.getElementById('customCalories').addEventListener('input', () => { calculateAll(); updatePdfPreview(); });

  // --- Macro mode ---
  document.querySelectorAll('.macro-mode-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      currentMacroMode = btn.dataset.mode;
      updateMacroModeUI();
      calculateAll();
      updatePdfPreview();
    });
  });

  // --- Percent sliders ---
  ['proteinPercent', 'carbsPercent', 'fatPercent'].forEach(id => {
    document.getElementById(id).addEventListener('input', () => { updatePercentDisplays(); calculateAll(); updatePdfPreview(); });
  });

  // --- Gram inputs ---
  ['proteinGrams', 'fatGrams'].forEach(id => {
    document.getElementById(id).addEventListener('input', () => { calculateAll(); updatePdfPreview(); });
  });

  // --- Notes ---
  document.getElementById('notesText').addEventListener('input', () => { updatePdfPreview(); });

  // --- Logo selector ---
  document.getElementById('logoChoice').addEventListener('change', (e) => {
    const dataUri = getLogoDataUri(e.target.value);
    document.getElementById('pdfLogo').src = dataUri;
  });

  // --- Generate PDF ---
  document.getElementById('generatePdfBtn').addEventListener('click', generatePdf);

  // --- Preset editor ---
  document.getElementById('managePresetsBtn').addEventListener('click', openPresetEditor);
  document.getElementById('closePresetEditorBtn').addEventListener('click', closePresetEditor);
  document.getElementById('addPresetBtn').addEventListener('click', addPresetFromInput);
  document.getElementById('newPresetText').addEventListener('keydown', (e) => {
    if (e.key === 'Enter') addPresetFromInput();
  });
}

// ============================================================
// DATE
// ============================================================
function setDefaultDate() {
  const today = new Date();
  const yyyy = today.getFullYear();
  const mm = String(today.getMonth() + 1).padStart(2, '0');
  const dd = String(today.getDate()).padStart(2, '0');
  document.getElementById('handoutDate').value = `${yyyy}-${mm}-${dd}`;
}

function formatDateForPdf(dateString) {
  if (!dateString) return '';
  const date = new Date(dateString + 'T00:00:00');
  if (isNaN(date.getTime())) return '';
  return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
}

// ============================================================
// UNIT TOGGLE
// ============================================================
function updateUnitUI() {
  document.querySelectorAll('.unit-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.unit === currentUnit);
  });
  document.querySelector('.metric-row').classList.toggle('hidden', currentUnit !== 'metric');
  document.querySelector('.imperial-row').classList.toggle('hidden', currentUnit !== 'imperial');
}

// ============================================================
// MACRO MODE TOGGLE
// ============================================================
function updateMacroModeUI() {
  document.querySelectorAll('.macro-mode-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.mode === currentMacroMode);
  });
  document.querySelector('.percent-mode').classList.toggle('hidden', currentMacroMode !== 'percent');
  document.querySelector('.grams-mode').classList.toggle('hidden', currentMacroMode !== 'grams');
}

// ============================================================
// CALCULATIONS
// ============================================================
function getWeightKg() {
  if (currentUnit === 'metric') return parseFloat(document.getElementById('weightKg').value) || 0;
  return (parseFloat(document.getElementById('weightLbs').value) || 0) / 2.20462;
}

function getHeightCm() {
  if (currentUnit === 'metric') return parseFloat(document.getElementById('heightCm').value) || 0;
  const ft = parseFloat(document.getElementById('heightFt').value) || 0;
  const inch = parseFloat(document.getElementById('heightIn').value) || 0;
  return (ft * 12 + inch) * 2.54;
}

function calculateBMR() {
  const weightKg = getWeightKg();
  const heightCm = getHeightCm();
  const age = parseFloat(document.getElementById('age').value) || 0;
  const gender = document.getElementById('gender').value;
  // Mifflin-St Jeor
  let bmr = 10 * weightKg + 6.25 * heightCm - 5 * age;
  bmr += (gender === 'male') ? 5 : -161;
  return Math.round(bmr);
}

function calculateTDEE() {
  return Math.round(calculateBMR() * parseFloat(document.getElementById('activityLevel').value));
}

function getCalorieTargets() {
  const tdee = calculateTDEE();
  return {
    bmr: calculateBMR(),
    maintenance: tdee,
    mildLoss: tdee + CALORIE_ADJUSTMENTS.mildLoss,
    moderateLoss: tdee + CALORIE_ADJUSTMENTS.moderateLoss,
    weightGain: tdee + CALORIE_ADJUSTMENTS.weightGain
  };
}

function getSelectedCalories() {
  const targets = getCalorieTargets();
  if (selectedCalorieTarget === 'custom') return parseFloat(document.getElementById('customCalories').value) || 0;
  return targets[selectedCalorieTarget];
}

function calculateMacros() {
  const calories = getSelectedCalories();
  if (currentMacroMode === 'percent') {
    const proteinPct = parseFloat(document.getElementById('proteinPercent').value) / 100;
    const carbsPct = parseFloat(document.getElementById('carbsPercent').value) / 100;
    const fatPct = parseFloat(document.getElementById('fatPercent').value) / 100;
    return {
      protein: Math.round((calories * proteinPct) / KCAL_PER_GRAM.protein),
      carbs: Math.round((calories * carbsPct) / KCAL_PER_GRAM.carbs),
      fat: Math.round((calories * fatPct) / KCAL_PER_GRAM.fat),
      proteinPct: Math.round(proteinPct * 100),
      carbsPct: Math.round(carbsPct * 100),
      fatPct: Math.round(fatPct * 100),
      totalCalories: calories
    };
  } else {
    const proteinGrams = parseFloat(document.getElementById('proteinGrams').value) || 0;
    const fatGrams = parseFloat(document.getElementById('fatGrams').value) || 0;
    const remainingCal = calories - (proteinGrams * KCAL_PER_GRAM.protein) - (fatGrams * KCAL_PER_GRAM.fat);
    const carbsGrams = Math.max(0, Math.round(remainingCal / KCAL_PER_GRAM.carbs));
    const proteinPct = calories > 0 ? Math.round((proteinGrams * KCAL_PER_GRAM.protein / calories) * 100) : 0;
    const fatPct = calories > 0 ? Math.round((fatGrams * KCAL_PER_GRAM.fat / calories) * 100) : 0;
    const carbsPct = calories > 0 ? Math.round((carbsGrams * KCAL_PER_GRAM.carbs / calories) * 100) : 0;
    return {
      protein: proteinGrams,
      carbs: carbsGrams,
      fat: fatGrams,
      proteinPct: proteinPct,
      carbsPct: carbsPct,
      fatPct: fatPct,
      totalCalories: calories
    };
  }
}

function calculateAll() {
  const targets = getCalorieTargets();
  document.getElementById('bmrValue').textContent = targets.bmr.toLocaleString();
  document.getElementById('maintenanceValue').textContent = targets.maintenance.toLocaleString();
  document.getElementById('mildLossValue').textContent = targets.mildLoss.toLocaleString();
  document.getElementById('moderateLossValue').textContent = targets.moderateLoss.toLocaleString();
  document.getElementById('weightGainValue').textContent = targets.weightGain.toLocaleString();

  // Update custom value display
  const customCal = parseFloat(document.getElementById('customCalories').value) || 0;
  document.getElementById('customValue').textContent = customCal.toLocaleString();

  // Highlight selected target button
  const highlightMap = {
    maintenance: 'maintenanceValue',
    mildLoss: 'mildLossValue',
    moderateLoss: 'moderateLossValue',
    weightGain: 'weightGainValue',
    custom: 'customValue'
  };
  document.querySelectorAll('.result-item').forEach(item => item.classList.remove('highlight'));
  if (highlightMap[selectedCalorieTarget]) {
    document.getElementById(highlightMap[selectedCalorieTarget]).parentElement.classList.add('highlight');
  }

  if (currentMacroMode === 'percent') {
    updatePercentDisplays();
  } else {
    document.getElementById('carbsGramsAuto').textContent = calculateMacros().carbs + ' g';
  }
  updateMacroSummary();
}

function updatePercentDisplays() {
  const pPct = parseFloat(document.getElementById('proteinPercent').value);
  const cPct = parseFloat(document.getElementById('carbsPercent').value);
  const fPct = parseFloat(document.getElementById('fatPercent').value);
  const total = pPct + cPct + fPct;
  document.getElementById('proteinPercentDisplay').textContent = pPct + '%';
  document.getElementById('carbsPercentDisplay').textContent = cPct + '%';
  document.getElementById('fatPercentDisplay').textContent = fPct + '%';
  const totalEl = document.getElementById('percentTotal');
  totalEl.textContent = 'Total: ' + total + '%';
  totalEl.classList.toggle('warning', total !== 100);
}

function updateMacroSummary() {
  const macros = calculateMacros();
  document.getElementById('summaryProtein').textContent = macros.protein + ' g';
  document.getElementById('summaryProteinCals').textContent = (macros.protein * KCAL_PER_GRAM.protein) + ' kcal';
  document.getElementById('summaryCarbs').textContent = macros.carbs + ' g';
  document.getElementById('summaryCarbsCals').textContent = (macros.carbs * KCAL_PER_GRAM.carbs) + ' kcal';
  document.getElementById('summaryFat').textContent = macros.fat + ' g';
  document.getElementById('summaryFatCals').textContent = (macros.fat * KCAL_PER_GRAM.fat) + ' kcal';
}

// ============================================================
// PRESET NOTES
// ============================================================
function loadPresetNotes() {
  const stored = localStorage.getItem('nutritionPresetNotes_v1');
  if (stored) {
    try {
      presetNotes = JSON.parse(stored);
    } catch (e) {
      presetNotes = DEFAULT_PRESET_NOTES.slice();
    }
  } else {
    presetNotes = DEFAULT_PRESET_NOTES.slice();
  }
}

function savePresetNotes() {
  localStorage.setItem('nutritionPresetNotes_v1', JSON.stringify(presetNotes));
}

function renderPresetTags() {
  const container = document.getElementById('presetTags');
  container.innerHTML = '';
  if (presetNotes.length === 0) {
    container.innerHTML = '<p class="empty-state">No quick-add notes yet. Click Edit to add some.</p>';
    return;
  }
  presetNotes.forEach((text, idx) => {
    const tag = document.createElement('button');
    tag.type = 'button';
    tag.className = 'preset-tag';
    tag.textContent = text.length > 60 ? text.substring(0, 57) + '...' : text;
    tag.title = text;
    tag.dataset.idx = idx;
    if (addedPresets.has(idx)) tag.classList.add('added');
    tag.addEventListener('click', () => togglePreset(idx, text, tag));
    container.appendChild(tag);
  });
}

function togglePreset(idx, text, tag) {
  const textarea = document.getElementById('notesText');
  const currentNotes = textarea.value.trim();
  if (addedPresets.has(idx)) {
    // Remove
    const regex = new RegExp('\\s*' + escapeRegex(text) + '\\s*', 'g');
    textarea.value = textarea.value.replace(regex, '\n').replace(/\n{3,}/g, '\n\n').trim();
    addedPresets.delete(idx);
    tag.classList.remove('added');
  } else {
    // Add
    if (currentNotes.length > 0 && !currentNotes.endsWith('\n')) {
      textarea.value += '\n\n';
    }
    textarea.value += text;
    addedPresets.add(idx);
    tag.classList.add('added');
  }
  updatePdfPreview();
}

function openPresetEditor() {
  renderPresetEditor();
  document.getElementById('presetEditor').classList.remove('hidden');
}

function closePresetEditor() {
  document.getElementById('presetEditor').classList.add('hidden');
}

function renderPresetEditor() {
  const list = document.getElementById('presetList');
  list.innerHTML = '';
  presetNotes.forEach((text, idx) => {
    const row = document.createElement('div');
    row.className = 'preset-edit-row';
    row.innerHTML = `
      <input type="text" class="preset-edit-input" value="${escapeAttr(text)}" data-idx="${idx}">
      <button type="button" class="icon-btn preset-delete-btn" data-idx="${idx}" title="Delete">&#10006;</button>
    `;
    row.querySelector('.preset-edit-input').addEventListener('change', (e) => {
      presetNotes[idx] = e.target.value.trim() || text;
      savePresetNotes();
      renderPresetTags();
      updatePdfPreview();
    });
    row.querySelector('.preset-delete-btn').addEventListener('click', () => {
      if (!confirm('Delete this quick-add note?')) return;
      presetNotes.splice(idx, 1);
      // Rebuild addedPresets indices
      const newAdded = new Set();
      addedPresets.forEach(oldIdx => {
        if (oldIdx < idx) newAdded.add(oldIdx);
        else if (oldIdx > idx) newAdded.add(oldIdx - 1);
      });
      addedPresets = newAdded;
      savePresetNotes();
      renderPresetTags();
      renderPresetEditor();
      updatePdfPreview();
    });
    list.appendChild(row);
  });
}

function addPresetFromInput() {
  const input = document.getElementById('newPresetText');
  const text = input.value.trim();
  if (!text) return;
  presetNotes.push(text);
  savePresetNotes();
  input.value = '';
  renderPresetTags();
  renderPresetEditor();
}

// ============================================================
// PDF PREVIEW UPDATE
// ============================================================
function updatePdfPreview() {
  // --- Header text ---
  const clientName = document.getElementById('clientName').value.trim() || 'Client Name';
  document.getElementById('pdfClientName').textContent = 'for ' + clientName;
  document.getElementById('pdfDate').textContent = formatDateForPdf(document.getElementById('handoutDate').value);

  // --- Client Information ---
  const age = document.getElementById('age').value || '--';
  const activityLabel = ACTIVITY_LABELS[document.getElementById('activityLevel').value] || '--';
  const goal = document.getElementById('clientGoal').value.trim() || '--';

  let heightDisplay, weightDisplay;
  if (currentUnit === 'metric') {
    heightDisplay = (parseFloat(document.getElementById('heightCm').value) || 0) + ' cm';
    weightDisplay = (parseFloat(document.getElementById('weightKg').value) || 0) + ' kg';
  } else {
    const ft = parseFloat(document.getElementById('heightFt').value) || 0;
    const inch = parseFloat(document.getElementById('heightIn').value) || 0;
    heightDisplay = ft + "' " + inch + '"';
    weightDisplay = (parseFloat(document.getElementById('weightLbs').value) || 0) + ' lbs';
  }

  document.getElementById('pdfAge').textContent = age + ' years';
  document.getElementById('pdfHeight').textContent = heightDisplay;
  document.getElementById('pdfWeight').textContent = weightDisplay;
  document.getElementById('pdfActivity').textContent = activityLabel;
  document.getElementById('pdfGoal').textContent = goal;

  // --- Calorie Target (only selected) ---
  const choice = selectedCalorieTarget;
  const label = CALORIE_LABELS[choice] || 'Target';
  const calories = getSelectedCalories();
  const note = CALORIE_NOTES[choice] || '';

  document.getElementById('pdfTargetLabel').textContent = label;
  document.getElementById('pdfTargetValue').textContent = calories.toLocaleString() + ' kcal/day';
  document.getElementById('pdfTargetNote').textContent = note ? '~ ' + note : '';

  // --- Macros ---
  const macros = calculateMacros();
  document.getElementById('pdfProtein').textContent = macros.protein + ' g';
  document.getElementById('pdfCarbs').textContent = macros.carbs + ' g';
  document.getElementById('pdfFat').textContent = macros.fat + ' g';
  document.getElementById('pdfProteinPercent').textContent = macros.proteinPct + '%';
  document.getElementById('pdfCarbsPercent').textContent = macros.carbsPct + '%';
  document.getElementById('pdfFatPercent').textContent = macros.fatPct + '%';

  const totalGrams = macros.protein + macros.carbs + macros.fat;
  if (totalGrams > 0) {
    document.getElementById('proteinSegment').style.width = (macros.protein / totalGrams * 100) + '%';
    document.getElementById('carbsSegment').style.width = (macros.carbs / totalGrams * 100) + '%';
    document.getElementById('fatSegment').style.width = (macros.fat / totalGrams * 100) + '%';
  }
  document.getElementById('pdfMacroCalories').innerHTML = 'Based on <strong>' + macros.totalCalories.toLocaleString() + '</strong> kcal/day';

  // --- Notes (connected to the left column notesText textarea) ---
  const notesText = document.getElementById('notesText').value.trim();
  const notesDiv = document.getElementById('pdfNotes');
  if (notesText) {
    notesDiv.innerHTML = notesText.split('\n').filter(l => l.trim()).map(l => '<p>' + escapeHtml(l.trim()) + '</p>').join('');
  } else {
    notesDiv.innerHTML = '<p class="empty-state">No notes added.</p>';
  }
}

// ============================================================
// PDF GENERATION
// ============================================================
// The bundled html2canvas library cannot properly render this
// page's CSS (flexbox, CSS custom properties, grid) and
// produces a blank canvas every time.
//
// Solution: use the browser's native print engine instead.
// The @media print CSS in styles.css hides the app UI and
// shows only the .pdf-page at full letter size. The browser's
// print dialog includes a "Save as PDF" destination that
// produces a vector (selectable-text) PDF — higher quality
// than html2canvas's rasterised output.
// ============================================================

function generatePdf() {
  window.print();
}

// ============================================================
// UTILITIES
// ============================================================
function escapeHtml(text) {
  const div = document.createElement('div');
  div.textContent = text;
  return div.innerHTML;
}

function escapeAttr(text) {
  return text.replace(/"/g, '&quot;').replace(/'/g, '&#39;');
}

function escapeRegex(text) {
  return text.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}
