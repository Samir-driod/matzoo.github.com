function createStatement() {
}


$(document).ready(function() {
    
    $('#zadanie').addClass('col-sm-11');  
    $('#zadanie').addClass('wyrazm');  
    $('#zadanie').addClass('s40');  
    ilosc = 16;
    
    los();
    keyboardEnter(0);

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
  var c = Math.round(Math.random()*5)*100;
  var b = Math.round(Math.random()*9);
  var litery = ['a','b','x','y','k','c','z','n','p','d'];
  b = litery[b];
  var example = Math.round(Math.random()*5);


  
  if (example==0) {
  var tresc = '<b>'+g+'x+'+h+'y-'+e+'</b> &nbsp;<span class="s30 white">dla &nbsp; </span> <b>x='+zmienna+'</b> <span class="s30 white">i</span> <b>y='+zmienna2+'</b>';
    var wynik = (g*zmienna)+(h*zmienna2)-e;
    
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
//    else if (example==2){
//      var tresc = '<b>'+g+'(x-'+h+'y)</b> &nbsp;<span class="s30 white">dla &nbsp; </span> <b>x='+zmienna+'</b> <span class="s30 white">i</span> <b>y='+zmienna2+'</b>';
//      var wynik = g*(zmienna-(h*zmienna2));
//    }
//    else if (example==3){
//      var tresc = '<b>'+g+'(x+y)</b> &nbsp;<span class="s30 white">dla &nbsp; </span> <b>x='+zmienna+'</b> <span class="s30 white">i</span> <b>y='+zmienna2+'</b>';
//      var wynik = g*(zmienna+zmienna2);
//    }
  
  

  
  // wyswietl los
  $('#zadanie').html(tresc + '<br/><input name="odp3" type="tel" style="opacity:0;float:left" id="odp3" size="1" maxlength="2" /><input name="odp" type="tel" class="s40" id="odp" size="4" maxlength="6" autocomplete="off" /><input name="odp2" type="tel" style="opacity:0;float:right" id="odp2" size="1" maxlength="2" /><br/>');
  $('#wynik').val(wynik);
  $('#odp').focus();

}




