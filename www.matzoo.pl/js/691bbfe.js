const unit = {
    'g': 'gramów',
    'dag': 'dekagramów',
    'kg': 'kilogramów'
}

const gameBoard = [
    {
        'unitFrom': 'dag',
        'unitTo': 'g',
        'countQuestion': 1,
        'countAnswer': 10
    }, {
        'unitFrom': 'g',
        'unitTo': 'dag',
        'countQuestion': 10,
        'countAnswer': 1
    }, {
        'unitFrom': 'dag',
        'unitTo': 'kg',
        'countQuestion': 100,
        'countAnswer': 1
    }, {
        'unitFrom': 'kg',
        'unitTo': 'dag',
        'countQuestion': 1,
        'countAnswer': 100
    }, {
        'unitFrom': 'kg',
        'unitTo': 'g',
        'countQuestion': 1,
        'countAnswer': 1000
    }, {
        'unitFrom': 'g',
        'unitTo': 'kg',
        'countQuestion': 1000,
        'countAnswer': 1
    }
];


function los() {
    // los
    let losNumber = Math.round(Math.random() * 8) + 1;
    let x = Math.round(Math.random()*(gameBoard.length - 1));
    const examplesLimit = 50;

    // previous
    let previousField = $('#previous');
    let previous = previousField.val();
    let previous_tab = previous.split(';');
    if ((previous_tab.length)>=examplesLimit) { previous = ''; previous_tab = ''; }
    let this_example = x+'-'+losNumber;
    while (previous_tab && jQuery.inArray(this_example,previous_tab)!=-1) {
        losNumber = Math.round(Math.random() * 8) + 1;
        x = Math.round(Math.random()*(gameBoard.length - 1));
        this_example = x+'-'+losNumber;
    }
    console.log(previous_tab+' '+previous_tab.length);
    previousField.val(previous+this_example+';');


    const Game = gameBoard[x];

    let wynik = losNumber * Game.countAnswer;
    let tab = [wynik];
    tab[0] = losNumber;


    for (let i=1; i<4; i++) {
        tab[i] = losNumber*(Math.pow(10,i));
    }
    tab.sort(sortNumber);

    // show task
    const taskDiv = $('#zadanie');
    taskDiv.html('<p> '+losNumber * Game.countQuestion+' '+Game.unitFrom+' ile to '+unit[Game.unitTo]+'?</p> <input type="hidden" id="odp" name="odp"/>');

    const colorsTable = ['pink','info','warning','lsuccess'];
    let randomColor= Math.round(Math.random() * 3);

    for (let i=0; i<4; i++) {
        taskDiv.append('<div class="btn-work btn text-black btn-'+colorsTable[randomColor]+' s30 gradient" onclick="oblicz(\''+wynik+'\',\''+tab[i]+'\')" >'+tab[i]+' '+Game.unitTo+'</div> ');
    }

    $('#wynik').val(wynik);
    $('#odp').focus();

}


function oblicz(x, i) {

    if (x === i) {
        countCorrect();
        cleanSpace();
        los();
    } else {
        const statement = 'Wybrano złą odpowiedź.';
        countWrong(statement);
    }
}


$(document).ready(function() {

    los();
    const taskDiv = $('#zadanie');
    taskDiv
        .removeClass('wyraz1')
        .addClass('wyrazm')
        .addClass('s40')
        .css('line-height','200%');
});