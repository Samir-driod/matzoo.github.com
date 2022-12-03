
function los() {

    // los

    var zdania = [
['Proste, które nie są prostopadłe, na pewno się przecinają', 0],
['Proste, które są prostopadłe, na pewno się przecinają', 1],
['Dwa odcinki prostopadłe nie zawsze się przecinają', 1],
['Dwa odcinki prostopadłe zawsze się przecinają', 0],
['Dwa nieprzecinające się odcinki są na pewno równoległe', 0],
['Dwa nieprzecinające się odcinki nie muszą być równoległe', 1],
['Przez dwa punkty może przechodzić tylko jedna prosta', 1],
['Przez jeden punkt może przechodzić tylko jedna prosta', 0],
['Jeśli proste są do siebie prostopadłe, to mają nieskończenie wiele punktów wspólnych', 0],
['Odcinki leżące na jednej prostej są do siebie równoległe', 1],
['Dwa odcinki równoległe nigdy nie mają punktów wspólnych', 0],
['Proste równoległe mają co najmniej 1 punkt wspólny', 0],
['Proste równoległe nigdy nie mają punktów wspólnych', 0],
['Dwie proste równoległe mogą mieć nieskończenie wiele punktów wspólnych', 1],
['Dwie proste równoległe mogą mieć dokładnie 2 punkty wspólne', 0],
['Dwie proste pokrywające się są do siebie równoległe', 1],
['Jeśli proste są do siebie prostopadłe, to mają jeden punkt wspólny', 1],
['Jeśli proste są do siebie prostopadłe, to nie mają punktów wspólnych', 0],
['Proste prostopadłe są prostymi przecinającymi się', 1],
['Proste równoległe są prostymi przecinającymi się', 0],
['Proste przecinające się mogą być prostopadłe', 1],
['Proste przecinające się mogą nie być prostopadłe', 1],
['Do prostej można poprowadzić tylko jedną prostą prostopadłą', 0],
['Do prostej można poprowadzić tylko jedną prostą równoległą', 0],
['Do prostej można poprowadzić nieskończenie wiele prostych prostopadłych', 1],
['Do prostej można poprowadzić nieskończenie wiele prostych równoległych', 1],
['Odległość między prostymi równoległymi jest zawsze większa niż 1 cm', 0],
['Proste nierównoległe mogą nie mieć punktów wspólnych na płaszczyźnie', 0],
['Proste nierównoległe na płaszczyźnie zawsze się przetną', 1],
['Dwa odcinki prostopadłe mogą łączyć się końcami', 1],
['Dwa odcinki równoległe mogą łączyć się końcami', 1],
['Dwa odcinki prostopadłe mogą mieć nieskończenie wiele punktów wspólnych', 0],
['Dwa odcinki równoległe mogą mieć nieskończenie wiele punktów wspólnych', 1],
['Dwa odcinki prostopadłe mogą nie mieć punktów wspólnych', 1],
['Dwa odcinki równoległe mogą nie mieć punktów wspólnych', 1],
['Odcinki prostopadłe zawsze przecinają się w 1 punkcie', 0],
['Dwa odcinki prostopadłe mogą mieć dokładnie 2 punkty wspólne', 0],
['Dwa odcinki równoległe mogą mieć dokładnie 2 punkty wspólne', 0],
['Odcinki są do siebie prostopadłe tylko wtedy, gdy się łączą', 0],
['Odcinki są do siebie prostopadłe, jeśli leżą na prostych do siebie prostopadłych', 1],
['Odcinki są do siebie równoległe, jeśli leżą na prostych do siebie równoległych', 1],
['Żeby nazwać prostą, należy użyć wielkiej litery alfabetu, np. prosta A', 0],
['Najkrótszą odległość punktu A od prostej wyznacza odcinek prostopadły do tej prostej przechodzący przez punkt A', 1],
['Dwie proste prostopadłe nie zawsze się przecinają', 0],
['Dwa odcinki prostopadłe zawsze się przecinają', 0],
['Przez punkt, który nie należy do prostej można przeprowadzić kilka niepokrywających się prostych równoległych do zadanej prostej', 0],
['Półprosta ma początek, ale nie ma końca', 1],
['Półprostą można w całości narysować na kartce w zeszycie', 0],
['Punkt na prostej dzieli tę prostą na dwie półproste', 1],
['Dwie półproste do siebie prostopadłe zawsze się przecinają', 0],
['Dwie półproste do siebie równoległe mogą mieć 1 punkt wspólny', 1],
['Dwie półproste do siebie prostopadłe mogą mieć nieskończenie wiele punktów wspólnych', 0],
['Dwie półproste mogą mieć wspólny początek', 1],
['Dwie półproste nie mogą mieć wspólnego początku', 0]
    ];        

    var losuj = Math.round(Math.random() * (zdania.length - 1));
    //poprzednie
    previous = $('#previous').val();
    previous_tab = previous.split(';');
    if ((previous_tab.length)>=50) { previous = ''; previous_tab = ''; }
    this_example = losuj;
    while (previous_tab && jQuery.inArray(this_example,previous_tab)!=-1) {
        losuj = Math.round(Math.random() * (zdania.length - 1));
        this_example = losuj;
    }    
    $('#previous').val(previous+this_example+';');    

    if (zdania[losuj][1] == 1) {
        var wynik = 'PRAWDA';
    }
    else
        wynik = 'FAŁSZ';


    // wyswietl los
    $('#zadanie').removeClass('wyraz1');
    $('#zadanie').addClass('tekstowe');
    $('#zadanie').addClass('s21');
    $('#zadanie').html('<div class=""><p>' + zdania[losuj][0] + '.<br></p><p class="text-center">\n\
<span class="btn btn-success btn-work s35 btn-matzoo" id="PRAWDA" onclick="klik(this)">PRAWDA</span>\n\
<span class="btn btn-danger btn-work s35 btn-matzoo" id="FAŁSZ" onclick="klik(this)">FAŁSZ</span><input type="hidden" id="odp" name="odp"/></p></div>');
    $('#wynik').val(wynik);
    $('#odp').focus();

}



function createStatement() {
}

function klik(em) {
    odpowiedz = $(em).html();
    $('#odp').val($(em).html());
    ok = obliczEnter();
    if (ok==1) {
        if (odpowiedz=="PRAWDA") $('#FAŁSZ').fadeOut('slow'); else $('#PRAWDA').fadeOut('slow');
    } else {
        if (odpowiedz=="PRAWDA") $('#PRAWDA').fadeOut('slow'); else $('#FAŁSZ').fadeOut('slow');
    }
    
    $('#dobrze').delay(2000).fadeOut("");
    $('#zle_odp').delay(2000).fadeOut("");
}


function obliczEnter() {
    if (checkEmpty()) return false;

    var odp = $('#odp').val();
    odp = str_replace(' ', '', odp);

        if (odp == $('#wynik').val()) {
            countCorrect();
            cleanSpace();
            $('.btn-matzoo').attr('onclick','los()');
            return 1;
        }
        else {
            countWrong();
            $('.btn-matzoo').attr('onclick','los()');
            return 0;
        } 
}



$(document).ready(function () {

    $('#content20').css('padding-left', '5%');
    $('#zadanie').addClass('tekstowe');
    $('#zadanie').addClass('s19');
    los();


});


