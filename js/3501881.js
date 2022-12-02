dobre = 0;
wszystkie = 0;
x = 0;
odpowiedz = '';

// --------

pytania = [
    'prawo',
    'lewo',
    'góra',
    'dół',
];

ile_pytan = 4;

odpowiedzi = [
    'prawo',
    'lewo',
    'gora',
    'dol',
];

robaczki = ['a','b','c','d'];
robaczki2 = ['g','h','i','j'];

// --------


$(document).ready(function() {

    ilosc = $(pytania).length - 1;
    iloscr = $(robaczki).length - 1;    
    last = 1;
    los(last);
    $('#content20').css('padding-left','5%');
    $('#zadanie').addClass('s15');
    $('#zadanie').addClass('col-sm-11');
    
});


function los(last) {
        // generowanie klocków
        $('#zadanie').html('');
    var x = Math.round(Math.random() * ilosc)+1;
    while (last==x) {
        x = Math.round(Math.random() * ilosc);
    }
        var y = Math.round(Math.random() * iloscr);
        var y2 = Math.round(Math.random() * iloscr);
        while (y==y2) {
            y2 = Math.round(Math.random() * iloscr);
        }
        
    $('#zadanie').html('');
    
    var example = Math.round(Math.random() * 1);
        //example=0;
    if (example==1) {
        for (i = 1; i <= ile_pytan; i++) {
            if (i==x) {
                $('#zadanie').append('<div id="' + i + '" onclick="oblicz(' + x + ',' + i + ')" class="btn" style="cursor: pointer; padding: 1%;"><img class="img-responsive pull-left btn btn-default" style="border-width:0px" src="img/wzory/' + i +'' + robaczki[y2] + '.png"/></div>');
            } else {
                $('#zadanie').append('<div id="' + i + '" onclick="oblicz(' + x + ',' + i + ')" class="btn" style="cursor: pointer; padding: 1%;"><img class="img-responsive pull-left btn btn-default" style="border-width:0px" src="img/wzory/' + i +'' + robaczki[y] + '.png"/></div>');
            }
        }    
    } else {
        for (i = 1; i <= ile_pytan; i++) {
            if (i==x) {
                $('#zadanie').append('<div id="' + i + '" onclick="oblicz(' + x + ',' + i + ')" class="btn" style="cursor: pointer; padding: 1%;"><img class="img-responsive pull-left btn btn-default" style="border-width:0px" src="img/wzory/' + i +'' + robaczki2[y2] + '.png"/></div>');
            } else {
                $('#zadanie').append('<div id="' + i + '" onclick="oblicz(' + x + ',' + i + ')" class="btn" style="cursor: pointer; padding: 1%;"><img class="img-responsive pull-left btn btn-default" style="border-width:0px" src="img/wzory/' + i +'' + robaczki2[y] + '.png"/></div>');
            }
        }    
    }
    
    
    $('#zadanie').append('<p>&nbsp;</p>');
}


function oblicz(x, i) {

    if (x == i)
        ok = 1;
    else
        ok = 0;

     if(ok==1) {
            countCorrect();
            cleanSpace();
            los();
  }
  else {   
      var statement = 'Wybrano zły element.';
      countWrong(statement);
  }
}