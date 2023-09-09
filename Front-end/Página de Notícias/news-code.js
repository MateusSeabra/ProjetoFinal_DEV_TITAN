$(document).ready(function() {
    $('.filter-btn').on('click', function() {
        let type = $(this).attr('id')
        let boxes = $('.project-box')

        $('.main-btn').removeClass('active')
        $(this).addClass('active')

        if (type == 'sports-btn') {
            eachBoxes('sports', boxes)
        } else if (type == 'tech-btn') {
            eachBoxes('tech', boxes)
        } else if (type == 'arts-btn') {
            eachBoxes('arts', boxes)
        } else if (type == 'others-btn') {
            eachBoxes('others', boxes)
        } else {
            eachBoxes('all', boxes)
        }
    })

    function eachBoxes(type, boxes) {
        if (type == 'all') {
            $(boxes).fadeIn()
        } else {
            $(boxes).each(function() {
                if (!$(this).hasClass(type)) {
                    $(this).fadeOut('slow')
                } else {
                    $(this).fadeIn()
                }
            })
        }
    }
})





