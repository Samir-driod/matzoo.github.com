
function los() {
    // los
    var example = Math.round(Math.random() * 3);
    
    
    if (example==0) {     
        $('#zadanie').removeClass('sqrtul');
        $('#zadanie').removeClass('sqrtul3');
        
        var x = Math.round(Math.random() * 14)+1; 
        var wynik=x;
        x = x*x;    
        // wyswietl los
        $('#zadanie').html('<div class="sqrt">'+x+'</div> = \n\
        <input name="odp" tabindex="1" type="tel" size="1" id="odp" maxlength="4" autocomplete="off"/>');     
        $('#wynik').val(wynik);
        $('#wynik2').val('');
        $('#zadanie').addClass('wyraz1');
        
    }
    else if (example==2) { 
        $('#zadanie').removeClass('sqrtul');
        $('#zadanie').removeClass('sqrtul3');
        
        var x = Math.round(Math.random() * 4)+1; 
        var wynik=x;
        x = x*x*x;    
        // wyswietl los
        $('#zadanie').html('<div class="sqrt3">'+x+'</div> = \n\
        <input name="odp" tabindex="1" type="tel" size="1" id="odp" maxlength="4" autocomplete="off"/>');     
        $('#wynik').val(wynik);
        $('#wynik2').val('');
        $('#zadanie').addClass('wyraz1');
        
    }
    else if (example==3) {  
        $('#zadanie').removeClass('sqrtul');
        $('#zadanie').removeClass('sqrtul3');
        
        $('#zadanie').addClass('sqrtul3');

        var x = Math.round(Math.random() * 4)+1;
        var y = Math.round(Math.random() * 4)+1;
        x=x/nwd(x,y);
        y=y/nwd(x,y);
        while (x>=y) {
            x = Math.round(Math.random() * 4)+1;
            y = Math.round(Math.random() * 4)+1;
            x=x/nwd(x,y);
            y=y/nwd(x,y);
        }
        
        var wynik=x;
        var wynik2=y;
        x = x*x*x;
        y = y*y*y;
        // wyswietl los
        $('#zadanie').html('<table border="0" align="center" class="ulamki">\n\
        <tr>\n\
        <td class="linia-black">'+x+'</td>\n\
        <td rowspan="2" class="s40"> = </td>\n\
        <td class="linia-black"><input name="odp" tabindex="8" type="tel" size="2" id="odp" maxlength="3" autocomplete="off"/></td>\n\
      </tr>\n\
      <tr>\n\
        <td>'+y+'</td>\n\
        <td><input name="odp2" tabindex="9" type="tel" size="2" maxlength="3" id="odp2" autocomplete="off"/></td>\n\
      </tr>\n\
     </table>');        
        $('#wynik').val(wynik);
        $('#wynik2').val(wynik2);

    }
    else if (example==1) { 
        $('#zadanie').removeClass('sqrtul');
        $('#zadanie').removeClass('sqrtul3');
        
        $('#zadanie').addClass('sqrtul');

        var x = Math.round(Math.random() * 14)+1;
        var y = Math.round(Math.random() * 14)+1;
        x=x/nwd(x,y);
        y=y/nwd(x,y);
        while (x>=y) {
            x = Math.round(Math.random() * 14)+1;
            y = Math.round(Math.random() * 14)+1;
            x=x/nwd(x,y);
            y=y/nwd(x,y);
        }
        
        var wynik=x;
        var wynik2=y;
        x = x*x;
        y = y*y;
        // wyswietl los
        $('#zadanie').html('<table border="0" align="center" class="ulamki">\n\
        <tr>\n\
        <td class="linia-black">'+x+'</td>\n\
        <td rowspan="2" class="s40"> = </td>\n\
        <td class="linia-black"><input name="odp" tabindex="8" type="tel" size="2" id="odp" maxlength="3" autocomplete="off"/></td>\n\
      </tr>\n\
      <tr>\n\
        <td>'+y+'</td>\n\
        <td><input name="odp2" tabindex="9" type="tel" size="2" maxlength="3" id="odp2" autocomplete="off"/></td>\n\
      </tr>\n\
     </table>');        
        $('#wynik').val(wynik);
        $('#wynik2').val(wynik2);

    }
    
        $('#odp').focus();        

}


function nwd(a, b) {
  while (b) {
    tmp = a % b;
    a = b;
    b = tmp;
  } return a;
}


function createStatement() {
    // tworzenie poprawnej odpowiedzi systemowej
    x = ($('#x').val());
    y = ($('#y').val());
    wyn = ($('#wyn').val());
    
    var statement = '&nbsp; '+x+'<sup>'+y+'</sup> = '+wyn+ ' <span class="s15 pull-right black" style="font-family: ">wpisano: ' + $('#odp').val() + '</span>';
    var statement = '';
    return statement;
}


$(document).ready(function () {

$('#zadanie').css('text-align','left');

    los();
    keyboardEnter(1);

});

