$(document).ready(function(){
$('#odp').focus();
    ananasy();
    
    $('#form1').submit(function(){
        if ($('#odp').val() === '') {
            $('#answer').hide();
            $('#answer').html('<p class="helv alert margin0"> Musisz coś wpisać.</p>');
            $('#answer').fadeIn();
            return false;
        }

    });
    
    
    // blokada prawego klawisza myszy
    document.addEventListener("contextmenu", function(e){
        e.preventDefault();
    }, false);
    // blokada F12
    $(this).keydown(function(e){
        if (e.keyCode==123) return false;
    });    
    
    document.onkeypress = function (event) {
        event = (event || window.event);
        if (event.keyCode == 123) {
           //alert('No F-12');
            return false;
        }
    }
    document.onmousedown = function (event) {
        event = (event || window.event);
        if (event.keyCode == 123) {
            //alert('No F-keys');
            return false;
        }
    }
    document.onkeydown = function (event) {
        event = (event || window.event);
        if (event.keyCode == 123) {
            //alert('No F-keys');
            return false;
        }
    }    
    

});


function ananasy() {
    annum = 10;
    ok = parseInt($('.ok').html());
    annum = parseInt($('#annum').html());
    if (annum==0) annum=10;
    for (i=1;i<11;i++) {
        if (ok >= i*annum) {
            $('#an'+i).addClass('anok');
        }
    }
    
}



function checkEmpty() {
    if ($('#odp').val()=='') {
        $('#dobrze').hide();
        $('#zle_odp').html('Musisz coś wpisać.');
        $('#zle_odp').fadeIn("fast");
        return true;
    }
}

function keyboardEnter(wrong_los) {

    // obsluga klawisza enter
    $(this).keyup(function (event) {
        if (event.keyCode == 13) {
            var statement = createStatement();
            obliczEnter(wrong_los, statement);                
            return false;
        }
    });    
}

// obsluga entera dla zadan z zatrzymaniem na blednej 
function keyboardEnterOne(statement) {

    // obsluga klawisza enter
    $('input').off("keyup");
    $('input').keyup(function(event) {
        id = $(this).attr('id');
        if (event.keyCode == 13) {
            if (id == 'dalej') {
                prepareNewTask();
            } else {
                if (!statement) var statement = createStatement();
                obliczOne(statement);                
            }
            return false;
        }
    });    
}

function keyboardObliczEnter() {
    // obsluga klawisza enter
    $(this).keyup(function (e) {
        if (e.keyCode == 13) {
            oblicz_enter();
            return false;
        }
    });    
}

function cleanSpace() {
    // usunięcie treści zadania   
    $('#tresc').hide();
    $('#odp').val('');
    $('#guziki').empty();
}

function countProcent() {
    
    ok = parseInt($('.ok').html());
    wrong = parseInt($('.wrong').html());
    dz_procent = ok/(ok+wrong);
        dz_procent = parseInt(dz_procent*100);
        $('.dz_procent').html(dz_procent+'%');
        $('#points .raport').html('<a onclick="generatePDF()">RG</a>');

}

function countCorrect() {
    $('#zle_odp').hide();
    $('#dobrze').hide();

    let image = Math.round(Math.random() * 5) +1;
    $('#dobrze img').attr('src', 'img/emoty/ok' + image + '.png');
    $('#dobrze').fadeIn("fast");

    
    var dobre = $('.ok').html();
    dobre = parseInt(dobre) + 1;
    $('.ok').empty();
    $('.ok').append(dobre);
    
    countProcent();
    // kolorowanie ananasów
    ananasy();
}

function countWrong(statement) {
    if (!statement) statement = '';
    // wygaszenie okien systemowych z poprzednich przykładów
    $('#dobrze').hide();
    $('#zle_odp').hide();

    // okno systemowe WRONG
    $('#zle_odp').html($('#zle_poczatek').html());
    $('#zle_odp').append(' ' + statement);

    let image = Math.round(Math.random() * 5) +1;
    $('#zle_odp img').attr('src', 'img/emoty/z' + image + '.png');
    $('#zle_odp').fadeIn("fast");
    
    // zliczenie złych punktów
    var zle = $('.wrong').html();
    zle = parseInt(zle) + 1;
    $('.wrong').empty();
    $('.wrong').append(zle);
    
    countProcent();
}

function sortNumber(a, b) {
    return a - b;
}


function obliczEnter(wrong_los, statement) {
    if (checkEmpty()) return false;
    if (wrong_los==0 && !statement) statement = 'Spróbuj ponownie.';
    
    if (wrong_los==2) {
        $('input[type=text]').val(''); 
        $('input[name=action]').val('dalej'); 
        var klasa_id = $('input[name=klasa_id]').val(''); 
        $('#rozwiaz').css('background-image','url(/img/but'+klasa_id+'_d.png)'); 
        $('input[type=tel]').attr('disabled',true); 
        $('input[type=text]').attr('disabled',true);
        
        $('#rozwiaz').click(function(){
            los();
        });
    }
    
    var odp = $('#odp').val();
    odp = str_replace(' ', '', odp);

    if ($('#wynik3').val() != '') {
        if ($('#odp').val() == $('#wynik').val() && $('#odp2').val() == $('#wynik2').val() && $('#odp3').val() == $('#wynik3').val()) {
            countCorrect();
            cleanSpace();
            los();
            return 1;
        }
        else {
            countWrong(statement);
            if (wrong_los == 1)
                los();
            return 0;
        }
    }
    else if ($('#wynik2').val() != '') {
        if ($('#odp').val() == $('#wynik').val() && $('#odp2').val() == $('#wynik2').val()) {
            countCorrect();
            cleanSpace();
            los();
            return 1;
        }
        else {
            countWrong(statement);
            if (wrong_los == 1)
                los();
            return 0;
        }
    } else {

        wynik = $('#wynik').val().trim().toLowerCase();
        compare_wynik = wynik = str_replace(' ', '', wynik);

        compare_odp = odp = odp.trim().toLowerCase();
        compare_odp = str_replace(' ', '', odp);

        // console.log('o '+odp);
        // console.log('w '+wynik);
        // console.log(compare_odp.length);
        // console.log(compare_wynik.length);
        // console.log(compare_odp === compare_wynik);

        if (compare_odp == compare_wynik) {
            countCorrect();
            cleanSpace();
            los();
            return 1;
        }
        else {
            if (wrong_los == 1)
                los();
            countWrong(statement);
            return 0;
        }

        $('input[name=odp]').focus();
    }
}


function createCountWrong() {
    // ma losować przykład po błędnej odpowiedzi
    return 1; // domyślnie 1 - czyli ma losować, nadpisujemy funkcję w pliku z zadaniem
}