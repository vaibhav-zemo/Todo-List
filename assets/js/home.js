var icon = document.getElementById('drop_icon');
var list = document.getElementById('list');
var input_list = document.getElementById('input_list');

icon.addEventListener('click', function () {
    list.style.display = 'block';
});

var lists = document.querySelectorAll('.categories');
for (let i of lists) {
    i.addEventListener('click', function () {
        list.style.display = 'none';
        let content = i.textContent;
        console.log(content);
        input_list.value = content;
    });
}

var checkbox = document.querySelectorAll('#box');
var delete_button = document.querySelector('#delete');
var link = delete_button.href;
let fuc = setInterval(() => {
    for (let i of checkbox) {
        let flag = i.checked;
        while (flag) {
            link += '=' + i.name;
            delete_button.href = link;
            console.log(link);
            flag = false;
            clearInterval(fuc);
        }
    }
}, 1000);

var category_color = document.querySelectorAll('#display_category');
for(let i of category_color){
    var option = i.textContent.trim();
    switch (option) {
        case 'Work':
            i.style.background = 'red'
            break;
        case 'Personal':
            i.style.background = '#e67fbe'
            break;
        case 'School':
            i.style.background = '#77d777'
            break;
        case 'Cleaning':
            i.style.background = '#676ee4'
            break;
        case 'Other':
            i.style.background = 'aqua'
            break;
    }
}