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
});