dobre = 0;
zle = 0;
x = 0;
odpowiedz = '';

// --------

pytania = [
    [1,1,1],
    [3,2,3],
    [1,3,1],
    [1,2,2],
    [2,2,2],
    [2,1,1],
    [3,3,1],
    [3,2,3],
    [2,3,2],
    [1,2,3],
    [3,2,3],
    [3,3,2],
    [2,1,2],
    [1,1,2],
    [3,1,1],
    [1,2,1],
    [2,2,3],
    [3,2,1],
    [3,3,3],
    [1,1,2]
];

ile_pytan = 3;





// --------


$(document).ready(function() {

    ilosc = $(pytania).length - 1;
    
    last = 1;
    los(last);
    
    
    
    $(this).keydown(function(e){
        if (e.keyCode==13) {                
            oblicz();
            return false;
        }
      });    
  
    $('#content20').css('padding-left','10%');
    $('#zadanie').addClass('s25');
    $('#zadanie').addClass('col-sm-11');  
    
});


function los(last) {
    
    
    
    // generowanie klocków
    $('#zadanie').html('');
    var x = Math.round(Math.random() * ilosc);
    while (last==x) {
        x = Math.round(Math.random() * ilosc);
    }
    $('#zadanie').append('<div class="row center-block" style="overflow:hidden">');
    pytanie = '';
    for (i = 0; i < pytania[x].length; i++) {
        $('#zadanie').append('<div class="btn btn-default margin10"><img class="img-responsive" src="img/wzory/'+pytania[x][i]+'l.png" style="max-height:52px;margin:4px;float:left"></div>');
        pytanie = pytanie+pytania[x][i];
    }
    $('#zadanie').append('</div>');
    $('#zadanie').append('<div class="row center-block" style="overflow:hidden">');
    for (i = 0; i < pytania[x].length; i++) {
        $('#zadanie').append('<div class="btn btn-default margin10" id="w'+i+'">\n\
<img class="img-responsive" src="img/wzory/1l.png" id="w'+i+'1" style="max-height:52px;margin:4px;float:left;opacity:0;">\n\
<img class="img-responsive" src="img/wzory/2l.png" id="w'+i+'2" style="max-height:52px;margin:4px;float:left;opacity:0;position: absolute;">\n\
<img class="img-responsive" src="img/wzory/3l.png" id="w'+i+'3" style="max-height:52px;margin:4px;float:left;opacity:0;position: absolute;">\n\
</div>');
    }
    $('#zadanie').append('<br></div><input type="hidden" id="next" value="0"/><input type="hidden" id="pytanie" value="'+pytanie+'"/><input type="hidden" id="odpowiedz" value=""/>');
    
    for (i = 1; i <= ile_pytan; i++) {
        $('#zadanie').append('<div id="' + i + '" onclick="klik(' + i + ')" class="btn btn-lgrey margin10" style="width:22%;cursor: pointer; padding: 1%; border-width:5px"><img class="img-responsive center-block" src="img/wzory/' + i + 'l.png"/></div>');
    }
    $('#zadanie').append('<div id="' + i + '" onclick="klik(' + 0 + ')" class="btn btn-lgrey margin10" style="cursor: pointer; border-width: 5px; width: 13%; padding: 3%;"><img class="img-responsive center-block" src="img/lightbox-close.png"/></div>');
}

function klik(i) {

    next = $('#next').val();
    
    odpowiedz = $('#odpowiedz').val();

    if (i==0) {
        next = parseInt(next)-1;
        if (next<0) next=0;
        $('#w'+next+'1').css('opacity','0');
        $('#w'+next+'2').css('opacity','0');
        $('#w'+next+'3').css('opacity','0');
        odpowiedz = odpowiedz.substr(0,next);
    } else {
        if (next<5) {
            $('#w'+next+''+i).css('opacity','1');
            next = parseInt(next)+1;
            odpowiedz = odpowiedz+i;
        }
    }

    $('#next').val(next);
    $('#odpowiedz').val(odpowiedz);
    

    
}


function oblicz() {
    
    pytanie = $('#pytanie').val();
    odpowiedz = $('#odpowiedz').val();

    if (pytanie == odpowiedz)
        ok = 1;
    else
        ok = 0;

  
  if(ok==1) {
            countCorrect();
            cleanSpace();
            los();
  }
  else {   
      var statement = 'Ułożono inny wzór.';
      countWrong(statement);
  }
}