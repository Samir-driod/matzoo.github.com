
function los() {
    // los
    
var jednostka = ['cm', 'dm', 'km'];
var liczba = [((Math.round(Math.random() * 49)+1)*10), ((Math.round(Math.random() * 9)+1)*10), ((Math.round(Math.random() * 19)+1)/10)];
var liczbap = [liczba[0], liczba[1], str_replace('.', ',',liczba[2])];
var km = [ 100, 10, (1/1000)];
var los = Math.round(Math.random() * 2); 

    var wynik = liczba[los]/km[los];
    wynik = Math.round(wynik*1000)/1000;
    var pwynik = str_replace('.', ',', wynik);

    // wyswietl los
    $('#zadanie').html('<p class="wyraz1 s60">'+ liczbap[los] + '&nbsp;'+ jednostka[los] + ' = <input name="odp" type="text" class="input" id="odp" size="3" maxlength="5" autocomplete="off" />&nbsp;m\n\
<input type="hidden" name="liczbap" id="liczbap" value="' + liczbap[los] + '" /><input type="hidden" name="jednostka" id="jednostka" value="' + jednostka[los] + '" /></p>');
    $('#wynik').val(pwynik);
    $('#odp').focus();

}


function createStatement() {
    // tworzenie poprawnej odpowiedzi systemowej
    liczbap = ($('#liczbap').val());
    jednostka = ($('#jednostka').val());
    wyn = ($('#wynik').val());
    var statement = ' ' + liczbap + '&nbsp;' + jednostka + ' = ' + wyn + '&nbsp;m<span class="s15 pull-right black" style="font-family: ">wpisano: ' + $('#odp').val() + '</span>';
    return statement;
}


$(document).ready(function () {
    los();
    keyboardEnter(1);

});