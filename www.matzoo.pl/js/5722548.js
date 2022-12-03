$(document).ready(function () {
    
    if ($('#sl1').val()!=''){
        $('#licznik1').css('background-image','url(img/ulamek-stroke.png');
    }    
    if ($('#sl2').val()!=''){
        $('#licznik2').css('background-image','url(img/ulamek-stroke.png');
    }    
    if ($('#sm1').val()!=''){
        $('#mianownik1').css('background-image','url(img/ulamek-stroke.png');
    }    
    if ($('#sm2').val()!=''){
        $('#mianownik2').css('background-image','url(img/ulamek-stroke.png');
    }    
    
    

    $('#sl1').click(function() {
        $('#licznik1').css('background-image','url(img/ulamek-stroke.png');
    });    

    $('#sl2').click(function() {
        $('#licznik2').css('background-image','url(img/ulamek-stroke.png');
    }); 

    $('#sm1').click(function() {
        $('#mianownik1').css('background-image','url(img/ulamek-stroke.png');
    }); 

    $('#sm2').click(function() {
        $('#mianownik2').css('background-image','url(img/ulamek-stroke.png');
    }); 

    $('#sl1').blur(function() {
        if ($(this).val()=='') {
            $('#licznik1').css('background-image','none');
        }
    }); 

    $('#sl2').blur(function() {
        if ($(this).val()=='') {
            $('#licznik2').css('background-image','none');
        }
    }); 

    $('#sm1').blur(function() {
        if ($(this).val()=='') {
            $('#mianownik1').css('background-image','none');
        }
    }); 

    $('#sm2').blur(function() {
        if ($(this).val()=='') {
            $('#mianownik2').css('background-image','none');
        }
    }); 

});