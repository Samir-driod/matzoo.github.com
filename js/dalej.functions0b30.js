function isEmptyOne() {
    if ($('#odp').val()=='') { 
        $('#dobrze').hide();
        $('#zle_odp').hide();
        $('#emptyResult').fadeIn('fast').delay(1000).fadeOut('fast');
        return true;
    }
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


// nowe zadanie po zatrzymaniu blednego rozwiazania
function prepareNewTask() {
    
//        console.log('prepareNewTask');
    $('#dobrze').hide();
    $('#zle_odp').hide();

    var klasa_id = $('input[name=klasa_id]').val(); 
    $('#rozwiaz').css('background-image','url(img/buttons/but_'+klasa_id+'.png)');        
    $('#rozwiaz').attr('onclick','obliczOne(createStatement())');    
    los();
    keyboardEnterOne(createStatement());

    $('input[name=action]').val('rozwiaz'); 
    
    blockSpaceInInput();
    return false;
}  



// zatrzymanie aby mozna bylo zobaczyc jaki sie popelnilo blad
function stoppedWrong() {
        $('input[type=text]').val(''); 
        $('input[name=action]').val('dalej'); 
        $('input[type=tel]').attr('disabled',true); 
        $('input[type=text]').attr('disabled',true);
        $('#dalej').attr('disabled',false);
        $('#dalej').focus();
        var klasa_id = $('input[name=klasa_id]').val(); 
        $('#rozwiaz').css('background-image','url(img/buttons/but_'+klasa_id+'d.png)');   
        $('#rozwiaz').attr('onclick','prepareNewTask()');
        
}



// obliczanie z zatrzymaniem w przypadku bledu
function obliczOne(statement) {

    if (isEmptyOne()) return false;

    if ($('#odp').val() == $('#wynik').val()) {
        countCorrect();
        cleanSpace();
        los();
        keyboardEnterOne(createStatement());
        blockSpaceInInput();
        return 1;
    } else {
        countWrong(statement);
        stoppedWrong();
        return 0;
    }

}


function createStatement() {
    // tworzenie poprawnej odpowiedzi systemowej
    x = ($('#x').val());
    y = ($('#y').val());
    znak = ($('#znak').val());
    wyn = ($('#wynik').val());
    var statement = ' ' + x + ' ' + znak + ' ' + y + ' = ' + wyn;
    return statement;
}


function createCountWrong() {
    // nadpisanie funkcji z ananasy.js, aby nie losowal po blednej
    return 3; // domyślnie 1 - czyli ma losować, nadpisujemy funkcję w pliku z zadaniem
}

function blockSpaceInInput() {
    
    $('#odp').keypress(function(event) {
        if (event.keyCode == 32) {
            return false;
        }
    });    
}


function sortNumber(a,b) {
    return a - b;
}


$(document).ready(function () {
    los();
    blockSpaceInInput();
    // enter z zatrzymaniem na blednej odpowiedzi
    keyboardEnterOne(createStatement());
        
});