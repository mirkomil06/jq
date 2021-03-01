$('.ask').on('click', function (e) {
    e.preventDefault()
    $('.ask').not(this).removeClass('active').next().slideUp(300)
    $(this).toggleClass('active').next().slideToggle(300)
})

$('.js-filter').click(function () {
    let attr = $(this).attr('data-filter')

    $(`div[data-filter=${attr}]`).slideDown(500)

    if (attr == 'all') {
        $(`div[data-filter]`).slideDown(500)
    } else {
        $(`div[data-filter]`).not(`div[data-filter=${attr}]`).slideUp(500)
    }
})

function typing(element) {
    let inner = element.html(),
        fullText = '',
        i = 0,
        interval = setInterval(() => {
            fullText += inner[i]
            i++
            element.html(fullText)
            if (fullText == inner) {
                clearInterval(interval)
            }
        }, 200)
}

typing($('h1'))

$('.js-modal-show').click(function (e) {
    e.preventDefault()
    $('.modal').fadeIn(500)
})

$('.close').click(function (e) {
    e.preventDefault()
    $('.modal').fadeOut(500)
})

$('.modal').click(function (e) {
    e.preventDefault()
    if (e.target == e.currentTarget) $('.modal').fadeOut(500)
})

$(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
        $('.js-btn-top').addClass('show')
    } else {
        $('.js-btn-top').removeClass('show')
    }
});

/* $(window).scroll(function () {
    scrollNav()
});

$(window).resize(function () {
    scrollNav()
});

function scrollNav() {
    if (scrollNumber() - pageYOffset > 0) {
        $('.nav').css("position", "fixed")
        $('.nav').css("top", `${scrollNumber() - pageYOffset}px`)
        $('.nav').css("z-index", "100")
        $('.nav').css('width', '100%')
    } else {
        $('.nav').css("top", "0px")

    }
}

function scrollNumber() {
    return innerHeight - 68
} */

$('.nav').css({
    position: 'fixed',
    width: '100%',
    zIndex: 10,
    top: $(window).height() - $('.nav').outerHeight() + 'px'
})

$(window).scroll(function () {
    let editPosition = $(window).height() - $('.nav').outerHeight() - $(window).scrollTop()
    if (editPosition > 0) {
        $('.nav').css({
            top: editPosition + 'px'
        })
    } else {
        $('.nav').css({
            top: 0
        })
    }
})

$('.read-more').click(function (e) {
    e.preventDefault()
    if ($(this).html().trim() == 'Read More') {
      $(this).html('Hidden')
    } else {
      $(this).html('Read More')
    }
    $('.text-hidden').toggleClass('hidden')
  })
  
  $('.js-btn-top').click(function (e) {
    e.preventDefault()
    $('html').animate({
      scrollTop: 0
    }, {
      duration: 100
    })
  })