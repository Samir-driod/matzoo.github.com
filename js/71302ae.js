function los() {
    // los
    var jednosci = ['', 'jeden', 'dwa', 'trzy', 'cztery', 'pięć', 'sześć', 'siedem', 'osiem', 'dziewięć'];
    var dziesiatki = ['', 'dziesięć', 'dwadzieścia', 'trzydzieści', 'czterdzieści', 'pięćdziesiąt', 'sześćdziesiąt', 'siedemdziesiąt', 'osiemdziesiąt', 'dziewięćdziesiąt'];
    var setki = ['', 'sto', 'dwieście', 'trzysta', 'czterysta', 'pięćset', 'sześćset', 'siedemset', 'osiemset', 'dziewięćset'];
    var tysiace = ['tysięcy', 'jeden tysięcy', 'dwa tysiące', 'trzy tysiące', 'cztery tysiące', 'pięć tysięcy', 'sześć tysięcy', 'siedem tysięcy', 'osiem tysięcy', 'dziewięć tysięcy'];

    var numbers = [5, 6, 9];

    var los_jedn = numbers[Math.round(Math.random() * 2)];
    var los_dzie = Math.round(Math.random() * 7) + 2;
    var los_set = numbers[Math.round(Math.random() * 2)];
    var los_tys = Math.round(Math.random() * 6) + 3;
    var los_dztys = Math.round(Math.random() * 4) + 5;


    p_dztys = los_dztys;
    p_tys = los_tys;
    p_set = los_set;
    p_dzie = los_dzie;

    if (Math.round(Math.random() * 3) != 1) {
        los_dztys = 0;
        p_dztys = '';
    }

    if (Math.round(Math.random() * 3) != 1) {
        los_tys = 0;
        if (los_dztys == 0) {
            p_tys = '';
        } else {
            p_tys = los_tys;
        }
    }

    if (Math.round(Math.random() * 2) == 1 && (los_dztys != 0 ||  los_tys != 0)) {
        los_set = 0;
        p_set = los_set;
    }

    if (Math.round(Math.random() * 1) == 1 && los_set !== 0) {
        los_dzie = 0;
        p_dzie = los_dzie;


    }

    if (los_set != 0 || los_dzie != 0) {
        if (Math.round(Math.random() * 2) == 1) los_jedn = 0;
    }
    tp_tys = tysiace[los_tys];
    if (los_dztys == 0 && los_tys == 0) tp_tys = '';

    var wynik = dziesiatki[los_dztys] + ' ' + tp_tys + ' ' + setki[los_set] + ' ' + dziesiatki[los_dzie] + ' ' + jednosci[los_jedn];
    var tresc = p_dztys + '' + p_tys + '' + p_set + '' + p_dzie + '' + los_jedn;

console.log(tresc);
console.log(wynik);
    wynik = wynik.trim();

    // wyswietl los
    $('#zadanie').html('<p class="monti s45">' + tresc + '</p>' +
        '<textarea name="odp" id="odp" class="s25 dblue monti" rows="2"></textarea>' +
        '<input type="hidden" id="x" value="' + tresc + '"</p>');

    $('#wynik').val(wynik);
    $('#odp').focus();

}


Math.decimal = function (n, k) {
    var factor = Math.pow(10, k + 1);
    n = Math.round(Math.round(n * factor) / 10);
    return n / (factor / 10);
}


function createStatement() {
    // tworzenie poprawnej odpowiedzi systemowej
    x = ($('#x').val());
    y = ($('#y').val());
    liczba = ($('#liczba').val());
    wyn = ($('#wynik').val());

    var statement = x + ' to ' + wyn + ' <span class="s15 pull-right black" style="font-family: ">wpisano: ' + $('#odp').val() + '</span>';
    return statement;
}


$(document).ready(function () {

    $('#zadanie').addClass('s30');
    $('#zle_odp').addClass('wrong4');

    los();
    keyboardEnter(1);

});