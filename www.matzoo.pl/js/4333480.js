limit = 30;

function los() {
    // los
     
    var x = Math.round(Math.random() * 8)+2; 
    var a = Math.round(Math.random() * 8)+2; 
    
    var ex = Math.round(Math.random() * 2); 
    
    if (ex==1) {
        var y = x*x;
        var wynik = a*2;
    } else if (ex==0) {
        if (x>4) x = Math.round(Math.random() * 2)+2;
        var y = x*x*x*x;
        var wynik = a*4;
    } else {
        if (x>5) x = Math.round(Math.random() * 3)+2;
        var y = x*x*x;
        var wynik = a*3;
    }
    
    
    
    var tresc = ''+y+'<sup>'+a+'</sup> = '+x+'<sup>x</sup>  &nbsp; <span class="dblue">x = ?</span>';

    
    var tab = [wynik];
    
   
    for (i = 1; i < 4; i++) {
        n = Math.round(Math.random() * limit);
        while (n == tab[i - 1]) {
            n = Math.round(Math.random() * limit);
        }
        if (i == 2)
            while (n == tab[i - 2] || n == tab[i - 1]) {
                n = Math.round(Math.random() * limit);
            }
        if (i == 3)
            while (n == tab[i - 3] || n == tab[i - 2] || n == tab[i - 1]) {
                n = Math.round(Math.random() * limit);
            }
        tab[i] = n;


    }
    tab.sort(sortNumber);        

   
    
        // wyswietl los
    $('#zadanie').html(tresc);
    $('#wynik').val(wynik);
    for (i = 0; i < 4; i++)
        $('#guziki').append('<span class="btn btn-lsuccess btn-matzoo33 gradient s50 text-black" onclick="klik(this)">' + tab[i] + '</span>');      
   


}
function oblicz() {

    // jesli dobra odpowiedź
    if ($('#odp').val() == $('#wynik').val()) {

        countCorrect();
        cleanSpace();
        los();

    } // jeśli zła odpowiedź
    else {

        countWrong();
    }
}
function klik(em) {
    $('#odp').val($(em).html());
    oblicz();
}


function createStatement() {
    // tworzenie poprawnej odpowiedzi systemowej
    tresc = ($('#tresc').val());
    x = ($('#x').val());
    wyn = ($('#wyn').val());
    
    //var statement = ' ' + x + ' · ' + y + ' = ' + wyn + ' <span class="s15 pull-right black" style="font-family: ">wpisano: ' + $('#odp').val() + '</span>';
    var statement = '&nbsp; '+tresc+' = '+x+'<sup>'+wyn+ '</sup> <span class="s15 pull-right black" style="font-family: ">wpisano: '+x+'<sup>' + $('#odp').val() + '</sup></span>';
    return statement;
}


$(document).ready(function () {

    los();
    keyboardEnter(1);

});