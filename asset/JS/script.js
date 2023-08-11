document.getElementById('next').onclick = function() {
    let list = document.querySelectorAll('.item');
    document.getElementById('slide').appendChild(list[0]);
}
document.getElementById('prev').onclick = function() {
    let list = document.querySelectorAll('.item');
    document.getElementById('slide').prepend(list[list.length - 1]);
}

function sendMessageToMessenger() {
    // Replace 'USER_OR_PAGE_ID' with the recipient's Facebook user ID or Page ID
    const recipientID = '106512259090438';

    // Replace 'YOUR_APP_ID' with your Facebook App ID
    const appID = '302936728852424';

    // Your predefined message to be sent
    const message = 'Hello, this is a predefined message sent from my website!';

    // Redirect URL to Facebook Messenger
    const redirectURL = `https://www.messenger.com/t/106512259090438`;
    const list_item = document.querySelectorAll('.item');
    const item_now_name = list_item[0].querySelector('.name').innerHTML;
    const item_now_des = list_item[0].querySelector('.des').innerHTML;
    const mess_content = item_now_name + item_now_des;


    // Open the Facebook Messenger dialog with the predefined message
    window.location.href = ` http://m.me/${recipientID}?text=${mess_content}`;
}


function sendMessageToMessenger2() {
    // Replace 'USER_OR_PAGE_ID' with the recipient's Facebook user ID or Page ID
    const recipientID = '106512259090438';

    // Replace 'YOUR_APP_ID' with your Facebook App ID
    const appID = '302936728852424';

    // Your predefined message to be sent

    // Redirect URL to Facebook Messenger
    const redirectURL = `https://www.messenger.com/t/106512259090438`;
    const list_item = document.querySelectorAll('.item');
    const item_now_name = list_item[1].querySelector('.name').innerHTML;
    const item_now_des = list_item[1].querySelector('.des').innerHTML;
    const mess_content = `${item_now_name}\n${item_now_des}`;



    // Open the Facebook Messenger dialog with the predefined message
    window.location.href = ` http://m.me/${recipientID}?text=${encodeURIComponent(mess_content)} `;

}

function imagemess() {


}

function resize_bg_card() {
    const list_card = document.querySelectorAll('#row_maindirectory .card');
    for (var i = 0; i < list_card.length; i++) {
        const url_image = window.getComputedStyle(list_card[i]).backgroundImage;
        const imageUrl = url_image.replace(/^url\(['"](.+)['"]\)/, '$1');
        const img = new Image();
        img.src = imageUrl;
        const imageWidth = img.width;
        const imageHeight = img.height;

        if ((imageWidth / imageHeight) < 1.5) {
            list_card[i].style.backgroundSize = 'contain';
            list_card[i].style.backgroundRepeat = 'no-repeat';
        }
    }
}
resize_bg_card();

let items = document.querySelectorAll('#slide_main_item .slide_item');
let stt = 0;
let active = 3;

function slide_pos_ani() {
    stt = 0;
    for (var i = stt + active; i < items.length; i++) {
        stt++;
        items[i].style.transform = `translateX(${100*2.3*stt}px) scale(${1 - 0.2*stt}) perspective(16px) `;
        items[i].style.zIndex = 10 - stt;
        items[i].style.filter = 'blur(3px)';

        items[i].style.opacity = stt > 2 ? 0 : 0.6;

    }
    stt = 0;
    for (var i = active - 2; i >= 0; i--) {
        stt++;
        items[i].style.transform = `translateX(${-100*2.3*stt}px) translateZ(${25}px) scale(${1 - 0.2*stt}) perspective(16px) `;
        items[i].style.zIndex = 10 - stt;
        items[i].style.filter = 'blur(3px)';
        items[i].style.opacity = stt > 2 ? 0 : 0.6;
    }
    items[active - 1].style.transform = `none`;
    items[active - 1].style.zIndex = 999999;
    items[active - 1].style.filter = 'none';
    items[active - 1].style.opacity = 1;


}
slide_pos_ani();
let next = document.getElementById('next_slide');
let prev = document.getElementById('prev_slide');
next.onclick = function() {
    active = active + 1 < items.length + 1 ? active + 1 : active;
    slide_pos_ani();
}
prev.onclick = function() {
    active = active - 1 >= 1 ? active - 1 : active;
    slide_pos_ani();

}

document.getElementById('prev_image').onclick = function() {
    let list_image = document.querySelectorAll('.image_container');
    document.getElementById('image_frame').prepend(list_image[list_image.length - 1]);
}
document.getElementById('next_image').onclick = function() {
    let list_image = document.querySelectorAll('.image_container');
    document.getElementById('image_frame').appendChild(list_image[0]);
}