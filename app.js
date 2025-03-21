document.addEventListener('DOMContentLoaded', function () {
    const homeLink = document.getElementById('homeLink');
    const aboutLink = document.getElementById('aboutLink');
    const signupLink = document.getElementById('signupLink');
    const signoutButton = document.getElementById('signoutButton');
    const homeSection = document.getElementById('home');
    const aboutSection = document.getElementById('about');
    const signupSection = document.getElementById('signup');
    const signupForm = document.getElementById('signupForm');
    const messageDiv = document.getElementById('message');
    const getStartedButton = document.querySelector('.cta-button');
    const header = document.querySelector('header');

    homeSection.hidden = false;
    aboutSection.hidden = true;
    signupSection.hidden = true;

    header.classList.remove('visible');

   
    homeLink.addEventListener('click', function (event) {
        event.preventDefault();
        showSection(homeSection);
        header.classList.remove('visible'); 
    });

    aboutLink.addEventListener('click', function (event) {
        event.preventDefault();
        showSection(aboutSection);
        header.classList.add('visible'); 
    });

    signupLink.addEventListener('click', function (event) {
        event.preventDefault();
        showSection(signupSection);
        header.classList.add('visible'); 
    });

    getStartedButton.addEventListener('click', function (event) {
        event.preventDefault();
        showSection(signupSection);
        header.classList.add('visible'); 
    });

    signupForm.addEventListener('submit', function (event) {
        event.preventDefault();
        const username = document.getElementById('username').value.trim();
        const email = document.getElementById('email').value.trim();
        const password = document.getElementById('password').value.trim();

        if (!username || !email || !password) {
            messageDiv.textContent = 'Please fill out all fields!';
            messageDiv.style.color = 'red'; 
            return; // Stop the function if validation fails
        }

        messageDiv.textContent = 'Sign up successful! Redirecting...';
        messageDiv.style.color = '#1abc9c'; 
        signoutButton.hidden = false;

        setTimeout(function () {
            showSection(aboutSection);
            header.classList.add('visible'); 
        }, 2000); // 2 seconds delay
    });

    signoutButton.addEventListener('click', function () {
        signoutButton.hidden = true;
        showSection(homeSection);
        header.classList.remove('visible'); 
        messageDiv.textContent = '';
        signupForm.reset(); // Clear the form
    });

    function showSection(section) {
        homeSection.hidden = true;
        aboutSection.hidden = true;
        signupSection.hidden = true;
        section.hidden = false;
    }
    document.getElementById('signupForm').addEventListener('submit', function(event) {
        event.preventDefault();
        
        // Simulate a successful sign-up
        const username = document.getElementById('username').value;
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
    
        // Hide the sign-up form and show the math game
        document.getElementById('signup').hidden = true;
        document.getElementById('mathGame').hidden = false;
    
        // Generate a math problem
        generateMathProblem();
    });
    
  document.getElementById('signupForm').addEventListener('submit', function(event) {
    event.preventDefault();
    document.getElementById('signup').hidden = true;
    document.getElementById('mathGame').hidden = false;
});

let currentProblem = 0;
let correctCount = 0;
let problems = [];
let userAnswers = [];

document.getElementById('startGame').addEventListener('click', function() {
    const difficulty = document.getElementById('difficulty').value;
    generateProblems(difficulty);
    document.getElementById('gameArea').hidden = false;
    showProblem();
});

document.getElementById('submitMathAnswer').addEventListener('click', function() {
    const userAnswer = parseFloat(document.getElementById('mathAnswer').value);
    userAnswers.push(userAnswer);
    if (userAnswer === problems[currentProblem].answer) {
        correctCount++;
        document.getElementById('mathResult').textContent = 'Correct!';
    } else {
        document.getElementById('mathResult').textContent = 'Incorrect.';
    }
    currentProblem++;
    if (currentProblem < problems.length) {
        showProblem();
    } else {
        showResults();
    }
});

document.getElementById('playAgain').addEventListener('click', function() {
    document.getElementById('results').hidden = true;
    document.getElementById('mathGame').hidden = false;
    currentProblem = 0;
    correctCount = 0;
    problems = [];
    userAnswers = [];
});

function generateProblems(difficulty) {
    problems = [];
    for (let i = 0; i < 5; i++) { // Generate 5 problems
        let num1, num2, operator;
        if (difficulty === 'easy') {
            num1 = Math.floor(Math.random() * 10) + 1;
            num2 = Math.floor(Math.random() * 10) + 1;
            operator = ['+', '-'][Math.floor(Math.random() * 2)];
        } else if (difficulty === 'medium') {
            num1 = Math.floor(Math.random() * 50) + 1;
            num2 = Math.floor(Math.random() * 50) + 1;
            operator = ['+', '-', '*'][Math.floor(Math.random() * 3)];
        } else if (difficulty === 'hard') {
            num1 = Math.floor(Math.random() * 100) + 1;
            num2 = Math.floor(Math.random() * 100) + 1;
            operator = ['+', '-', '*', '/'][Math.floor(Math.random() * 4)];
        }
        const problem = `${num1} ${operator} ${num2}`;
        const answer = eval(problem);
        problems.push({ problem, answer });
    }
}

function showProblem() {
    document.getElementById('mathProblem').textContent = problems[currentProblem].problem;
    document.getElementById('mathAnswer').value = '';
}

function showResults() {
    document.getElementById('gameArea').hidden = true;
    document.getElementById('results').hidden = false;
    document.getElementById('score').textContent = `You got ${correctCount} out of ${problems.length} correct!`;
    let correctAnswersHTML = '<p>Correct Answers:</p>';
    problems.forEach((problem, index) => {
        correctAnswersHTML += `<p>${problem.problem} = ${problem.answer} (Your answer: ${userAnswers[index]})</p>`;
    });
    document.getElementById('correctAnswers').innerHTML = correctAnswersHTML;
}
});