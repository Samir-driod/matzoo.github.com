limit = 23;

const temperature = ['-14','-13','-11','-7','-6','-4','0','2','5','8','10','12','15','16','19','20','22','23','24','25','26','27','28','30'];
const temperaturePresentation = ['14 stopni mrozu','13 stopni mrozu','11 stopni mrozu','7 stopni mrozu','6 stopni mrozu','4 stopnie mrozu',
    '0 stopni','2 stopnie','5 stopni','8 stopni','10 stopni','12 stopni','15 stopni','16 stopni','19 stopni','20 stopni','22 stopnie',
    '23 stopnie','24 stopnie','25 stopni','26 stopni','27 stopni','28 stopni','30 stopni'];

function los() {

    // los
    $('#zadanie').html('');
    let  x = Math.round(Math.random() * limit);

    // previous examples
    let previous = $('#previous').val();
    let previous_tab = previous.split(';');

    if ((previous_tab.length)>=20) { previous = ''; previous_tab = ''; }
    let this_example = x.toString();
    while (previous_tab && jQuery.inArray(this_example,previous_tab)!=-1) {
        x = Math.round(Math.random() * limit);
        this_example = x.toString();
    }
    //console.log(previous_tab+' '+previous_tab.length);
    $('#previous').val(previous+this_example+';');

    let wynik = temperaturePresentation[x];

    // wyswietl los
    $('#guziki').html('<img src="img/spr3/temp/' + temperature[x] + '.png" alt="" class="pull-left" style="margin-left:15%;max-width:25%" />');
    $('#guziki').addClass('col-md-10');
    $('#wynik').val(wynik);

    let tab = [];
    tab[0] = x;

    for (let i=1; i<4; i++) {
        let xn = Math.round(Math.random()*limit);
        while (xn==tab[i-1]) xn = Math.round(Math.random()*limit);
        if (i==2) while (xn==tab[i-2] || xn==tab[i-1]) xn = Math.round(Math.random()*limit);
        if (i==3) while (xn==tab[i-3] || xn==tab[i-2] || xn==tab[i-1]) xn = Math.round(Math.random()*limit);
        tab[i]=xn;
    }
    tab.sort(sortNumber);
  
    for (i=0;i<4;i++) {
        tab[i]=temperaturePresentation[tab[i]];
    }
    // show task
    $('#guziki').append('<br class="hidden-xs">');
    for (let i=0; i<4; i++) {
        $('#guziki').append('<div class="margin10 btn-matzoo btn btn-danger s19" onclick="oblicz(\''+wynik+'\',\'' + tab[i] + '\')">' + tab[i] + '</span>');
        if (i==1) $('#guziki').append('<br>');
    }    
    
    

}


function oblicz(x, i) {

    if (x === i)
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


$(document).ready(function () {

    los();

});