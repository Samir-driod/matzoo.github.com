
function los() {
    
  
        // los
        
        var example = Math.round(Math.random() * 2) + 1;
        if (example == 1) {
            a = (Math.round(Math.random() * 9) + 1) * 100;
        } else if (example == 2) {
            a = a * 2;
        } else if (example == 3) {
            a = Math.round(Math.random() * 98) + 2;
        }

  
  var a = Math.round(Math.random() * 22) + 1;
  var b = (Math.round(Math.random() * 4) + 1) * 10;
  var c = Math.round(Math.random() * 22) + 1;
  var e = (Math.round(Math.random() * 4) + 1) * 10;
  

  while(a>=c || a>=c+1 || c-a>5) {
  a = Math.round(Math.random() * 22) + 1;
  c = Math.round(Math.random() * 22) + 1;
  }

var wynik = (c-a)*60;
if (e>=b) {
  wynik = wynik+ e-b;
} else {
  wynik = wynik-60+e+(60-b);
}


  if (b<10) b='0'+b;
  if (e<10) e='0'+e;

  
  var godzin = Math.floor(wynik/60);
  var minut = wynik-(godzin*60);        
        
   


        
        // wyswietl los
        $('#zadanie').html('<p class="tekstowe" style="text-align:center">Oblicz, ile czasu minęło <br/>od godziny <b class="btn-matzoo padding0 margin0">' + a + ':' + b + '</b> do godziny <b class="btn-matzoo padding0 margin0">' + c + ':' + e + '</b>.<br><br><span class="wyrazmn dblue">Minęło: <input name="odp" type="tel" id="odp" size="3" maxlength="5" autocomplete="off" /> godzin i <input name="odp2" id="odp2" type="tel" id="odp" size="3" maxlength="5" autocomplete="off" /> minut.</span></p>\n\
    <input type="hidden" name="a" id="a" value="' + a + '" /><input type="hidden" name="b" id="b" value="' + b + '" /><input type="hidden" name="c" id="c" value="' + c + '" /><input type="hidden" name="e" id="e" value="' + e + '" /><input type="hidden" id="g" name="godzin" value="'+godzin+'" /><input type="hidden" id="m" name="minut" value="'+minut+'" />');
        $('#wynik').val(godzin);
        $('#wynik2').val(minut);
        $('#odp').focus();        

}


function createStatement() {
    // tworzenie poprawnej odpowiedzi systemowej
    a = ($('#a').val());
    b = ($('#b').val());
    c = ($('#c').val());
    e = ($('#e').val());
    godzin = ($('#g').val());
    minut = ($('#m').val());
    wyn = ($('#wynik').val());
    if (godzin=='1') var napisg = ' godzina';
      else if (godzin>='2' && godzin<='4') napisg = ' godziny';
      else napisg = ' godzin';
      if (minut=='1') napis = ' minuta';
      else if (minut>='2' && minut<='4') napis = ' minuty';
      else napis = ' minut';
    var statement = 'Pomiędzy ' + a + ':' + b + ' a ' + c + ':' + e + ' minęło: ' + godzin + ' '+napisg+' i ' + minut + ' '+napis+'.  <span class="s15 pull-right black" style="font-family: ">wpisano: ' + $('#odp').val() + ' godzin i ' + $('#odp2').val() + ' minut</span>';
    return statement;
}


$(document).ready(function () {
    los();
    keyboardEnter(1);
    $('#zle_odp').addClass('wrong3');
});