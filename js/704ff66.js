
function los() {

  // los
  $('#zadanie').html('');  
  
  var figura =    ['k','k','k','k','k','k','k','k','k','t','t','t','t','w','w','w','w','w','w','w','w','w','p', 'p','p','p', 'p', 'p','p','p', 'p', 'p', 'p', 'p','','','','','','','',''];
  var licznik =   ['2','1','1','1','2','2','3','3','4','1','1','2','3','1','1','1','1','2','3','3','5','6','1', '2','2','2', '2', '3','4','4', '4', '5', '6', '8',];
  var mianownik = ['3','3','5','8','3','8','4','8','5','2','4','4','4','2','3','4','9','4','4','9','9','9','12','4','5','6','15','18','6','8','18','10','18','10','','','','','','','','',''];
  var limit = (licznik.length) - 1;

    var x = Math.round(Math.random() * limit);

    //poprzednie
    previous = $('#previous').val();
    previous_tab = previous.split(';');

    if ((previous_tab.length) >= 30) { previous = ''; previous_tab = ''; }
    this_example = x.toString();
    while (previous_tab && jQuery.inArray(this_example,previous_tab) != -1) {
        x = Math.round(Math.random() * limit);
        this_example = x.toString();
    }
    $('#previous').val(previous+this_example+';');

    // wyswietl los
   
  $('#zadanie').html('<table style="margin:0 auto"><tr><td rowspan="3" style="vertical-align:center;padding:8px">' +
      '<img src="imgtask/704/'+figura[x]+'-'+licznik[x]+'-'+mianownik[x]+'.png" style="max-width:60%"  alt="" /></td></tr>\n\
<tr><td class="licznik"> <input name="odp" type="tel" id="odp" size="1" maxlength="2" autocomplete="off" class="s35 jump" /> </td></tr>\n\
<tr><td class="mianownik"><input name="odp2" type="tel" id="odp2" size="1" maxlength="3" autocomplete="off" class="s35 jump" /></td></tr></table>');
  $('#wynik').val(licznik[x]);
  $('#wynik2').val(mianownik[x]);
  $('#odp').focus();

    $('#odp').keyup(function() {
        $('#odp2').focus();
    });

}



function createStatement() {
    
    return statement = 'Spróbuj ponownie.';
}

$(document).ready(function () {

    los();
    keyboardEnter(0);
    $('#zadanie').addClass('p_calc2'); 
    $('#zadanie').addClass('col-xs-11');

});