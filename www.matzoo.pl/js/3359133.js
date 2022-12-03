

pytania = [
    'Co jest cięższe?',
    'Co jest lżejsze?',
];

ile_pytan = 2;

odpowiedzi = [
    ['slonik','szary1'],
    ['lew','fioletowy2'],
    ['kangur','3'],
    ['malpka','7'],
    ['zolw','3'],
    ['hipek','brazowy1'],
    ['slonik','4'],
    ['lew','brazowy1'],
    ['kangur','4'],
    ['malpka','fioletowy2'],
    ['zolw','brazowy1'],
    ['hipek','4'],
    ['slonik','7'],
    ['lew','6'],
    ['kangur','brazowy1'],
    ['malpka','6'],
    ['zolw','fioletowy2'],
    ['hipek','6'],
    ['5','3'],
    ['brazowy4','6'],
    ['5','4'],
    ['niebieski2','zolty2'],
    ['czerwony4','3'],
    ['brazowy3','brazowy1'],
    ['brazowy3','6'],
    ['brazowy3','3'],
    ['czerwony2','czerwony1'],
    ['brazowy4','czerwony2'],
    ['brazowy2','fioletowy1'],
    ['pomaranczowy2','niebieski1'],
    ['szary2','zielony1'],
    ['niebieski2','4'],
    ['niebieski2','rozowy2'],
    ['niebieski2','zolty4'],
    ['rozowy3','1'],
    ['czerwony2','6'],
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
    
});


function los(last) {
        // generowanie klocków
    $('#zadanie').html('');
    var x = Math.round(Math.random() * ilosc);
    while (last==x) {
        x = Math.round(Math.random() * ilosc);
    }
    var y = Math.round(Math.random() * ilosco);
    $('#zadanie').html(' <div>'+pytania[x] + '</div>');
    
       var example  = Math.round(Math.random() * 1);
       if (example==1) {
            $('#zadanie').append('<div id="0" onclick="oblicz(' + x + ',0)" class="col-xs-6 btn" style="cursor: pointer; padding: 1%;"><img class="img-responsive pull-left btn btn-default" style="border-width:5px" src="img/robaczki/' + odpowiedzi[y][0] + '.png"/></div>');
            $('#zadanie').append('<div id="1" onclick="oblicz(' + x + ',1)" class="col-xs-6 btn" style="cursor: pointer; padding: 1%;"><img class="img-responsive pull-left btn btn-default" style="border-width:5px" src="img/robaczki/' + odpowiedzi[y][1] + '.png"/></div>');
       } else {
            $('#zadanie').append('<div id="1" onclick="oblicz(' + x + ',1)" class="col-xs-6 btn" style="cursor: pointer; padding: 1%;"><img class="img-responsive pull-left btn btn-default" style="border-width:5px" src="img/robaczki/' + odpowiedzi[y][1] + '.png"/></div>');
            $('#zadanie').append('<div id="0" onclick="oblicz(' + x + ',0)" class="col-xs-6 btn" style="cursor: pointer; padding: 1%;"><img class="img-responsive pull-left btn btn-default" style="border-width:5px" src="img/robaczki/' + odpowiedzi[y][0] + '.png"/></div>');
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