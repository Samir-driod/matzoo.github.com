
function los() {
    // los
    
    var dane = [
        ['Sześcian',6,'ścian'],
        ['Sześcian',8,'wierzchołków'],
        ['Sześcian',12,'krawędzi'],
        
        ['Prostopadłościan',6,'ścian'],
        ['Prostopadłościan',8,'wierzchołków'],
        ['Prostopadłościan',12,'krawędzi'],
        
        ['Graniastosłup trójkątny',5,'ścian'],
        ['Graniastosłup trójkątny',6,'wierzchołków'],
        ['Graniastosłup trójkątny',9,'krawędzi'],      
        ['Graniastosłup trójkątny',2,'podstawy'],
        ['Graniastosłup trójkątny',3,'ściany boczne'],
        ['Graniastosłup trójkątny',6,'krawędzi podstaw'],
        ['Graniastosłup trójkątny',3,'krawędzie boczne'],        
        
        ['Graniastosłup czworokątny',6,'ścian'],
        ['Graniastosłup czworokątny',8,'wierzchołków'],
        ['Graniastosłup czworokątny',12,'krawędzi'],      
        ['Graniastosłup czworokątny',2,'podstawy'],
        ['Graniastosłup czworokątny',4,'ściany boczne'],
        ['Graniastosłup czworokątny',8,'krawędzi podstaw'],
        ['Graniastosłup czworokątny',4,'krawędzie boczne'],        
        
        ['Graniastosłup pięciokątny',7,'ścian'],
        ['Graniastosłup pięciokątny',10,'wierzchołków'],
        ['Graniastosłup pięciokątny',15,'krawędzi'],      
        ['Graniastosłup pięciokątny',2,'podstawy'],
        ['Graniastosłup pięciokątny',5,'ścian bocznych'],
        ['Graniastosłup pięciokątny',10,'krawędzi podstaw'],
        ['Graniastosłup pięciokątny',5,'krawędzi bocznych'],        
        
        ['Graniastosłup sześciokątny',8,'ścian'],
        ['Graniastosłup sześciokątny',12,'wierzchołków'],
        ['Graniastosłup sześciokątny',18,'krawędzi'],      
        ['Graniastosłup sześciokątny',2,'podstawy'],
        ['Graniastosłup sześciokątny',6,'ścian bocznych'],
        ['Graniastosłup sześciokątny',12,'krawędzi podstaw'],
        ['Graniastosłup sześciokątny',6,'krawędzi bocznych'],        
        
        ['Graniastosłup dziesięciokątny',12,'ścian'],
        ['Graniastosłup dziesięciokątny',20,'wierzchołków'],
        ['Graniastosłup dziesięciokątny',30,'krawędzi'],      
        ['Graniastosłup dziesięciokątny',2,'podstawy'],
        ['Graniastosłup dziesięciokątny',10,'ścian bocznych'],
        ['Graniastosłup dziesięciokątny',20,'krawędzi podstaw'],
        ['Graniastosłup dziesięciokątny',10,'krawędzi bocznych'],        
        
        ['Graniastosłup dwudziestokątny',22,'ściany'],
        ['Graniastosłup dwudziestokątny',40,'wierzchołków'],
        ['Graniastosłup dwudziestokątny',60,'krawędzi'],      
        ['Graniastosłup dwudziestokątny',2,'podstawy'],
        ['Graniastosłup dwudziestokątny',20,'ścian bocznych'],
        ['Graniastosłup dwudziestokątny',40,'krawędzi podstaw'],
        ['Graniastosłup dwudziestokątny',20,'krawędzi bocznych'],        

    ];
    var counter = dane.length-1;
      
    var example = Math.round(Math.random() * counter);
    
    
    var wynik = dane[example][1];

        
    //wynik = str_replace('.',',',wynik);

    var statement = dane[example][0]+ ' ma '+wynik+' '+dane[example][2];
    // wyswietl los
    $('#zadanie').html( dane[example][0]+ ' <nobr>ma <input name="odp" type="tel" class="wyrazm s40" id="odp" size="1" maxlength="4" autocomplete="off" /> '+dane[example][2]+'</nobr>.\n\
    <input type="hidden" name="statement" id= "statement" value="' + statement + '" />\n\
    <p class=small>&nbsp;</p>');
    $('#wynik').val(wynik);
    $('#odp').focus();        
   


}


function createStatement() {
    // tworzenie poprawnej odpowiedzi systemowej
    x = ($('#x').val());
    statement = ($('#statement').val());
    
    var statement = ' ' + statement + '. <span class="s15 pull-right black" style="font-family: ">wpisano: ' + $('#odp').val() + '</span>';
    return statement;
}

function createCountWrong() {
    // ma losować przykład po błędnej odpowiedzi
    return 1;
}

$(document).ready(function () {

    $('#zadanie').removeClass('wyraz1');
    $('#zadanie').addClass('wyrazm');
    $('#zadanie').css('margin','0 3%');
    $('#zadanie').addClass('s35');
    $('#zle_odp').css('font-size','15pt');
    los();
    keyboardEnter(1);

});