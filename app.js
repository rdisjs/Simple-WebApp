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

    // Show Home section by default
    homeSection.hidden = false;
    aboutSection.hidden = true;
    signupSection.hidden = true;

    // Hide header on Home page
    header.classList.remove('visible');

    // Navigation logic
    homeLink.addEventListener('click', function (event) {
        event.preventDefault();
        showSection(homeSection);
        header.classList.remove('visible'); // Hide header on Home page
    });

    aboutLink.addEventListener('click', function (event) {
        event.preventDefault();
        showSection(aboutSection);
        header.classList.add('visible'); // Show header on About page
    });

    signupLink.addEventListener('click', function (event) {
        event.preventDefault();
        showSection(signupSection);
        header.classList.add('visible'); // Show header on Sign Up page
    });

    // Get Started button redirects to Sign Up
    getStartedButton.addEventListener('click', function (event) {
        event.preventDefault();
        showSection(signupSection);
        header.classList.add('visible'); // Show header on Sign Up page
    });

    // Sign Up form submission
    signupForm.addEventListener('submit', function (event) {
        event.preventDefault();
        const username = document.getElementById('username').value;
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        // Simulate a successful sign-up
        messageDiv.textContent = 'Sign up successful! Redirecting...';
        signoutButton.hidden = false;

        // Redirect to About section after a short delay
        setTimeout(function () {
            showSection(aboutSection);
            header.classList.add('visible'); // Show header on About page
        }, 2000); // 2 seconds delay
    });

    // Sign Out logic
    signoutButton.addEventListener('click', function () {
        signoutButton.hidden = true;
        showSection(homeSection);
        header.classList.remove('visible'); // Hide header on Home page
        messageDiv.textContent = '';
        signupForm.reset(); // Clear the form
    });

    // Helper function to show a specific section
    function showSection(section) {
        homeSection.hidden = true;
        aboutSection.hidden = true;
        signupSection.hidden = true;
        section.hidden = false;
    }
});