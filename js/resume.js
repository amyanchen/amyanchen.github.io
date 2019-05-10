$(function() {
    $.scrollify({
        section: ".section",
        setHeights: false
    });
    if (screen.width < 768) {
        $.scrollify.disable();
    }
    $('.timeline > li > .mb-3 > p').click(
        function() {
            $.scrollify.update();
        }
    )
    $('.timeline > li:odd > .mb-3 > p').click(
        function() {
            $(this).parent().toggleClass('order-first');
        }
    )
});

var scrollEventHandler = function() {
    if (isScrolledIntoView(document.getElementsByClassName('section')[1])) {
        $('#nav-about').fadeIn(200);
        $('#nav-exp').fadeOut(200);
    } else if (isScrolledIntoView(document.getElementsByClassName('section')[2])) {
        $('#nav-exp').fadeIn(200);
        $('#nav-about').fadeOut(200);
    } else if (isScrolledIntoView(document.getElementsByClassName('section')[3])) {
        $('#nav-org').fadeIn(200);
        $('#nav-exp').fadeOut(200);
        $('#nav-contact').fadeOut(200);
    } else {
        $('#nav-contact').fadeIn(200);
        $('#nav-org').fadeOut(200);
    }
}

$(document).scroll(scrollEventHandler);

function isScrolledIntoView(el) {
    var elemTop = el.getBoundingClientRect().top;
    var elemBottom = el.getBoundingClientRect().bottom;

    var isVisible = (elemTop <= window.innerHeight / 2) && (elemBottom >= window.innerHeight / 2);
    return isVisible;
}
