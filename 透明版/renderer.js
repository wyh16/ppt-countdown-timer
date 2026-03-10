const { ipcRenderer } = require('electron');

let timerInterval;
let remainingTime = 0;
let isRunning = false;
let initialTime = 0;

const display = document.getElementById('timer-display');
const playBtn = document.getElementById('play-btn');
const pauseBtn = document.getElementById('pause-btn');
const resetBtn = document.getElementById('reset-btn');
const closeBtn = document.getElementById('close-btn');
const customInput = document.getElementById('custom-input');
const setCustomBtn = document.getElementById('set-custom-btn');
const progressBar = document.getElementById('progress-bar');

closeBtn.addEventListener('click', () => {
    ipcRenderer.send('close-window');
});

function updateDisplay(seconds) {
    const m = Math.floor(seconds / 60).toString().padStart(2, '0');
    const s = (seconds % 60).toString().padStart(2, '0');
    display.textContent = `${m}:${s}`;
    updateProgressBar(seconds);
}

function updateProgressBar(seconds) {
    if (initialTime <= 0) {
        progressBar.style.width = '0%';
        progressBar.classList.remove('warning', 'danger');
        return;
    }

    const percentage = (seconds / initialTime) * 100;
    progressBar.style.width = `${percentage}%`;

    progressBar.classList.remove('warning', 'danger');

    if (percentage <= 20) {
        progressBar.classList.add('danger');
    } else {
        if (percentage <= 50) {
            progressBar.classList.add('warning');
        }
    }
}

function triggerEnd() {
    display.classList.add('ended');
    showAlert();
}

function clearEnd() {
    display.classList.remove('ended');
}

function showAlert() {
    ipcRenderer.send('show-alert');
}

function hideAlert() {
    ipcRenderer.send('hide-alert');
}

function startTimer() {
    if (isRunning) return;
    if (remainingTime <= 0) return;

    isRunning = true;
    updateButtonStates();
}

function pauseTimer() {
    clearInterval(timerInterval);
    isRunning = false;
    updateButtonStates();
}

function updateButtonStates() {
    if (isRunning) {
        playBtn.style.display = 'none';
        pauseBtn.style.display = 'flex';
    } else {
        playBtn.style.display = 'flex';
        pauseBtn.style.display = 'none';
    }
}

function startTimerInternal() {
    const startTime = Date.now();
    const targetEndTime = startTime + remainingTime * 1000;

    timerInterval = setInterval(() => {
        const now = Date.now();
        const diff = Math.ceil((targetEndTime - now) / 1000);

        if (diff <= 0) {
            remainingTime = 0;
            updateDisplay(0);
            pauseTimer();
            triggerEnd();
        } else {
            remainingTime = diff;
            updateDisplay(remainingTime);
        }
    }, 100);
}

function resetTimer() {
    pauseTimer();
    remainingTime = 0;
    initialTime = 0;
    updateDisplay(0);
    clearEnd();
    hideAlert();
}

function setTime(seconds) {
    pauseTimer();
    initialTime = seconds;
    remainingTime = seconds;
    updateDisplay(remainingTime);
    clearEnd();
}

playBtn.addEventListener('click', () => {
    startTimer();
    startTimerInternal();
});

pauseBtn.addEventListener('click', () => {
    pauseTimer();
});

resetBtn.addEventListener('click', resetTimer);

document.querySelectorAll('.preset-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        const timeValue = parseInt(btn.dataset.time);
        if (timeValue > 0) {
            const seconds = timeValue * 60;
            setTime(seconds);
        }
    });
});

if (setCustomBtn && customInput) {
    setCustomBtn.addEventListener('click', () => {
        const inputValue = parseFloat(customInput.value);
        if (!isNaN(inputValue) && inputValue > 0) {
            const totalSeconds = Math.round(inputValue * 60);
            setTime(totalSeconds);
        }
    });
}

updateButtonStates();
updateDisplay(0);
