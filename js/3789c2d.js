const limit = 12;

function los() {

    let x = Math.round(Math.random() * limit);
    //poprzednie
    previous = $('#previous').val();
    previous_tab = previous.split(';');
        
    if ((previous_tab.length)>=13) { previous = ''; previous_tab = ''; }
    this_example = x.toString();
    while (previous_tab && jQuery.inArray(this_example,previous_tab)!=-1) {
        x = Math.round(Math.random() * limit);
        this_example = x.toString();
    }    
    $('#previous').val(previous+this_example+';');    
  
  
  $('#zadanie').html('Ile osi symetrii ma ');
    if(x==1) {$('#zadanie').append('kwadrat'); wynik=4;}
    else if(x==2) {$('#zadanie').append('każdy trójkąt równoramienny'); wynik=1;}
    else if(x==3) {$('#zadanie').append('deltoid'); wynik=1;}
    else if(x==4) {$('#zadanie').append('odcinek'); wynik=2;}
    else if(x==5) {$('#zadanie').append('każdy romb'); wynik=2;}
    else if(x==6) {$('#zadanie').append('trapez równoramienny'); wynik=1;}
    else if(x==7) {$('#zadanie').append('prosta'); wynik='666';}
    else if(x==8) {$('#zadanie').append('trójkąt równoboczny'); wynik=3;}
    else if(x==9) {$('#zadanie').append('koło'); wynik='666';}
    else if(x==10) {$('#zadanie').append('okrąg'); wynik='666';}
    else if(x==11) {$('#zadanie').append('punkt'); wynik='666';}
    else if(x==12) {$('#zadanie').append('prostokąt, który nie jest kwadratem'); wynik=2;}
    else {$('#zadanie').append('trójkąt różnoboczny'); wynik=0;}
 $('#zadanie').append('?<br>');
  for (i=0;i<5;i++)
    $('#zadanie').append('<input name="odp" type="hidden" id="odp" size="1" maxlength="2" autocomplete="off" /><span class="s25 btn btn-matzoo33 btn-lsuccess margin10 text-black" onclick="klik(\''+i+'\','+wynik+')">&nbsp;'+i+'&nbsp;</span>');
    $('#zadanie').append('<span class="s25 btn btn-matzoo btn-lsuccess text-black" onclick="klik(\'666\','+wynik+')">'+'nieskończenie wiele'+'</span><input type="hidden" id="odp" name="odp"/>');

  $('#wynik').val(wynik);

  
}


function oblicz(em,wynik){
    if (checkEmpty()) return false;
   

  // jesli dobra odpowiedz
  if(parseInt(em)==parseInt(wynik)) {
  
    countCorrect();
            cleanSpace();
            los();
    
  }
  else {    
      countWrong('');
            
  }


}

function klik(em,wynik) {
    $('#odp').val(em);
  oblicz(em,wynik);
}

$(document).ready(function(){
    
    $('#zadanie').css('text-align','center');
    $('#zadanie').addClass('s21');
    $('#zadanie').addClass('tekstowe');
 
  los();


});

