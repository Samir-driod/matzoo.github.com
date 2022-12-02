
function los() {

    // los

    var zdania = [
['Sześcian ma 6 ścian', 1],
['Sześcian ma 8 ścian', 0],
['Sześcian ma 12 krawędzi', 1],
['Sześcian ma 6 krawędzi', 0],
['Sześcian ma 8 wierzchołków', 1],
['Sześcian ma 6 wierzchołków', 0],
['Sześcian ma 12 wierzchołków', 0],
['Prostopadłościan ma 6 ścian', 1],
['Prostopadłościan ma 8 ścian', 0],
['Prostopadłościan ma 12 krawędzi', 1],
['Prostopadłościan ma 6 krawędzi', 0],
['Prostopadłościan ma 8 wierzchołków', 1],
['Prostopadłościan ma 6 wierzchołków', 0],
['Prostopadłościan ma 12 wierzchołków', 0],
['Sześcian ma 3 pary ścian równoległych', 1],
['Sześcian ma 2 pary ścian równoległych', 0],
['Każda krawędź sześcianu ma 3 krawędzie do&nbsp;niej równoległe', 1],
['Każda krawędź sześcianu ma 2 krawędzie do&nbsp;niej równoległe', 0],
['Każda krawędź sześcianu ma 8 krawędzi do&nbsp;niej prostopadłych', 1],
['Każda krawędź sześcianu ma 3 krawędzie do&nbsp;niej prostopadłe', 0],
['Wszystkie ściany sześcianu to kwadraty', 1],
['Wszystkie ściany prostopadłościanu to&nbsp;prostokąty', 1],
['Prostopadłościan ma 6 ścian, 8 wierzchołków i 12 krawędzi', 1],
['Prostopadłościan ma 8 ścian, 12 wierzchołków i 6 krawędzi', 0],
['Wszystkie ściany prostopadłościanu to&nbsp;kwadraty', 0]

    ];
    
    var losuj = Math.round(Math.random() * (zdania.length - 1));
    //poprzednie
    previous = $('#previous').val();
    previous_tab = previous.split(';');
    if ((previous_tab.length)>=56) { previous = ''; previous_tab = ''; }
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
    los();


});


