const browserData = `OS & Browser: ${navigator.userAgent}`;
localStorage.setItem('systemInfo', browserData);

document.getElementById('footer').innerText = localStorage.getItem('systemInfo');

const variantNumber = 1;
async function getComments() {
    const container = document.getElementById('comments-container');
    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${variantNumber}/comments`);
        const comments = await response.json();
        
        container.innerHTML = '';
        comments.forEach(comment => {
            const div = document.createElement('div');
            div.className = 'comment-item';
            div.innerHTML = `<strong>${comment.name}</strong><br>${comment.body}`;
            container.appendChild(div);
        });
    } catch (error) {
        container.innerText = 'Помилка завантаження коментарів.';
    }
}
getComments();

setTimeout(() => {
    document.getElementById('feedback-modal').style.display = 'block';
}, 60000);

document.getElementById('close-modal').onclick = () => {
    document.getElementById('feedback-modal').style.display = 'none';
};

const themeBtn = document.getElementById('theme-toggle');
const body = document.body;

function setThemeByTime() {
    const hour = new Date().getHours();
    if (hour >= 7 && hour < 21) {
        body.classList.add('light-theme');
        body.classList.remove('dark-theme');
    } else {
        body.classList.add('dark-theme');
        body.classList.remove('light-theme');
    }
}
setThemeByTime();

themeBtn.onclick = () => {
    if (body.classList.contains('light-theme')) {
        body.classList.replace('light-theme', 'dark-theme');
    } else {
        body.classList.replace('dark-theme', 'light-theme');
    }
};