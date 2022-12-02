
function los() {
$('#zadanie').html('');
co_ile=1;
ile_pytan = 3;
odpowiedzi =   ['#FFF' , '#EE0000' , '#5CB412', '#0990F7'  , '#FF8D0C'     ,'#888888','#FFE72F', '#004E8E'  ,'#724212','#AA0000','#74008C'  ,'#FF69B4','#000000'  ];
pytania  =     ['czerwony', 'zielony', 'niebieski', 'pomarańczowy', 'szary' , 'żółty' , 'brązowy','fioletowy','różowy'];
pary  =        ['czerwony', 'zielony', 'niebieski', 'pomaranczowy', 'szary' , 'zolty' , 'brazowy','fioletowy','rozowy'  ];

    
  ilosc = $(pytania).length - 1;
  
      // generowanie klocków
    bloki = wylosuj(2,ilosc);
    var x = Math.round(Math.random() * ilosc);
    while (x==bloki[0] || x==bloki[1]) x = Math.round(Math.random() * ilosc);
    bloki.push(x);
    bloki.sort();
    $('#zadanie').addClass('s35');
    $('#zadanie').html(pytania[x] + '<br><input type="hidden" name="odp" id="odp" value="1"><div style="width:10%;height:20px" class="pull-left hidden-xs">');
    for (i = 0; i < ile_pytan; i++) {
        $('#zadanie').append('<a id="' + i + '" onclick="oblicz(' + x + ',' + bloki[i] + ')" class="paddingxs2 col-sm-3 col-xs-4"><img class="img-responsive btn btn-default border5" src="img/robaczki/'+pary[bloki[i]]+(Math.round(Math.random()*1)+1)+'.png"></a>');
    }

}

 function wylosuj(ile,skad) {
    linia = Math.round(Math.random()*skad);
    linie = [];
    linie.push(linia);
    while (linie.length<ile) {
      linia = Math.round(Math.random()*skad);
      while (jQuery.inArray(linia,linie)!=-1) linia = Math.round(Math.random()*skad);
      linie.push(linia);
    }
    return linie;
 }   


function oblicz(x, i) {
    
      // jesli dobra odpowiedź
    if (x == i) {

        countCorrect();
        cleanSpace();
        los();

    } // jeśli zła odpowiedź
    else {
        statement = ' Wybrano złą odpowiedź.';
        countWrong(statement);
    }

}

function klik(em) {
  $('#odp').val($(em).html());
  oblicz();
}

$(document).ready(function(){

  los();

});

