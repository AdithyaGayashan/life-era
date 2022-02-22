const quizData=[
    {
        question: "what is the main cause of global extinction species?",
        a: "the disteuction of natural habitats",
        b: "poaching and illegal trade ",
        c: "climate change",
        correct: "a",

    },
    {
        question: "in which Eropean country are the largest areas of primeval forest perseved?",
        a: "Bulgaria",
        b: "Finland",
        c: "polan",
        correct: "c",
    },
    {
        question: "why do many bees have to starve",
        a: "because monocultures flower at the same time and bees do not find enough food before and afterwards ",
        b: "because many bees are specialised on certain plants",
        c: "because beesonly move within a small radius of their hive",
        correct: "a",

    },
    {
        question: "who produces of the world's food?",
        a: "organic farmers",
        b: "large corporations",
        c: "small farmers",
        correct: "c",
    },
    {
        question: "what do our meat consumption have to do with the species rich rainforest?",
        a: "The cattle eat the bark of the trees so that the trees die off ",
        b: "for every steak a tree is planted in Brazil",
        c: "Rainforest is cleared for pasture and to grow feed for the European market ",
        correct: "c",
    },
    {
        question: "by how much does a healthy peatland grow per year",
        a: "1 millimetre",
        b: "0.5 centimetre",
        c: "1 centimetre",
        correct: "a",

    },
    {
        question: "What is NOT foind in the alpine mountain world?",
        a: "shels and corals",
        b: "Microplastics",
        c: "Mammoths",
        correct: "c",
    },
    {
        Question: "many trees are felled for paper. which statement about global paper consumption is true ",
        a: "more and more paper is being consumed",
        b: "muxh less paper is being consumed every year ",
        c: "paper consumption has remained the same for years",
        correct: "a",
    },
    {
        question: "who do you call a paocher?",
        a: "all hunters",
        b: "someone who shoots wild animals without permission",
        c: "someone who stuffs animals",
        correct: "b",

    },
    {
        question: "Ladybirds are often used against palnt pests. how many aphids can a single specimen kill per day ?",
        a: "10",
        b: "30",
        c: "50",
        correct: "c"

    },
    {
        question: "what should you not take home as a souvenier from your holiday?",
        a: "ivory",
        b: "shells",
        c: "pebbles",
        correct: "a",
    
    },
    {
        question: "where was a glacier officially officially declared dead for the first time in August 2019? ",
        a: "in the alps",
        b: "in the andes",
        c: "in the iceland",
        correct: "c",
    },
];
const quiz= document.getElementById('quiz')
const answerE1s= document.querySelectorAll('.answer')
const questionE1= document.getElementById('question')
const a_text= document.getElementById('a_text')
const b_text= document.getElementById('b_text')
const c_text= document.getElementById('c_text')
const d_text= document.getElementById('d_text')
const submitBtn= document.getElementaryId('submit')

let currentQuiz = 0
let score= 0
loadQuiz()
function loadQuiz(){
    deselectAnswers()
    const currentQuizData = quizData[currentQuiz]
    questionE1.innerText= currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
}
    
