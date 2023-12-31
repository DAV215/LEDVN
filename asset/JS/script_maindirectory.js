var stt_slider = 0;
document.getElementById('next_slide').onclick = function() {
    let list = document.querySelectorAll('.slider_item');

    if (stt_slider >= list.length - 1) {
        stt_slider = 0;
    } else {
        stt_slider++;
    }
    showslide();
}
document.getElementById('prev_slide').onclick = function() {
    let list = document.querySelectorAll('.slider_item');

    if (stt_slider <= 1) {
        stt_slider = list.length - 1;
    } else {
        stt_slider--;
    }
    showslide();

}
let list_dot = document.querySelectorAll('.slider_maindirecory .dots li');
for (let i = 0; i < list_dot.length; i++) {
    list_dot[i].onclick = function() {
        stt_slider = i;
        showslide();
    }

}
document.querySelector('.slider_maindirecory .dots').onmouseover = function() {
    stopTimer();
}

function showslide() {
    let list = document.querySelectorAll('.slider_item');
    let list_dot = document.querySelectorAll('.slider_maindirecory .dots li');
    for (let i = 0; i < list.length; i++) {
        if (i != stt_slider) {
            list[i].style.display = 'none';
            list_dot[i].classList.remove('active');

        } else {
            list[i].style.display = 'block';
            list_dot[i].classList.add('active');

        }
    }
}

function show_automation() {

    let list = document.querySelectorAll('.slider_item');

    if (stt_slider < list.length - 1) {
        stt_slider++;
    } else {
        stt_slider = 0;
    }
    showslide();
}


var timer;

function start_timer() {
    timer = setInterval(function() {
        show_automation();

    }, 3500);
}

function stopTimer() {
    clearInterval(timer);
}
var button = document.getElementById('btn_control');
button.addEventListener('mouseenter', function() {

    stopTimer();
});

button.addEventListener('mouseleave', function() {
    start_timer();
});

start_timer(); // Start the timer initially