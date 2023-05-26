const swiper = new Swiper('.swiper', {
speed: 400,
spaceBetween: 100,
});

$(document).on('click', '#btn-search-open', openSearchPane);
$(document).on('focusout', '#search-input', closeSearchPane);
$(document).on('click', '#btn-menu', toggleMenuPane);
$(document).on('click', 'body._menu-opened button.expand', toggleDepth2);

function openSearchPane(){
    $('#search-wrap').addClass('_opened');
    setTimeout(function(){
        $('#search-input').focus();
    }, 100);
}

function closeSearchPane(){ // have to submit input value before this function is triggered
    $('#search-wrap').removeClass('_opened');
    setTimeout(function(){
        $('#search-input').val('');
    }, 100);
}

function toggleMenuPane(){
    $('body').toggleClass('_menu-opened');
    if ($('body').hasClass('_menu-opened')){
        $('#lnb').find('.depth1').removeClass('_opened').eq(0).addClass('_opened');
    }
}

function toggleDepth2(){
    $(this).parent().toggleClass('_opened').siblings().removeClass('_opened');    
}