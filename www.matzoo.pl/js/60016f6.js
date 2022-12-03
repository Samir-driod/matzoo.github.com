function los() {
    
    var example = Math.round(Math.random() * 1);
    var x = Math.round(Math.random()*39)+1;
    
    if (example==1) { // złożona wśród pierwszych
        var tekst = 'złożoną';
        var liczby = [];
        var podz = [];
        var jest = 0;
        while (liczby.length<4) {
            x = Math.round(Math.random()*39)+1;
            var wynik='1';
            if (x==2) {
                wynik = 'pierwsza';
            } else {    
                for (i = 2; i < x; i++) {
                  if (x%i == 0) {
                    wynik = 'złożona';
                    break;
                  }
                  else
                    wynik = 'pierwsza';
                }
            }
            if (wynik=='złożona' && jest!=1) {
                if (jQuery.inArray(x,liczby)===-1) {
                    liczby.push(x);
                    podz=x;
                    jest = 1;                
                }                
            } else if (wynik=='pierwsza') {
                if (jQuery.inArray(x,liczby)===-1 && (liczby.length<3 || jest==1)) liczby.push(x);                
            }
        }
        liczby.sort(sortNumber);
        
    } else { // pierwsza wśród złożonych
        var tekst = 'pierwszą';
        var liczby = [];
        var podz = [];
        var jest = 0;
        while (liczby.length<4) {
            x = Math.round(Math.random()*39)+10;
            var wynik='1';
            if (x==2) {
                wynik = 'pierwsza';
            } else {    
                for (i = 2; i < x; i++) {
                  if (x%i == 0) {
                    wynik = 'złożona';
                    break;
                  }
                  else
                    wynik = 'pierwsza';
                }
            }
            if (wynik=='pierwsza' && jest!=1) {
                if (jQuery.inArray(x,liczby)===-1) {
                    liczby.push(x);
                    podz=x;
                    jest = 1;                
                }                
            } else if (wynik=='złożona') {
                if (jQuery.inArray(x,liczby)===-1 && (liczby.length<3 || jest==1)) liczby.push(x);                
            }
        }
        liczby.sort(sortNumber);
        
    }



    var wynik = 1;

    // wyswietl los
    $('#zadanie').html('Wskaż liczbę '+tekst+'.');
    $('#wynik').val(wynik);
    for (i = 0; i < 4; i++)
        if (podz == liczby[i])
            $('#guziki').append('<span class="btn btn-primary btn-matzoo33 gradient s50 text-white" onclick="oblicz(1)">' + liczby[i] + '</span>');
        else
            $('#guziki').append('<span class="btn btn-primary btn-matzoo33 gradient s50 text-white" onclick="klik(this)">' + liczby[i] + '</span>');
}


function oblicz(em) {

    // jesli dobra odpowiedź
    if (em == 1) {

        countCorrect();
        cleanSpace();
        los();

    } // jeśli zła odpowiedź
    else {
        
        countWrong();
    }
}

function klik(em) {
    $('#odp').val($(em).html());
    oblicz();
}


$(document).ready(function () {

    $('#zadanie').removeClass('wyraz1');
    $('#zadanie').addClass('wyrazm');
    los();

});