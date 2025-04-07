// Set current year in footer
document.getElementById('current-year').textContent = new Date().getFullYear();

// Tab functionality
const tabButtons = document.querySelectorAll('.tab-button');
const tabContents = document.querySelectorAll('.tab-content');

tabButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Remove active class from all buttons and contents
        tabButtons.forEach(btn => btn.classList.remove('active'));
        tabContents.forEach(content => content.classList.remove('active'));
        
        // Add active class to clicked button and corresponding content
        button.classList.add('active');
        const tabId = button.getAttribute('data-tab');
        document.getElementById(tabId).classList.add('active');
    });
});

// Make all links with # href prevent default
document.querySelectorAll('a[href="#"]').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
    });
});

// Make download buttons show alert
document.querySelectorAll('.download-button').forEach(button => {
    button.addEventListener('click', () => {
        alert('این قابلیت در نسخه نمایشی فعال نیست.');
    });
});
