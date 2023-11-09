let countdownInterval;
let totalSeconds = 0;
let startTime;

function startCountdown() {
    const hours = parseInt(document.getElementById('hours').value, 10);
    const minutes = parseInt(document.getElementById('minutes').value, 10);
    const seconds = parseInt(document.getElementById('seconds').value, 10);

    totalSeconds = hours * 3600 + minutes * 60 + seconds;
    startTime = Date.now();

    countdownInterval = setInterval(updateCountdown, 1000);
}

function updateCountdown() {
    const currentTime = Date.now();
    const elapsedTime = Math.floor((currentTime - startTime) / 1000);
    const remainingTime = totalSeconds - elapsedTime;

    if (remainingTime > 0) {
        const hrs = Math.floor(remainingTime / 3600);
        const mins = Math.floor((remainingTime % 3600) / 60);
        const secs = remainingTime % 60;

        document.getElementById('hours').value = hrs.toString().padStart(2, '0');
        document.getElementById('minutes').value = mins.toString().padStart(2, '0');
        document.getElementById('seconds').value = secs.toString().padStart(2, '0');
    } else {
        clearInterval(countdownInterval);
        document.getElementById('hours').value = '00';
        document.getElementById('minutes').value = '00';
        document.getElementById('seconds').value = '00';
    }
}


function stopCountdown() {
    clearInterval(countdownInterval);
}

function restartCountdown() {
    clearInterval(countdownInterval);
    document.getElementById('countdown').textContent = '';
    totalSeconds = 0;
    document.getElementById('hours').value = '';
    document.getElementById('minutes').value = '';
    document.getElementById('seconds').value = '';
}

const timerInput = document.getElementById('timerTitle');

timerInput.addEventListener('input', function() {
    if (timerInput.value !== '') {
        timerInput.style.border = 'none';
    } else {
        timerInput.style.border = '1px solid white';
    }
});
// const hoursInput = document.getElementById('hours');

// hoursInput.addEventListener('input', function() {
//     if (hoursInput.value !== '') {
//         hoursInput.style.border = 'none';
//     } else {
//         hoursInput.style.border = '1px solid white';
//     }
// });
// const minsInput = document.getElementById('minutes');

// minsInput.addEventListener('input', function() {
//     if (minsInput.value !== '') {
//         minsInput.style.border = 'none';
//     } else {
//         minsInput.style.border = '1px solid white';
//     }
// });
// const secsInput = document.getElementById('seconds');

// secsInput.addEventListener('input', function() {
//     if (secsInput.value !== '') {
//         secsInput.style.border = 'none';
//     } else {
//         secsInput.style.border = '1px solid white';
//     }
// });

function limitInput(input) {
    if (input.value > 59) {
        input.value = 59;
    }
}
