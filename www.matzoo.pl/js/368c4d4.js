
$(document).ready(function() {

    $('#zadanie').addClass('s19');
    $('#zadanie').addClass('tekstowe');  
    los();


});



function los() {
    // los

    tab = [
        ['Trzykrotność liczby x jest liczbą o 3 większą od x','<div class="wyrazm s30">3x=x+3</div>','<div class="wyrazm s30"><img src="imgtask/368/3-x.png" alt="ulamek" style="vertical-align:middle">=x+3</div>','<div class="wyrazm s30">x=3x+3</div>'],
        ['Dwukrotność liczby x jest liczbą o 1 większą od x','<div class="wyrazm s30">2x=x+1</div>','<div class="wyrazm s30"><img src="imgtask/368/1-2.png" alt="ulamek" style="vertical-align:middle">x=x+1</div>','<div class="wyrazm s30">x=2x+x</div>'],
        ['Połowa liczby x jest liczbą o 1 większą od x','<div class="wyrazm s30"><img src="imgtask/368/1-2.png" alt="ulamek" style="vertical-align:middle">x=x+1</div>','<div class="wyrazm s30">2x=x+1</div>','<div class="wyrazm s30">x=2x+x</div>'],
        ['Trzykrotność liczby x jest liczbą o 7 większą od x','<div class="wyrazm s30">3x=x+7</div>','<div class="wyrazm s30"><img src="imgtask/368/3-x.png" alt="ulamek" style="vertical-align:middle">=x+7</div>','<div class="wyrazm s30">x=3x+7</div>'],
        ['Liczba x pomniejszona o 4 jest jedną trzecią x','<div class="wyrazm s30">x-4=<img src="imgtask/368/x-3.png" alt="ulamek" style="vertical-align:middle"></div>','<div class="wyrazm s30">x-4=3x</div>','<div class="wyrazm s25">x-4=<img src="imgtask/368/x-3.png" alt="ulamek" style="vertical-align:middle">x</div>'], 
        ['Liczba x pomniejszona o 2 jest jedną trzecią x','<div class="wyrazm s30">x-2=<img src="imgtask/368/1-3.png" alt="ulamek" style="vertical-align:middle">x</div>','<div class="wyrazm s30">x-2=3:x</div>','<div class="wyrazm s25">x-2=<img src="imgtask/368/1-3.png" alt="ulamek" style="vertical-align:middle"></div>'], 
        ['Liczba x pomniejszona o 3 jest jedną trzecią x','<div class="wyrazm s30">x-3=<img src="imgtask/368/x-3.png" alt="ulamek" style="vertical-align:middle"></div>','<div class="wyrazm s30">x-3=3x</div>','<div class="wyrazm s25">x-3=<img src="imgtask/368/1-3.png" alt="ulamek" style="vertical-align:middle"></div>'], 
        ['Pięciokrotność liczby x jest liczbą o 12 większą od x','<div class="wyrazm s25">5x=x+12</div>','<div class="wyrazm s25"><img src="imgtask/368/5-x.png" alt="ulamek" style="vertical-align:middle">=x+12</div>','<div class="wyrazm s25">x=5x+12</div>'],
        ['Liczba x powiększona o 7 jest dwukrotnością x','<div class="wyrazm s30">x+7=2x</div>','<div class="wyrazm s30"><img src="imgtask/368/x-7.png" alt="ulamek" style="vertical-align:middle">=2x</div>','<div class="wyrazm s25">2(x+7)=x</div>'],
        ['Trzykrotność liczby x jest liczbą o 9 większą od x','<div class="wyrazm s30">3x=x+9</div>','<div class="wyrazm s30"><img src="imgtask/368/3-x.png" alt="ulamek" style="vertical-align:middle">=x+9</div>','<div class="wyrazm s30">x=3x+9</div>'],
        ['Połowa liczby x jest liczbą o 5 mniejszą od x','<div class="wyrazm s30"><img src="imgtask/368/x-2.png" alt="ulamek" style="vertical-align:middle">=x-5</div>','<div class="wyrazm s30">x-2=x-5</div>','<div class="wyrazm s30">2x=x-5</div>'],
        ['5% liczby x jest równe 20','<div class="wyrazm s30">0,05x=20</div>','<div class="wyrazm s30">0,5x=20</div>','<div class="wyrazm s30">5%x=20</div>'],
        ['Liczba x stanowi 5% liczby 10','<div class="wyrazm s30">x=0,05·10</div>','<div class="wyrazm s30">x=0,5·10</div>','<div class="wyrazm s30">5%x=10</div>'],
        ['Liczba o 2% mniejsza od x jest równa 5','<div class="wyrazm s30">x-0,02x=5</div>','<div class="wyrazm s30">x-2%=5</div>','<div class="wyrazm s30">2%x-x=5</div>'],
        
    ];

    var a = Math.round(Math.random() * 13);

    $('#zadanie').html(tab[a][0]+':<br><input type="hidden" id="odp" name="odp"/><br>');


    var example = Math.round(Math.random() * 2);
    if (example == 1) {
        $('#zadanie').append('<span class="btn btn-lsuccess margin10 text-black s21" style="font-weight: 300" onclick="klik(1)"> ' + tab[a][1] + '</span>');
        $('#zadanie').append('<span class="btn btn-lsuccess margin10 text-black s21" style="font-weight: 300" onclick="klik(2)"> ' + tab[a][2] + '</span>');
        $('#zadanie').append('<span class="btn btn-lsuccess margin10 text-black s21" style="font-weight: 300" onclick="klik(3)"> ' + tab[a][3] + '</span>');   
    } else if (example == 2) {
        $('#zadanie').append('<span class="btn btn-lsuccess margin10 text-black s21" style="font-weight: 300" onclick="klik(2)"> ' + tab[a][2] + '</span>');
        $('#zadanie').append('<span class="btn btn-lsuccess margin10 text-black s21" style="font-weight: 300" onclick="klik(1)"> ' + tab[a][1] + '</span>');
        $('#zadanie').append('<span class="btn btn-lsuccess margin10 text-black s21" style="font-weight: 300" onclick="klik(3)"> ' + tab[a][3] + '</span>');   
    } else if (example == 0) {
        $('#zadanie').append('<span class="btn btn-lsuccess margin10 text-black s21" style="font-weight: 300" onclick="klik(3)"> ' + tab[a][3] + '</span>');   
        $('#zadanie').append('<span class="btn btn-lsuccess margin10 text-black s21" style="font-weight: 300" onclick="klik(2)"> ' + tab[a][2] + '</span>');
        $('#zadanie').append('<span class="btn btn-lsuccess margin10 text-black s21" style="font-weight: 300" onclick="klik(1)"> ' + tab[a][1] + '</span>');
    }
    var popr = 1;
$('#zadanie').append('<br><br>');
    $('#wynik').val(popr);
    $('#odp').focus();

}

function createStatement() {
}


function klik(em) {

    $('#odp').val(em);
    obliczEnter();

}
