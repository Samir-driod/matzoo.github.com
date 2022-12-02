dobre = 0;
zle = 0;
x = 0;
odpowiedz = '';

ile_pytan = 4;

function los() {
    $('#zadanie').html('');
    //los
    pytania = ['0','1','2','3','4','5','6','7','8','9'];
    ilosc = $(pytania).length - 5;
    
// generowanie klocków
    kolejnosc = [];
    var k = Math.round(Math.random() * 3);
    kolejnosc.push(k);
    k = Math.round(Math.random() * 3);
    i = 1;
    while ($(kolejnosc).length < 4) {
        while (jQuery.inArray(k, kolejnosc) != -1) {
            k = Math.round(Math.random() * 3);

        }
        kolejnosc.push(k);
    }
   
    var x = Math.round(Math.random() * ilosc);
    $('#zadanie').html('');   
    $('#zadanie').css('padding-left','8%');   
    color_tab = ['warning','danger','success','info','primary'];
    color_los = Math.round(Math.random() * 4);
    color = color_tab[color_los];
    for (i=0;i<4;i++) {    
        $('#zadanie').append('<a class="btn btn-matzoo gradient-kropki3 btn-'+color+' s60" style="width:21%;display:block; float:left;margin:1%" id="' + kolejnosc[i] + '" onclick="oblicz(' + kolejnosc[i] + ')">'+pytania[kolejnosc[i]+x]+'</a>');
        
    }
    $('#x').val(0);
    nielicz = 0;
    
  
  // wyswietl los
  //$('#zadanie').html(x + ' · ' + y + ' = <input name="odp" type="tel" class="wyraz1" id="odp" size="1" maxlength="3" autocomplete="off" />\n\
//<input type="hidden" name="x" id="x" value="'+x+'" /><input type="hidden" name="y" id="y" value="'+y+'" />');
  $('#wynik').val(wynik);
  $('#odp').focus();

}

function oblicz(i) {

    x = parseInt($('#x').val());
    
    // jesli dobra odpowiedz
    if (x == i) {
        
        countCorrect();
        $('#zadanie').delay(500).val('');
        
        if (x != 3) {
            $('#' + x).css('opacity', '0.4');
            x = x + 1;
            $('#x').val(x);
        } else {
            los();
        }

    } // jeśli zła odpowiedź
    else {
        countWrong();
        $('#nie').fadeIn('').delay(500).fadeOut('');
        $('#zadanie').delay(500).val('');
        $('#zle_odp').fadeIn("fast");
    }
}

function klik(em) {
    $('#odp').val($(em).html());
    oblicz();
}


$(document).ready(function () {

    los();

$('#zadanie').addClass('col-sm-11');  

});

