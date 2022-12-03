
function los() {
    

        // los
        var a = Math.round(Math.random() * 4) + 1;
        var b = Math.round(Math.random() * 8) + 2;
        
        while (a >= b || b / a == 3 || b / a == 6 || b / a == 9) {
            a = Math.round(Math.random() * 4) + 1;
            b = Math.round(Math.random() * 8) + 2;
        }

        a = a / nwd(a, b);
        b = b / nwd(a, b);
        var x = Math.round(Math.random() * 9) + 1;
        x = a * x;
        var p = a / b * 100;

        while ((p%1) != 0) {
            a = Math.round(Math.random() * 4) + 1;
            b = Math.round(Math.random() * 8) + 2;
            while (a >= b || b / a == 3 || b / a == 6 || b / a == 9) {
                a = Math.round(Math.random() * 4) + 1;
                b = Math.round(Math.random() * 8) + 2;
            }
            a = a / nwd(a, b);
            b = b / nwd(a, b);
            x = Math.round(Math.random() * 9) + 1;
            x = a * x;
            p = a / b * 100;
        }

        var c = (x / a) * b;        
        
        
        
        
        
        //poprzednie
        previous = $('#previous').val();
        previous_tab = previous.split(';');
        //console.debug(previous_tab);
        if ((previous_tab.length)>=85) { previous = ''; previous_tab = ''; }
        this_example = p+','+c;
            while (x!=(Math.round(x)) || previous_tab && jQuery.inArray(this_example,previous_tab)!=-1) {
                a = Math.round(Math.random() * 4) + 1;
                b = Math.round(Math.random() * 8) + 2;

                while (a >= b || b / a == 3 || b / a == 6 || b / a == 9) {
                    a = Math.round(Math.random() * 4) + 1;
                    b = Math.round(Math.random() * 8) + 2;
                }

                a = a / nwd(a, b);
                b = b / nwd(a, b);
                x = Math.round(Math.random() * 9) + 1;
                x = a * x;
                p = a / b * 100;

                while ((p%1) != 0) {
                    a = Math.round(Math.random() * 4) + 1;
                    b = Math.round(Math.random() * 8) + 2;
                    while (a >= b || b / a == 3 || b / a == 6 || b / a == 9) {
                        a = Math.round(Math.random() * 4) + 1;
                        b = Math.round(Math.random() * 8) + 2;
                    }
                    a = a / nwd(a, b);
                    b = b / nwd(a, b);
                    x = Math.round(Math.random() * 9) + 1;
                    x = a * x;
                    p = a / b * 100;
                }

                c = (x / a) * b; 
                this_example = p+','+c;
            }    
        $('#previous').val(previous+this_example+';');      
        
        
        var wynik = x;
        // wyswietl los
        $('#zadanie').html(p + '% <span class="wyrazm">z</span> ' + c + ' = <input name="odp" type="tel" class="wyraz1" id="odp" size="1" maxlength="3" autocomplete="off" />\n\
    <input type="hidden" name="x" id="x" value="' + x + '" /><input type="hidden" name="c" id="c" value="' + c + '" /><input type="hidden" name="p" id="p" value="' + p + '" />');
        $('#wynik').val(wynik);
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
    p = ($('#p').val());
    c = ($('#c').val());
    wyn = ($('#wynik').val());
    var statement = ' ' + p + '% z ' + c + ' = ' + wyn + ' <span class="s15 pull-right black" style="font-family: ">wpisano: ' + $('#odp').val() + '</span>';
    return statement;
}


$(document).ready(function () {
    los();
    keyboardEnter(1);
});