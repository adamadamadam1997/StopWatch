let count = 0;
let timer = false;
let startTimer = null;

const updateDisplay = () => {
    const hour = Math.floor(count / 36000);
    const min = Math.floor((count % 36000) / 600);
    const sec = Math.floor(((count % 36000) % 600) / 10);
    const msec = (((count % 36000) % 600) % 10);

    const timeStr = `${hour}:${min}:${sec}:${msec}`;

    document.getElementById('display').textContent = timeStr;
};

const updateButtons = () => {
    if (count === 0) {
        $('#resetBtn').prop('disabled', true);
    } else {
        $('#resetBtn').prop('disabled', false);
    }
    
    if (timer) {
        $('#startBtn').prop('disabled', true);
        $('#stopBtn').prop('disabled', false);
    } else {
        $('#startBtn').prop('disabled', false);
        $('#stopBtn').prop('disabled', true);
    }
};

$('#startBtn').click(function () {
    if (timer) return;
    timer = true;
    startTimer = setInterval(() => {
        count++;
        updateDisplay();
        updateButtons();
    }, 100);
});

$('#stopBtn').click(function () {
    timer = false;
    clearInterval(startTimer);
    updateButtons();
});

$('#resetBtn').click(function () {
    timer = false;
    clearInterval(startTimer);
    count = 0;
    updateDisplay();
    updateButtons();
})

updateButtons();


