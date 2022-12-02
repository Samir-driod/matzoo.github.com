dobre = 0;
zle = 0;

x = 0;
exam = 0;
wpisal = '';


// --------

 function wylosuj(ile,skad) {
     
    linia = Math.round(Math.random()*skad)+1;
    linie = [];
    linie.push(linia);
    while (linie.length<ile) {
      linia = Math.round(Math.random()*skad)+1;
      while (jQuery.inArray(linia,linie)!=-1) linia = Math.round(Math.random()*skad)+1;
      linie.push(linia);
    }
    return linie;
 }    
// --------

function createStatement() {
}


$(document).ready(function() {
    
    $('#zadanie').addClass('col-sm-11');  
    $('#zadanie').addClass('wyrazm');  
    $('#zadanie').addClass('s40');  
    ilosc = 16;
    
    los();
    keyboardEnter();

});


function los() {
  // los
  var a = Math.round(Math.random()*15)+5;
  var atr = Math.round(Math.random()*15)+2;
  var f = Math.round(Math.random()*99)+100;
  var zmienna = Math.round(Math.random()*20)-10;
  var zmienna2 = Math.round(Math.random()*20)-10;
  var e = Math.round(Math.random()*9)+2;
  var g = Math.round(Math.random()*4)+2;
  var h = Math.round(Math.random()*4)+2;
  var i = Math.round(Math.random()*4)+2;
  var j = Math.round(Math.random()*4)+2;
  var c = Math.round(Math.random()*5)*100;
  var b = Math.round(Math.random()*9);
  var litery = ['a','b','x','y','k','c','z','n','p','d'];
  b = litery[b];
  var example = Math.round(Math.random()*8);

example=0;

  if (example==8) {
    var tresc = '<b>'+g+'x+'+h+'y<sup>2</sup></b> &nbsp;<span class="s30 white">dla &nbsp; </span> <b>x='+zmienna+'</b> <span class="s30 white">i</span> <b>y='+zmienna2+'</b>';
    var wynik = (g*zmienna)+(h*zmienna2*zmienna2);
    
  }
  else if (example==7){
    var tresc = '<b>x<sup>2</sup>+'+h+'y</b> &nbsp;<span class="s30 white">dla &nbsp; </span> <b>x='+zmienna+'</b> <span class="s30 white">i</span> <b>y='+zmienna2+'</b>';
    var wynik = (zmienna*zmienna)+(h*zmienna2);
  
  }
  
  else if (example==6){
    var tresc = '<b>x<sup>2</sup>-y</b> &nbsp;<span class="s30 white">dla &nbsp; </span> <b>x='+zmienna+'</b> <span class="s30 white">i</span> <b>y='+zmienna2+'</b>';
    var wynik = (zmienna*zmienna)-zmienna2;
  }
  
  else  if (example==0) {
        zmienna = Math.round(Math.random()*4)-4;
        zmienna2 = Math.round(Math.random()*4)-4;
        e = Math.round(Math.random()*4)+2;
        g = Math.round(Math.random()*4)+2;
        h = Math.round(Math.random()*4)+2;
        i = Math.round(Math.random()*4)+2;
        j = Math.round(Math.random()*4)+2;      
      g = 2*j;
      h=3*i;
    var wynik = parseInt((g*zmienna)+(h*zmienna2))/parseInt((i*zmienna)+(j));      
  
  //  while (Math.round(wynik)!=wynik) {
    while (Math.round(wynik)!=wynik || (parseInt((i*zmienna)+(j))==0)) {
        zmienna = Math.round(Math.random()*4)-4;
        zmienna2 = Math.round(Math.random()*4)-4;
        e = Math.round(Math.random()*4)+2;
        g = Math.round(Math.random()*4)+2;
        h = Math.round(Math.random()*4)+2;
        i = Math.round(Math.random()*4)+2;
        j = Math.round(Math.random()*4)+2;
      g = 2*j;
      h=3*i;
     var wynik = parseInt((g*zmienna)+(h*zmienna2))/parseInt((i*zmienna)+(j));        
    }
          
//      g=12; h=9;
//      i = 3; j=6;
//      zmienna = -2; zmienna2 = -3;
    
    
    var tresc = '<table style=\'margin:0 auto;\' class=s35><tr><td class=linia-new>'+g+'x+'+h+'y</td></tr><tr><td>'+i+'x+'+j+'</td></tr></table>  &nbsp;<span class="s30 dblue">dla &nbsp; </span> <b>x='+zmienna+'</b> <span class="s30 white">i</span> <b>y='+zmienna2+'</b>';
  //  tresc = tresc+'<br>g '+parseInt((g*zmienna)+(h*zmienna2))+' d '+parseInt((i*zmienna)+(j))+' w '+wynik+' '+Math.round(wynik);
    
  }
  else if (example==3) {
  var tresc = '<b>'+g+'x-'+h+'y-'+e+'</b> &nbsp;<span class="s30 white">dla &nbsp; </span> <b>x='+zmienna+'</b> <span class="s30 white">i</span> <b>y='+zmienna2+'</b>';
    var wynik = (g*zmienna)-(h*zmienna2)-e;
    
  }
  else if (example==4) {
  var tresc = '<b>'+g+'x-'+h+'y+'+e+'</b> &nbsp;<span class="s30 white">dla &nbsp; </span> <b>x='+zmienna+'</b> <span class="s30 white">i</span> <b>y='+zmienna2+'</b>';
    var wynik = (g*zmienna)-(h*zmienna2)+e;
    
  }
  else if (example==5) {
  var tresc = '<b>'+g+'x+'+h+'y+'+e+'</b> &nbsp;<span class="s30 white">dla &nbsp; </span> <b>x='+zmienna+'</b> <span class="s30 white">i</span> <b>y='+zmienna2+'</b>';
    var wynik = (g*zmienna)+(h*zmienna2)+e;
    
  }
  else if (example==1){
  
  var tresc = '<b>'+g+'x-'+h+'y</b> &nbsp;<span class="s30 white">dla &nbsp; </span> <b>x='+zmienna+'</b> <span class="s30 white">i</span> <b>y='+zmienna2+'</b>';
    var wynik = (g*zmienna)-(h*zmienna2);
  }
  else if (example==2){
  
  var tresc = '<b>'+g+'x+'+h+'y</b> &nbsp;<span class="s30 white">dla &nbsp; </span> <b>x='+zmienna+'</b> <span class="s30 white">i</span> <b>y='+zmienna2+'</b>';
    var wynik = (g*zmienna)+(h*zmienna2);
  }

  
  // wyswietl los

  $('#zadanie').html(tresc + '<br/><input name="odp3" type="tel" style="opacity:0;float:left" id="odp3" size="1" maxlength="2" /><input name="odp" type="tel" class="s40" id="odp" size="4" maxlength="6" autocomplete="off" /><input name="odp2" type="tel" style="opacity:0;float:right" id="odp2" size="1" maxlength="2" /><br/>');
  $('#wynik').val(wynik);
  $('#odp').focus();

}




