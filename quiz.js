const quizDatabase = [
    {
        question: "How many months have 28 days?",
        a: "2",
        b: "1",
        c: "12",
        d: "Depends if there's a leap year or not",
        correct: "c",
    },
    {
        question: "The answer is really big.",
        a: "THE ANSWER",
        b: "Really big",
        c: "An elephant",
        d: "The data given is insufficient",
        correct: "a",
    },
    {
        question: "What is the most visited tourist attraction in the world?",
        a: "Eiffel Tower",
        b: "Statue of Liberty",
        c: "Great Wall of China",
        d: "Colosseum",
        correct: "a",
    },
    {
        question: "What’s the heaviest organ in the human body?",
        a: "Brain",
        b: "Liver",
        c: "Skin",
        d: "Heart",
        correct: "b",
    },
    {
        question: "What is the oldest soft drink in the United States?",
        a: "Coca Cola",
        b: "Pepsi",
        c: "Dr. Pepper",
        d: "Canada Dry Ginger Ale",
        correct: "c",
    },
    {
        question: "What is the highest-grossing video game franchise to date?",
        a: "Mario",
        b: "Pokemon",
        c: "Call Of Duty",
        d: "Street Fighter",
        correct: "b",
    },
    {
        question: "Which company was the first to reach 1 trillion dollars?",
        a: "Microsoft",
        b: "Apple",
        c: "Amazon",
        d: "Google",
        correct: "b",
    },
    {
        question: "Which of these films uses futuristic HCI?",
        a: "Speed",
        b: "Minority Report",
        c: "Terminator",
        d: "Bambi",
        correct: "b",
    },
    {
        question: "Which of the following are examples of paradigms for interaction?",
        a: "Personal Computing",
        b: "HyperText",
        c: "Multi-Modality",
        d: "All of the above",
        correct: "d",
    },
    
    {
        question: "Good Design is just cool graphics. How far is it true?",
        a: "True",
        b: "False",
        c: "Not clear",
        d: "May be true",
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