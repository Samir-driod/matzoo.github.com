
function los() {

    // los

    var zdania = [
        ['Prosta i okrąg mogą mieć najwyżej dwa punkty wspólne', 1],
        ['Średnica okręgu to najdłuższa cięciwa', 1],
        ['Średnica okręgu nazywamy każdą z cięciw', 0],
        ['Średnica okręgu przechodzi przez jego środek', 1],
        ['Średnica okręgu nie musi przechodzić przez jego środek', 0],
        ['Promień okręgu to odcinek łączący dwa punkty należące do tego okręgu', 0],
        ['Cięciwa okręgu to odcinek łączący dwa punkty należące do tego okręgu', 1],
        ['Cięciwa okręgu to najdłuższa średnica', 0],
        ['Cięciwą okręgu nazywamy połowę średnicy', 0],
        ['Cięciwą okręgu nazywamy każdy odcinek, którego jednym końcem jest środek okręgu, a drugi leży na okręgu', 0],
        ['Średnica okręgu jest dwa razy dłuższa od jego promienia', 1],
        ['Prosta i okrąg mogą nie mieć punktów wspólnych', 1],
        ['Prosta i okrąg zawsze mają co najmniej jeden punkt wspólny', 0],
        ['Prosta i okrąg mogą mieć jeden punkt wspólny', 1],
        ['Prosta i okrąg mają jeden punkt wspólny, jeśli prosta przechodzi przez środek okręgu', 0  ],
        ['Prosta i okrąg mogą mieć nieskończenie wiele punktów wspólnych', 0],
        ['Jeśli prosta przechodzi przez środek okręgu, to ma z tym okręgiem trzy punkty wspólne', 0],
        ['Środek okręgu należy do okręgu', 0],
        ['Prosta i koło mogą mieć nieskończenie wiele punktów wspólnych', 1],
        ['Środek koła należy do koła', 1],
        ['Styczna do okręgu to prosta przechodząca przez jego środek', 0],
        ['Styczna do okręgu ma dokładnie jeden punkt wspólny z okręgiem', 1],
        ['Jeśli okręgi są styczne zewnętrznie, to odległość między ich środkami równa jest sumie długości promieni tych okręgów', 1],
        ['Jeśli okręgi są styczne wewnętrznie, to odległość między ich środkami równa jest różnicy długości promieni tych okręgów', 1],
        ['Dwa okręgi mogą mieć co najwyżej dwa punkty wspólne', 0],
        ['Dwa okręgi o różnych promieniach mogą mieć co najwyżej dwa punkty wspólne', 1],
        ['Odległość stycznej od środka okręgu równa jest promieniowi tego okręgu', 1],
        ['Styczna do okręgu jest prostopadła do jego promienia w punkcie styczności', 1],
        ['Cięciwa to niezerowy odcinek, którego końce należą do okręgu', 1],
        ['Odległość miedzy środkami dwóch okręgów rozłącznych zewnętrznie jest większa niż suma ich promieni', 1],
        ['Odległość między środkami dwóch okręgów rozłącznych wewnętrznie jest mniejsza niż różnica ich promieni', 1],
        ['Odległość między środkami dwóch okręgów przecinających się jest mniejsza niż suma ich promieni, ale większa ich ich różnica', 1],
        ['Okręgi przecinające się mają dwa punkty wspólne', 1],
        ['Okręgi przecinające się mają jeden punkt wspólny', 0],
        ['Okręgi styczne to okręgi mające jeden punkt wspólny', 1],
        ['Jeśli okręgi są styczne zewnętrznie, to odległość między ich środkami równa jest różnicy długości promieni tych okręgów', 0],
        ['Jeśli okręgi są styczne wewnętrznie, to odległość między ich środkami równa jest sumie długości promieni tych okręgów', 0],
        ['Styczna do okręgu przecina okrąg w dwóch punktach', 0],
        ['Cięciwa jest zawsze dłuższa od promienia', 0],
        ['Długość cięciwy wyznacza się dzieląc średnicę okręgu na dwa', 0],
        ['Cięciwa jest równa długości dwóch promieni', 0],
        ['Odległość stycznej od środka okręgu równa jest średnicy tego okręgu', 0],
        ['Okręgi styczne mają wspólny środek', 0]        
    ];        

    var losuj = Math.round(Math.random() * (zdania.length - 1));
    //poprzednie
    previous = $('#previous').val();
    previous_tab = previous.split(';');
    if ((previous_tab.length)>=40) { previous = ''; previous_tab = ''; }
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


