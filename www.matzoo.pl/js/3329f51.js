dobre = 0;
zle = 0;
x = 0;
odpowiedz = '';

// --------



odpowiedzi = [
    ['Pora roku tuż po zimie','4','1'],
    ['Pora roku tuż po wiośnie','1','2'],
    ['Pora roku tuż po lecie','2','3'],
    ['Pora roku tuż po jesieni','3','4'],
    ['Pora roku tuż przed zimą','4','3'],
    ['Pora roku tuż przed wiosną','1','4'],
    ['Pora roku tuż przed latem','2','1'],
    ['Pora roku tuż przed jesienią','3','2']
    
];

ile_odpowiedzi = 4;


pliki = ['','wiosna','lato','jesien','zima'];
pory = ['','wiosna','lato','jesień','zima'];
buttons = ['','lsuccess','danger','warning','primary'];

// --------


$(document).ready(function() {

    ilosc = $(odpowiedzi).length - 1;
    iloscr = $(pliki).length - 1;    
    last = 1;
    los(last);
    $('#content20').css('padding-left','5%');
    $('#zadanie').addClass('s35');
    $('#zadanie').addClass('col-sm-11');
    $('#guziki').addClass('col-sm-11');
    
});


function los(last) {
        // generowanie klocków
        $('#zadanie').html('');
    var x = Math.round(Math.random() * ilosc);
    while (last==x) {
        x = Math.round(Math.random() * ilosc);
    }
        var y = Math.round(Math.random() * iloscr);
    $('#zadanie').html('<div>'+odpowiedzi[x][0] + '.</div>');
    //$('#zadanie').append('<div class="col-sm-2">&nbsp;</div>');
    for (i = 1; i <= ile_odpowiedzi; i++) {
        if (i!=odpowiedzi[x][1])
        $('#guziki').append('<a id="' + i + '" onclick="oblicz(' + odpowiedzi[x][2] + ',' + i + ')">\n\
<span class="btn btn-'+buttons[i]+' btn-matzoo gradient text-center s25" style="overflow: hidden;"><img class="img-responsive center-block"  src="img/kalendarz/' + pliki[i] + '.png"/>'+pory[i]+'</span></a>');
    }
    $('#zadanie').append('');
}

function oblicz(x, i) {

    if (x == i)  {
            countCorrect();
            cleanSpace();
            los();
  }
  else {   
      var statement = 'Wybrano złą odpowiedź.';
      countWrong(statement);
  }
}