const swiper = new Swiper('.swiper', {
speed: 400,
spaceBetween: 100,
});

$(document).on('click', '#btn-search-open', openSearchPane);
$(document).on('focusout', '#search-input', closeSearchPane);

function openSearchPane(){
    $('#search-wrap').addClass('_opened');
    setTimeout(function(){
        $('#search-input').focus();
    }, 100);
}

function closeSearchPane(){
    $('#search-wrap').removeClass('_opened');
    setTimeout(function(){
        $('#search-input').val('');
    }, 100);    
}