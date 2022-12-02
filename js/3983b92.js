dobre = 0;


function addElem(elem) {
    inp = $('#minisudoku').find('.red');
    number = inp.attr('name');
    inp.parent().html('<input type="hidden" name="'+number+'" value="'+elem+'" /><div class="inputdiv red hidden" onclick="onclickInput($(this))" name="'+number+'" value="'+elem+'"></div><a onclick="cancel('+number+')" class="btn btn-lgrey btn-xs text-black delete">x</a><img src="img/obsudoku/'+elem+'.png" class="img-responsive">');
}

function cancel(number) {

    $('.inputdiv').removeClass('red');
    $('#d'+number).html('<input type="hidden" name="'+number+'" value="" /><div class="inputdiv red" onclick="onclickInput($(this))" name="'+number+'" value=""></div>');
}

function onclickInput(input) {

    $('.inputdiv').removeClass('red');
    input.addClass('red');
}

$(document).ready(function(){
    

    dobre = parseInt($('.ok').html());
    if (!dobre) {
        dobre=0;
        $('.ok').append(dobre);
    }


});