
window.addEventListener('load', () => {
    // let user = JSON.parse(localStorage.getItem('user'));
    // if (user == null) {
    //     window.location.href = "login.html";
    // }
});

// ***************** sticky menu **********
$(window).on('scroll', function () {
    if (scroll < 100) {
        $(".sticky-header").removeClass("sticky");
    }
    else {
        $(".sticky-header").addClass("sticky");
        var scroll = $(window).scrollTop();
    }
});


// humberger menu dropdown
$('.dropdown').on('show.bs.dropdown', function () {
    $(this).find('.dropdown-menu').first().stop(true, true).slideDown();
});
$('.dropdown').on('hide.bs.dropdown', function () {
    $(this).find('.dropdown-menu').first().stop(true, true).slideUp();
});

// scroll to top 
function scrollToTop() {
    var $scrollUp = $("#scroll-to-top"),
        $lastScrollTop = 0,
        $window = $(window);
    $window.on('scroll', function () {
        var st = $(this).scrollTop();
        if (st > $lastScrollTop) {
            $scrollUp.removeClass('show');
        } else {
            if ($window.scrollTop() > 120) {
                $scrollUp.addClass('show');
            } else {
                $scrollUp.removeClass('show');
            }
        }
        $lastScrollTop = st;
    });
    $scrollUp.on('click', function (evt) {
        $('html, body').animate({
            scrollTop: 0
        }, 50);
        evt.preventDefault();
    });
}
scrollToTop();

// **************** num *******************
$('.num-in span').click(function () {
    var $input = $(this).parents('.num-block').find('input.in-num');
    if ($(this).hasClass('minus')) {
        var count = parseFloat($input.val()) - 1;
        count = count < 1 ? 1 : count;
        if (count < 2) {
            $(this).addClass('dis');
        }
        else {
            $(this).removeClass('dis');
        }
        $input.val(count);
    }
    else {
        var count = parseFloat($input.val()) + 1;
        $input.val(count);
        if (count > 1) {
            $(this).parents('.num-block').find(('.minus')).removeClass('dis');
        }
    }
    $input.change();
    return false;
});

