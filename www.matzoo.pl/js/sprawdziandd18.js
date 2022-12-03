

function startTest() {
    
    email = $('input[name=email]').val();
    $('#pr_email').fadeOut('fast');
    $('#uz_email').fadeOut('fast');
    
    emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
    if (email == '') {
        $('#uz_email').fadeIn();
        return false;
    }
    else if (!emailReg.test(email)) {
        $('#pr_email').fadeIn();
        $('input[name=email1]').focus();
        return false;
    }
    else {
        set_id = $('input[name=set_id]').val();
        $('#spr_start').hide();
        $('#spr_bottom').hide();
        $('.spr').show();

        email = $('input[name=email]').val();

        $.ajax({
            type: "POST",
            url: "web/ajax_test8.php",
            data: "email=" + email + "&set_id=" + set_id + ""
        });


        showTask(1);
    }

}
function startTest3() {
    
    $('#pr_email').fadeOut('fast');
    $('#uz_email').fadeOut('fast');

        set_id = $('input[name=set_id]').val();
        $('#spr_start').hide();
        $('#spr_bottom').hide();
        $('.spr').show();

        email = $('input[name=email]').val();

//        $.ajax({
//            type: "POST",
//            url: "web/ajax_test3.php",
//            data: "email=" + email + "&set_id=" + set_id + ""
//        });


        showTask3(1);
    

}
function startTest8() {
    
    email = $('input[name=email]').val();
    $('#pr_email').fadeOut('fast');
    $('#uz_email').fadeOut('fast');
    
    emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
    if (email == '') {
        $('#uz_email').fadeIn();
        return false;
    }
    else if (!emailReg.test(email)) {
        $('#pr_email').fadeIn();
        $('input[name=email1]').focus();
        return false;
    }
    else {
        set_id = $('input[name=set_id]').val();
        $('#spr_start').hide();
        $('#spr_bottom').hide();
        $('.spr').show();

        email = $('input[name=email]').val();

        $.ajax({
            type: "POST",
            url: "web/ajax_test8.php",
            data: "email=" + email + "&set_id=" + set_id + ""
        });


        showTask8(1);
    }

}

function endTest() {
    set_id = $('input[name=set_id]').val();
    $('#spr_end').show();
    $('.spr_navi').hide();
    $('.spr_navidown').hide();
    $('.spr_task').show();
    $('.corr').addClass('odp1');
    
    //for (var i=1;i<11;i++) {
    i=1;
    $.ajax({
        type: "POST",
        url: "web/ajax_test.php",
        data: "ocen=" + 1 + "&set_id=" + set_id + "&odp=" + odp + ""
    }).done(function (msg) {
        $('.spr').prepend(msg);
    });

    $.ajax({
        type: "POST",
        url: "web/ajax_test.php",
        data: "ocen=" + 1 + "&zad_id=" + 1 + ""
    }).done(function (msg) {
        $('#question1').append(msg);
    });
    $.ajax({
        type: "POST",
        url: "web/ajax_test.php",
        data: "ocen=" + 1 + "&zad_id=" + 2 + ""
    }).done(function (msg) {
        $('#question2').append(msg);
    });
    $.ajax({
        type: "POST",
        url: "web/ajax_test.php",
        data: "ocen=" + 1 + "&zad_id=" + 3 + ""
    }).done(function (msg) {
        $('#question3').append(msg);
    });
    $.ajax({
        type: "POST",
        url: "web/ajax_test.php",
        data: "ocen=" + 1 + "&zad_id=" + 4 + ""
    }).done(function (msg) {
        $('#question4').append(msg);
    });
    $.ajax({
        type: "POST",
        url: "web/ajax_test.php",
        data: "ocen=" + 1 + "&zad_id=" + 5 + ""
    }).done(function (msg) {
        $('#question5').append(msg);
    });
    $.ajax({
        type: "POST",
        url: "web/ajax_test.php",
        data: "ocen=" + 1 + "&zad_id=" + 6 + ""
    }).done(function (msg) {
        $('#question6').append(msg);
    });
    $.ajax({
        type: "POST",
        url: "web/ajax_test.php",
        data: "ocen=" + 1 + "&zad_id=" + 7 + ""
    }).done(function (msg) {
        $('#question7').append(msg);
    });
    $.ajax({
        type: "POST",
        url: "web/ajax_test.php",
        data: "ocen=" + 1 + "&zad_id=" + 8 + ""
    }).done(function (msg) {
        $('#question8').append(msg);
    });
    $.ajax({
        type: "POST",
        url: "web/ajax_test.php",
        data: "ocen=" + 1 + "&zad_id=" + 9 + ""
    }).done(function (msg) {
        $('#question9').append(msg);
    });
    $.ajax({
        type: "POST",
        url: "web/ajax_test.php",
        data: "ocen=" + 1 + "&zad_id=" + 10 + ""
    }).done(function (msg) {
        $('#question10').append(msg);
    });

    
    for (var x=1; x<=10; x++) {
        $.ajax({
        type: "POST",
        url: "web/ajax_test.php",
        data: "ocen=" + 1 + "&zad_id=" + x + ""
    }).done(function (msg) {
        div_id = 'question'+x;
        $('#'+div_id).append(msg);
        
    });
    
    }
    

    $('.spr a').attr('onclick','');
            
            
            
//}

}

function endTest3() {
    set_id = $('input[name=set_id]').val();
    $('#spr_end').show();
    $('.spr_navi').hide();
    $('.spr_navidown').hide();
    $('.spr_task').show();
    $('.corr').addClass('odp1');
    odp = $('#odp').val();
    
    //for (var i=1;i<11;i++) {
    i=1;
    $.ajax({
        type: "POST",
        url: "web/ajax_test3.php",
        data: "ocen=" + 1 + "&set_id=" + set_id + "&odp=" + odp + ""
    }).done(function (msg) {
        $('.spr').prepend(msg);
    });

    $.ajax({
        type: "POST",
        url: "web/ajax_test3.php",
        data: "ocen=" + 1 + "&zad_id=" + 1 + ""
    }).done(function (msg1) {
        $('#question1').append(msg1);
    });
    
    $.ajax({
        type: "POST",
        url: "web/ajax_test3.php",
        data: "ocen=" + 1 + "&zad_id=" + 2 + ""
    }).done(function (msg2) {
        $('#question2').append(msg2);
    });
    
    $.ajax({
        type: "POST",
        url: "web/ajax_test3.php",
        data: "ocen=" + 1 + "&zad_id=" + 3 + ""
    }).done(function (msg3) {
        $('#question3').append(msg3);
    });
    
    $.ajax({
        type: "POST",
        url: "web/ajax_test3.php",
        data: "ocen=" + 1 + "&zad_id=" + 4 + ""
    }).done(function (msg) {
        $('#question4').append(msg);
    });
    
    $.ajax({
        type: "POST",
        url: "web/ajax_test3.php",
        data: "ocen=" + 1 + "&zad_id=" + 5 + ""
    }).done(function (msg) {
        $('#question5').append(msg);
    });
    
    $.ajax({
        type: "POST",
        url: "web/ajax_test3.php",
        data: "ocen=" + 1 + "&zad_id=" + 6 + ""
    }).done(function (msg) {
        $('#question6').append(msg);
    });
    
    $.ajax({
        type: "POST",
        url: "web/ajax_test3.php",
        data: "ocen=" + 1 + "&zad_id=" + 7 + ""
    }).done(function (msg) {
        $('#question7').append(msg);
    });
    
    $.ajax({
        type: "POST",
        url: "web/ajax_test3.php",
        data: "ocen=" + 1 + "&zad_id=" + 8 + ""
    }).done(function (msg) {
        $('#question8').append(msg);
    });
    
    $.ajax({
        type: "POST",
        url: "web/ajax_test3.php",
        data: "ocen=" + 1 + "&zad_id=" + 9 + ""
    }).done(function (msg) {
        $('#question9').append(msg);
    });
    
    $.ajax({
        type: "POST",
        url: "web/ajax_test3.php",
        data: "ocen=" + 1 + "&zad_id=" + 10 + ""
    }).done(function (msg) {
        $('#question10').append(msg);
    });

    
    $('.spr a').attr('onclick','');
            
            
            
//}

}

function endTest8() {
    set_id = $('input[name=set_id]').val();
    $('#spr_end').show();
    //$('.spr_navi').hide();
    //$('.spr_navidown').hide();
    
    $('.spr_navidown').html('<a title="do góry" href="javascript:scroll(0,0)" class="btn btn-lgrey margin5 s15"><i class="fa fa-angle-up"></i> DO GÓRY</a>');
    
    
    $('.spr_task').show();
    $('.corr').addClass('odp1');
    odp = $('#odp').val();
    odpowiedzi = $('input[name=odpowiedzi]').val();
    
    //for (var i=1;i<11;i++) {
    i=1;
    $.ajax({
        type: "POST",
        url: "web/ajax_test8.php",
        data: "ocen=" + 1 + "&set_id=" + set_id + "&odpowiedzi=" + odpowiedzi + ""
    }).done(function (msg) {
        $('.spr').prepend(msg);
    });

    
    $('.spr a').attr('onclick','');
            
            
            
//}

}

function showTask(i) {
    tasks_num = $('input[name=tasks_num]').val();
    $('.spr_task').hide();
    $('#question' + i).show();
    $('.spr_navi a').removeClass('current');
    $('#a' + i).addClass('current');

    next = parseInt(i) + 1;
    prev = parseInt(i) - 1;

    //$('.spr_title span').html(i);
    $('.spr_navidown').html('');
    if (next <= tasks_num) {
        $('.spr_navidown').append('<a class="next btn btn-lgrey margin5 s15" onclick="showTask(' + next + ');">NASTĘPNE PYTANIE <i class="fa fa-angle-right" aria-hidden="true"></i></a>');
    } else {
        $('.spr_navidown').append('<input type="button" class="button" onclick="endTest();" value="OCEŃ TEST" style="float:right" />');
    }
    if (prev != 0) {
        $('.spr_navidown').append('<a class="prev btn btn-lgrey margin5 s15" onclick="showTask(' + prev + ');"><i class="fa fa-angle-left" aria-hidden="true"></i> WSTECZ</a>');
    }


}
function showTask3(i) {
    tasks_num = $('input[name=tasks_num]').val();
    $('.spr_task').hide();
    $('#question' + i).show();
    $('.spr_navi a').removeClass('current');
    $('#a' + i).addClass('current');

    next = parseInt(i) + 1;
    prev = parseInt(i) - 1;

    //$('.spr_title span').html(i);
    $('.spr_navidown').html('');
    if (next <= tasks_num) {
        $('.spr_navidown').append('<a class="next btn btn-lgrey margin5 s15" onclick="showTask3(' + next + ');">NASTĘPNE PYTANIE <i class="fa fa-angle-right" aria-hidden="true"></i></a>');
    } else {
        $('.spr_navidown').append('<input type="button" class="button" onclick="endTest3();" value="OCEŃ TEST" style="float:right" />');
    }
    if (prev != 0) {
        $('.spr_navidown').append('<a class="prev btn btn-lgrey margin5 s15" onclick="showTask3(' + prev + ');"><i class="fa fa-angle-left" aria-hidden="true"></i> WSTECZ</a>');
    }


}
function showTask8(i) {
    tasks_num = $('input[name=tasks_num]').val();
    $('.spr_task').hide();
    $('#question' + i).show();
    $('.spr_navi a').removeClass('current');
    $('#a' + i).addClass('current');

    next = parseInt(i) + 1;
    prev = parseInt(i) - 1;

    //$('.spr_title span').html(i);
    $('.spr_navidown').html('');
    if (next <= tasks_num) {
        $('.spr_navidown').append('<a class="next btn btn-lgrey margin5 s15" onclick="showTask8(' + next + ');">NASTĘPNE PYTANIE <i class="fa fa-angle-right" aria-hidden="true"></i></a>');
    } else {
        $('.spr_navidown').append('<input type="button" class="button" onclick="endTest8();" value="OCEŃ TEST" style="float:right" />');
    }
    if (prev != 0) {
        $('.spr_navidown').append('<a class="prev btn btn-lgrey margin5 s15" onclick="showTask8(' + prev + ');"><i class="fa fa-angle-left" aria-hidden="true"></i> WSTECZ</a>');
    }


}


function zaznacz(elem, question, answer) {
    $(elem).parent().find('a').removeClass('current');
    $(elem).addClass('current');
    
    odp = $('#odp').val();
    odp = odp+question+':'+answer+';';
    $('#odp').val(odp);    
//
//    $.ajax({
//        type: "POST",
//        url: "web/ajax_test.php",
//        data: "question=" + question + "&answer=" + answer + "&set_id=" + set_id + ""
//    });

}


function zaznaczn(elem, question, answer) {
    $(elem).parent().find('a').removeClass('current');
    $(elem).addClass('current');

    $.ajax({
        type: "POST",
        url: "web/ajax_test3.php",
        data: "question=" + question + "&answer=" + answer + "&set_id=" + set_id + ""
    });

}

function zaznacz8(elem, question, answer) {
    $(elem).parent().find('a').removeClass('current');
    $(elem).addClass('current');
    
    $('input[name='+question+']').val(answer);
    odpowiedzi = $('input[name=odpowiedzi]').val();
    //console.debug(odpowiedzi+question+','+answer+';');
    $('input[name=odpowiedzi]').val(odpowiedzi+question+','+answer+';');

//    $.ajax({
//        type: "POST",
//        url: "web/ajax_test8.php",
//        data: "question=" + question + "&answer=" + answer + "&set_id=" + set_id + ""
//    });

}


function zaznacz_td(elem, question, answer) {
    $(elem).parent().parent().parent().find('a').removeClass('current');
    $(elem).addClass('current');

    $.ajax({
        type: "POST",
        url: "web/ajax_test.php",
        data: "question=" + question + "&answer=" + answer + "&set_id=" + set_id + ""
    });

}

function zaznacz_col(elem, question, answer) {
    klasa = $(elem).parent().prop('class');  
    $(elem).parent().parent().parent().find('td.'+klasa).find('a').removeClass('current');
    $(elem).addClass('current');

    $.ajax({
        type: "POST",
        url: "web/ajax_test.php",
        data: "question=" + question + "&answer=" + answer + "&set_id=" + set_id + ""
    });

}






$(document).ready(function () {


    var dobre = 0;
    var zle = 0;
    $('.ok').append(dobre);
    $('.wrong').append(zle);


});

