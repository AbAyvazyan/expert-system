// ===============================================
// Հարցերի Բազա
// ===============================================

const questionBank = {
    // Հարց 1: Նպատակ (Պարտադիր)
    goal: {
        id: 'goal',
        text: 'Ո՞րն է Ձեր ֆիթնեսի **հիմնական նպատակը**?',
        hint: 'Ձեր պատասխանը կորոշի հետագա հարցերը և պլանի ուղղությունը:',
        singleColumn: true,
        options: [
            { 
                value: 'lose_weight', 
                label: 'Քաշի Կորուստ / Ճարպերի Այրում',
                description: 'Կրճատել մարմնի ճարպի տոկոսը և նիհարել'
            },
            { 
                value: 'maintain', 
                label: 'Ներկայիս Քաշի Պահպանում',
                description: 'Պահպանել կազմվածքը և բարելավել առողջությունը'
            },
            { 
                value: 'gain_muscle', 
                label: 'Մկանային Զանգվածի Ավելացում',
                description: 'Ավելացնել մկանների զանգվածը և ուժը'
            }
        ]
    },

    // Հարց 2: Տարիք
    age: {
        id: 'age',
        text: 'Որքա՞ն է Ձեր **տարիքային միջակայքը**:',
        hint: 'Տարիքն օգտագործվում է կալորիականությունը ճշգրտելու համար (BMR հաշվարկ)',
        options: [
            { value: '15-25', label: '15-25 Տարեկան', numericValue: 20 },
            { value: '26-35', label: '26-35 Տարեկան', numericValue: 30 },
            { value: '36-45', label: '36-45 Տարեկան', numericValue: 40 },
            { value: '46-55', label: '46-55 Տարեկան', numericValue: 50 },
            { value: '56+', label: '56+ Տարեկան', numericValue: 60 }
        ]
    },

    // Հարց 3: Հասակ
    height: {
        id: 'height',
        text: 'Որքա՞ն է Ձեր **մոտավոր հասակը** (սմ-ով):',
        hint: 'Հասակը կարևոր է ճշգրիտ BMR հաշվարկի համար',
        options: [
            { value: '150-160', label: '150-160 սմ', numericValue: 155 },
            { value: '161-170', label: '161-170 սմ', numericValue: 165 },
            { value: '171-180', label: '171-180 սմ', numericValue: 175 },
            { value: '181-190', label: '181-190 սմ', numericValue: 185 },
            { value: '190+', label: '190+ սմ', numericValue: 195 }
        ]
    },

    // Հարց 4: Քաշ
    weight: {
        id: 'weight',
        text: 'Որքա՞ն է Ձեր **մոտավոր քաշը** (կգ-ով):',
        hint: 'Քաշը կարևոր է BMR/TDEE հաշվարկի համար',
        options: [
            { value: '50-60', label: '50-60 կգ', numericValue: 55 },
            { value: '61-70', label: '61-70 կգ', numericValue: 65 },
            { value: '71-80', label: '71-80 կգ', numericValue: 75 },
            { value: '81-90', label: '81-90 կգ', numericValue: 85 },
            { value: '91-100', label: '91-100 կգ', numericValue: 95 },
            { value: '100+', label: '100+ կգ', numericValue: 110 }
        ]
    },

    // Հարց 5: Ակտիվություն
    activity: {
        id: 'activity',
        text: 'Որքա՞ն է Ձեր **ֆիզիկական ակտիվության մակարդակը**:',
        hint: 'Սա ազդում է Ձեր օրական կալորիականության ծախսի վրա (TDEE)',
        singleColumn: true,
        options: [
            { 
                value: 'sedentary', 
                label: 'Նստակյաց',
                description: 'Քիչ կամ առանց մարզումների'
            },
            { 
                value: 'light', 
                label: 'Թեթև Ակտիվ',
                description: 'Թեթև մարզում/սպորտ շաբաթական 1-3 օր'
            },
            { 
                value: 'moderate', 
                label: 'Չափավոր Ակտիվ',
                description: 'Չափավոր մարզում/սպորտ շաբաթական 3-5 օր'
            },
            { 
                value: 'very', 
                label: 'Շատ Ակտիվ',
                description: 'Ծանր մարզում/սպորտ շաբաթական 6-7 օր'
            }
        ]
    },

    // --- Պայմանական Հարցեր (Քաշի Կորուստ) ---

    // ՔԿ -> Դիետայի Դժվարություն
    diet_struggle: {
        id: 'diet_struggle',
        text: 'Ո՞րն է Ձեր դիետայի հետ կապված **ամենամեծ դժվարությունը**?',
        hint: 'Օգնում է անհատականացնել սննդային խորհուրդները',
        singleColumn: true,
        options: [
            { 
                value: 'portions', 
                label: 'Բաժինների Չափը',
                description: 'Միշտ չափից շատ եմ ուտում հիմնական կերակուրների ժամանակ'
            },
            { 
                value: 'snacking', 
                label: 'Միջանկյալ Ուտեստներ',
                description: 'Հաճախ եմ անառողջ նախուտեստներ ուտում կերակուրների միջև'
            },
            { 
                value: 'sweets', 
                label: 'Քաղցրավենիքի Ցանկություն',
                description: 'Չեմ կարողանում հրաժարվել շաքարից կամ ֆասթֆուդից'
            },
            { 
                value: 'emotional', 
                label: 'Էմոցիոնալ Ուտելը',
                description: 'Սթրեսի կամ ձանձրույթի ժամանակ եմ ուտում'
            }
        ]
    },

    // ՔԿ -> Մարզման Նախապատվություն
    exercise_preference: {
        id: 'exercise_preference',
        text: 'Ո՞ր մարզման միջավայրն եք **նախընտրում** ճարպեր այրելու համար?',
        hint: 'Այս հարցը կորոշի Ձեր շաբաթական պլանի տեսակը',
        singleColumn: true,
        options: [
            { 
                value: 'cardio', 
                label: 'Կարդիո Կենտրոնացում',
                description: 'Վազք, հեծանիվ, HIIT'
            },
            { 
                value: 'gym', 
                label: 'Մարզասրահի Խառը Պլան',
                description: 'Ուժային մարզումներ գումարած կարդիո'
            },
            { 
                value: 'home', 
                label: 'Տանը Մարզում',
                description: 'Մարմնի քաշով վարժություններ, յոգա, պիլատես'
            },
            { 
                value: 'outdoor', 
                label: 'Բացօթյա Ակտիվություն',
                description: 'Բնության գրկում քայլք, վազք, հեծանվավարություն'
            }
        ]
    },

    // --- Պայմանական Հարցեր (Մկանային Զանգված) ---

    // ՄԶ -> Մարզասրահի Փորձ
    gym_experience: {
        id: 'gym_experience',
        text: 'Որքա՞ն է Ձեր **մարզասրահի փորձը** ուժային մարզումներում?',
        hint: 'Կարևոր է ծանրաբեռնվածության մակարդակը որոշելու համար',
        singleColumn: true,
        options: [
            { 
                value: 'beginner', 
                label: 'Սկսնակ',
                description: '0-6 ամիս փորձ կամ նոր եք սկսում'
            },
            { 
                value: 'intermediate', 
                label: 'Միջին Մակարդակ',
                description: '6 ամիս - 2 տարի կանոնավոր մարզում'
            },
            { 
                value: 'advanced', 
                label: 'Փորձառու',
                description: '2+ տարի մարզման փորձ և հստակ ռեժիմ'
            }
        ]
    },

    // ՄԶ -> Սպիտակուցի Ընդունում
    protein_intake: {
        id: 'protein_intake',
        text: 'Ինչպե՞ս կգնահատեք Ձեր **սպիտակուցի ընդունումը**:',
        hint: 'Սպիտակուցը հիմնական շինանյութն է մկանների համար',
        singleColumn: true,
        options: [
            { 
                value: 'low', 
                label: 'Ցածր',
                description: 'Հազվադեպ եմ միս, ձու, կաթնամթերք ուտում'
            },
            { 
                value: 'moderate', 
                label: 'Չափավոր',
                description: 'Ամեն կերակուրի ժամանակ մի փոքր սպիտակուց'
            },
            { 
                value: 'high', 
                label: 'Բարձր',
                description: 'Ակտիվորեն հետևում եմ սպիտակուցի քանակին (օրական 1.5գ+/կգ)'
            }
        ]
    },

    // --- Պայմանական Հարցեր (Քաշի Պահպանում) ---

    // ՔՊ -> Ռեժիմից Բավարարվածություն
    routine_satisfaction: {
        id: 'routine_satisfaction',
        text: 'Որքա՞ն եք բավարարված Ձեր **ներկայիս ռեժիմով**:',
        hint: 'Արդյոք Ձեր մարզումներն ու սնունդը հավասարակշռվա՞ծ են',
        singleColumn: true,
        options: [
            { 
                value: 'satisfied', 
                label: 'Լիովին Բավարարված',
                description: 'Ես գտել եմ իմ հավասարակշռությունը'
            },
            { 
                value: 'partial', 
                label: 'Մասնակիորեն Բավարարված',
                description: 'Կարող է լավ լինել, բայց հաճախակի շեղումներ ունեմ'
            },
            { 
                value: 'unsatisfied', 
                label: 'Անբավարարված',
                description: 'Իմ ռեժիմը անկայուն է կամ ձանձրալի'
            }
        ]
    },

    // ՔՊ -> Կենտրոնացման Տարածք
    focus_area: {
        id: 'focus_area',
        text: 'Ո՞ր որակն եք ուզում **բարելավել** Ձեր մարզումներում?',
        hint: 'Պահպանման ռեժիմում կարելի է կենտրոնանալ կոնկրետ ոլորտի վրա',
        singleColumn: true,
        options: [
            { 
                value: 'strength', 
                label: 'Ուժ',
                description: 'Ավելացնել ծանրաբեռնվածությունը ուժային մարզումներում'
            },
            { 
                value: 'flexibility', 
                label: 'Ճկունություն/Շարժունակություն',
                description: 'Ավելացնել Յոգա կամ ձգումների դասեր'
            },
            { 
                value: 'endurance', 
                label: 'Դիմացկունություն',
                description: 'Բարելավել կարդիո ցուցանիշները (վազք, հեծանիվ)'
            },
            { 
                value: 'balance', 
                label: 'Հավասարակշռություն/Կոորդինացիա',
                description: 'Ավելացնել ֆունկցիոնալ մարզումներ'
            }
        ]
    },

    // --- Վերջին Հարց (Բոլորի համար) ---
    sleep: {
        id: 'sleep',
        text: 'Միջինում քանի՞ **ժամ եք քնում** գիշերը:',
        hint: 'Քունը կենսական նշանակություն ունի վերականգնման և հորմոնալ հաշվեկշռի համար',
        options: [
            { 
                value: 'less_6', 
                label: '6 ժամից պակաս',
                description: 'Քնի կտրուկ պակաս՝ ազդում է վերականգնման վրա'
            },
            { 
                value: '7_8', 
                label: '7-8 ժամ',
                description: 'Օպտիմալ քանակ՝ մարզիկների մեծ մասի համար'
            },
            { 
                value: 'more_9', 
                label: '9+ ժամ',
                description: 'Հնարավոր է շատ է, բայց լավ է ծանր մարզումներից հետո'
            }
        ]
    }
};

// --- Համակարգի Կարգավիճակ ---
let state = {
    currentStep: 0,
    answers: {},
    questionQueue: [],
    history: []
};

// --- DOM Էլեմենտներ ---
const elements = {
    progressText: document.getElementById('progressText'),
    progressStep: document.getElementById('progressStep'),
    progressFill: document.getElementById('progressFill'),
    historyContainer: document.getElementById('historyContainer'),
    historyList: document.getElementById('historyList'),
    questionCard: document.getElementById('questionCard'),
    questionNumber: document.getElementById('questionNumber'),
    questionText: document.getElementById('questionText'),
    questionHint: document.getElementById('questionHint'),
    optionsGrid: document.getElementById('optionsGrid'),
    backBtn: document.getElementById('backBtn'),
    resultsArea: document.getElementById('resultsArea'),
    calorieDisplay: document.getElementById('calorieDisplay'),
    planDisplay: document.getElementById('planDisplay'),
    adviceDisplay: document.getElementById('adviceDisplay'),
    restartBtn: document.getElementById('restartBtn')
};

// ===============================================
// Լոգիկա (Հարցերի Հերթականության Կառավարում)
// ===============================================

function buildQuestionQueue(goal = null) {
    // Հիմնական հարցեր (Բոլորի համար)
    const baseQuestions = ['goal', 'age', 'height', 'weight', 'activity'];
    
    // Պայմանական հարցեր
    let conditionalQuestions = [];
    
    if (goal === 'lose_weight') {
        conditionalQuestions = ['diet_struggle', 'exercise_preference'];
    } else if (goal === 'gain_muscle') {
        conditionalQuestions = ['gym_experience', 'protein_intake'];
    } else if (goal === 'maintain') {
        conditionalQuestions = ['routine_satisfaction', 'focus_area'];
    }
    
    // Վերջին հարցեր (Բոլորի համար)
    const finalQuestions = ['sleep'];
    
    return [...baseQuestions, ...conditionalQuestions, ...finalQuestions];
}

// ===============================================
// Ինտերֆեյսի Կառավարում
// ===============================================

function initializeExpertSystem() {
    state = {
        currentStep: 0,
        answers: {},
        questionQueue: buildQuestionQueue(),
        history: []
    };
    
    renderCurrentQuestion();
    updateProgress();
    elements.historyContainer.classList.remove('visible');
    elements.historyList.innerHTML = '';
    elements.resultsArea.classList.remove('visible');
    elements.questionCard.style.display = 'block';
}

function updateProgress() {
    const totalSteps = state.questionQueue.length;
    const currentStep = state.currentStep + 1;
    const percentage = (state.currentStep / totalSteps) * 100;
    
    elements.progressStep.textContent = `Հարց ${currentStep} / ${totalSteps}`;
    elements.progressFill.style.width = `${percentage}%`;
    
    // Պրոգրեսի տեքստի թարմացում
    if (state.currentStep === 0) {
        elements.progressText.textContent = 'Սկիզբ';
    } else if (state.currentStep < totalSteps * 0.5) {
        elements.progressText.textContent = 'Գնահատում...';
    } else if (state.currentStep < totalSteps * 0.8) {
        elements.progressText.textContent = 'Վերջնագիծ...';
    } else {
        elements.progressText.textContent = 'Ավարտին Մոտ!';
    }
    
    // "Հետ գնալ" կոճակի ցուցադրում
    if (state.currentStep > 0) {
        elements.backBtn.classList.add('visible');
    } else {
        elements.backBtn.classList.remove('visible');
    }
}

function renderCurrentQuestion() {
    const questionId = state.questionQueue[state.currentStep];
    const question = questionBank[questionId];
    
    if (!question) {
        showResults();
        return;
    }
    
    elements.questionNumber.textContent = `Հարց ${state.currentStep + 1}`;
    elements.questionText.innerHTML = question.text; // Օգտագործում ենք innerHTML՝ **թեգերն** աշխատացնելու համար
    elements.questionHint.textContent = question.hint;
    
    // Օպցիաների ցուցադրում
    elements.optionsGrid.innerHTML = '';
    elements.optionsGrid.className = question.singleColumn ? 'options-grid single-column' : 'options-grid';
    
    question.options.forEach(option => {
        const btn = document.createElement('button');
        btn.className = 'option-btn';
        btn.dataset.value = option.value;
        
        let btnHTML = `<span class="option-label">${option.label}</span>`;
        if (option.description) {
            btnHTML += `<span class="option-description">${option.description}</span>`;
        }
        btn.innerHTML = btnHTML;
        
        btn.addEventListener('click', () => selectOption(questionId, option));
        elements.optionsGrid.appendChild(btn);
    });
}

function selectOption(questionId, option) {
    // Պատասխանը պահպանել
    state.answers[questionId] = {
        value: option.value,
        label: option.label,
        numericValue: option.numericValue || null
    };
    
    // Պատմությունը պահպանել
    const question = questionBank[questionId];
    state.history.push({
        questionText: question.text.replace(/\*\*/g, ''), // Ջնջել ** թեգերը պատմությունից
        answerLabel: option.label
    });
    
    // Եթե նպատակն է, թարմացնել հերթը
    if (questionId === 'goal') {
        state.questionQueue = buildQuestionQueue(option.value);
    }
    
    // Հաջորդ քայլ
    state.currentStep++;
    
    if (state.currentStep >= state.questionQueue.length) {
        showResults();
    } else {
        renderCurrentQuestion();
        renderHistory();
        updateProgress();
    }
}

function renderHistory() {
    if (state.history.length === 0) {
        elements.historyContainer.classList.remove('visible');
        return;
    }
    
    elements.historyContainer.classList.add('visible');
    elements.historyList.innerHTML = '';
    
    state.history.forEach((item, index) => {
        const historyItem = document.createElement('div');
        historyItem.className = 'history-item';
        historyItem.innerHTML = `
            <div class="history-number">${index + 1}</div>
            <div class="history-content">
                <div class="history-question">${item.questionText}</div>
                <div class="history-answer">${item.answerLabel}</div>
            </div>
        `;
        elements.historyList.appendChild(historyItem);
    });
}

function goBack() {
    if (state.currentStep > 0) {
        state.currentStep--;
        state.history.pop();
        
        // Ջնջել պատասխանը
        const questionId = state.questionQueue[state.currentStep];
        delete state.answers[questionId];
        
        // Եթե նորից "նպատակ" հարցն է, վերականգնել հերթը
        if (questionId === 'goal' || state.currentStep < 1) {
            state.questionQueue = buildQuestionQueue();
        }
        
        renderCurrentQuestion();
        renderHistory();
        updateProgress();
    }
}

// ===============================================
// BMR/TDEE Հաշվարկ (Միֆլին-Սենթ Ջեոր)
// ===============================================

function calculateBMR(weight, height, age) {
    // Օգտագործում ենք պարզեցված բանաձև (տղամարդու համար)
    return (10 * weight) + (6.25 * height) - (5 * age) + 5;
}

function calculateTDEE(bmr, activityLevel) {
    const activityFactors = {
        'sedentary': 1.2,
        'light': 1.375,
        'moderate': 1.55,
        'very': 1.725
    };
    return bmr * activityFactors[activityLevel];
}

// ===============================================
// Փորձագիտական Խորհուրդների Գեներացիա
// ===============================================

function getExpertAdvice() {
    // Ստանալ մուտքային տվյալները (Միջին թվերով)
    const weight = state.answers.weight?.numericValue || 70;
    const height = state.answers.height?.numericValue || 170;
    const age = state.answers.age?.numericValue || 30;
    const activity = state.answers.activity?.value || 'moderate';
    const goal = state.answers.goal?.value || 'maintain';
    const sleep = state.answers.sleep?.value || '7_8';
    
    const bmr = calculateBMR(weight, height, age);
    let tdee = calculateTDEE(bmr, activity);
    
    let calorieMessage = '';
    let trainingPlan = { title: '', plan: [] };
    let lifestyleAdvice = [];
    
    // --- ԿԱՆՈՆՆԵՐԻ ԲԱԶԱ 1: ԳՈՒՐԱՆԱԼՈՒ և ՄԱՐԶԱՆՔԻ ՊԼԱՆ ---
    
    // Նպատակ -> Քաշի Կորուստ
    if (goal === 'lose_weight') {
        const dietStruggle = state.answers.diet_struggle?.value;
        const exercisePref = state.answers.exercise_preference?.value;
        
        // Կալորիականություն
        const deficit = tdee - 500;
        calorieMessage = `Անվտանգ և կայուն քաշ կորցնելու համար, նախատեսեք օրական <strong>500 կկալ դեֆիցիտ</strong>: Ձեր առաջարկվող օրական կալորիականությունն է՝ <strong>${Math.round(deficit)} կկալ</strong>։`;
        
        // Լրացուցիչ խորհուրդներ դիետայի դժվարությունների համար
        if (dietStruggle === 'portions') {
            lifestyleAdvice.push({
                icon: '🍽️',
                title: 'Բաժինների Վերահսկում',
                text: 'Օգտագործեք փոքր ափսեներ, և համոզվեք, որ ափսեի կեսը բանջարեղեն է: Ուտելիս շտապեք:'
            });
        } else if (dietStruggle === 'snacking') {
            lifestyleAdvice.push({
                icon: '🥜',
                title: 'Միջանկյալ Ուտեստներ',
                text: 'Փոխարինեք անառողջ նախուտեստները սպիտակուցով հարուստ տարբերակներով (ընկույզ, մածուն, պանիր):'
            });
        } else if (dietStruggle === 'sweets') {
            lifestyleAdvice.push({
                icon: '🍫',
                title: 'Քաղցրավենիքի Ցանկություն',
                text: 'Թույլ տվեք Ձեզ փոքր «թույլատրելիք» շաբաթական (օրինակ՝ 1-2 անգամ)՝ մնացած օրերին խստորեն հետևելով պլանին:'
            });
        } else if (dietStruggle === 'emotional') {
            lifestyleAdvice.push({
                icon: '💚',
                title: 'Զգայական Սնունդ',
                text: 'Երբ զգում եք ուտելու ցանկություն սթրեսից, փորձեք 10 րոպե զբաղվել այլ բանով (զանգել ընկերոջը, զբոսնել):'
            });
        }
        
        // Մարզման պլան
        if (exercisePref === 'cardio') {
            trainingPlan.title = 'Ճարպեր Այրելու Պլան (Կարդիո Ֆոկուսով)';
            trainingPlan.plan = [
                'Երկուշաբթի: HIIT մարզում 30 րոպե',
                'Երեքշաբթի: Ուժային Մարզում (Ամբողջ Մարմինը) 45 րոպե',
                'Չորեքշաբթի: Ակտիվ Հանգիստ/Ձգումներ',
                'Հինգշաբթի: Միջին Կարդիո (Վազք/Հեծանիվ) 40 րոպե',
                'Ուրբաթ: Ուժային Մարզում (Ամբողջ Մարմինը) 45 րոպե',
                'Շաբաթ: Երկար Զբոսանք կամ Լող',
                'Կիրակի: Հանգիստ'
            ];
        } else if (exercisePref === 'gym') {
            trainingPlan.title = 'Ճարպեր Այրելու Պլան (Ուժ + Կարդիո)';
            trainingPlan.plan = [
                'Երկուշաբթի: Ուժային (Վերին Մարմին)',
                'Երեքշաբթի: Կարդիո 30 րոպե + Ձգումներ',
                'Չորեքշաբթի: Հանգիստ կամ Թեթև Յոգա',
                'Հինգշաբթի: Ուժային (Ստորին Մարմին)',
                'Ուրբաթ: Կարդիո 30 րոպե + Մամուլ/Ձեռքեր',
                'Շաբաթ: Բացօթյա Ակտիվություն',
                'Կիրակի: Հանգիստ'
            ];
        } else if (exercisePref === 'home') {
            trainingPlan.title = 'Ճարպեր Այրելու Պլան (Տանը Մարզում)';
            trainingPlan.plan = [
                'Երկուշաբթի: Ամբողջ Մարմնի Մարզում (Մարմնի Քաշով) 30 րոպե',
                'Երեքշաբթի: Կարդիո/Պար 40 րոպե',
                'Չորեքշաբթի: Հանգիստ կամ Ձգումներ',
                'Հինգշաբթի: HIIT Մարզում 25 րոպե',
                'Ուրբաթ: Յոգա/Պիլատես 35 րոպե',
                'Շաբաթ: Արագ Քայլք/Զբոսանք',
                'Կիրակի: Հանգիստ'
            ];
        } else {
            trainingPlan.title = 'Ճարպեր Այրելու Պլան (Բացօթյա Կենտրոնացում)';
            trainingPlan.plan = [
                'Երկուշաբթի: Բրիսկ Քայլք/Վազք 45 րոպե',
                'Երեքշաբթի: Հեծանվավարություն 60 րոպե',
                'Չորեքշաբթի: Հանգիստ կամ Լող/Ձգումներ',
                'Հինգշաբթի: Ուժային Մարզում (Մարմնի Քաշով) 40 րոպե',
                'Ուրբաթ: Վազք 30 րոպե + Ուժային Էլեմենտներ (Ձգումներ/Հրումներ)',
                'Շաբաթ: Երկար Զբոսանք Բնության գրկում',
                'Կիրակի: Հանգիստ'
            ];
        }
    }
    
    // Նպատակ -> Մկանային Զանգված
    else if (goal === 'gain_muscle') {
        const gymExp = state.answers.gym_experience?.value;
        const proteinInt = state.answers.protein_intake?.value;
        
        const surplus = tdee + 300;
        calorieMessage = `Մկանային աճի համար, նախատեսեք օրական չափավոր <strong>300 կկալ ավելցուկ</strong>: Ձեր առաջարկվող օրական կալորիականությունն է՝ <strong>${Math.round(surplus)} կկալ</strong>։`;
        
        // Լրացուցիչ խորհուրդներ սպիտակուցի համար
        if (proteinInt === 'low') {
            lifestyleAdvice.push({
                icon: '🥩',
                title: 'Սպիտակուցի Պակաս',
                text: 'Ձեր նպատակն իրագործելու համար պետք է օգտագործել 1.6-2 գրամ սպիտակուց մեկ կգ քաշին: Ավելացրեք հավ, ձուկ, կաթնամթերք, ձու ձեր սննդակարգում:'
            });
        } else if (proteinInt === 'moderate') {
            lifestyleAdvice.push({
                icon: '🥚',
                title: 'Սպիտակուցի Օպտիմալացում',
                text: 'Փորձեք սպիտակուցի բաժինն ավելացնել մարզումներից հետո, որպեսզի առավելագույնի հասցնեք վերականգնումը:'
            });
        } else {
            lifestyleAdvice.push({
                icon: '💪',
                title: 'Գերազանց Սպիտակուց',
                text: 'Դուք լավագույնս աջակցում եք մկանների վերականգնմանը և աճին: Շարունակեք այդպես:'
            });
        }
        
        // Մարզման պլան
        if (gymExp === 'beginner') {
            trainingPlan.title = 'Մկանային Զանգվածի Պլան (Սկսնակների Համար)';
            trainingPlan.plan = [
                'Երկուշաբթի: Ուժային Մարզում (Ամբողջ Մարմինը)',
                'Երեքշաբթի: Հանգիստ',
                'Չորեքշաբթի: Ուժային Մարզում (Ամբողջ Մարմինը)',
                'Հինգշաբթի: Հանգիստ',
                'Ուրբաթ: Ուժային Մարզում (Ամբողջ Մարմինը)',
                'Շաբաթ: Թեթև Կարդիո/Զբոսանք',
                'Կիրակի: Հանգիստ'
            ];
        } else if (gymExp === 'intermediate') {
            trainingPlan.title = 'Մկանային Զանգվածի Պլան (Push/Pull/Legs)';
            trainingPlan.plan = [
                'Երկուշաբթի: Push (Կուրծք/Ուսեր/Եռգլուխ)',
                'Երեքշաբթի: Pull (Մեջք/Երկգլուխ)',
                'Չորեքշաբթի: Legs (Ոտքեր/Ստորին Մարմին)',
                'Հինգշաբթի: Հանգիստ',
                'Ուրբաթ: Push (Բարձր Ինտենսիվություն)',
                'Շաբաթ: Pull (Միջին Ինտենսիվություն)',
                'Կիրակի: Հանգիստ'
            ];
        } else {
            trainingPlan.title = 'Մկանային Զանգվածի Պլան (5-օրյա Բաժանում)';
            trainingPlan.plan = [
                'Երկուշաբթի: Ոտքեր (Ծանր ծանրաբեռնվածություն)',
                'Երեքշաբթի: Կուրծք (Բարձր ծավալ)',
                'Չորեքշաբթի: Մեջք + Թեթև Կարդիո',
                'Հինգշաբթի: Հանգիստ/Վերականգնում',
                'Ուրբաթ: Ուսեր/Ձեռքեր (Վերին Մարմին)',
                'Շաբաթ: Ոտքեր (Թեթև) + Ֆունկցիոնալ Մարզում',
                'Կիրակի: Հանգիստ'
            ];
        }
    }
    
    // Նպատակ -> Քաշի Պահպանում
    else if (goal === 'maintain') {
        const satisfaction = state.answers.routine_satisfaction?.value;
        const focus = state.answers.focus_area?.value;
        
        calorieMessage = `Ձեր ներկայիս քաշը պահպանելու համար Ձեր օրական կալորիականությունը (TDEE) կազմում է մոտավորապես՝ <strong>${Math.round(tdee)} կկալ</strong>։`;
        
        // Լրացուցիչ խորհուրդներ ռեժիմի բավարարվածության համար
        if (satisfaction === 'satisfied') {
            lifestyleAdvice.push({
                icon: '✅',
                title: 'Գերազանց Հավասարակշռություն',
                text: 'Շարունակեք Ձեր ներկայիս ռեժիմը, այն արդյունավետ է Ձեր նպատակների համար:'
            });
        } else if (satisfaction === 'partial') {
            lifestyleAdvice.push({
                icon: '🔄',
                title: 'Ճշգրտումների Ժամանակն է',
                text: 'Փորձեք շաբաթական մեկ նոր մարզում կամ նոր առողջ բաղադրիչ ավելացնել սննդակարգում՝ բավարարվածությունը բարձրացնելու համար:'
            });
        } else {
            lifestyleAdvice.push({
                icon: '🎯',
                title: 'Ռեժիմի Վերանայում',
                text: 'Այժմ լավագույն ժամանակն է հստակեցնելու Ձեր նպատակները և սկսելու նոր, ավելի հետաքրքիր պլան:'
            });
        }
        
        // Մարզման պլան
        if (focus === 'strength') {
            trainingPlan.title = 'Պահպանման Պլան (Ուժային Ֆոկուսով)';
            trainingPlan.plan = [
                'Երկուշաբթի: Ուժային Մարզում (Ծանր) 45 րոպե',
                'Երեքշաբթի: Կարդիո/Հեծանիվ 30 րոպե',
                'Չորեքշաբթի: Հանգիստ',
                'Հինգշաբթի: Ուժային Մարզում (Միջին) 45 րոպե',
                'Ուրբաթ: Կարդիո Ցիկլային Մարզում 30 րոպե',
                'Շաբաթ: Ակտիվ Հանգիստ',
                'Կիրակի: Հանգիստ'
            ];
        } else if (focus === 'flexibility') {
            trainingPlan.title = 'Պահպանման Պլան (Ճկունության Ֆոկուսով)';
            trainingPlan.plan = [
                'Երկուշաբթի: Յոգա/Պիլատես 45 րոպե',
                'Երեքշաբթի: Ուժային Մարզում 30 րոպե',
                'Չորեքշաբթի: Բրիսկ Քայլք/Կարդիո 30 րոպե',
                'Հինգշաբթի: Հանգիստ',
                'Ուրբաթ: Յոգա/Շարժունակություն 45 րոպե',
                'Շաբաթ: Ուժային Մարզում 45 րոպե',
                'Կիրակի: Հանգիստ'
            ];
        } else if (focus === 'endurance') {
            trainingPlan.title = 'Պահպանման Պլան (Դիմացկունության Ֆոկուսով)';
            trainingPlan.plan = [
                'Երկուշաբթի: Կարդիո (Վազք/Լող) 30 րոպե',
                'Երեքշաբթի: Ուժային Մարզում 45 րոպե',
                'Չորեքշաբթի: Հանգիստ',
                'Հինգշաբթի: HIIT 25 րոպե',
                'Ուրբաթ: Երկար Կարդիո 40 րոպե',
                'Շաբաթ: Ուժային Մարզում',
                'Կիրակի: Հանգիստ'
            ];
        } else {
            trainingPlan.title = 'Պահպանման Պլան (Հավասարակշռության Ֆոկուսով)';
            trainingPlan.plan = [
                'Երկուշաբթի: Ֆունկցիոնալ Մարզում 40 րոպե',
                'Երեքշաբթի: Յոգա 30 րոպե',
                'Չորեքշաբթի: Կարդիո 30 րոպե',
                'Հինգշաբթի: Հանգիստ',
                'Ուրբաթ: Ֆունկցիոնալ Մարզում 40 րոպե',
                'Շաբաթ: Զբոսանք/Հեծանվավարություն 45 րոպե',
                'Կիրակի: Հանգիստ'
            ];
        }
    }
    
    // --- ԿԱՆՈՆՆԵՐԻ ԲԱԶԱ 2: ՔՆԻ ԽՈՐՀՈՒՐԴՆԵՐ ---
    if (sleep === 'less_6') {
        lifestyleAdvice.push({
            icon: '🚨',
            title: 'Քնի Կարգավորում',
            text: '6 ժամից պակաս քունը բացասաբար է ազդում վերականգնման և հորմոնների վրա: Անպայման բարձրացրեք քունը 7-8 ժամ:'
        });
    } else if (sleep === '7_8') {
        lifestyleAdvice.push({
            icon: '😴',
            title: 'Քնի Օպտիմալ Ռեժիմ',
            text: 'Դուք քնում եք օպտիմալ ժամանակ (7-8 ժամ): Շարունակեք այդպես:'
        });
    } else {
        lifestyleAdvice.push({
            icon: '💤',
            title: 'Երկար Քուն',
            text: '9+ ժամ քունը լավ է, եթե ծանր եք մարզվում, բայց համոզվեք, որ այն Ձեզ չի դարձնում պասիվ ցերեկը:'
        });
    }
    
    return { calorieMessage, trainingPlan, lifestyleAdvice, tdee };
}

// ===============================================
// Արդյունքների Ցուցադրում
// ===============================================

function showResults() {
    elements.questionCard.style.display = 'none';
    elements.progressFill.style.width = '100%';
    elements.progressText.textContent = 'Ավարտված է!';
    elements.progressStep.textContent = 'Արդյունքներ';
    
    const advice = getExpertAdvice();
    
    // Կալորիականության Ցուցադրում
    elements.calorieDisplay.innerHTML = `<p>${advice.calorieMessage}</p>`;
    
    // Պլանի Ցուցադրում
    let planHTML = `<p style="margin-bottom: 12px; font-weight: 500;">${advice.trainingPlan.title}</p><ul>`;
    advice.trainingPlan.plan.forEach(dayPlan => {
        if (dayPlan.includes('Հանգիստ')) {
            planHTML += `<li class="rest-day">${dayPlan}</li>`;
        } else {
            planHTML += `<li>${dayPlan}</li>`;
        }
    });
    planHTML += '</ul>';
    elements.planDisplay.innerHTML = planHTML;
    
    // Խորհուրդների Ցուցադրում
    let adviceHTML = '';
    advice.lifestyleAdvice.forEach(tip => {
        adviceHTML += `
            <div class="lifestyle-tip">
                <strong>${tip.icon} ${tip.title}</strong>
                <p style="margin-top: 6px; margin-bottom: 0;">${tip.text}</p>
            </div>
        `;
    });
    elements.adviceDisplay.innerHTML = adviceHTML;
    
    elements.resultsArea.classList.add('visible');
    
    // Թերթել մինչև արդյունքները
    elements.resultsArea.scrollIntoView({ behavior: 'smooth' });
}

// ===============================================
// Գործարկում
// ===============================================

elements.backBtn.addEventListener('click', goBack);
elements.restartBtn.addEventListener('click', initializeExpertSystem);

// Սկսել համակարգը բեռնումից հետո
initializeExpertSystem();