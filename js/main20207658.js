function dynamicallyLoadScript(url) {
    var script = document.createElement("script");  // create a script DOM node
    script.src = url;  // set its src to the provided URL

    document.head.appendChild(script);  // add it to the end of the head section of the page (could change 'head' to 'body' to add it to the end of the body section instead)
}

function checkResolution() {
    width = window.innerWidth;
        $.ajax({
        type: "POST",
        url: "web/ajax.php",
        data: "resolution=" + width + ""
    }); console.debug('e '+width);
    if (width<741) {
        
        $('#mobile_ad').html('<div style=" padding:10px; background-color:#FFF "><div id=\'bmone2n-3535.2.1.36\' style="margin:0 auto;width:300px;" class="center-block reklamy"></div></div>');
    }
}

function screeningClick(screening_id,link) {
        $.ajax({
        type: "POST",
        url: "web/ajax.php",
        data: "screening_click=" + screening_id + ""
    }); 
    window.open(link); return false;
}

function radic(znak) {
  co = $('#odp').val();
  $('#odp').val(co+znak);
  $('#odp').focus();

}


function sendtogen(cat,zad) {
  $('#form1').attr('target', '_blank');
  $('#form1').attr('action', 'gen_'+cat+'_'+zad);
  return true;
}


function fokus(odp)
{
    var el = document.getElementById(odp);
    if (el)
        el.focus();
}



function checkForm() {

    // walidacja email w newsletterze

    email = $('input[name=email]').val();
    emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
    if ($('input[name=nazwa]').val() == '') {
        alert('Uzupełnij nazwę szkoły');
        $('input[name=nazwa]').addClass('ired');
        $('input[name=nazwa]').focus();
        return false;
    }
    else if ($('input[name=adres]').val() == '') {
        alert('Uzupełnij adres szkoły');
        $('input[name=adres]').addClass('ired');
        $('input[name=adres]').focus();
        return false;
    }
    else if ($('input[name=miasto]').val() == '') {
        alert('Uzupełnij miasto');
        $('input[name=miasto]').addClass('ired');
        $('input[name=miasto]').focus();
        return false;
    }
    else if ($('input[name=telefon]').val() == '') {
        alert('Uzupełnij pole telefon');
        $('input[name=telefon]').addClass('ired');
        $('input[name=telefon]').focus();
        return false;
    }
    else if ($('input[name=iluwkolku]').val() == '0') {
        alert('Uzupełnij poprawnie liczbę uczniów w kółku');
        $('input[name=iluwkolku]').addClass('ired');
        $('input[name=iluwkolku]').focus();
        return false;
    }
    else if ($('input[name=iluwkolku]').val() == '') {
        alert('Uzupełnij liczbę uczniów w kółku');
        $('input[name=iluwkolku]').addClass('ired');
        $('input[name=iluwkolku]').focus();
        return false;
    }
    else if (email == '') {
        $('input[name=email]').addClass('ired');
        alert('Wpisz w pole adres e-mail');
        return false;
    }
    else if (!emailReg.test(email)) {
        $('input[name=email]').addClass('ired');
        alert('Wpisz poprawny adres e-mail');
        return false;
    }
    else if ($('input[name=nauczyciel]').val() == '') {
        alert('Uzupełnij informacje o nauczycielu');
        $('input[name=nauczyciel]').addClass('ired');
        $('input[name=nauczyciel]').focus();
        return false;
    }
    else if ($('input[name=opiskolka]').val() == '') {
        alert('Uzupełnij informacje o kółku');
        $('input[name=opiskolka]').addClass('ired');
        $('input[name=opiskolka]').focus();
        return false;
    }
    else if ($('input[name=foto1]').val() == '') {
        alert('Wgraj minimun 4 zdjęcia');
        $('input[name=foto1]').addClass('ired');
        $('input[name=foto1]').focus();
        return false;
    }
    else if ($('input[name=foto2]').val() == '') {
        alert('Wgraj minimun 4 zdjęcia');
        $('input[name=foto2]').addClass('ired');
        $('input[name=foto2]').focus();
        return false;
    }
    else if ($('input[name=foto3]').val() == '') {
        alert('Wgraj minimun 4 zdjęcia');
        $('input[name=foto3]').addClass('ired');
        $('input[name=foto3]').focus();
        return false;
    }
    else if ($('input[name=foto1]').val() == $('input[name=foto2]').val()) {
        alert('To zdjęcie zostało już wgrane');
        $('input[name=foto2]').addClass('ired');
        $('input[name=foto2]').focus();
        return false;
    }
    else if ($('input[name=foto2]').val() == $('input[name=foto3]').val()) {
        alert('To zdjęcie zostało już wgrane');
        $('input[name=foto3]').addClass('ired');
        $('input[name=foto3]').focus();
        return false;
    }
    else if ($('input[name=foto4]').val() == '') {
        alert('Wgraj minimun 4 zdjęcia');
        $('input[name=foto4]').addClass('ired');
        $('input[name=foto4]').focus();
        return false;
    }
    else if ($('input[name=foto3]').val() == $('input[name=foto4]').val()) {
        alert('To zdjęcie zostało już wgrane');
        $('input[name=foto4]').addClass('ired');
        $('input[name=foto4]').focus();
        return false;
    }
    else if ($('input[name=foto1]').val() == $('input[name=foto4]').val()) {
        alert('To zdjęcie zostało już wgrane');
        $('input[name=foto4]').addClass('ired');
        $('input[name=foto4]').focus();
        return false;
    }
    else if ($('input[name=foto2]').val() == $('input[name=foto4]').val()) {
        alert('To zdjęcie zostało już wgrane');
        $('input[name=foto4]').addClass('ired');
        $('input[name=foto4]').focus();
        return false;
    }
    else if ($('input[name=foto1]').val() == $('input[name=foto4]').val()) {
        alert('To zdjęcie zostało już wgrane');
        $('input[name=foto4]').addClass('ired');
        $('input[name=foto4]').focus();
        return false;
    }  /*
     else if ($('input[name=zgoda]').prop('checked',false)) {
     alert('Prosimy wyrazić zgodę na...');
     $('input[name=zgoda]').addClass('ired');
     return false;
     }*/
    else {
        // $('#bezreklam').submit();
        return true;
    }



}






$(document).ready(function() {
//    checkPay = $('#checkPay').val();
//    window.setTimeout(function () {
//        if(checkPay=='none' && !document.getElementById('JibjKoUzkLREzoo')){
//            $("#task_area").html("<div><br><a href='strefa-bez-reklam' title='strefa bez reklam'><img src='img/JibjKoUzkLREzoo.png' alt='blokowanie reklam' /></a></div>");
//        }
//    }, 2000);


$('#ewaluacja td').click(function(){
    $(this).find('input[type=radio]').attr('checked','checked');
});



    $('#certyfikaty_button').click(function() {
        email = $('input[name=cemail]').val();
        emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
        if ($('input[name=nazwa]').val() == '') {
            alert('Uzupełnij nazwę szkoły');
            $('input').removeClass('ired');
            $('input[name=nazwa]').addClass('ired');
            $('input[name=nazwa]').focus();
            return false;
        }
        else if ($('input[name=adres]').val() == '') {
            alert('Uzupełnij adres szkoły');
            $('input').removeClass('ired');
            $('input[name=adres]').addClass('ired');
            $('input[name=adres]').focus();
            return false;
        }
        else if ($('input[name=miasto]').val() == '') {
            alert('Uzupełnij miasto');
            $('input').removeClass('ired');
            $('input[name=miasto]').addClass('ired');
            $('input[name=miasto]').focus();
            return false;
        }
        else if ($('input[name=cemail]').val() == '') {
            $('input').removeClass('ired');         
            $('input[name=cemail]').addClass('ired');
            $('input[name=cemail]').focus();            
            alert('Wpisz w pole adres e-mail');
            return false;
        }
        else if (!emailReg.test(email)) {
            $('input').removeClass('ired');            
            $('input[name=cemail]').addClass('ired');
            $('input[name=cemail]').focus();                 
            alert('Wpisz poprawny adres e-mail');
            return false;
        }        
        else if ($('input[name=telefon]').val() == '') {
            alert('Uzupełnij pole telefon');
            $('input').removeClass('ired');            
            $('input[name=telefon]').addClass('ired');
            $('input[name=telefon]').focus();
            return false;
        }
        else if ($('input[name=nauczyciel]').val() == '') {
            alert('Uzupełnij informacje o nauczycielu');
            $('input').removeClass('ired');
            $('input[name=nauczyciel]').addClass('ired');
            $('input[name=nauczyciel]').focus();
            return false;
        }
        
        else if ($('input[name=iluwkolku]').val() == '0') {
            alert('Uzupełnij poprawnie liczbę uczniów w kółku');
            $('input').removeClass('ired');
            $('input[name=telefon]').addClass('ired');
            $('input[name=telefon]').focus();
            return false;
        }
        else if ($('input[name=iluwkolku]').val() == '') {
            alert('Uzupełnij liczbę uczniów w kółku');
            $('input').removeClass('ired');
            $('input[name=telefon]').addClass('ired');
            $('input[name=telefon]').focus();
            return false;
        }

        else if ($('textarea[name=opiskolka]').val() == '') {
            alert('Uzupełnij informacje o kółku');
            $('input').removeClass('ired');
            $('textarea[name=opiskolka]').addClass('ired');
            $('textarea[name=opiskolka]').focus();
            return false;
        }
        else if ($('input[name=plik]').val() == '') {
            alert('Nie załączono pliku');
            $('input').removeClass('ired');
            $('textarea[name=plik]').addClass('ired');
            $('textarea[name=plik]').focus();
            return false;
        }

        
        
        
        else {
            //$('form[name=komm]').submit();
            $('#form2016').hide(); 
            $('#form2016send').show();
            $('form[name=certyf]').submit();
            return true;
        }
    });



    $('input[name=mojedane]').click(function() {
        id = $(this).val();
        if (id == 2) {
            $('.hidden1').addClass('hidden');
            //$('.hidden').removeClass('hidden');
        } else {
            $('.hidden1').removeClass('hidden');

        }

    });

    $('.intab').keyup(function(event) {
        if (event.keyCode == 39) {
            $(this).parent().parent().children().children('.intab').next('.intab').focus();

            index = parseInt($(this).attr('tabindex'));
            index = index - 1;

            $(this).parent().parent().parent().children().children().children('.intab').each(function() {
                if ($(this).attr('tabindex') == index)
                    $(this).focus();
            });
        }
        if (event.keyCode == 37) {
            $(this).prev('.intab').focus();
            $(this).parent().parent().children().children('.intab').next('.intab').focus();
            index = parseInt($(this).attr('tabindex'));
            index = index + 1;
            $(this).parent().parent().parent().children().children().children('.intab').each(function() {
                if ($(this).attr('tabindex') == index)
                    $(this).focus();
            });

        }
    });


    $('.ltab').keyup(function(event) {
        if (event.keyCode == 39) {
            index = parseInt($(this).attr('tabindex'));
            index = index + 1;
            $(this).parent().parent().parent().children().children().children('.ltab').each(function() {
                if ($(this).attr('tabindex') == index)
                    $(this).focus();
            });
        }
        if (event.keyCode == 37) {
            index = parseInt($(this).attr('tabindex'));
            index = index - 1;
            $(this).parent().parent().parent().children().children().children('.ltab').each(function() {
                if ($(this).attr('tabindex') == index)
                    $(this).focus();
            });

        }
    });



    $('input[type="text"]').keyup(function(event) {
        if (event.keyCode == 39) {
            $(this).next('input[type="text"]').focus();
        }
        if (event.keyCode == 37) {
            $(this).prev('input[type="text"]').focus();
        }
    });

    $('#form1 input[type="text"]').bind('keydown', function(event) {
        if (event.keyCode == 32) {
            return false;
        }
        else
            return true;
    });


    $('.test').click(function() {
        odp = $(this).html();
        $('#odp').val(odp);
        $('#form1').submit();
    });

    $('#dodaj_button').click(function() {
        $('#dodaj_komentarz').submit();
    });


});
