class Game {
    content = [];
    userResult = [];
    correctResult = [];
    
    addExample (content, userResult, correctResult) {
        this.content.push(content);
        this.userResult.push(userResult);
        this.correctResult.push(correctResult);
        
        let myExample = '<span class="small">'+this.content.length+'.</span> '+content+' = '+userResult;
        if (userResult == correctResult) {
            myExample = myExample+' <i class="fa fa-smile-o text-lsuccess" aria-hidden="true"></i>';
        } else {
            myExample = myExample+' <i class="fa fa-remove text-danger" aria-hidden="true"></i>';
        }
        let tdId = Math.ceil(this.content.length/10);
        $('#myResults td#'+tdId).append(''+myExample+' <br>');
        $('#myResultsContent').append(content+'='+userResult+';');
        //console.log(tdId);
        //if (this.content.length%2==0) $('#myResults tr').append('</td><td>');
    }
}


const game = new Game();


function generatePDF() {
    // Choose the element that our invoice is rendered in.
    const element = document.getElementById("myResults");
    // Choose the element and save the PDF for our user.
    //    html2pdf().from(element).save();

    $('#timeNow').html(genClock);

    const filename = new Date().getTime().toString(36);
    $("#myResults").show();
    html2pdf(element, {
        margin: 1,
        filename: $('#task_id').val()+'-'+filename+'.pdf',
        image: { type: 'jpeg', quality: 1 },
        html2canvas: { scale: 1.75,  logging: true }
    });
    $("#myResults").fadeOut();
    
    
//    $.ajax({
//        type: "POST",
//        url: "web/ajax_pdfy.php",
//        data: "raport=" + $('#task_id').val() + "&ok=" + $('.ok').html() + "&wrong=" + $('.wrong').html() + "&gametime=" + $('#gameTime').html() + "&content=" + $('#myResultsContent').html()
//    });
}


function genClock() {
    const time = new Date();
    const hours = time.getHours() < 10 ? "0"+ time.getHours() : time.getHours();
    const minutes = time.getMinutes() < 10 ? "0"+ time.getMinutes() : time.getMinutes();
    return `${hours}:${minutes}`;
}



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
    
////  zapis do bazy
//    const task_id = $('#task_id').val();
//    if (task_id==250 || task_id==252 || task_id==254 || task_id==56 || task_id==26 || task_id==28 || task_id==36 || task_id==37 || task_id==38 || task_id==46 || task_id==48 || task_id==49 || task_id==50 || task_id==51 || task_id==103) {
//        $.ajax({
//            type: "POST",
//            url: "web/ajax_tabliczka.php",
//            data: "class_id=" + $('#klasa_id').val() + "&task_id=" + task_id + "&x=" + $('#x').val() + "&y=" + $('#y').val() + "&odp=" + $('#odp').val() + "&user_id=" + $('#user_id').val() + "&game_id=" + $('#game_id').val() + "&exampl_time=" + $('#example_time').val() + ""
//        });     
//    }
////  end zapis      
    milisecond = 0;
    //const myMClock = setInterval(miliclock, 100);
    
    game.addExample($('#x').val()+' '+$('#znak').val()+' '+$('#y').val(),$('#odp').val(),$('#wynik').val());
    

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


$(document).ready(function () {
    los();
    blockSpaceInInput();
    // enter z zatrzymaniem na blednej odpowiedzi
    keyboardEnterOne(createStatement());
    dynamicallyLoadScript('js/html2pdf.bundle.min.js'); 
    
    $('#game_id').val(Math.round(Math.random() * 9999999) + 1000000);
    const myMClock = setInterval(miliclock, 100);
  
        
});



let minutes = 0;
let seconds = 0;

const clock = () => {

    seconds = parseInt(seconds)+1;
    if (parseInt(seconds)%60==0) {
       minutes = parseInt(minutes)+1;
       seconds = 0;
    }
    minutes = parseInt(minutes) < 10 ? "0"+ parseInt(minutes) : parseInt(minutes);
    seconds = parseInt(seconds) < 10 ? "0"+ parseInt(seconds) : parseInt(seconds);
    
    document.querySelector('#gameTime').textContent = `${minutes}:${seconds}`;
}


const myClock = setInterval(clock, 1000);


let milisecond = 0;

const miliclock = () => {

    milisecond = parseInt(milisecond)+1;
    
    document.querySelector('#example_time').value = `${milisecond}`;
}