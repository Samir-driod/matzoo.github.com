function strefa_rejestracja_walidacja() {
    // sprawdzam czy jest e-mail i czy poprawny
    email = $('input[name=email1]').val();
    emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
    if (email == '') {
        alert('Wpisz w pole adres e-mail');
        return false;
    }
    else if (!emailReg.test(email)) {
        alert('Wpisz poprawny adres e-mail');
        $('input[name=email1]').focus();
        return false;
    }
    
    // sprawdzam czy jest e-mail i czy poprawny
    email2 = $('input[name=email2]').val();
    emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
    if (email2 == '') {
        alert('Wpisz powtórzenie adresu e-mail');
        $('input[name=email2]').focus();
        return false;
    }
    else if (email!=email2) {
        alert('Podane adresy e-mail nie zgadzają się');
        $('input[name=email1]').focus();
        return false;
    }

    // sprawdzam czy jest haslo1
    haslo1 = $('input[name=password1]').val();
    if (haslo1 == '') {
        alert('Wpisz hasło');
        $('input[name=password1]').focus();
        return false;
    }
    else if (haslo1.length<8) {
        alert('Hasło musi składać się co najmniej z 8 znaków');
        $('input[name=password1]').focus();
        return false;
    }
    // sprawdzam czy jest haslo2
    haslo2 = $('input[name=password2]').val();
    if (haslo2 == '') {
        alert('Wpisz powtórzenie hasła');
        $('input[name=password2]').focus();
        return false;
    }
    // sprawdzam czy zgadzają się hasła
    if (haslo1 != haslo2) {
        alert('Podane hasła nie zgadzają się');
        $('input[name=password1]').val('');
        $('input[name=password2]').val('');
        return false;
    }

    if (!$('input[name=regulamin]').prop('checked') == true) {
        alert('Prosimy przeczytaj i zaakceptuj regulamin serwisu.');
        return false;
    }

    if (!$('input[name=zgoda]').prop('checked') == true) {
        alert('Prosimy wyrazić zgodę na przetwarzanie danych osobowych.');
        return false;
    }


    $('form[name=strefa_rejestracja]').submit();
}

$(document).ready(function() {







    $('input[name=typ]').click(function() {
        id = $(this).val();
        $('input[name=typhidden]').val(id);
        if (id == 1) {
            $('#urodziny').addClass('hidden');
            $('#zgoda').addClass('hidden');
        } else {
            $('#urodziny').removeClass('hidden');
            $('#zgoda').removeClass('hidden');
        }

    });



    $('input[name=js]').val(1);


    $('input[name=email1]').blur(function() {
        email = $('input[name=email1]').val();
        emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
        if (email == '') {
            alert('Wpisz w pole adres e-mail');
            return false;
        }
        else if (!emailReg.test(email)) {
            alert('Wpisz poprawny adres e-mail');
            $('input[name=email1]').focus();
            return false;
        }
        else
            return true;
    });

    $('input[name=email1]').blur(function() {
        co = $('input[name=email1]').val();
        $.ajax({
            type: "POST",
            url: "../lib/ajax_useremails.php",
            data: "email=" + co + "",
            success: function(data) {
                if (!data) {
                }
                else {
                    alert('Jest już taki adres e-mail');
                    $('input[name=email1]').focus();
                }
            }
        });
    });

    $('input[name=email2]').blur(function() {
        if ($('input[name=email2]').val() != $('input[name=email1]').val()) {
            $('#email').html('<p class="alert alert-danger">Adresy e-mail nie są jednakowe.</p>');
            $('input[name=email2]').val('');
            $('input[name=email2]').addClass('red');
            $('input[name=email2]').focus();
        } else {
            $('#email').html('');
            $('input[name=email2]').removeClass('red');
        }
    });
    
    $('input[name=password1]').blur(function() {
    haslo1 = $('input[name=password1]').val();
    if (haslo1 == '') {
        $('#pass').html('<p class="alert alert-danger">Wpisz hasło.</p>');
        $('input[name=password1]').focus();
        return false;
    }
    else if (haslo1.length<8) {
        $('#pass').html('<p class="alert alert-danger">Hasło musi składać się co najmniej z 8 znaków.</p>');        
        $('input[name=password1]').focus();
        return false;
    } else {
        $('#pass').html('');
    }
    });
    
    $('input[name=password2]').blur(function() {
    haslo2 = $('input[name=password2]').val();
    if (haslo2 == '') {
        $('#pass').html('<p class="alert alert-danger">Wpisz powtórzenie hasła.</p>');        
        $('input[name=password2]').focus();
        return false;
    } else {
        $('#pass').html('');
    }
    // sprawdzam czy zgadzają się hasła
    if (haslo1 != haslo2) {
        $('#pass').html('<p class="alert alert-danger">Podane hasła nie zgadzają się.</p>');                
        $('input[name=password1]').val('');
        $('input[name=password2]').val('');
        return false;
    }  else {
        $('#pass').html('');
    }  
    });
    


    $('#send').click(function() {
        if ($('input[name=login]').val() != '' && $('input[name=password1]').val() != '' && $('input[name=password2]').val() != ''
                && $('input[name=email1]').val() != '' && $('input[name=email2]').val() != '' && $('input[name=regulamin]').attr('checked') == true) {
            $('#form1').submit();
            return true;
        }
        else {
            if (!$('input[name=regulamin]').attr('checked') == true)
                $('input[name=regulamin]').addClass('red');
            alert('Sprawd\u017a wprowadzone dane. Czy zaakceptowałeś regulamin?');
            return false;
        }
    });



});
