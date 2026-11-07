// ============================================================
// Brenda Le Wellness - Nutrition Coaching App
// Enhanced Version - PDF fix + hydration, BMI, meal distribution,
// save/load, print, fiber targets
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

const BMI_CATEGORIES = [
  { max: 18.5, label: 'Underweight' },
  { max: 25,   label: 'Normal' },
  { max: 30,   label: 'Overweight' },
  { max: 999,  label: 'Obese' }
];

// Meal distribution percentages (Breakfast, Lunch, Dinner, Snack)
const MEAL_DISTRIBUTION = [
  { name: 'Breakfast', pct: 0.25 },
  { name: 'Lunch',     pct: 0.30 },
  { name: 'Dinner',    pct: 0.30 },
  { name: 'Snacks',    pct: 0.15 }
];

// --- State ---
let presetNotes = [];
let addedPresets = new Set();
let currentUnit = 'metric';
let currentMacroMode = 'percent';
let selectedCalorieTarget = 'mildLoss';

// Fields to save/restore for client sessions
const SESSION_FIELD_IDS = [
  'clientName', 'handoutDate', 'gender', 'age',
  'heightCm', 'weightKg', 'heightFt', 'heightIn', 'weightLbs',
  'activityLevel', 'clientGoal', 'customCalories',
  'proteinPercent', 'carbsPercent', 'fatPercent',
  'proteinGrams', 'fatGrams', 'notesText'
];

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
  document.getElementById('header-logo').src = dataUri;
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
    document.getElementById('header-logo').src = dataUri;
    document.getElementById('pdfLogo').src = dataUri;
  });

  // --- Generate PDF ---
  document.getElementById('generatePdfBtn').addEventListener('click', generatePdf);

  // --- Print ---
  document.getElementById('printBtn').addEventListener('click', printHandout);

  // --- Session save/load/clear ---
  document.getElementById('saveSessionBtn').addEventListener('click', saveSession);
  document.getElementById('loadSessionBtn').addEventListener('click', loadSession);
  document.getElementById('clearFormBtn').addEventListener('click', clearForm);

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

function calculateBMI() {
  const weightKg = getWeightKg();
  const heightM = getHeightCm() / 100;
  if (heightM <= 0 || weightKg <= 0) return 0;
  return weightKg / (heightM * heightM);
}

function getBmiCategory(bmi) {
  if (bmi <= 0) return '--';
  for (const cat of BMI_CATEGORIES) {
    if (bmi < cat.max) return cat.label;
  }
  return '--';
}

function calculateHydration() {
  // 35 ml per kg body weight, min 1.5L
  const weightKg = getWeightKg();
  return Math.max(1.5, Math.round((weightKg * 0.035) * 10) / 10);
}

function calculateFiber() {
  // 14g fiber per 1000 kcal
  const calories = getSelectedCalories();
  return Math.round((calories / 1000) * 14);
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

  // BMI
  const bmi = calculateBMI();
  document.getElementById('bmiValue').textContent = bmi > 0 ? bmi.toFixed(1) : '--';
  document.getElementById('bmiCategory').textContent = getBmiCategory(bmi);

  // Hydration
  const hydration = calculateHydration();
  document.getElementById('hydrationValue').textContent = hydration.toFixed(1);
  document.getElementById('hydrationSummary').textContent = hydration.toFixed(1) + ' L';

  // Fiber
  const fiber = calculateFiber();
  document.getElementById('fiberValue').textContent = fiber + ' g';

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
// SESSION SAVE / LOAD / CLEAR
// ============================================================
function saveSession() {
  const data = {};
  SESSION_FIELD_IDS.forEach(id => {
    const el = document.getElementById(id);
    if (el) data[id] = el.value;
  });
  data._unit = currentUnit;
  data._macroMode = currentMacroMode;
  data._selectedCalorieTarget = selectedCalorieTarget;
  data._savedAt = new Date().toISOString();
  localStorage.setItem('nutritionClientSession_v1', JSON.stringify(data));
  flashButton('saveSessionBtn', 'Saved!');
}

function loadSession() {
  const stored = localStorage.getItem('nutritionClientSession_v1');
  if (!stored) {
    flashButton('loadSessionBtn', 'No data');
    return;
  }
  try {
    const data = JSON.parse(stored);
    SESSION_FIELD_IDS.forEach(id => {
      const el = document.getElementById(id);
      if (el && data[id] !== undefined) el.value = data[id];
    });
    if (data._unit) {
      currentUnit = data._unit;
      updateUnitUI();
    }
    if (data._macroMode) {
      currentMacroMode = data._macroMode;
      updateMacroModeUI();
    }
    if (data._selectedCalorieTarget) {
      selectedCalorieTarget = data._selectedCalorieTarget;
      const customRow = document.getElementById('customCalorieRow');
      customRow.classList.toggle('hidden', selectedCalorieTarget !== 'custom');
    }
    calculateAll();
    updatePdfPreview();
    flashButton('loadSessionBtn', 'Loaded!');
  } catch (e) {
    flashButton('loadSessionBtn', 'Error');
  }
}

function clearForm() {
  if (!confirm('Clear all client data? This cannot be undone.')) return;
  document.getElementById('clientName').value = '';
  document.getElementById('clientGoal').value = '';
  document.getElementById('notesText').value = '';
  document.getElementById('gender').value = 'female';
  document.getElementById('age').value = '35';
  document.getElementById('heightCm').value = '165';
  document.getElementById('weightKg').value = '70';
  document.getElementById('heightFt').value = '5';
  document.getElementById('heightIn').value = '5';
  document.getElementById('weightLbs').value = '154';
  document.getElementById('activityLevel').value = '1.375';
  document.getElementById('customCalories').value = '1800';
  document.getElementById('proteinPercent').value = '25';
  document.getElementById('carbsPercent').value = '45';
  document.getElementById('fatPercent').value = '30';
  document.getElementById('proteinGrams').value = '112';
  document.getElementById('fatGrams').value = '60';
  selectedCalorieTarget = 'mildLoss';
  document.getElementById('customCalorieRow').classList.add('hidden');
  addedPresets.clear();
  setDefaultDate();
  calculateAll();
  updatePdfPreview();
  renderPresetTags();
  flashButton('clearFormBtn', 'Cleared!');
}

function flashButton(btnId, message) {
  const btn = document.getElementById(btnId);
  const originalText = btn.textContent;
  btn.textContent = message;
  btn.classList.add('flash');
  setTimeout(() => {
    btn.textContent = originalText;
    btn.classList.remove('flash');
  }, 1500);
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

  // BMI in PDF
  const bmi = calculateBMI();
  document.getElementById('pdfBmi').textContent = bmi > 0 ? bmi.toFixed(1) + ' (' + getBmiCategory(bmi) + ')' : '--';

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

  // Fiber and hydration in PDF
  document.getElementById('pdfFiber').textContent = calculateFiber() + ' g/day';
  document.getElementById('pdfHydration').textContent = calculateHydration().toFixed(1) + ' L/day';

  // --- Meal Distribution ---
  updateMealDistribution(macros, calories);

  // --- Notes ---
  const notesText = document.getElementById('notesText').value.trim();
  const notesDiv = document.getElementById('pdfNotes');
  if (notesText) {
    notesDiv.innerHTML = notesText.split('\n').filter(l => l.trim()).map(l => '<p>' + escapeHtml(l.trim()) + '</p>').join('');
  } else {
    notesDiv.innerHTML = '<p class="empty-state">No notes added.</p>';
  }
}

function updateMealDistribution(macros, calories) {
  const tbody = document.getElementById('pdfMealDistribution');
  tbody.innerHTML = '';
  MEAL_DISTRIBUTION.forEach(meal => {
    const tr = document.createElement('tr');
    const mealCals = Math.round(calories * meal.pct);
    const mealProtein = Math.round(macros.protein * meal.pct);
    const mealCarbs = Math.round(macros.carbs * meal.pct);
    const mealFat = Math.round(macros.fat * meal.pct);
    tr.innerHTML = `
      <td>${meal.name}</td>
      <td>${mealCals.toLocaleString()} kcal</td>
      <td>${mealProtein} g</td>
      <td>${mealCarbs} g</td>
      <td>${mealFat} g</td>
    `;
    tbody.appendChild(tr);
  });
}

// ============================================================
// PDF GENERATION (FIXED)
// ============================================================
// Root cause of the blank-page bug:
// The old code cloned .pdf-page into a wrapper with
//   position:fixed; left:0; top:0; z-index:-99999
// The negative z-index placed the clone BEHIND the body's
// background, so html2canvas captured a blank/white canvas.
//
// Fix: Use the original .pdf-page element directly and let
// html2canvas's internal onclone callback strip transforms,
// margins, and shadows in the cloned document.
// ============================================================

async function generatePdf() {
  if (typeof html2pdf === 'undefined') {
    alert('PDF library not loaded. Please ensure html2pdf.bundle.min.js is available.');
    return;
  }

  var clientName = document.getElementById('clientName').value.trim() || 'Client';
  var element = document.getElementById('pdfContent');

  var btn = document.getElementById('generatePdfBtn');
  var originalText = btn.textContent;
  btn.textContent = 'Generating PDF...';
  btn.disabled = true;

  // Add class to remove responsive transforms on the live page
  document.body.classList.add('pdf-generating');

  var opt = {
    margin: 0,
    filename: clientName.replace(/[^a-zA-Z0-9]/g, '_') + '_Nutrition_Guide.pdf',
    image: { type: 'jpeg', quality: 0.98 },
    html2canvas: {
      scale: 2,
      useCORS: true,
      allowTaint: true,
      letterRendering: true,
      backgroundColor: '#ffffff',
      logging: false,
      onclone: function (clonedDoc) {
        // Remove transforms, margins, shadows from all pdf-page elements
        var pages = clonedDoc.querySelectorAll('.pdf-page');
        for (var i = 0; i < pages.length; i++) {
          pages[i].style.transform = 'none';
          pages[i].style.margin = '0';
          pages[i].style.boxShadow = 'none';
        }
        // Remove overflow / max-height constraints from preview wrapper
        var wrapper = clonedDoc.querySelector('.preview-wrapper');
        if (wrapper) {
          wrapper.style.overflow = 'visible';
          wrapper.style.maxHeight = 'none';
          wrapper.style.padding = '0';
          wrapper.style.background = 'transparent';
          wrapper.style.boxShadow = 'none';
        }
        // Remove preview panel sticky positioning
        var panel = clonedDoc.querySelector('.preview-panel');
        if (panel) {
          panel.style.position = 'static';
        }
      }
    },
    jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
  };

  try {
    await html2pdf().set(opt).from(element).save();
  } catch (err) {
    console.error('PDF generation error:', err);
    alert('PDF generation failed: ' + (err && err.message ? err.message : 'Please try again.'));
  } finally {
    document.body.classList.remove('pdf-generating');
    btn.textContent = originalText;
    btn.disabled = false;
  }
}

// ============================================================
// PRINT
// ============================================================
function printHandout() {
  document.body.classList.add('pdf-generating');
  window.print();
  document.body.classList.remove('pdf-generating');
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
