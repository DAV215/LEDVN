var page_recent = 0;
var page = document.querySelectorAll('.listpage li');
var item = document.querySelectorAll('.list_item .item');

for (let i = 0; i < page.length; i++) {
    page[i].onclick = function() {
        page_recent = i;
        show();
    }

}

function show() {
    for (let i = 0; i < page.length; i++) {
        if (i != page_recent) {
            page[i].classList.remove('active');
        } else {
            page[i].classList.add('active');
        }
    }
    for (let i = 0; i < item.length; i++) {
        let item_start = (page_recent) * 3;
        let item_end = item_start + 2;
        if (i >= item_start && i <= item_end) {

            item[i].style.display = 'block';
            let time = (i - item_start + 1) / 3 + 's';
            item[i].style.animation = `show linear ${time}`;


        } else {
            item[i].style.display = 'none';

        }
    }
}
show();