
"use strict";

// =====================================
// TRIVIA QUEST - QUESTION BANK
// =====================================

// Question format:
// [question, correct answer, wrong 1, wrong 2, wrong 3]

const questionBank = {

    // =================================
    // MARVEL - 20 QUESTIONS
    // =================================

    marvel: [
        ["What is Iron Man's real name?", "Tony Stark", "Steve Rogers", "Bruce Banner", "Peter Parker"],
        ["What is Thor's hammer called?", "Mjolnir", "Stormbreaker", "Gungnir", "Excalibur"],
        ["Which metal is bonded to Wolverine's skeleton?", "Adamantium", "Vibranium", "Titanium", "Platinum"],
        ["What is Black Panther's home country?", "Wakanda", "Genosha", "Latveria", "Asgard"],
        ["Who is known as the Sorcerer Supreme in the Doctor Strange films?", "Doctor Strange", "Iron Man", "Hawkeye", "Star-Lord"],
        ["What is Captain America's real name?", "Steve Rogers", "Bucky Barnes", "Sam Wilson", "Scott Lang"],
        ["Which Infinity Stone is in Vision's forehead?", "Mind Stone", "Time Stone", "Space Stone", "Power Stone"],
        ["Who is Peter Parker's superhero identity?", "Spider-Man", "Ant-Man", "Falcon", "Daredevil"],
        ["What is the name of Thor's brother?", "Loki", "Odin", "Heimdall", "Hela"],
        ["Who leads the Guardians of the Galaxy in the first film?", "Star-Lord", "Rocket", "Drax", "Groot"],
        ["What is the Hulk's real name?", "Bruce Banner", "Tony Stark", "Clint Barton", "Stephen Strange"],
        ["Who is Natasha Romanoff?", "Black Widow", "Scarlet Witch", "Captain Marvel", "Wasp"],
        ["What is the name of Tony Stark's AI assistant before F.R.I.D.A.Y.?", "J.A.R.V.I.S.", "E.D.I.T.H.", "U.L.T.R.O.N.", "K.A.R.E.N."],
        ["Which hero can shrink using Pym Particles?", "Ant-Man", "Hawkeye", "Falcon", "Vision"],
        ["What is the name of the villain in Avengers: Infinity War?", "Thanos", "Ultron", "Red Skull", "Ronan"],
        ["What is Doctor Strange's first name?", "Stephen", "Steven", "Stanley", "Scott"],
        ["Who is Wanda Maximoff also known as?", "Scarlet Witch", "Black Widow", "Wasp", "Captain Marvel"],
        ["Which superhero uses a shield made of vibranium?", "Captain America", "Thor", "Hawkeye", "Star-Lord"],
        ["What is the name of the tree-like Guardian of the Galaxy?", "Groot", "Rocket", "Drax", "Nebula"],
        ["Who is the main villain in Avengers: Age of Ultron?", "Ultron", "Thanos", "Loki", "Killmonger"]
    ],

    // =================================
    // FINISH THE LYRICS - 20 QUESTIONS
    // Traditional nursery rhymes and
    // public-domain songs
    // =================================

    lyrics: [
        ["Finish: Twinkle, twinkle, little ...", "Star", "Moon", "Light", "Sky"],
        ["Finish: Row, row, row your ...", "Boat", "Train", "Car", "Ship"],
        ["Finish: London Bridge is falling ...", "Down", "Over", "Apart", "Away"],
        ["Finish: Mary had a little ...", "Lamb", "Dog", "Cat", "Bird"],
        ["Finish: Humpty Dumpty sat on a ...", "Wall", "Chair", "Hill", "Tree"],
        ["Finish: Jack and Jill went up the ...", "Hill", "Road", "Mountain", "Stairs"],
        ["Finish: Baa, baa, black ...", "Sheep", "Goat", "Cow", "Horse"],
        ["Finish: Hickory dickory ...", "Dock", "Clock", "Rock", "Lock"],
        ["Finish: The wheels on the bus go round and ...", "Round", "Down", "Up", "Back"],
        ["Finish: Old MacDonald had a ...", "Farm", "House", "Barn", "Field"],
        ["Finish: Hey diddle diddle, the cat and the ...", "Fiddle", "Riddle", "Puddle", "Middle"],
        ["Finish: Little Miss Muffet sat on a ...", "Tuffet", "Carpet", "Blanket", "Bucket"],
        ["Finish: Ring around the ...", "Rosie", "Garden", "Table", "Flower"],
        ["Finish: This old man, he played ...", "One", "Two", "Three", "Four"],
        ["Finish: Three blind ...", "Mice", "Cats", "Bats", "Dogs"],
        ["Finish: One, two, buckle my ...", "Shoe", "Belt", "Coat", "Hat"],
        ["Finish: The farmer in the ...", "Dell", "Field", "Barn", "Valley"],
        ["Finish: Skip to my ...", "Lou", "Shoe", "Blue", "Two"],
        ["Finish: Polly put the kettle ...", "On", "Down", "Away", "Back"],
        ["Finish: A-tisket, a-tasket, a green and yellow ...", "Basket", "Jacket", "Blanket", "Packet"]
    ],

    // =================================
    // WHO SINGS THIS SONG - 20
    // =================================

    music: [
        ["Who sings 'Thriller'?", "Michael Jackson", "Prince", "Usher", "Bruno Mars"],
        ["Who sings 'Single Ladies'?", "Beyoncé", "Rihanna", "Alicia Keys", "Ciara"],
        ["Who released 'Hello' in 2015?", "Adele", "Sia", "Taylor Swift", "Lady Gaga"],
        ["Who sings 'Shape of You'?", "Ed Sheeran", "Justin Bieber", "Shawn Mendes", "Harry Styles"],
        ["Who sings 'Umbrella' featuring Jay-Z?", "Rihanna", "Beyoncé", "Nicki Minaj", "Ariana Grande"],
        ["Who sings 'Blinding Lights'?", "The Weeknd", "Drake", "Chris Brown", "Khalid"],
        ["Who sings 'Bad Romance'?", "Lady Gaga", "Katy Perry", "Dua Lipa", "Sia"],
        ["Who sings 'Rolling in the Deep'?", "Adele", "Beyoncé", "Rihanna", "P!nk"],
        ["Who sings 'Uptown Funk' with Mark Ronson?", "Bruno Mars", "Usher", "Ne-Yo", "Jason Derulo"],
        ["Who sings 'Shake It Off'?", "Taylor Swift", "Ariana Grande", "Selena Gomez", "Miley Cyrus"],
        ["Who sings 'Diamonds'?", "Rihanna", "Beyoncé", "Adele", "Sia"],
        ["Who sings 'Watermelon Sugar'?", "Harry Styles", "Ed Sheeran", "Shawn Mendes", "Charlie Puth"],
        ["Who sings 'Levitating'?", "Dua Lipa", "Doja Cat", "Ariana Grande", "Billie Eilish"],
        ["Who sings 'As It Was'?", "Harry Styles", "Justin Bieber", "The Weeknd", "Ed Sheeran"],
        ["Who sings 'Flowers'?", "Miley Cyrus", "Taylor Swift", "Selena Gomez", "Katy Perry"],
        ["Who sings 'Water'?", "Tyla", "Tems", "Ayra Starr", "Elaine"],
        ["Who sings 'Jerusalema' featuring Nomcebo Zikode?", "Master KG", "Kabza De Small", "DJ Maphorisa", "Black Coffee"],
        ["Who sings 'Calm Down' featuring Selena Gomez?", "Rema", "Burna Boy", "Wizkid", "Davido"],
        ["Who sings 'Last Last'?", "Burna Boy", "Wizkid", "Rema", "Davido"],
        ["Who sings 'Essence' featuring Tems?", "Wizkid", "Burna Boy", "Rema", "Omah Lay"]
    ],

    // =================================
    // SCRAMBLED WORDS - 20
    // =================================

    scrambled: [
        ["Unscramble: EPALP", "APPLE", "PAPER", "PLANE", "APPLY"],
        ["Unscramble: RTAWE", "WATER", "WRITE", "TOWER", "WHEAT"],
        ["Unscramble: NARTEP", "PARENT", "PLANET", "PAINTER", "PANTHER"],
        ["Unscramble: LOHOSC", "SCHOOL", "CHOOSE", "SMOOTH", "SOCIAL"],
        ["Unscramble: RAGONE", "ORANGE", "GARDEN", "RANGER", "ORIGIN"],
        ["Unscramble: NANAAB", "BANANA", "BANNER", "BANDANA", "BALANCE"],
        ["Unscramble: DOWWIN", "WINDOW", "WONDER", "WIDOW", "WOODEN"],
        ["Unscramble: TUPOCMER", "COMPUTER", "COMPILER", "CUSTOMER", "COMPLETE"],
        ["Unscramble: DRIENF", "FRIEND", "FINDER", "FINGER", "FRIDGE"],
        ["Unscramble: ECNEICS", "SCIENCE", "SCENIC", "SCENT", "SILENCE"],
        ["Unscramble: TERWIN", "WINTER", "WRITER", "WINNER", "WINDER"],
        ["Unscramble: GIDBRE", "BRIDGE", "BRIGHT", "BUDGET", "BIGGER"],
        ["Unscramble: LPAENT", "PLANET", "PLANT", "PARENT", "PLANE"],
        ["Unscramble: MRAECA", "CAMERA", "CAMEL", "CARAMEL", "CANDLE"],
        ["Unscramble: UMSIC", "MUSIC", "MOUSE", "MUSEUM", "MINUS"],
        ["Unscramble: LWRFEO", "FLOWER", "FOLLOW", "FELLOW", "LOWER"],
        ["Unscramble: COTDOR", "DOCTOR", "ACTOR", "DIRECTOR", "DANCER"],
        ["Unscramble: RABLIYR", "LIBRARY", "LITERAL", "BINARY", "BRAVERY"],
        ["Unscramble: TLEBAT", "TABLET", "BOTTLE", "TABLE", "BATTLE"],
        ["Unscramble: SUDOLC", "CLOUDS", "CLAUSE", "CLOTHS", "CLOSED"]
    ],

    // =================================
    // MATHEMATICS - 20
    // =================================

    maths: [
        ["What is 12 × 8?", "96", "84", "108", "88"],
        ["What is the square root of 144?", "12", "10", "11", "14"],
        ["What is 15% of 200?", "30", "20", "25", "35"],
        ["Solve: 3x + 5 = 26", "7", "5", "6", "8"],
        ["What is 25 × 4?", "100", "80", "90", "120"],
        ["What is 81 ÷ 9?", "9", "7", "8", "10"],
        ["What is 7 squared?", "49", "14", "42", "56"],
        ["What is 3 cubed?", "27", "9", "18", "36"],
        ["What is 20% of 150?", "30", "20", "25", "35"],
        ["What is 45 + 38?", "83", "73", "82", "93"],
        ["What is 100 - 37?", "63", "67", "73", "53"],
        ["What is 11 × 11?", "121", "111", "131", "101"],
        ["What is 64 ÷ 8?", "8", "6", "7", "9"],
        ["What is half of 250?", "125", "100", "115", "150"],
        ["What is 5 factorial (5!)?", "120", "60", "100", "25"],
        ["Solve: 2x = 18", "9", "6", "8", "10"],
        ["What is 0.5 × 80?", "40", "20", "30", "50"],
        ["What is 9 × 7?", "63", "56", "72", "54"],
        ["What is the perimeter of a square with side 6 cm?", "24 cm", "12 cm", "36 cm", "18 cm"],
        ["What is the area of a rectangle measuring 5 cm by 8 cm?", "40 cm²", "26 cm²", "13 cm²", "80 cm²"]
    ],

    // =================================
    // CHEMICAL SYMBOLS - 20
    // =================================

    chemistry: [
        ["What is the chemical symbol for Gold?", "Au", "Ag", "Gd", "Go"],
        ["What is the chemical symbol for Sodium?", "Na", "S", "So", "N"],
        ["Which element has the symbol Fe?", "Iron", "Fluorine", "Francium", "Fermium"],
        ["What is the chemical symbol for Potassium?", "K", "P", "Pt", "Po"],
        ["What is the chemical symbol for Oxygen?", "O", "Ox", "Og", "Os"],
        ["What is the chemical symbol for Hydrogen?", "H", "Hy", "Hg", "He"],
        ["What is the chemical symbol for Carbon?", "C", "Ca", "Co", "Cr"],
        ["What is the chemical symbol for Silver?", "Ag", "Au", "Al", "Si"],
        ["What is the chemical symbol for Calcium?", "Ca", "C", "Cl", "Cu"],
        ["What is the chemical symbol for Chlorine?", "Cl", "C", "Ch", "Cr"],
        ["What is the chemical symbol for Copper?", "Cu", "Co", "Cp", "Cr"],
        ["What is the chemical symbol for Helium?", "He", "H", "Hm", "Ho"],
        ["What is the chemical symbol for Nitrogen?", "N", "Ni", "Na", "Ne"],
        ["What is the chemical symbol for Magnesium?", "Mg", "Mn", "Ma", "Mo"],
        ["What is the chemical symbol for Zinc?", "Zn", "Zi", "Zr", "Zc"],
        ["What is the chemical symbol for Lead?", "Pb", "Ld", "Le", "Pt"],
        ["What is the chemical symbol for Mercury?", "Hg", "Mc", "Me", "Mr"],
        ["What is the chemical symbol for Silicon?", "Si", "S", "Sc", "Sn"],
        ["What is the chemical symbol for Aluminium?", "Al", "Am", "Au", "Ag"],
        ["What is the chemical symbol for Neon?", "Ne", "N", "No", "Na"]
    ],

    // =================================
    // BRAND NAMES - 20
    // =================================

    brands: [
        ["Which brand uses 'Just Do It'?", "Nike", "Adidas", "Puma", "Reebok"],
        ["Which company makes the iPhone?", "Apple", "Samsung", "Google", "Huawei"],
        ["Which brand uses the Golden Arches?", "McDonald's", "KFC", "Burger King", "Subway"],
        ["Which car brand uses a three-pointed star?", "Mercedes-Benz", "BMW", "Audi", "Toyota"],
        ["Which company makes PlayStation?", "Sony", "Microsoft", "Nintendo", "Sega"],
        ["Which company makes Xbox?", "Microsoft", "Sony", "Nintendo", "Apple"],
        ["Which company developed the Android operating system?", "Google", "Apple", "Microsoft", "IBM"],
        ["Which sportswear brand uses three stripes?", "Adidas", "Nike", "Puma", "Fila"],
        ["Which brand is known for its swoosh logo?", "Nike", "Adidas", "Reebok", "New Balance"],
        ["Which company makes Galaxy smartphones?", "Samsung", "Apple", "Nokia", "Motorola"],
        ["Which brand has a red-and-white soft drink logo?", "Coca-Cola", "Pepsi", "Sprite", "Fanta"],
        ["Which company makes the Nintendo Switch?", "Nintendo", "Sony", "Microsoft", "Atari"],
        ["Which brand uses a bitten apple logo?", "Apple", "Dell", "HP", "Lenovo"],
        ["Which car brand has four interlocking rings?", "Audi", "BMW", "Toyota", "Honda"],
        ["Which brand uses the slogan 'I'm Lovin' It'?", "McDonald's", "KFC", "Wimpy", "Nando's"],
        ["Which company owns Instagram?", "Meta", "Google", "Microsoft", "Amazon"],
        ["Which brand is associated with a green mermaid logo?", "Starbucks", "Costa Coffee", "Nespresso", "Dunkin'"],
        ["Which company produces the Corolla?", "Toyota", "Honda", "Ford", "Hyundai"],
        ["Which brand makes the Air Jordan sneakers?", "Nike", "Puma", "Adidas", "Converse"],
        ["Which company makes the Windows operating system?", "Microsoft", "Apple", "Google", "Samsung"]
    ],

    // =================================
    // GENERAL KNOWLEDGE - 30 QUESTIONS
    // 20 South African + 10 International
    // =================================

    general: [

        // SOUTH AFRICA

        ["What is South Africa's largest city by population?", "Johannesburg", "Cape Town", "Durban", "Pretoria"],
        ["How many official languages does South Africa have?", "12", "11", "10", "9"],
        ["Which South African city is known as the Mother City?", "Cape Town", "Durban", "Johannesburg", "Bloemfontein"],
        ["What is the currency of South Africa?", "Rand", "Dollar", "Pula", "Shilling"],
        ["Which South African province is the smallest by area?", "Gauteng", "Free State", "Mpumalanga", "Limpopo"],
        ["Who became South Africa's first democratically elected president in 1994?", "Nelson Mandela", "Thabo Mbeki", "Jacob Zuma", "F. W. de Klerk"],
        ["What is South Africa's national animal?", "Springbok", "Lion", "Elephant", "Leopard"],
        ["What is South Africa's national flower?", "King Protea", "Rose", "Sunflower", "Aloe"],
        ["Which ocean borders Durban?", "Indian Ocean", "Atlantic Ocean", "Pacific Ocean", "Arctic Ocean"],
        ["Which South African province is home to the Kruger National Park alongside Limpopo?", "Mpumalanga", "Gauteng", "North West", "Free State"],
        ["What is the capital city of KwaZulu-Natal?", "Pietermaritzburg", "Durban", "Newcastle", "Richards Bay"],
        ["Which South African city is known as the City of Gold?", "Johannesburg", "Cape Town", "Polokwane", "Kimberley"],
        ["Which South African province is famous for Table Mountain?", "Western Cape", "Eastern Cape", "Northern Cape", "Gauteng"],
        ["What is the name of South Africa's national rugby team?", "Springboks", "Proteas", "Bafana Bafana", "AmaZulu"],
        ["What is the name of South Africa's national men's football team?", "Bafana Bafana", "Springboks", "Proteas", "Amajita"],
        ["Which South African city hosted the 2010 FIFA World Cup final?", "Johannesburg", "Cape Town", "Durban", "Pretoria"],
        ["Which province is known for the Big Hole diamond mine?", "Northern Cape", "Gauteng", "Limpopo", "Mpumalanga"],
        ["Which South African leader was imprisoned on Robben Island for many years?", "Nelson Mandela", "Steve Biko", "Oliver Tambo", "Albert Luthuli"],
        ["Which mountain range stretches across parts of KwaZulu-Natal and the Eastern Cape?", "Drakensberg", "Magaliesberg", "Cederberg", "Waterberg"],
        ["What is South Africa's national bird?", "Blue Crane", "Ostrich", "African Fish Eagle", "Secretarybird"],

        // INTERNATIONAL

        ["What is the capital city of France?", "Paris", "Rome", "Madrid", "Berlin"],
        ["Which is the largest ocean on Earth?", "Pacific Ocean", "Atlantic Ocean", "Indian Ocean", "Arctic Ocean"],
        ["Which country is famous for the Great Wall?", "China", "Japan", "India", "Thailand"],
        ["Which planet is known as the Red Planet?", "Mars", "Venus", "Jupiter", "Mercury"],
        ["Which country is home to the pyramids of Giza?", "Egypt", "Morocco", "Sudan", "Greece"],
        ["What is the capital city of Kenya?", "Nairobi", "Mombasa", "Kampala", "Dodoma"],
        ["Which continent is Brazil located in?", "South America", "North America", "Europe", "Africa"],
        ["What is the largest hot desert in the world?", "Sahara Desert", "Kalahari Desert", "Gobi Desert", "Arabian Desert"],
        ["Which country is famous for the Eiffel Tower?", "France", "Italy", "Spain", "Germany"],
        ["Which country hosted the 2022 FIFA World Cup?", "Qatar", "Russia", "Brazil", "Germany"]

    ],


    // =====================================
    // HUMAN BODY & HEALTH - 30 QUESTIONS
    // =====================================

    humanbody: [

        // EASY QUESTIONS

        ["Which organ pumps blood around the body?", "Heart", "Liver", "Brain", "Kidney"],
        ["How many lungs does a healthy human typically have?", "Two", "One", "Three", "Four"],
        ["Which organ controls most of the body's activities?", "Brain", "Heart", "Liver", "Stomach"],
        ["Which body part allows us to see?", "Eyes", "Ears", "Nose", "Tongue"],
        ["What is the largest organ of the human body?", "Skin", "Liver", "Heart", "Lungs"],
        ["How many bones are typically found in an adult human body?", "206", "201", "210", "196"],
        ["Which organs filter waste from the blood to produce urine?", "Kidneys", "Lungs", "Heart", "Stomach"],
        ["Which organ is mainly responsible for breathing?", "Lungs", "Liver", "Kidneys", "Brain"],
        ["What protects the brain?", "Skull", "Ribs", "Pelvis", "Spine"],
        ["Which body part is primarily responsible for hearing?", "Ears", "Eyes", "Nose", "Tongue"],

        // MEDIUM QUESTIONS

        ["Which blood cells help fight infections?", "White blood cells", "Red blood cells", "Platelets", "Plasma"],
        ["Which blood cells carry oxygen around the body?", "Red blood cells", "White blood cells", "Platelets", "Neurons"],
        ["What is the longest bone in the human body?", "Femur", "Humerus", "Tibia", "Radius"],
        ["Which organ produces insulin?", "Pancreas", "Liver", "Stomach", "Kidney"],
        ["What is the main function of platelets?", "Help blood clot", "Carry oxygen", "Digest food", "Produce hormones"],
        ["Which organ produces bile?", "Liver", "Gallbladder", "Pancreas", "Stomach"],
        ["What is the main function of the small intestine?", "Absorb nutrients", "Pump blood", "Filter blood", "Store urine"],
        ["What is the body's largest muscle by mass?", "Gluteus maximus", "Biceps brachii", "Triceps brachii", "Deltoid"],
        ["Which part of the nervous system includes the brain and spinal cord?", "Central nervous system", "Digestive system", "Endocrine system", "Circulatory system"],
        ["What is the main function of the diaphragm?", "Help with breathing", "Pump blood", "Digest food", "Filter toxins"],

        // CHALLENGING QUESTIONS

        ["What is the functional unit of the kidney?", "Nephron", "Neuron", "Alveolus", "Villus"],
        ["Which part of the brain is mainly responsible for balance and coordination?", "Cerebellum", "Cerebrum", "Hypothalamus", "Medulla"],
        ["Which part of the eye controls how much light enters through the pupil?", "Iris", "Retina", "Cornea", "Lens"],
        ["What is the name of the tiny air sacs in the lungs where gas exchange occurs?", "Alveoli", "Bronchi", "Nephrons", "Capillaries"],
        ["Which hormone helps lower blood glucose levels?", "Insulin", "Adrenaline", "Glucagon", "Cortisol"],
        ["What is the name of the protein in red blood cells that carries oxygen?", "Haemoglobin", "Collagen", "Keratin", "Insulin"],
        ["Which structure connects muscles to bones?", "Tendons", "Ligaments", "Cartilage", "Nerves"],
        ["Which structure connects one bone to another bone?", "Ligaments", "Tendons", "Muscles", "Arteries"],
        ["Which part of the brain helps regulate body temperature and hunger?", "Hypothalamus", "Cerebellum", "Occipital lobe", "Hippocampus"],
        ["Which blood vessels carry blood away from the heart?", "Arteries", "Veins", "Capillaries", "Venules"]

    ]


};

// =====================================
// CATEGORY DETAILS
// =====================================

const categoryNames = {
    marvel: "Marvel",
    lyrics: "Finish the Lyrics",
    music: "Who Sings This Song?",
    scrambled: "Scrambled Words",
    maths: "Mathematics",
    chemistry: "Chemical Symbols",
    brands: "Brand Names",
    general: "General Knowledge",
    humanbody: "Human Body & Health"
};

const categoryIcons = {
    marvel: "fa-mask",
    lyrics: "fa-microphone",
    music: "fa-music",
    scrambled: "fa-font",
    maths: "fa-calculator",
    chemistry: "fa-flask",
    brands: "fa-tags",
    general: "fa-earth-africa",
    humanbody: "fa-heart-pulse"
};

// =====================================
// GAME SETTINGS
// =====================================

const QUESTION_TIME = 10;
const QUESTIONS_PER_CATEGORY = 10;
const MIXED_QUESTION_COUNT = 15;

let isMixedTrivia = false;
let gameMode = "solo";
let selectedCategories = new Set();
let players = [];
let playerQuestions = [];
let currentPlayer = 0;
let currentRound = 0;
let timeLeft = QUESTION_TIME;
let timerInterval = null;
let questionAnswered = false;
let gameFinished = false;

// =====================================
// HELPERS
// =====================================

const $ = id => document.getElementById(id);

function showScreen(id) {
    document.querySelectorAll(".screen").forEach(screen => {
        screen.classList.remove("active");
    });

    $(id).classList.add("active");
    window.scrollTo(0, 0);
}

function shuffleArray(items) {
    const result = [...items];

    for (let i = result.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));

        [result[i], result[j]] = [result[j], result[i]];
    }

    return result;
}

function setIconText(element, iconName, text) {
    element.replaceChildren();

    const icon = document.createElement("i");
    icon.className = `fa-solid ${iconName}`;

    element.append(icon, document.createTextNode(` ${text}`));
}

function formatQuestion(data, category) {
    return {
        question: data[0],
        answer: data[1],
        options: data.slice(1),
        category
    };
}

// =====================================
// GAME MODE
// =====================================

$("soloBtn").addEventListener("click", () => {
    gameMode = "solo";
    $("player2Group").classList.add("hidden");
    showScreen("setupScreen");
});

$("duoBtn").addEventListener("click", () => {
    gameMode = "duo";
    $("player2Group").classList.remove("hidden");
    showScreen("setupScreen");
});

$("backBtn").addEventListener("click", () => {
    showScreen("homeScreen");
});

$("continueSetupBtn").addEventListener("click", () => {
    showScreen("categoryScreen");
});

$("categoryBackBtn").addEventListener("click", () => {
    showScreen("setupScreen");
});

// =====================================
// CATEGORY SELECTION
// =====================================


const categoryButtons = document.querySelectorAll(".category-card");

categoryButtons.forEach(button => {
    button.addEventListener("click", () => {
        const category = button.dataset.category;

        if (category === "mixed") {
            // Mixed Trivia is a separate game option.
            isMixedTrivia = !isMixedTrivia;

            if (isMixedTrivia) {
                selectedCategories.clear();
            }
        } else {
            // Selecting a specific category
            // turns off Mixed Trivia.
            isMixedTrivia = false;

            if (selectedCategories.has(category)) {
                selectedCategories.delete(category);
            } else {
                selectedCategories.add(category);
            }
        }

        updateCategorySelection();
    });
});

function updateCategorySelection() {
    categoryButtons.forEach(button => {
        const category = button.dataset.category;

        const selected = category === "mixed"
            ? isMixedTrivia
            : selectedCategories.has(category);

        button.classList.toggle("selected", selected);
        button.setAttribute("aria-pressed", String(selected));
    });

    if (isMixedTrivia) {
        $("selectionSummary").textContent =
            "Mixed Trivia selected | 15 random questions per player";
    } else {
        const count = selectedCategories.size;
        const total = count * QUESTIONS_PER_CATEGORY;

        $("selectionSummary").textContent = count === 0
            ? "No categories selected"
            : `${count} categories selected | ${total} questions per player`;
    }

    $("selectionError").textContent = "";
}


// =====================================
// PREPARE QUESTIONS
// =====================================


function prepareQuestions() {
    const first = [];
    const second = [];

    if (isMixedTrivia) {
        // Collect questions from every category.
        const allQuestions = [];

        Object.keys(questionBank).forEach(category => {
            questionBank[category].forEach(data => {
                allQuestions.push(formatQuestion(data, category));
            });
        });

        // Shuffle the entire question pool.
        const shuffled = shuffleArray(allQuestions);

        if (shuffled.length < MIXED_QUESTION_COUNT * 2) {
            throw new Error(
                "Mixed Trivia needs at least 30 questions."
            );
        }

        // Give each player 15 unique questions.
        playerQuestions = [
            shuffled.slice(0, MIXED_QUESTION_COUNT),
            shuffled.slice(
                MIXED_QUESTION_COUNT,
                MIXED_QUESTION_COUNT * 2
            )
        ];

        return;
    }

    // Normal category selection:
    // 10 questions per selected category.
    selectedCategories.forEach(category => {
        const shuffled = shuffleArray(questionBank[category]);

        if (shuffled.length < QUESTIONS_PER_CATEGORY * 2) {
            throw new Error(
                `${category} needs at least 20 questions.`
            );
        }

        for (let i = 0; i < QUESTIONS_PER_CATEGORY; i++) {
            first.push(formatQuestion(shuffled[i], category));

            second.push(
                formatQuestion(
                    shuffled[i + QUESTIONS_PER_CATEGORY],
                    category
                )
            );
        }
    });

    playerQuestions = [
        shuffleArray(first),
        shuffleArray(second)
    ];
}


// =====================================
// START GAME
// =====================================

$("startBtn").addEventListener("click", startGame);

function startGame() {
    if (!isMixedTrivia && selectedCategories.size === 0) {
        $("selectionError").textContent =
            "Please select at least one category.";

        showScreen("categoryScreen");
        return;
    }

    const name1 = $("player1Name").value.trim() || "Player 1";
    const name2 = $("player2Name").value.trim() || "Player 2";

    players = [
        {
            name: name1,
            score: 0,
            streak: 0,
            correct: 0
        }
    ];

    if (gameMode === "duo") {
        players.push({
            name: name2,
            score: 0,
            streak: 0,
            correct: 0
        });
    }

    currentPlayer = 0;
    currentRound = 0;
    questionAnswered = false;
    gameFinished = false;

    clearInterval(timerInterval);

    prepareQuestions();
    updateScoreboard();

    if (gameMode === "duo") {
        showReadyScreen();
    } else {
        loadQuestion();
    }
}

// =====================================
// PASS THE PHONE
// =====================================

function showReadyScreen() {
    clearInterval(timerInterval);

    $("readyPlayer").textContent = players[currentPlayer].name;

    $("readyMessage").textContent =
        "Hand the phone to the next player. " +
        "Tap I'm Ready when you are ready to answer.";

    showScreen("readyScreen");
}

$("readyBtn").addEventListener("click", loadQuestion);

// =====================================
// LOAD QUESTION
// =====================================

function loadQuestion() {
    clearInterval(timerInterval);

    questionAnswered = false;
    timeLeft = QUESTION_TIME;

    const question = playerQuestions[currentPlayer][currentRound];
    const total = playerQuestions[currentPlayer].length;

    $("questionNumber").textContent =
        `Question ${currentRound + 1} of ${total}`;

    setIconText(
        $("categoryName"),
        categoryIcons[question.category],
        categoryNames[question.category]
    );

    $("questionText").textContent = question.question;
    $("timer").textContent = timeLeft;
    $("timer").classList.remove("warning");

    $("feedback").textContent = "";
    $("feedback").className = "feedback";
    $("nextBtn").classList.add("hidden");

    $("progressBar").style.width =
        `${(currentRound / total) * 100}%`;

    const container = $("answerOptions");
    container.replaceChildren();

    shuffleArray(question.options).forEach(option => {
        const button = document.createElement("button");

        button.type = "button";
        button.className = "answer-btn";
        button.textContent = option;

        button.addEventListener("click", () => {
            checkAnswer(option, button);
        });

        container.appendChild(button);
    });

    updateScoreboard();
    showScreen("gameScreen");
    startTimer();
}

// =====================================
// TIMER
// =====================================

function startTimer() {
    clearInterval(timerInterval);

    const deadline = performance.now() + QUESTION_TIME * 1000;

    timerInterval = setInterval(() => {
        timeLeft = Math.max(
            0,
            Math.ceil((deadline - performance.now()) / 1000)
        );

        $("timer").textContent = timeLeft;
        $("timer").classList.toggle("warning", timeLeft <= 5);

        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            checkAnswer(null, null);
        }
    }, 100);
}

// =====================================
// ANSWER FEEDBACK
// =====================================

function showFeedback(icon, message, status) {
    const element = $("feedback");

    element.className = `feedback ${status}`;
    setIconText(element, icon, message);
}

function checkAnswer(selectedAnswer, selectedButton) {
    if (questionAnswered) return;

    questionAnswered = true;
    clearInterval(timerInterval);

    const question = playerQuestions[currentPlayer][currentRound];
    const player = players[currentPlayer];
    const correct = selectedAnswer === question.answer;

    document.querySelectorAll(".answer-btn").forEach(button => {
        button.disabled = true;

        if (button.textContent === question.answer) {
            button.classList.add("correct");
        }
    });

    if (correct) {
        player.streak++;
        player.correct++;

        const basePoints = 100;
        const timeBonus = timeLeft * 5;

        const streakBonus = Math.min(
            (player.streak - 1) * 25,
            100
        );

        const points = basePoints + timeBonus + streakBonus;

        player.score += points;

        showFeedback(
            "fa-circle-check",
            `Correct! +${points} points`,
            "success"
        );
    } else {
        player.streak = 0;

        if (selectedButton) {
            selectedButton.classList.add("wrong");
        }

        const message = selectedAnswer === null
            ? `Time's up! Answer: ${question.answer}`
            : `Incorrect! Answer: ${question.answer}`;

        showFeedback(
            selectedAnswer === null ? "fa-clock" : "fa-circle-xmark",
            message,
            "error"
        );
    }

    updateScoreboard();

    const lastQuestion =
        currentRound === playerQuestions[currentPlayer].length - 1;

    const finalTurn =
        gameMode === "solo" || currentPlayer === 1;

    setIconText(
        $("nextBtn"),
        lastQuestion && finalTurn
            ? "fa-flag-checkered"
            : "fa-arrow-right",
        lastQuestion && finalTurn ? "See Results" : "Continue"
    );

    $("nextBtn").classList.remove("hidden");
}

// =====================================
// SCOREBOARD
// =====================================

function updateScoreboard() {
    const first = players[0];

    $("scoreName1").textContent = first.name;
    $("score1").textContent = first.score;

    setIconText(
        $("streak1"),
        "fa-fire",
        `Streak: ${first.streak}`
    );

    const solo = gameMode === "solo";

    $("scoreboard").classList.toggle("solo", solo);
    $("player2Card").classList.toggle("hidden", solo);

    if (!solo) {
        const second = players[1];

        $("scoreName2").textContent = second.name;
        $("score2").textContent = second.score;

        setIconText(
            $("streak2"),
            "fa-fire",
            `Streak: ${second.streak}`
        );
    }

    $("player1Card").classList.toggle(
        "active-player",
        currentPlayer === 0
    );

    $("player2Card").classList.toggle(
        "active-player",
        !solo && currentPlayer === 1
    );
}

// =====================================
// NEXT TURN
// =====================================

$("nextBtn").addEventListener("click", () => {
    if (!questionAnswered) return;

    if (gameMode === "duo" && currentPlayer === 0) {
        currentPlayer = 1;
        showReadyScreen();
        return;
    }

    currentRound++;

    if (currentRound >= playerQuestions[0].length) {
        endGame();
        return;
    }

    currentPlayer = 0;

    if (gameMode === "duo") {
        showReadyScreen();
    } else {
        loadQuestion();
    }
});

// =====================================
// RESULTS
// =====================================

function endGame() {
    if (gameFinished) return;

    gameFinished = true;
    clearInterval(timerInterval);

    $("progressBar").style.width = "100%";

    const total = playerQuestions[0].length;
    const finalScores = $("finalScores");

    finalScores.replaceChildren();

    if (gameMode === "solo") {
        setIconText(
            $("resultTitle"),
            "fa-medal",
            "Challenge Complete!"
        );

        $("resultMessage").textContent =
            `${players[0].name}, you got ` +
            `${players[0].correct} out of ${total} correct!`;

        saveHighScore(players[0].score);
    } else {
        const first = players[0];
        const second = players[1];

        if (first.score === second.score) {
            setIconText(
                $("resultTitle"),
                "fa-handshake",
                "It's a Tie!"
            );

            $("resultMessage").textContent =
                "Both players are Trivia Champions!";
        } else {
            const winner = first.score > second.score
                ? first
                : second;

            setIconText(
                $("resultTitle"),
                "fa-trophy",
                `${winner.name} Wins!`
            );

            $("resultMessage").textContent =
                "Congratulations, Trivia Champion!";
        }
    }


    if (isMixedTrivia) {
    $("resultCategory").textContent =
        "Mixed Trivia | 15 questions from all categories";
    } else {
    const names = [...selectedCategories].map(
        category => categoryNames[category]
    );

    $("resultCategory").textContent =
        `Categories: ${names.join(", ")}`;
    }

    players.forEach(player => {
        const card = document.createElement("div");
        card.className = "final-score-card";

        const heading = document.createElement("h3");
        heading.textContent = player.name;

        const score = document.createElement("strong");
        score.textContent = `${player.score} points`;

        const accuracy = document.createElement("p");
        accuracy.textContent =
            `${player.correct} / ${total} correct answers`;

        card.append(heading, score, accuracy);
        finalScores.appendChild(card);
    });

    showScreen("resultScreen");
}

// =====================================
// HIGH SCORES
// =====================================

function getHighScoreKey() {
    if (isMixedTrivia) {
        return "triviaHighScore:mixed";
    }

    return "triviaHighScore:" +
        [...selectedCategories].sort().join(",");
}

function saveHighScore(score) {
    try {
        const key = getHighScoreKey();
        const previous = Number(localStorage.getItem(key)) || 0;

        if (score > previous) {
            localStorage.setItem(key, String(score));
        }
    } catch (error) {
        // Storage may be unavailable.
    }

    displayHighScore();
}

function displayHighScore() {
    let score = 0;

    try {
        const values = Object.keys(localStorage)
            .filter(key => key.startsWith("triviaHighScore:"))
            .map(key => Number(localStorage.getItem(key)) || 0);

        score = Math.max(0, ...values);
    } catch (error) {
        score = 0;
    }

    setIconText(
        $("highScoreText"),
        "fa-trophy",
        `Best Solo Score: ${score}`
    );
}

// =====================================
// REPLAY AND NAVIGATION
// =====================================

$("playAgainBtn").addEventListener("click", startGame);

$("changeCategoryBtn").addEventListener("click", () => {
    showScreen("categoryScreen");
});

$("homeBtn").addEventListener("click", () => {
    clearInterval(timerInterval);
    displayHighScore();
    showScreen("homeScreen");
});

// =====================================
// INITIALIZE
// =====================================

updateCategorySelection();
displayHighScore();
showScreen("homeScreen");
