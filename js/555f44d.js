limit = 20;
function los() {

    // los
    var x = Math.round(Math.random() * 18)+1;
    var wynik = 20 - x;
    var tresc = '';
    
            for (i = 1; i <= 20 ; i++) {
         if (i<=x)   tresc = tresc+'<td style="border: 3px solid #DDD;"><span>❤</span></td>';
         else    tresc = tresc+'<td style="border: 3px solid #DDD;"><span style="opacity:0">❤</span></td>';
            if (i===10) tresc = tresc+'</tr><tr>';
        }
        var kolors = ['#D2232A','#CD148C','#993F97','#624097','#005FAC','#01A99A','#38B34B','#8DC96F','#FFDD00','#FDB316','#F16B22'];
        var kolor = kolors[(Math.round(Math.random() * 10))];

    // wyswietl los
    $('#zadanie').html('');
    $('#zadanie').append('<table class="table table-bordered s30 table-condensed" style="width:50%;min-width:100px;margin:0 auto;line-height:100%;color:'+kolor+'"><tr>'+tresc+'</table>');
    $('#wynik').val(wynik);
    $('#guziki').append('<div class=pull-left><nobr>');
    for (i = 1; i <= 19 ; i++) {
        $('#guziki').append('<span class="btn btn-info btn-matzoo gradient-kropki3 s25" onclick="klik(this)" style="min-width:5%">' + i + '</span>');
        //if (i==5) $('#guziki').append('</nobr></div><div class=pull-left><nobr>');
    }
    $('#guziki').append('</nobr></div>');    

}


function oblicz() {

    // jesli dobra odpowiedź
    if ($('#odp').val() == $('#wynik').val()) {

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

    los();

});