
function los() {
    // los

    var a = Math.round(Math.random() * 13) + 1;


    //poprzednie
    previous = $('#previous').val();
    previous_tab = previous.split(';');
    if ((previous_tab.length) >= 15) {
        previous = '';
        previous_tab = '';
    }
    this_example = a;
    while (previous_tab && jQuery.inArray(this_example, previous_tab) != -1) {
        a = Math.round(Math.random() * 13) + 1;
        this_example = a;
    }
    $('#previous').val(previous + this_example + ';');

    switch (a) {
        case 1:
            x = 1;
            y = 2;
            break;
        case 2:
            x = 1;
            y = 4;
            break;
        case 3:
            x = 3;
            y = 4;
            break;
        case 4:
            x = Math.round(Math.random() * 3) + 1;
            y = 5;
            break;
        case 5:
            x = Math.round(Math.random() * 3) + 6;
            y = 5;
            break;
        case 6:
            x = Math.round(Math.random() * 8) + 1;
            y = 10;
            break;
        case 7:
            x = Math.round(Math.random() * 19) + 11;
            y = 10;
            break;
        case 8:
            x = Math.round(Math.random() * 18) + 1;
            y = 20;
            break;
        case 9:
            x = Math.round(Math.random() * 38) + 21;
            y = 20;
            break;
        case 10:
            x = Math.round(Math.random() * 48) + 1;
            y = 50;
            break;
        case 11:
            x = Math.round(Math.random() * 48) + 1;
            y = 50;
            break;
        case 12:
            x = Math.round(Math.random() * 98) + 1;
            y = 100;
            break;
        case 13:
            x = Math.round(Math.random() * 98) + 1;
            y = 100;
            break;
        case 14:
            x = Math.round(Math.random() * 200) + 100;
            y = 100;
            break;
        case 15:
            x = (Math.round(Math.random() * 20) + 10) * 10;
            y = 200;
            break;
        case 16:
            x = (Math.round(Math.random() * 39) + 10) * 10;
            y = 500;
            break;
        case 17:
            x = Math.round(Math.random() * 999) + 1;
            y = 1000;
            break;
        case 18:
            x = Math.round(Math.random() * 999) + 1;
            y = 1000;
            break;
        case 19:
            x = Math.round(Math.random() * 3999) + 1000;
            y = 1000;
            break;
    }





    var wynik = str_replace('.',',',parseInt(x) / parseInt(y));


    tresc = '<table border="0" align="center" class="georgia">\n\
<tr><td class="licznik"><strong>' + x + '</strong></td><td rowspan="2" class="wyraz s80"> &nbsp;=  <input name="odp" type="tel" class="input" id="odp" size="3" maxlength="7" autocomplete="off" /></td></tr>\n\
<tr><td class="mianownik"><strong>' + y + '</strong></td></tr></table>';



    // wyswietl los
    $('#zadanie').html(tresc + '\n\
<input type="hidden" name="x" id="x" value="' + x + '" /><input type="hidden" name="y" id="y" value="' + y + '" />');
    $('#wynik').val(wynik);
    $('#odp').focus();

}


function createStatement() {
    // tworzenie poprawnej odpowiedzi systemowej
    x = ($('#x').val());
    y = ($('#y').val());
    wyn = str_replace('.',',',parseInt(x) / parseInt(y));
    $('#zle_odp img').css('float','left');
    var statement = ' <span class="s15 pull-right black" style="font-family: ">wpisano: ' + $('#odp').val() + '</span><table border="0" align="center" cellpadding="2" cellspacing="2" class="georgia s20 pull-right" style="margin-right:25%">\n\
<tr><td rowspan="2" class="">&nbsp; &nbsp; </td><td class="linia">'+x+'</td><td rowspan="2"><span class="s30">= '+wyn+'<span></td></tr>\n\
<tr><td>'+y+'</td></tr></table>';
    return statement;
}


$(document).ready(function () {

    los();
    keyboardEnter(1);

});