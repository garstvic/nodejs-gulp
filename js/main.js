$('.main-heading').sticky();

$('.main-heading').on('sticky-start', function() {
    $(this).css({
        background: '#ffa949',
        borderBottom: '3px solid black',
        fontSize: '2rem',
        magrinTop: '0'
    }) ;
});

$('.main-heading').on('sticky-end', function() {
    $(this).css({
        background: 'transparent',
        border: 'none',
        fontSize: '5.625rem'
    });
});

var foobar = bar;