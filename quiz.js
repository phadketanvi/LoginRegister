// Variable declaration
const quiz= document.getElementById('quiz')
const currentQuestion = document.getElementById('question')
const option_a_text = document.getElementById('option_a_text')
const option_b_text = document.getElementById('option_b_text')
const option_c_text = document.getElementById('option_c_text')
const option_d_text = document.getElementById('option_d_text')
const answerSelected = document.querySelectorAll('.answer')
const submitButton = document.getElementById('submit')
let currentNoOfAnswers = 0
let noOfCorrectAnswers = 0

// Database of all quiz questions
const quizQuestions = [
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
      
    startQuiz()
    
    // Function to load quiz
    function startQuiz() {
    
    cancelAnswers()
    
    const currentQuizDatabase = quizQuestions[currentNoOfAnswers]
    
    currentQuestion.innerText = currentQuizDatabase.question
    option_a_text.innerText = currentQuizDatabase.a
    option_b_text.innerText = currentQuizDatabase.b
    option_c_text.innerText = currentQuizDatabase.c
    option_d_text.innerText = currentQuizDatabase.d
    }
    
    // Function to reset all selected answers
    function cancelAnswers() {
        answerSelected.forEach(answerEl => answerEl.checked = false)
    }
    
    function getSelected() {
        
    let answer
    answerSelected.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id
        }
    })
    return answer
    }
    
    // Function to check if all questions have been answered and then display the final score
    submitButton.addEventListener('click', () => {
    const answer = getSelected()
    if(answer) {
       if(answer === quizQuestions[currentNoOfAnswers].correct) {
           noOfCorrectAnswers++
       }
       currentNoOfAnswers++   
       if(currentNoOfAnswers < quizQuestions.length) {
         startQuiz()
       } else {
           quiz.innerHTML = `
           <h2>Your final Score is ${noOfCorrectAnswers}/${quizQuestions.length} </h2>
           <button onclick="location.reload()">Retry</button>
           `          
       }
    }
    })