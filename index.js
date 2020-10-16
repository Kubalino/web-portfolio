const cta = document.querySelector('.cta');

console.log(cta);

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