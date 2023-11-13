const progress = document.getElementById('progress');
const circles = document.querySelectorAll('.circle');
const questions = document.querySelectorAll('.question-container');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');

let currentActive = 1;

nextBtn.addEventListener('click', () => {
    currentActive++;

    if (currentActive > circles.length) {
        currentActive = circles.length;
    }

    update();
});

prevBtn.addEventListener('click', () => {
    currentActive--;

    if (currentActive < 1) {
        currentActive = 1;
    }

    update();
});

function update() {
    circles.forEach((circle, index) => {
        if (index < currentActive) {
            circle.classList.add('active');
        } else {
            circle.classList.remove('active');
        }
    });

    questions.forEach((question, index) => {
        if (index + 1 === currentActive) {
            question.classList.add('active');
        } else {
            question.classList.remove('active');
        }
    });

    const actives = document.querySelectorAll('.active');

    progress.style.width = ((actives.length-2) / (circles.length-1)) * 100 + '%';

    if (currentActive === 1) {
        prevBtn.disabled = true;
    } else if (currentActive === circles.length) {
        nextBtn.disabled = true;
    } else {
        prevBtn.disabled = false;
        nextBtn.disabled = false;
    }
}

update();
