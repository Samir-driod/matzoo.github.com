
function los() {
  // los

    //var tab = ['11','40','41','42','43','44','52','54','55','56','59','62','63','64','66','68','69','70','72','73','82','86','88','90','135','180'];
    
    
    var tab = [
['5', '12', '13'],
['9', '12', '15'],
['3', '4', '5'],
['8', '15', '17'],
['12', '16', '20'],
['15', '20', '25'],
['10', '10', '10√2'],
['3', '6', '3√5'],
['5', '10', '5√5'],
['2', '4', '2√5'],
['2', '14', '10√2'],
['6', '6', '6√2'],
['2', '11', '5√5'],
['2', '6', '2√10'],
['8', '4', '4√5'],
['1', '7', '5√2'],
['3', '4√7', '11'],
['5', '4√6', '11'],
['1', '4√5', '9'],
['2', '3√5', '7'],
['2', '2√15', '8'],
['1', '3√7', '8'],
['7', '4√2', '9'],
['4', '2√5', '6'],
['11', '4√3', '13'],
['13', '3√3', '14'],
['5', '2√6', '7'],
['3', '3√8', '9'],
['4', '4√3', '8'],
['8', '4√5', '12'],
['7', '6√2', '11'],
['6', '3√5', '9'],
['1', '2√6', '5'],
['8', '√17', '9'],
['3', '2√10', '7'],
['3', '4√10', '13'],
['9', '√19', '10'],
['3', '√7', '4'],
['7', '√15', '8']
];
    
    
    var example = Math.round(Math.random()*(tab.length-1));
    
    wynik=tab[example];
    
    var ex = Math.round(Math.random()*2);
    
    //ex=2;
    if (ex==0) {
        wynik=tab[example][2];
        while (wynik!=Math.round(wynik)) {
            example = Math.round(Math.random()*(tab.length-1));
            wynik=tab[example][2];
        }
        var litera = 'c';
        tab[example][2]=litera;
    }
    else if (ex==1) {
        wynik=tab[example][1];
        while (wynik!=Math.round(wynik)) {
            example = Math.round(Math.random()*(tab.length-1));
            wynik=tab[example][1];
        }
        var litera = 'b';
        tab[example][1]=litera;
    }
    else if (ex==2) {
        wynik=tab[example][0];
        while (wynik!=Math.round(wynik)) {
            example = Math.round(Math.random()*(tab.length-1));
            wynik=tab[example][0];
        }
        var litera = 'a';
        tab[example][0]=litera;
    }

    // wyswietl los
    $('#zadanie').addClass('s40');
    $('#zadanie').html('<table class="" align="center"><tr><td>\n\
<div class="trojprost"><div class="troj-a">'+tab[example][0]+'</div><div class="troj-b">'+tab[example][1]+'</div><div class="troj-c">'+tab[example][2]+'</div></div>\n\
</td>\n\
                        <td>&nbsp;'+litera+' = <input type="text" id="odp" size=1 name="odp"/><input name="odp3" type="text" style="opacity:0;float:right" id="odp3" size="1" autocomplete="off" maxlength="2" /></td></tr></table>');
    $('#wynik').val(wynik);
    $('#odp').focus();

}

function createStatement() {
    // tworzenie poprawnej odpowiedzi systemowej
    var statement = 'Spróbuj ponownie.';
    return statement;
}


$(document).ready(function () {
    
    $('#content20').css('padding-left','5%');
    $('#zadanie').addClass('s25');
    
    los();
    keyboardEnter(0);

});