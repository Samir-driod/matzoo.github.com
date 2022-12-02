
function los() {
    // los
    var jednosci = ['','jeden','dwa','trzy','cztery','pięć','sześć','siedem','osiem','dziewięć'];
    var dziesiatki = ['','dziesięć','dwadzieścia','trzydzieści','czterdzieści','pięćdziesiąt','sześćdziesiąt','siedemdziesiąt','osiemdziesiąt','dziewięćdziesiąt'];
    var setki = ['','sto','dwieście','trzysta','czterysta','pięćset','sześćset','siedemset','osiemset','dziewięćset'];
    var tysiace = ['tysięcy','jeden tysięcy','dwa tysiące','trzy tysiące','cztery tysiące','pięć tysięcy','sześć tysięcy','siedem tysięcy','osiem tysięcy','dziewięć tysięcy'];


    var los_jedn = Math.round(Math.random()*8)+1;
    var los_dzie = Math.round(Math.random()*7)+2;
    var los_set = Math.round(Math.random()*8)+1;
    var los_tys = Math.round(Math.random()*6)+3;

    p_set = los_set;
    p_dzie = los_dzie;

    // var los_dztys = Math.round(Math.random()*7)+2;
    // var los_stys = Math.round(Math.random()*7)+2;
    if (Math.round(Math.random()*1)==1) {
        los_set = 0;
        p_set = los_set;
    }
    if (Math.round(Math.random()*1)==1) {
        los_dzie = 0;
            p_dzie = los_dzie;
    }
    if (Math.round(Math.random()*2)==1) los_jedn=0;


    // var tresc = setki[los_stys]+' '+dziesiatki[los_dztys]+' '+tysiace[los_tys]+' '+setki[los_set]+' '+dziesiatki[los_dzie]+' '+jednosci[los_jedn];
    // var wynik = los_stys+''+los_dztys+''+los_tys+''+los_set+''+los_dzie+''+los_jedn;
    //
    var tresc = tysiace[los_tys]+' '+setki[los_set]+' '+dziesiatki[los_dzie]+' '+jednosci[los_jedn];
    var wynik = los_tys+''+p_set+''+p_dzie+''+los_jedn;

    console.log(tresc);
    console.log(wynik);

    // wyswietl los
    $('#zadanie').html('<p class="monti">' + tresc + '</p>' +
        '<input name="odp" id="odp" type="tel" size="4" class="s40 monti bold" maxlength="12" autocomplete="off"/>' +
        '<input type="hidden" id="x" value="'+tresc+'"</p>');

    $('#wynik').val(wynik);
    $('#odp').focus();

}


Math.decimal = function(n, k)
{
    var factor = Math.pow(10, k+1);
    n = Math.round(Math.round(n*factor)/10);
    return n/(factor/10);
}


function createStatement() {
    // tworzenie poprawnej odpowiedzi systemowej
    x = ($('#x').val());
    y = ($('#y').val());
    liczba = ($('#liczba').val());
    wyn = ($('#wynik').val());

    var statement = x+' to '+wyn+' <span class="s15 pull-right black" style="font-family: ">wpisano: ' + $('#odp').val() + '</span>';
    return statement;
}


$(document).ready(function () {

    $('#zadanie').removeClass('wyraz1');
    $('#zadanie').addClass('s25');
    $('#zadanie').addClass('bold');
    $('#zle_odp').addClass('wrong4');

    los();
    keyboardEnter(1);

});