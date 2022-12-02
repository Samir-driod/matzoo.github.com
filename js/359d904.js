function createStatement() {
}


$(document).ready(function() {
    
    $('#zadanie').addClass('tekstowe');  
    $('#zadanie').addClass('s21');  
    $('#zadanie').removeClass('wyraz1');  
    los();

});


function los() {
    // los

    i = 0;
    var tab = [2,3,4,5,10,100]; // przez jakie liczby będziemy dzielić
    var a = Math.round(Math.random()*4);
    var x = Math.round(Math.random()*1);
    a = tab[a]; // liczba, przez którą będziemy dzielić
    var liczby=[];

    x = Math.round(Math.random()*89999)+10000; // dzielna
    while (Math.floor(x%a) != 0) x = Math.round(Math.random()*89999)+10000; 
    var dzielna = x;

    // generowanie dzielnej bez ostatniego znaku
    if (x>10000) var xdt = Math.floor(x/10000);
    if (x>1000)  var xt = Math.floor(x/1000)-(xdt*10);
    if (x>100) var xs = Math.floor(x/100)-(xt*10)-(xdt*100);
    var xd = Math.floor(x/10)-(Math.floor(x/100)*10);
    var xj = x%10;

    liczby[0]=xj; // prawidłowa odpowiedź
    zapis = ''+xdt+''+xt+''+xs+''+xd+'<span style="color: red;">☀</span>'; // dzielna bez ostatniego znaku

    var dzielna_crop = dzielna.toString().substring(0,4);

    // losowanie pozostałych liczb do odpowiedzi (niedających prawidłowego rozwiązania)
    for (i=1;i<4;i++) {
        if (i==1) { 
            x = Math.round(Math.random()*8)+1;
            var nowa_dzielna = dzielna_crop+x;
            while (x==liczby[0] || Math.floor(nowa_dzielna%a) == 0) {
                x = Math.round(Math.random()*9);
                nowa_dzielna = dzielna_crop+x;
            }
        }
        if (i==2) {
            x = Math.round(Math.random()*8)+1;
            var nowa_dzielna = dzielna_crop+x;
            while (x==liczby[0] || x==liczby[1] || Math.floor(nowa_dzielna%a) == 0) {
                x = Math.round(Math.random()*8)+1;
                nowa_dzielna = dzielna_crop+x;
            }
        }
        if (i==3) {
            x = Math.round(Math.random()*8)+1;
            var nowa_dzielna = dzielna_crop+x;
            while (x==liczby[0] || x==liczby[1] || x==liczby[2] || Math.floor(nowa_dzielna%a) == 0) {
                x = x+1; if (x>9) x=x-9;
                nowa_dzielna = dzielna_crop+x;
            }
        }
        liczby[i]=x;
    }

    var wynik = liczby[0];
    liczby.sort(sortNumber);

    // wyswietl los
    $('#zadanie').html('Którą z cyfr: <span class="s25">'+liczby[0]+'</span>, <span class="s25">'+liczby[1]+'</span>, <span class="s25">'+liczby[2]+'</span> czy <span class="s25">'+liczby[3]+'</span> należy wstawić w&nbsp;miejsce znaku <span class=s30 style="color: red;">☀</span> w liczbie <span class="btn text-black s30 margin0" style="background-color:#EEE">'+zapis+'</span>, aby otrzymać liczbę podzielną przez <span class=s25>'+a+'</span>? <br/><input type="hidden" id="odp" name="odp"/>');

    for (i=0;i<4;i++) {
        $('#zadanie').append('<span class="btn btn-orange btn-matzoo33 gradient s50 text-black" onclick="klik('+liczby[i]+')">&nbsp;'+liczby[i]+'&nbsp;</span>');
    }

    $('#wynik').val(wynik);
    $('#odp').focus();

}


function klik(em) {
    $('#odp').val(em);
    obliczEnter(1);

}