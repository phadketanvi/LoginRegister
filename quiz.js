const quizDatabase = [
    {
        question: "Which state produces maximum soybean?",
        a: "Madhya Pradesh",
        b: "Uttar Pradesh",
        c: "Bihar",
        d: "Rajasthan",
        correct: "a",
    },
    {
        question: "Which country operationalized world’s largest radio telescope?",
        a: "USA",
        b: "China",
        c: "Russia",
        d: "India",
        correct: "b",
    },
    {
        question: "Which of the following is the capital of Arunachal Pradesh?",
        a: "Itanagar",
        b: "Dispur",
        c: " Imphal",
        d: "Panaji",
        correct: "a",
    },
    {
        question: "Katerina Sakellaropoulou was elected the first woman President of",
        a: "Greece",
        b: "Spain",
        c: "Finland",
        d: "Netherland",
        correct: "a",
    },
    {
        question: "Which one among the following radiations carries maximum energy?",
        a: "Ultraviolet rays",
        b: "Gamma rays",
        c: " X- rays",
        d: "Infra-red rays",
        correct: "b",
    },
    {
        question: "Which country gifted the ‘Statue of Liberty’ to USA in 1886?",
        a: "France",
        b: "Canada",
        c: " Brazil",
        d: "England",
        correct: "a",
    },
    {
        question: "Dead Sea is located between which two countries?",
        a: "Jordan and Sudan",
        b: "Jordan and Israel",
        c: "Turkey and UA",
        d: "UAE and Egypt",
        correct: "b",
    },
    {
        question: "In which ocean ‘Bermuda Triangle’ region is located? ",
        a: "Atlantic",
        b: "Indian",
        c: "Pacific",
        d: "Arctic",
        correct: "a",
    },
    {
        question: "Which country is known as the ‘playground of Europe’?",
        a: "Austria",
        b: "Holland",
        c: "Switzerland",
        d: "Italy",
        correct: "c",
    },
    
    {
        question: "Which country is also known as the ‘Land of Rising Sun’??",
        a: "Japan",
        b: "New Zealand",
        c: "Fiji",
        d: "China",
        correct: "a",
    },
    
    
    
    ];
    
    const quiz= document.getElementById('quiz')
    const answerEls = document.querySelectorAll('.answer')
    const questionEl = document.getElementById('question')
    const a_text = document.getElementById('a_text')
    const b_text = document.getElementById('b_text')
    const c_text = document.getElementById('c_text')
    const d_text = document.getElementById('d_text')
    const submitBtn = document.getElementById('submit')
    
    
    
    let currentQuiz = 0
    let score = 0
    
    loadQuiz()
    
    function loadQuiz() {
    
    deselectAnswers()
    
    const currentQuizDatabase = quizDatabase[currentQuiz]
    
    questionEl.innerText = currentQuizDatabase.question
    a_text.innerText = currentQuizDatabase.a
    b_text.innerText = currentQuizDatabase.b
    c_text.innerText = currentQuizDatabase.c
    d_text.innerText = currentQuizDatabase.d
    }
    
    function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false)
    }
    
    function getSelected() {
        
    let answer
    answerEls.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id
        }
    })
    return answer
    }
    
    
    submitBtn.addEventListener('click', () => {
    const answer = getSelected()
    if(answer) {
       if(answer === quizDatabase[currentQuiz].correct) {
           score++
       }
    
       currentQuiz++
    
       if(currentQuiz < quizDatabase.length) {
           loadQuiz()
       } else {
           quiz.innerHTML = `
           <h2>Your Score ${score}/${quizDatabase.length} </h2>
           <button onclick="location.reload()">Play Again</button>
           `
           
       }
    }
    })