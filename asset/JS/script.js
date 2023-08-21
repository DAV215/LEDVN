document.addEventListener("DOMContentLoaded", function() {
    window.addEventListener('scroll', function() {
        if (window.scrollY > 5) {
            document.getElementById('heade_bar').classList.add('fixed-top');
        } else {
            document.getElementById('heade_bar').classList.remove('fixed-top');

        }
    });
});





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



var stt_showmore = 0;
document.getElementById('showmore').onclick = function() {
    stt_showmore = !stt_showmore;
    let list = document.querySelectorAll('.card_item');
    if (stt_showmore == 1) {
        for (let i = 3; i < list.length; i++) {
            list[i].style.transition = ' opacity 1.5s ease !important';
            list[i].style.opacity = 1;

            list[i].style.display = 'block';
        }
        document.getElementById('showmore').innerHTML = "Ẩn bớt";
    } else {
        for (let i = 3; i < list.length; i++) {
            list[i].style.display = 'none';
            document.getElementById('showmore').innerHTML = "Xem thêm";

        }
    }

}