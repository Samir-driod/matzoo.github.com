sek = '00';
min = '02'; 
function los() {
  // los
  var x = Math.round(Math.random()*10);
  var y = Math.round(Math.random()*10);
  var wynik = x*y;
  
  // wyswietl los
  $('#zadanie').html('<p class="margin18">'+x + ' · ' + y + ' = <input name="odp" type="tel" class="wyraz1" id="odp" size="1" autocomplete="off" maxlength="3" style="margin:8px" /></p>');
  $('#wynik').val(wynik);
  $('#x').val(x);
  $('#y').val(y);
  $('#odp').focus();

}

    function oblicz(points){

////  zapis do bazy
//
//        $.ajax({
//            type: "POST",
//            url: "web/ajax_tabliczka.php",
//            data: "class_id=" + $('#klasa_id').val() + "&task_id=" + 249 + "&x=" + $('#x').val() + "&y=" + $('#y').val() + "&odp=" + $('#odp').val() + "&user_id=" + $('#user_id').val() + "&game_id=" + $('#game_id').val() + "&exampl_time=" + $('#example_time').val() + ""            
//        });     
////  end zapis  
    milisecond = 0;
    //const myMClock = setInterval(miliclock, 100);

        if (!points) points = 1;


        if($('#odp').val()==$('#wynik').val()) {
            $('#tresc').hide();
            $('#zle').hide();
            $('#dobrze').hide();
            $('#dobrze').fadeIn("slow");
            dobre = dobre +points;
        }
        else {
            $('#tresc').hide();
            $('#dobrze').hide();
            $('#zle').hide();
            $('#zle').fadeIn("slow");
            $('#odp').val('');
            if (dobre!=0) dobre=dobre-points;
        }

      


        los();
        $('input[name=odp]').focus();
        $('.ok').html(dobre);
        $('#punktow').val(dobre);
        return (dobre);

    }



function start_click() {
    gameTimer = window.setInterval("executeTimer()", 1000);
    los();
}


function executeTimer()
{
   sek = parseInt(sek);
   min = parseInt(min);
  
  if (sek > 0 || min >0)
  {
    if (sek > 0) {

      sek = sek - 1;
      if (sek < 10) {
        $("#sec").text('0'+sek);
      }
      else {
        $("#sec").text(sek);
      }
      return false;
    }
    else {
      min = min - 1;
      sek = 59;
      $("#min").text('0'+min);
      $("#sec").text(sek);
    }
  }
  else {
    $('#zle').hide();
    $('#dobrze').hide();
    window.clearInterval(gameTimer);
    $('.okk').html(dobre);
    done = 1;
    $.ajax({
        type: "POST",
        url: "/web/249.php",
        data: "score=" + dobre + ""
    });       
    $('#answer').hide();
    $('#zadanie').removeClass('wyraz1');
    $('#zadanie').html($('#koniec').html());
    clearInterval();
  }
  
}



function walidacja() {

  // walidacja email w newsletterze

if ($('input[name=user_login]').val()=='') {
    alert('Uzupełnij swoje imię i nazwisko');
    $('input[name=adres]').addClass('ired');
    $('input[name=adres]').focus();
    return false;
  }
  
  else {
   $('#ranking').submit();
    return true;
  }
  


}



   dobre = 0;
   done = 0; 

$(document).ready(function(){
   dobre = 0;
   done = 0; 
  $(this).keydown(function(e){
      points = parseInt($('#task_points').val());
    if (e.keyCode==13 && done==0) oblicz(points);
  });

wynik = 1000;

    $('#game_id').val(Math.round(Math.random() * 9999999) + 1000000);
    const myMClock = setInterval(miliclock, 100);
});


let milisecond = 0;

const miliclock = () => {

    milisecond = parseInt(milisecond)+1;
    
    document.querySelector('#example_time').value = `${milisecond}`;
}