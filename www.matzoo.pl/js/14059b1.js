$(document).ready(function () {
    
    if ($('#sl1').val()!=''){
        $('#licznik1').css('background-image','url(img/ulamek-stroke.png');
        $('#licznik1 input').css('background-color','transparent');
        $('#licznik1 input').css('color','#333');
    }    
    if ($('#sl2').val()!=''){
        $('#licznik2').css('background-image','url(img/ulamek-stroke.png');
        $('#licznik2 input').css('background-color','transparent');
        $('#licznik2 input').css('color','#333');
    }    
    if ($('#sm1').val()!=''){
        $('#mianownik1').css('background-image','url(img/ulamek-stroke.png');
        $('#mianownik1 input').css('background-color','transparent');
        $('#mianownik1 input').css('color','#333');
    }    
    if ($('#sm2').val()!=''){
        $('#mianownik2').css('background-image','url(img/ulamek-stroke.png');
        $('#mianownik2 input').css('background-color','transparent');
        $('#mianownik2 input').css('color','#333');
    }    
    
    

    $('#sl1').click(function() {
        $('#licznik1').css('background-image','url(img/ulamek-stroke.png');
        $('#licznik1 input').css('background-color','transparent');
        $('#licznik1 input').css('color','#333');
    });    

    $('#sl2').click(function() {
        $('#licznik2').css('background-image','url(img/ulamek-stroke.png');
        $('#licznik2 input').css('background-color','transparent');
        $('#licznik2 input').css('color','#333');
    }); 

    $('#sm1').click(function() {
        $('#mianownik1').css('background-image','url(img/ulamek-stroke.png');
        $('#mianownik1 input').css('background-color','transparent');
        $('#mianownik1 input').css('color','#333');
    }); 

    $('#sm2').click(function() {
        $('#mianownik2').css('background-image','url(img/ulamek-stroke.png');
        $('#mianownik2 input').css('background-color','transparent');
        $('#mianownik2 input').css('color','#333');
    }); 

    $('#sl1').blur(function() {
        if ($(this).val()=='') {
            $('#licznik1').css('background-image','none');
            $('#licznik1 input').css('background-color','#FFF');
            $('#licznik1 input').css('color','#035EAD');
        }
    }); 

    $('#sl2').blur(function() {
        if ($(this).val()=='') {
            $('#licznik2').css('background-image','none');
            $('#licznik2 input').css('background-color','#FFF');
            $('#licznik2 input').css('color','#035EAD');
        }
    }); 

    $('#sm1').blur(function() {
        if ($(this).val()=='') {
            $('#mianownik1').css('background-image','none');
            $('#mianownik1 input').css('background-color','#FFF');
            $('#mianownik1 input').css('color','#035EAD');
        }
    }); 

    $('#sm2').blur(function() {
        if ($(this).val()=='') {
            $('#mianownik2').css('background-image','none');
            $('#mianownik2 input').css('background-color','#FFF');
            $('#mianownik2 input').css('color','#035EAD');
        }
    }); 

});