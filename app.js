// ==========================================================================
// FitWithPhu - Application Logic (Vanilla JS)
// ==========================================================================

// --- Exercise Database ---
const workoutsData = [
    {
        id: 'jumping-jacks',
        title: 'กระโดดตบ (Jumping Jacks)',
        englishTitle: 'Jumping Jacks',
        category: 'cardio',
        duration: '45 วินาที',
        durationSeconds: 45,
        difficulty: 'ง่าย',
        icon: 'fa-solid fa-person-running',
        desc: 'ท่าคาร์ดิโอระดับพื้นฐานที่ช่วยบริหารร่างกายทุกส่วน กระตุ้นการเต้นของหัวใจและเผาผลาญไขมันได้เป็นอย่างดี',
        instructions: [
            'ยืนตรง เท้าชิด แขนอยู่ข้างลำตัว',
            'กระโดดแยกเท้าออกกว้างประมาณหัวไหล่ พร้อมชูแขนทั้งสองข้างขึ้นประกบกันเหนือศีรษะ',
            'กระโดดกลับคืนสู่ท่าเริ่มต้น และทำซ้ำอย่างต่อเนื่องเป็นจังหวะสม่ำเสมอ'
        ]
    },
    {
        id: 'pushups',
        title: 'วิดพื้น (Push-Ups)',
        englishTitle: 'Push-Ups',
        category: 'strength',
        duration: '30 วินาที',
        durationSeconds: 30,
        difficulty: 'ปานกลาง',
        icon: 'fa-solid fa-hand-fist',
        desc: 'ท่าฝึกความแข็งแรงของกล้ามเนื้ออก ไหล่ สามหัว (Triceps) และแกนกลางลำตัวโดยใช้น้ำหนักตัว',
        instructions: [
            'นอนคว่ำ วางมือทั้งสองข้างกว้างกว่าหัวไหล่เล็กน้อย ปลายเท้าตั้งกับพื้น',
            'เกร็งหน้าท้อง ลำตัวตรงเป็นเส้นตรงตั้งแต่ศีรษะจรดส้นเท้า',
            'งอข้อศอกลดลำตัวลงจนอกเกือบแตะพื้น จากนั้นออกแรงดันตัวกลับขึ้นมาท่าเดิม'
        ]
    },
    {
        id: 'squats',
        title: 'สควอท (Bodyweight Squats)',
        englishTitle: 'Bodyweight Squats',
        category: 'strength',
        duration: '45 วินาที',
        durationSeconds: 45,
        difficulty: 'ง่าย',
        icon: 'fa-solid fa-child',
        desc: 'เน้นสร้างกล้ามเนื้อต้นขา ก้น และเพิ่มความแข็งแรงของข้อต่อช่วงล่าง ช่วยระบบเผาผลาญทำงานดีขึ้น',
        instructions: [
            'ยืนตัวตรง กางเท้ากว้างเท่าหัวไหล่ ปลายเท้าชี้ออกด้านนอกเล็กน้อย',
            'ยื่นแขนไปด้านหน้าเพื่อทรงตัว ค่อยๆ หย่อนสะโพกลงเหมือนจะนั่งเก้าอี้',
            'พยายามให้เข่าไม่เลยปลายเท้า หลังตรง อกตั้ง แล้วดันตัวกลับขึ้นมายืนตรง'
        ]
    },
    {
        id: 'plank',
        title: 'แพลงก์ (Forearm Plank)',
        englishTitle: 'Forearm Plank',
        category: 'strength',
        duration: '30 วินาที',
        durationSeconds: 30,
        difficulty: 'ปานกลาง',
        icon: 'fa-solid fa-shield-halved',
        desc: 'ท่าสร้างความแข็งแกร่งขั้นสุดให้แกนกลางลำตัว หน้าท้อง หลังส่วนล่าง และสะโพก',
        instructions: [
            'นอนคว่ำ ตั้งข้อศอกลงกับพื้นให้ข้อศอกอยู่ตรงกับแนวหัวไหล่พอดี',
            'ยกตัวขึ้นยืนด้วยศอกและปลายเท้า เกร็งท้อง ก้น และต้นขา',
            'รักษาระนาบลำตัวให้ตรงขนานกับพื้น ห้ามปล่อยให้สะโพกย้อยหรือโก่งขึ้น'
        ]
    },
    {
        id: 'cobra-pose',
        title: 'โยคะท่างู (Cobra Pose)',
        englishTitle: 'Cobra Pose',
        category: 'yoga',
        duration: '30 วินาที',
        durationSeconds: 30,
        difficulty: 'ง่าย',
        icon: 'fa-solid fa-person-falling',
        desc: 'ช่วยยืดเหยียดกระดูกสันหลัง เปิดหน้าอก ไหล่ และบรรเทาอาการปวดหลังจากการนั่งทำงานนานๆ',
        instructions: [
            'นอนคว่ำหน้าลงกับพื้น เท้าเหยียดตรงหลังเท้าราบไปกับพื้น',
            'วางมือไว้ใต้หัวไหล่ กดข้อศอกให้ชิดลำตัว',
            'หายใจเข้า ออกแรงดันหน้าอกและลำตัวส่วนบนขึ้นจากพื้น สายตามองตรงหรือแหงนหน้าเล็กน้อย หลังไม่หัก'
        ]
    },
    {
        id: 'child-pose',
        title: 'โยคะท่าเด็ก (Child\'s Pose)',
        englishTitle: 'Child\'s Pose',
        category: 'yoga',
        duration: '60 วินาที',
        durationSeconds: 60,
        difficulty: 'ง่าย',
        icon: 'fa-solid fa-person-praying',
        desc: 'ท่าพักผ่อนที่ยอดเยี่ยม ช่วยผ่อนคลายกล้ามเนื้อหลัง สะโพก ต้นขา และช่วยให้จิตใจสงบนิ่ง',
        instructions: [
            'คุกเข่าบนพื้น นั่งทับส้นเท้าตัวเอง กางเข่าออกเล็กน้อย',
            'หายใจออกยาวๆ แล้วก้มตัวลงไปด้านหน้า ยืดแขนทั้งสองข้างไปข้างหน้าตรงๆ ให้ฝ่ามือราบกับพื้น',
            'วางหน้าผากลงแตะพื้นอย่างผ่อนคลาย หายใจเข้าออกลึกๆ สม่ำเสมอ'
        ]
    },
    {
        id: 'high-knees',
        title: 'วิ่งยกเข่าสูง (High Knees)',
        englishTitle: 'High Knees',
        category: 'cardio',
        duration: '30 วินาที',
        durationSeconds: 30,
        difficulty: 'ยาก',
        icon: 'fa-solid fa-person-running',
        desc: 'การ์ดิโอความเข้มข้นสูง ช่วยเบิร์นแคลอรี พัฒนาความเร็ว พลังสปริงข้อเท้า และกระชับหน้าท้องส่วนล่าง',
        instructions: [
            'ยืนตรง เท้ากางกว้างเท่าช่วงสะโพก ปล่อยแขนตามสบาย',
            'วิ่งเหยาะอยู่กับที่ แต่เน้นยกหัวเข่าขึ้นสูงระดับสะโพกหรือสูงที่สุดเท่าที่ทำได้สลับซ้ายขวา',
            'แกว่งแขนช่วยพยุงจังหวะ เกร็งหน้าท้อง และลงน้ำหนักที่ปลายเท้าเบาๆ'
        ]
    },
    {
        id: 'mountain-climbers',
        title: 'ปีนเขา (Mountain Climbers)',
        englishTitle: 'Mountain Climbers',
        category: 'cardio',
        duration: '45 วินาที',
        durationSeconds: 45,
        difficulty: 'ยาก',
        icon: 'fa-solid fa-mountain',
        desc: 'ท่าผสมผสานคาร์ดิโอและการฝึกแกนกลาง ดึงพลังงานมาใช้อย่างรวดเร็วและเพิ่มความยืดหยุ่นของสะโพก',
        instructions: [
            'เริ่มต้นในท่าวิดพื้น แขนเหยียดตึง ลำตัวตรง',
            'ดึงเข่าขวาเข้าหาหน้าอกอย่างรวดเร็ว โดยไม่ให้ปลายเท้าขวาแตะพื้น',
            'จังหวะที่ดึงเข่าขวากลับ ให้ดึงเข่าซ้ายสลับเข้าหาหน้าอกทันที ทำสลับกันเหมือนกำลังวิ่งขึ้นเขา'
        ]
    }
];

// --- Application State ---
let currentTimer = null;
let timerRemainingSeconds = 0;
let timerTotalSeconds = 0;
let isTimerPlaying = false;
let recommendedCategory = 'all';

// --- DOM Elements ---
document.addEventListener('DOMContentLoaded', () => {
    // Navigation scrolled effect
    const header = document.getElementById('main-header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // Mobile menu toggle
    const mobileToggle = document.getElementById('mobile-menu-toggle');
    const navMenu = document.getElementById('nav-menu');
    mobileToggle.addEventListener('click', () => {
        navMenu.classList.toggle('open');
        const icon = mobileToggle.querySelector('i');
        if (navMenu.classList.contains('open')) {
            icon.className = 'fa-solid fa-xmark';
        } else {
            icon.className = 'fa-solid fa-bars';
        }
    });

    // Close mobile menu when clicking nav link
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            // Remove active from all and set active to current
            navLinks.forEach(l => l.classList.remove('active'));
            link.classList.add('active');
            
            navMenu.classList.remove('open');
            const icon = mobileToggle.querySelector('i');
            icon.className = 'fa-solid fa-bars';
        });
    });

    // Smooth scroll active state updates based on scroll position
    window.addEventListener('scroll', () => {
        const sections = document.querySelectorAll('section');
        const scrollPos = window.scrollY + 100;
        
        sections.forEach(section => {
            if (scrollPos >= section.offsetTop && scrollPos < (section.offsetTop + section.offsetHeight)) {
                const id = section.getAttribute('id');
                const matchingLink = document.querySelector(`.nav-link[href="#${id}"]`);
                if (matchingLink) {
                    navLinks.forEach(l => l.classList.remove('active'));
                    matchingLink.classList.add('active');
                }
            }
        });
    });

    // --- Render Exercises ---
    renderWorkouts('all');

    // --- Workout Filters ---
    const filterButtons = document.querySelectorAll('.filter-btn');
    filterButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            filterButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            const filterValue = btn.getAttribute('data-filter');
            renderWorkouts(filterValue);
        });
    });

    // --- BMI Calculator Form Submission ---
    const bmiForm = document.getElementById('bmi-form');
    const weightInput = document.getElementById('weight');
    const heightInput = document.getElementById('height');
    const weightError = document.getElementById('weight-error');
    const heightError = document.getElementById('height-error');

    bmiForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        let isValid = true;
        const weight = parseFloat(weightInput.value);
        const height = parseFloat(heightInput.value);

        // Validation weight
        if (isNaN(weight) || weight < 10 || weight > 300) {
            weightError.style.display = 'block';
            weightInput.classList.add('input-invalid');
            isValid = false;
        } else {
            weightError.style.display = 'none';
            weightInput.classList.remove('input-invalid');
        }

        // Validation height
        if (isNaN(height) || height < 50 || height > 250) {
            heightError.style.display = 'block';
            heightInput.classList.add('input-invalid');
            isValid = false;
        } else {
            heightError.style.display = 'none';
            heightInput.classList.remove('input-invalid');
        }

        if (isValid) {
            calculateAndShowBMI(weight, height);
        }
    });

    // Recalculate button click
    const btnRecalc = document.getElementById('btn-recalc');
    btnRecalc.addEventListener('click', () => {
        document.getElementById('result-display').classList.add('hidden');
        document.getElementById('result-placeholder').classList.remove('hidden');
        bmiForm.reset();
        weightInput.focus();
    });

    // Go to recommended workout category
    const btnGoWorkout = document.getElementById('btn-go-workout');
    btnGoWorkout.addEventListener('click', (e) => {
        if (recommendedCategory !== 'all') {
            // Activate the corresponding filter button
            const targetFilterBtn = document.querySelector(`.filter-btn[data-filter="${recommendedCategory}"]`);
            if (targetFilterBtn) {
                targetFilterBtn.click();
            }
        }
    });

    // --- Workout Timer Modal Events ---
    const modal = document.getElementById('timer-modal');
    const modalCloseBtn = document.getElementById('modal-close-btn');
    const btnPlay = document.getElementById('btn-timer-play');
    const btnReset = document.getElementById('btn-timer-reset');
    const btnStop = document.getElementById('btn-timer-stop');

    modalCloseBtn.addEventListener('click', () => {
        closeTimerModal();
    });

    // Close modal on click outside content card
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeTimerModal();
        }
    });

    btnPlay.addEventListener('click', () => {
        if (isTimerPlaying) {
            pauseTimer();
        } else {
            startTimer();
        }
    });

    btnReset.addEventListener('click', () => {
        resetTimer();
    });

    btnStop.addEventListener('click', () => {
        completeTimer();
    });
});

// --- Functions ---

// 1. Render Workout Cards
function renderWorkouts(categoryFilter) {
    const grid = document.getElementById('workout-grid');
    grid.innerHTML = ''; // Clear existing

    const filtered = categoryFilter === 'all' 
        ? workoutsData 
        : workoutsData.filter(w => w.category === categoryFilter);

    if (filtered.length === 0) {
        grid.innerHTML = `<div class="text-center" style="grid-column: 1/-1; padding: 40px; color: var(--color-text-muted);">ไม่พบข้อมูลท่าออกกำลังกายในหมวดหมู่นี้</div>`;
        return;
    }

    filtered.forEach(workout => {
        const card = document.createElement('div');
        card.className = `workout-card ${workout.category}`;
        card.id = `workout-${workout.id}`;

        // Build instructions list
        const instructionsHtml = workout.instructions
            .map(step => `<li>${step}</li>`)
            .join('');

        card.innerHTML = `
            <div class="workout-img-wrapper">
                <i class="${workout.icon}"></i>
                <div class="workout-badges">
                    <span class="badge-tag ${workout.category}">${getCategoryThai(workout.category)}</span>
                    <span class="badge-duration"><i class="fa-regular fa-clock"></i> ${workout.duration}</span>
                </div>
            </div>
            <div class="workout-card-body">
                <h3 class="workout-card-title">${workout.title}</h3>
                <p class="workout-card-desc">${workout.desc}</p>
                <ul class="workout-card-instructions">
                    ${instructionsHtml}
                </ul>
                <div class="workout-card-footer">
                    <span class="workout-difficulty">ระดับ: <span>${workout.difficulty}</span></span>
                    <button class="btn btn-primary" onclick="openTimerModal('${workout.id}')">
                        <i class="fa-solid fa-stopwatch"></i> เริ่มฝึกซ้อม
                    </button>
                </div>
            </div>
        `;
        grid.appendChild(card);
    });
}

// Translate category to Thai
function getCategoryThai(cat) {
    switch (cat) {
        case 'cardio': return 'Cardio';
        case 'strength': return 'Strength';
        case 'yoga': return 'Yoga/Flexibility';
        default: return 'ทั่วไป';
    }
}

// 2. BMI Calculator Logic
function calculateAndShowBMI(weight, height) {
    const heightInMeters = height / 100;
    const bmi = weight / (heightInMeters * heightInMeters);
    const bmiRounded = Math.round(bmi * 10) / 10;

    // Set BMI text value
    document.getElementById('bmi-value-text').innerText = bmiRounded;

    // Elements to update
    const resultPlaceholder = document.getElementById('result-placeholder');
    const resultDisplay = document.getElementById('result-display');
    const statusBadge = document.getElementById('bmi-status-badge');
    const descText = document.getElementById('bmi-desc-text');
    const exerciseRec = document.getElementById('bmi-exercise-rec');
    const dietRec = document.getElementById('bmi-diet-rec');
    const gaugeFill = document.getElementById('gauge-fill');

    // Reset status classes
    statusBadge.className = 'bmi-status';

    let categoryClass = '';
    let categoryTitle = '';
    let description = '';
    let exerciseRecommendation = '';
    let dietRecommendation = '';
    recommendedCategory = 'all'; // Reset

    // Determine health level
    if (bmiRounded < 18.5) {
        categoryClass = 'under';
        categoryTitle = 'น้ำหนักน้อยกว่าเกณฑ์ (ผอม)';
        description = 'ค่าดัชนีมวลกายของคุณค่อนข้างน้อย ซึ่งอาจทำให้ร่างกายอ่อนแอและเหนื่อยง่าย หรือภูมิต้านทานลดลง ควรดูแลรักษาร่างกายให้อบอุ่นอยู่เสมอ';
        exerciseRecommendation = 'ควรเน้นการสร้างกล้ามเนื้อ (Strength Training) เพื่อเพิ่มมวลร่างกายที่แข็งแรง เช่น วิดพื้น สควอท หลีกเลี่ยงคาร์ดิโอที่หนักเกินไป';
        dietRecommendation = 'ทานอาหารที่ให้พลังงานและโปรตีนสูง เน้นโปรตีนจากปลา อกไก่ นม ไข่ และคาร์โบไฮเดรตเชิงซ้อน ทานอาหารมื้อย่อยๆ 5-6 มื้อต่อวัน';
        recommendedCategory = 'strength';
    } else if (bmiRounded >= 18.5 && bmiRounded < 23) {
        categoryClass = 'normal';
        categoryTitle = 'น้ำหนักปกติ (สุขภาพดี)';
        description = 'ยินดีด้วย! คุณมีน้ำหนักตัวที่สมดุลดีแล้ว การคงระดับนี้ไว้จะช่วยลดความเสี่ยงปัญหาสุขภาพเรื้อรังและทำให้มีความกระฉับกระเฉงสูง';
        exerciseRecommendation = 'เน้นการออกกำลังกายที่หลากหลายเพื่อคงระดับฟิตเนส แนะนำให้ผสมผสาน คาร์ดิโอ 150 นาที/สัปดาห์ ควบคู่กับการฝึกความแข็งแรง 2 วัน/สัปดาห์';
        dietRecommendation = 'ทานอาหารครบ 5 หมู่ในสัดส่วนที่เหมาะสม เน้นผัก ผลไม้ และดื่มน้ำให้เพียงพอ เลี่ยงอาหารแปรรูปและเครื่องดื่มรสหวานจัด';
        recommendedCategory = 'all';
    } else if (bmiRounded >= 23 && bmiRounded < 25) {
        categoryClass = 'over';
        categoryTitle = 'น้ำหนักเกิน (ท้วม)';
        description = 'คุณเริ่มมีน้ำหนักเกินเกณฑ์มาตรฐาน แม้ยังไม่อันตราย แต่เป็นสัญญาณเตือนว่าควรหันมาเริ่มควบคุมน้ำหนักเพื่อป้องกันไม่ให้พัฒนาเข้าสู่ภาวะอ้วน';
        exerciseRecommendation = 'แนะนำให้ออกกำลังกายคาร์ดิโอ เช่น วิ่งยกเข่าสูง กระโดดตบ ปั่นจักรยาน สัปดาห์ละ 150-200 นาที เพื่อเบิร์นแคลอรีส่วนเกินและกระชับสัดส่วน';
        dietRecommendation = 'ลดปริมาณแป้งขัดสี น้ำตาล และไขมันอิ่มตัว เพิ่มไฟเบอร์จากผักและผลไม้ และควบคุมปริมาณแคลอรีที่กินในแต่ละวันไม่ให้เกินความต้องการ';
        recommendedCategory = 'cardio';
    } else {
        categoryClass = 'obese';
        categoryTitle = 'อ้วน / อ้วนมาก';
        description = 'ระดับ BMI ของคุณจัดอยู่ในกลุ่มอ้วน ซึ่งอาจส่งผลเสียต่อข้อต่อ หัวใจ ระบบหายใจ และมีความเสี่ยงสูงต่อโรคเบาหวาน ความดันโลหิตสูง';
        exerciseRecommendation = 'เริ่มต้นออกกำลังกายแรงกระแทกต่ำเพื่อปกป้องข้อต่อ เช่น การเดินเร็ว โยคะยืดหยุ่น ยืดเหยียดร่างกาย แล้วค่อยพัฒนาไปคาร์ดิโอเบาๆ สม่ำเสมอ';
        dietRecommendation = 'ควบคุมโภชนาการอย่างจริงจัง ทานอาหารจำกัดแคลอรี (Caloric Deficit) เน้นผักใบเขียว โปรตีนไม่ติดมัน หลีกเลี่ยงของทอด ขนมหวาน และของมันเด็ดขาด';
        recommendedCategory = 'yoga'; // Start with gentle stretching first
    }

    // Apply values to UI
    statusBadge.innerText = categoryTitle;
    statusBadge.classList.add(categoryClass);
    descText.innerText = description;
    exerciseRec.innerText = exerciseRecommendation;
    dietRec.innerText = dietRecommendation;

    // Show panel
    resultPlaceholder.classList.add('hidden');
    resultDisplay.classList.remove('hidden');

    // Calculate needle rotation based on piecewise mapping to conic-gradient angles
    const rotationAngle = getNeedleRotationAngle(bmiRounded);
    
    // Set timeout to allow rendering before transition animation plays
    setTimeout(() => {
        gaugeFill.style.transform = `rotate(${rotationAngle}deg)`;
    }, 100);

    // Scroll slightly down to show result smoothly on mobile
    resultDisplay.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

// Map BMI value piecewise from -90deg (Underweight start) to +90deg (Obese end)
function getNeedleRotationAngle(bmi) {
    if (bmi <= 15) return -90;
    if (bmi >= 35) return 90;
    
    if (bmi < 18.5) {
        // Map 15 -> 18.5 to -90deg -> -45deg (45 degrees range)
        return -90 + ((bmi - 15) / (18.5 - 15)) * 45;
    } else if (bmi < 23) {
        // Map 18.5 -> 23 to -45deg -> 9deg (54 degrees range)
        return -45 + ((bmi - 18.5) / (23 - 18.5)) * 54;
    } else if (bmi < 25) {
        // Map 23 -> 25 to 9deg -> 45deg (36 degrees range)
        return 9 + ((bmi - 23) / (25 - 23)) * 36;
    } else {
        // Map 25 -> 35 to 45deg -> 90deg (45 degrees range)
        return 45 + ((bmi - 25) / (35 - 25)) * 45;
    }
}

// 3. Workout Timer Logic & Controls
window.openTimerModal = function(workoutId) {
    const workout = workoutsData.find(w => w.id === workoutId);
    if (!workout) return;

    // Setup modal text content
    document.getElementById('timer-exercise-category').innerText = getCategoryThai(workout.category).toUpperCase();
    document.getElementById('timer-exercise-category').className = `modal-tag ${workout.category}`;
    document.getElementById('timer-exercise-title').innerText = workout.title;
    
    // Reset Timer state variables
    timerTotalSeconds = workout.durationSeconds;
    timerRemainingSeconds = timerTotalSeconds;
    isTimerPlaying = false;
    
    updateTimerDisplay();
    updateProgressCircle(1); // Set full circle (100%)
    
    document.getElementById('timer-status-text').innerText = 'พร้อมออกกำลังกาย!';
    document.getElementById('timer-play-icon').className = 'fa-solid fa-play';

    // Open Modal
    const modal = document.getElementById('timer-modal');
    modal.classList.add('open');
    document.body.style.overflow = 'hidden'; // Disable background scroll
};

function closeTimerModal() {
    pauseTimer();
    const modal = document.getElementById('timer-modal');
    modal.classList.remove('open');
    document.body.style.overflow = ''; // Restore scroll
}

function updateTimerDisplay() {
    const minutes = Math.floor(timerRemainingSeconds / 60);
    const seconds = timerRemainingSeconds % 60;
    
    const minStr = String(minutes).padStart(2, '0');
    const secStr = String(seconds).padStart(2, '0');
    
    document.getElementById('timer-time-display').innerText = `${minStr}:${secStr}`;
}

function updateProgressCircle(fraction) {
    const progressCircle = document.getElementById('timer-progress-circle');
    const circumference = 440; // 2 * pi * r = 2 * 3.14159 * 70
    
    // Offset ranges from 0 (completely filled) to 440 (completely empty)
    // To make it drain from full to empty, we want offset = circumference * (1 - fraction)
    const offset = circumference * (1 - fraction);
    progressCircle.style.strokeDashoffset = offset;
}

function startTimer() {
    if (isTimerPlaying) return;
    
    isTimerPlaying = true;
    document.getElementById('timer-play-icon').className = 'fa-solid fa-pause';
    document.getElementById('timer-status-text').innerText = 'ลุยเลย! กำลังจับเวลา...';

    // Web Audio Context initialization check (requires user click to activate audio)
    try {
        const tempContext = new (window.AudioContext || window.webkitAudioContext)();
        tempContext.close();
    } catch(e) {}

    currentTimer = setInterval(() => {
        timerRemainingSeconds--;
        updateTimerDisplay();
        
        const fraction = timerRemainingSeconds / timerTotalSeconds;
        updateProgressCircle(fraction);

        if (timerRemainingSeconds <= 0) {
            completeTimer();
        }
    }, 1000);
}

function pauseTimer() {
    if (!isTimerPlaying) return;
    
    isTimerPlaying = false;
    document.getElementById('timer-play-icon').className = 'fa-solid fa-play';
    document.getElementById('timer-status-text').innerText = 'หยุดเวลาชั่วคราว';
    clearInterval(currentTimer);
}

function resetTimer() {
    pauseTimer();
    timerRemainingSeconds = timerTotalSeconds;
    updateTimerDisplay();
    updateProgressCircle(1);
    document.getElementById('timer-status-text').innerText = 'รีเซ็ตเวลาแล้ว';
}

function completeTimer() {
    pauseTimer();
    updateProgressCircle(0);
    document.getElementById('timer-time-display').innerText = '00:00';
    document.getElementById('timer-status-text').innerText = 'เก่งมาก! ทำสำเร็จแล้ว 🎉';
    
    // Play Chime Sound using Audio API
    playSuccessChime();

    // Reset Play button icon
    document.getElementById('timer-play-icon').className = 'fa-solid fa-play';
    
    // Prompt celebration and auto close modal after 2 seconds
    setTimeout(() => {
        closeTimerModal();
    }, 2500);
}

// Play premium success beep chime using Web Audio API (no dependencies)
function playSuccessChime() {
    try {
        const AudioCtx = window.AudioContext || window.webkitAudioContext;
        if (!AudioCtx) return;
        
        const audioCtx = new AudioCtx();
        
        // Tone 1: Standard Beep (Pitch A5, 880Hz)
        const osc1 = audioCtx.createOscillator();
        const gain1 = audioCtx.createGain();
        osc1.connect(gain1);
        gain1.connect(audioCtx.destination);
        
        osc1.type = 'sine';
        osc1.frequency.setValueAtTime(880, audioCtx.currentTime);
        gain1.gain.setValueAtTime(0.08, audioCtx.currentTime);
        gain1.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.3);
        
        osc1.start(audioCtx.currentTime);
        osc1.stop(audioCtx.currentTime + 0.3);
        
        // Tone 2: Higher pitch success chime (Pitch E6, 1318Hz) starting after 150ms
        setTimeout(() => {
            if (audioCtx.state === 'closed') return;
            const osc2 = audioCtx.createOscillator();
            const gain2 = audioCtx.createGain();
            osc2.connect(gain2);
            gain2.connect(audioCtx.destination);
            
            osc2.type = 'sine';
            osc2.frequency.setValueAtTime(1318.51, audioCtx.currentTime);
            gain2.gain.setValueAtTime(0.08, audioCtx.currentTime);
            gain2.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.5);
            
            osc2.start(audioCtx.currentTime);
            osc2.stop(audioCtx.currentTime + 0.5);
            
            // Close context to release resources
            setTimeout(() => {
                audioCtx.close();
            }, 600);
        }, 150);
        
    } catch (e) {
        console.error("Web Audio API failed or blocked", e);
    }
}
