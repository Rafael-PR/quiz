const quizData = [
    {
        question: 'Wie alt ist Leni ?',
        a: '3',
        b: '14',
        c: '10',
        d: '3',
        correct: 'c'
    },{
        question: 'Was war Opa Wolfgang von Beruf ?',
        a: 'Astronaut',
        b: 'Präsident der Fitschi Inseln',
        c: 'Lehrer',
        d: 'Programmierer',
        correct: 'c'
    },{
        question: 'Wer ist der beste Baseballspieler der Familie Primas ?',
        a: 'Oma Giggi',
        b: 'Rio',
        c: 'Baymax',
        d: 'El Meusti',
        correct: 'b'
    },{
        question: 'Wie ist die Postleitzahl von Besigheim ?',
        a: '74399',
        b: '0815',
        c: '77721',
        d: '74354',
        correct: 'd'
    },{
        question: 'Wann haben Carina und Rafael geheiratet ?',
        a: 'Wer sind denn die beiden...?',
        b: '2013',
        c: '2020',
        d: '2018',
        correct: 'c'
    }
];

const quiz = document.getElementById('quiz');
const questionEL = document.getElementById('question');
const answerEls = document.querySelectorAll('.answer');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submitBtn = document.getElementById('submit');

let currentQuiz = 0;
let score = 0;

//Everytime when we press submit => loadQuiz()
loadQuiz();

function loadQuiz() {
    deselectAnswers();

    const currentQuizData = quizData[currentQuiz];

    questionEL.innerText = currentQuizData.question;
    
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}

function getSelected() {
    let answer = undefined;

    answerEls.forEach((answerEl) => {
        if(answerEl.checked) {
            answer = answerEl.id;
        }
    });

        return answer;
}

function deselectAnswers() {
    answerEls.forEach((answerEl) => {
         answerEl.checked = false;
    });
}

submitBtn.addEventListener("click",()=>{
    //check to see the answer
    
    const answer = getSelected();
    console.log(answer);

    

    if(answer) {

        if(answer === quizData[currentQuiz].correct) {
        score++;
        }
        currentQuiz++;

        if(currentQuiz < quizData.length) {
                loadQuiz();
            } else {
                quiz.innerHTML = `<h1>Du hast ${score} von ${quizData.length} Fragen richtig beantwortet</h1>
                <button onclick="location.reload()">NEUSTART</button>`
            }
    }
});






//function changeBtnColor() {
//    submitBtn.style.backgroundColor="#fff"
//}