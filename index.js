const cta = document.querySelector('.cta');

let mode = localStorage.getItem('theme');

if(mode == null) {
    setTheme('light');
} else {
    setTheme(mode);
}

let themeDots = document.getElementsByClassName('theme-dot');

for(var i = 0; themeDots.length > i; i++) {
    themeDots[i].addEventListener('click', function() {
        let mode = this.dataset.mode
        console.log('option clicked', mode);
        setTheme(mode);    
    })
}

function setTheme (mode) {
    if(mode == 'light') {
        document.querySelector('#theme-style').href = 'light.css';
        document.querySelector('.picture').innerHTML = `<img id="profile-pic" src="assets/blue_bg.png">`;
    }

    if (mode == 'dark') {
        document.querySelector('#theme-style').href = 'dark.css';
        document.querySelector('.picture').innerHTML = `<img id="profile-pic" src="assets/red_bg.jpg">`;
    }

    localStorage.setItem('theme', mode);
}

setTimeout(() => {
    cta.style = 'visibility: visible;'
}, 3500);

$('.navTrigger').click(function () {
    $(this).toggleClass('active');
    $("#mainListDiv").toggleClass("show_list");
    $("#mainListDiv").fadeIn();
});

$('.navlinks').children().children().click(() => {
    $('#mainListDiv').removeClass('show_list');
})

$(window).scroll(function() {
    if ($(document).scrollTop() > 50) {
        $('.nav').addClass('affix');
    } else {
        $('.nav').removeClass('affix');
    }
});