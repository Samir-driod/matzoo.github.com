

pytania = [
    'Czego jest <span class="text-success">więcej</span>?',
    'Czego jest  <span class="text-primary">mniej</span>?',
];

ile_pytan = 2;

odpowiedzi = [
    ['5','2'],
    ['5','7'],
    ['5','4'],
    ['niebieski2','niebieski1'],
    ['czerwony4','3'],
    ['brazowy3','brazowy1'],
    ['brazowy3','czerwony2'],
    ['brazowy3','3'],
    ['czerwony2','czerwony1'],
    ['brazowy4','czerwony2'],
    ['brazowy2','fioletowy1'],
    ['pomaranczowy2','niebieski1'],
    ['szary2','szary1'],
    ['niebieski2','4'],
    ['niebieski2','rozowy2'],
    ['niebieski2','zielony3'],
    ['rozowy3','1'],
    ['czerwony2','czerwony1'],
    ['zielony2','8'],
    ['czerwony4','fioletowy2']
    
];


// --------


$(document).ready(function() {

    ilosc = $(pytania).length - 1;
    ilosco = $(odpowiedzi).length - 1;    
    last = 1;
    los(last);
    $('#content20').css('padding-left','5%');
    $('#zadanie').addClass('s45');
    $('#zadanie').addClass('col-sm-11');    
    
});


function los(last) {
        // generowanie klocków
    $('#zadanie').html('');
    var x = Math.round(Math.random() * ilosc);
    var a = Math.round(Math.random() * 7)+1;
    var b = Math.round(Math.random() * 7)+1;
    while (last==x) {
        x = Math.round(Math.random() * ilosc);
    }
    var y = Math.round(Math.random() * ilosco);
    $('#zadanie').html(' <div>'+pytania[x] + '</div>');
    
    if (x==0) {
        if (a==b) odp = 2; 
        else if (a>b) odp = 0; 
        else odp = 1;
    } else {
        if (a==b) odp = 2; 
        else if (a>b) odp = 1; 
        else odp = 0;
    }
    
    tresc = '<div class="row">';
       var example  = Math.round(Math.random() * 1);
       example=1;
       if (example==1) {
            tresc = tresc+'<div class="row">';
            for (i=0;i<a;i++) {
                tresc = tresc+'<img class="img-responsive pull-left btn" style="max-width:90px" src="img/robaczki/' + odpowiedzi[y][0] + '.png"/>';
            }
            tresc = tresc+'</div>';

        tresc = tresc+'<div class="row">';
            for (i=0;i<b;i++) {
                tresc = tresc+'<img class="img-responsive pull-left btn" style="max-width:90px" src="img/robaczki/' + odpowiedzi[y][1] + '.png"/>';
            }
            tresc = tresc+'</div>';
            tresc = tresc+'</div>';
            
         tresc = tresc+'<div class="row">\n\
 <div id="0" class="btn btn-lsuccess gradient-kropki3" onclick="oblicz(' + odp + ',0)"><img class="img-responsive pull-left btn" style="max-width:120px" src="img/robaczki/' + odpowiedzi[y][0] + '.png"/></div>\n\
 <div id="1" class="btn btn-lsuccess gradient-kropki3" onclick="oblicz(' + odp + ',1)"><img class="img-responsive pull-left btn" style="max-width:120px" src="img/robaczki/' + odpowiedzi[y][1] + '.png"/></div>\n\
 <div id="1" class="btn btn-lsuccess gradient-kropki3 s35 text-black" onclick="oblicz(' + odp + ',2)" style="padding: 10px; line-height: 100px;">tyle samo</div>\n\
 </div>';
                            
            
       } else {
           
       tresc = tresc+'<div class="row">';
            for (i=0;i<b;i++) {
                tresc = tresc+'<img class="img-responsive pull-left btn" style="max-width:90px" src="img/robaczki/' + odpowiedzi[y][1] + '.png"/>';
            }
            tresc = tresc+'</div>';           
           
           tresc = tresc+'<div class="row">';
            for (i=0;i<a;i++) {
                tresc = tresc+'<img class="img-responsive pull-left btn" style="max-width:90px" src="img/robaczki/' + odpowiedzi[y][0] + '.png"/>';
            }
            tresc = tresc+'</div>';
            tresc = tresc+'</div>';

            
         tresc = tresc+'<div>\n\
 <div id="1" class="btn btn-lsuccess gradient-kropki3" onclick="oblicz(' + odp + ',1)"><img class="img-responsive pull-left btn" style="max-width:120px" src="img/robaczki/' + odpowiedzi[y][1] + '.png"/></div>\n\
 <div id="0" class="btn btn-lsuccess gradient-kropki3" onclick="oblicz(' + odp + ',0)"><img class="img-responsive pull-left btn" style="max-width:120px" src="img/robaczki/' + odpowiedzi[y][0] + '.png"/></div>\n\
 <div id="1" class="btn btn-lsuccess gradient-kropki3 s35 text-black" onclick="oblicz(' + odp + ',2)" style="padding: 10px; line-height: 100px;">tyle samo</div>\n\
 </div>';       }
    
    $('#zadanie').append(tresc);
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