dobre = 0;
zle = 0;
x = 0;
odpowiedz = '';

// --------

pytania = [
    [1,1,1,1,1,1,1,1,1,1],
    [3,2,3,2,3,2,3,2,3,2],
    [1,3,1,3,1,3,1,3,1,3],
    [1,2,2,2,2,1,2,2,2,2],
    [2,2,2,1,3,2,2,2,1,3],
    [2,1,1,1,2,1,1,1,2,1],
    [3,3,1,1,2,2,3,3,1,1],
    [3,2,3,2,3,2,3,2,3,2],
    [2,2,2,1,1,1,2,2,2,1],
    [1,2,3,1,2,3,1,2,3,1],
    [3,2,3,1,3,2,3,1,3,2],
    [3,3,2,1,3,3,2,1,3,3],
    [2,1,2,1,2,1,2,1,2,1],
    [1,1,2,2,3,3,1,1,2,2],
    [1,1,1,2,3,3,1,1,1,2],
    [1,2,1,2,1,2,1,2,1,2],
    [2,2,3,2,2,3,2,2,3,2],
    [3,2,1,3,2,1,3,2,1,3],
    [3,3,3,2,3,3,3,2,3,3],
    [1,1,2,2,3,1,1,2,2,3]
];

ile_pytan = 3;

odpowiedzi = [
    1,
    3,
    1,
    1,
    2,
    1,
    2,
    3,
    1,
    2,
    3,
    2,
    2,
    3,
    3,
    1,
    2,
    2,
    3,
    1
];



// --------


$(document).ready(function() {

    ilosc = $(pytania).length - 1;
    
    last = 1;
    los(last);
    $('#content20').css('padding-left','10%');
    
});


function los(last) {
    
        // generowanie klocków
        $('#zadanie').html('');
    var x = Math.round(Math.random() * ilosc);
    while (last==x) {
        x = Math.round(Math.random() * ilosc);
    }
    $('#zadanie').append('<div class="row" style="overflow:hidden">');
    for (i = 0; i < pytania[x].length; i++) {
        $('#zadanie').append('<img class="img-responsive" src="img/wzory/'+pytania[x][i]+'.png" style="max-height:46px;margin:3px;float:left">');
    }
    $('#zadanie').append('<br></div>');
    
    for (i = 1; i <= ile_pytan; i++) {
        $('#zadanie').append('<div id="' + i + '" onclick="oblicz(' + odpowiedzi[x] + ',' + i + ')" class="btn btn-lgrey margin10" style="width:22%;cursor: pointer; padding: 1%; border-width:5px"><img class="img-responsive center-block" src="img/wzory/' + i + '.png"/></div>');
    }
    $('#zadanie').append('<p class="s25">&nbsp;</p>');
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
      var statement = 'Wybrano złą odpowiedź.';
      countWrong(statement);
  }
}