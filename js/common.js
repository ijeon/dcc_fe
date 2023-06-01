const swiper = new Swiper('.swiper', {
speed: 400,
spaceBetween: 100,
});

$(document)
    .on('click', '#btn-search-open', openSearchPane)
    .on('focusout', '#search-input', closeSearchPane)
    .on('click', '#btn-menu', toggleMenuPane)
    .on('click', 'body._menu-opened button.expand', toggleDepth2)
    .on('change', '#cart-select-all', toggleSelectAll)
    .on('change', '.cart li .custom-checkbox input', checkSelectAll)
    .on('click', '.item-quantity button', changeQuantity)
    .on('click', '.span-btn-delete', removeItem)
    .on('click', '#btn-cart-remove-selected', removeSelectedItems)    
    .on('click', '#btn-bnb', addBnb)
    .on('change', 'td.bnb input', addBnbMsg);

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
    if ($('body').hasClass('_menu-opened'))
        $('#lnb').find('.depth1').removeClass('_opened').eq(0).addClass('_opened');
}

function toggleDepth2(){
    $(this).parent().toggleClass('_opened').siblings().removeClass('_opened');    
}

function toggleSelectAll(){
    if ($(this).is(':checked'))
        $('.cart li .custom-checkbox input').prop('checked', true);        
    else
        $('.cart li .custom-checkbox input').prop('checked', false);
}

function checkSelectAll(){
    if (!$(this).is(':checked'))
        $('#cart-select-all').prop('checked', false);
}

function changeQuantity(){
    var currentQ = parseInt($(this).siblings('input').val());

    if ($(this).hasClass('btn-quantity-add'))
        $(this).siblings('input').val(currentQ+1);
    else if (currentQ > 1)
        $(this).siblings('input').val(currentQ-1);
    else
        removeItem($(this).parents('li').index());
}

function removeItem(idx){
    var index = ($.isNumeric(idx)) ? idx : $(this).parents('li').index();

    if (window.confirm('Do you want to remove this item?'))
            $('#cart').find('li').eq(index).remove();
}

function removeSelectedItems(){
    if (window.confirm('Do you want to remove selected items?')){
        $('.cart li').each(function(){
            if ($(this).find('.item-select input').is(':checked'))
                $(this).remove();
        });
    }    
}

function addBnb(){
    $('#summary td.bnb').each(function(){
        $(this).find('input').prop('checked', true);
        $(this).parent().addClass('bnb-added');
    });
}

function addBnbMsg(){    
    if ($(this).prop('checked') == true){
        $(this).parents('tr').addClass('bnb-added');
    } else {
        $(this).parents('tr').removeClass('bnb-added');
    }
}