// Navegação entre Seções //

$(document).ready(function() {
    let navBtn = $('.nav-item');
    let homeSection = $('#mainSlider');
    let aboutSection = $('#about-area');
    let scrollTo = null;

    $(navBtn).click(function() {
        let btnId = $(this).attr('id');

        if (btnId == 'about-menu') {
            scrollTo = aboutSection;
        } else {
            scrollTo = homeSection
        }

        $([document.documentElement, document.body]).animate({
            scrollTop: $(scrollTo).offset().top - 70
        }, 1000);
    });
});