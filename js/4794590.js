frag = 0;
x = 0;
i = 0;
odkryte = [];

function generatePuzzle() {
    los(1);
    bglos  = Math.round(Math.random()*128)+1;
    if (bglos>9) bgimage = 'img/puzzle/'+bglos+'.jpg';
    else bgimage = 'img/puzzle/0'+bglos+'.jpg';
    elementow = 24;
    cols = 6;
    rows = 4;
    rozmiar = 85;

    // generowanie klocków
    frag = Math.round(Math.random()*(elementow-1)); 
    //$('#puzzle').html('<div style="position:absolute;background-image: url(img/puzzle/puzzle510.png);width: 510px;height: 336px;"></div>');
    $('#puzzle').addClass('fragmenty514');
    $('#puzzle').css('background-image','url('+bgimage+')');
    $('#puzzle').css('position','relative');
      $('#puzzle').css('width','511px');
    $('#puzzle').append('<div id="0" style="position:absolute;background-image:url(img/puzzle/bg/1.png);height:140px;width:140px;background-repeat:no-repeat;top:1px"></div>');
    $('#puzzle').append('<div id="1" style="position:absolute;background-image:url(img/puzzle/bg/2.png);height:140px;width:140px;background-repeat:no-repeat;left:81px;top:1px"></div>');
    $('#puzzle').append('<div id="2" style="position:absolute;background-image:url(img/puzzle/bg/3.png);height:140px;width:140px;background-repeat:no-repeat;left:164px;top:1px"></div>');
    $('#puzzle').append('<div id="3" style="position:absolute;background-image:url(img/puzzle/bg/4.png);height:140px;width:140px;background-repeat:no-repeat;left:251px;top:1px"></div>');
    $('#puzzle').append('<div id="4" style="position:absolute;background-image:url(img/puzzle/bg/5.png);height:140px;width:140px;background-repeat:no-repeat;left:317px;top:1px"></div>');
    $('#puzzle').append('<div id="5" style="position:absolute;background-image:url(img/puzzle/bg/6.png);height:140px;width:140px;background-repeat:no-repeat;left:422px;top:1px"></div>');
    $('#puzzle').append('<div id="6" style="position:absolute;background-image:url(img/puzzle/bg/7.png);height:140px;width:140px;background-repeat:no-repeat;left:0px;top:64px"></div>');
    $('#puzzle').append('<div id="7" style="position:absolute;background-image:url(img/puzzle/bg/8.png);height:140px;width:140px;background-repeat:no-repeat;left:55px;top:65px"></div>');
    $('#puzzle').append('<div id="8" style="position:absolute;background-image:url(img/puzzle/bg/9.png);height:140px;width:140px;background-repeat:no-repeat;left:164px;top:82px"></div>');
    $('#puzzle').append('<div id="9" style="position:absolute;background-image:url(img/puzzle/bg/10.png);height:140px;width:140px;background-repeat:no-repeat;left:251px;top:81px"></div>');
    $('#puzzle').append('<div id="10" style="position:absolute;background-image:url(img/puzzle/bg/11.png);height:140px;width:140px;background-repeat:no-repeat;left:339px;top:54px"></div>');
    $('#puzzle').append('<div id="11" style="position:absolute;background-image:url(img/puzzle/bg/12.png);height:140px;width:140px;background-repeat:no-repeat;left:425px;top:81px"></div>');

    $('#puzzle').append('<div id="12" style="position:absolute;background-image:url(img/puzzle/bg/13.png);height:140px;width:140px;background-repeat:no-repeat;left:0px;top:170px"></div>');
    $('#puzzle').append('<div id="13" style="position:absolute;background-image:url(img/puzzle/bg/14.png);height:140px;width:140px;background-repeat:no-repeat;left:53px;top:170px"></div>');
    $('#puzzle').append('<div id="14" style="position:absolute;background-image:url(img/puzzle/bg/15.png);height:140px;width:140px;background-repeat:no-repeat;left:162px;top:150px"></div>');
    $('#puzzle').append('<div id="15" style="position:absolute;background-image:url(img/puzzle/bg/16.png);height:140px;width:140px;background-repeat:no-repeat;left:230px;top:169px"></div>');
    $('#puzzle').append('<div id="16" style="position:absolute;background-image:url(img/puzzle/bg/17.png);height:140px;width:140px;background-repeat:no-repeat;left:341px;top:149px"></div>');
    $('#puzzle').append('<div id="17" style="position:absolute;background-image:url(img/puzzle/bg/18.png);height:140px;width:140px;background-repeat:no-repeat;left:425px;top:152px"></div>');
    $('#puzzle').append('<div id="18" style="position:absolute;background-image:url(img/puzzle/bg/19.png);height:140px;width:140px;background-repeat:no-repeat;left:0px;top:253px"></div>');
    $('#puzzle').append('<div id="19" style="position:absolute;background-image:url(img/puzzle/bg/20.png);height:140px;width:140px;background-repeat:no-repeat;left:79px;top:234px"></div>');
    
    $('#puzzle').append('<div id="20" style="position:absolute;background-image:url(img/puzzle/bg/21.png);height:140px;width:140px;background-repeat:no-repeat;left:140px;top:227px"></div>');
    $('#puzzle').append('<div id="21" style="position:absolute;background-image:url(img/puzzle/bg/22.png);height:140px;width:140px;background-repeat:no-repeat;left:229px;top:249px"></div>');
    $('#puzzle').append('<div id="22" style="position:absolute;background-image:url(img/puzzle/bg/23.png);height:140px;width:140px;background-repeat:no-repeat;left:320px;top:230px"></div>');
    $('#puzzle').append('<div id="23" style="position:absolute;background-image:url(img/puzzle/bg/24.png);height:140px;width:140px;background-repeat:no-repeat;left:398px;top:252px"></div>');
//    for (i=0;i<elementow;i++) {
//        $('#puzzle').append('<div class="fragment600 size85" id="'+i+'" style="background-image:none;background-color:#119344"></div>');
//    }

}

function los(losuj) {
    // los
    var x = Math.round(Math.random() * 30);
    var y = Math.round(Math.random() * 30);
    var wynik = x - y;
    while (wynik<0) {
        x = Math.round(Math.random() * 30);
        y = Math.round(Math.random() * 30);
        wynik = x - y;
    }

    // wyswietl los
    var dobre = $('.ok').html();
    if(dobre!=0 && dobre%24==0 && !losuj) {
        odkryte = [];
        var grade = $('#grade').val();
        $('#zadanie').html('<div style="margin: 10px 10px 10px 30px;font-weight: normal;" class="ok1 s25 alert alert-success">BRAWO! Dobra robota. <button name="im" onclick="submitForm()" class="btn btn-darkgreen s17">GRAJ DALEJ</button></div>');  
        $(document).keydown(function (e) {
            if (e.keyCode == 13) {
                return false;
            }
        });
    } else {
        $('#zadanie').html(x + ' - ' + y + ' = <input name="odp" type="tel" class="wyraz1" id="odp" size="1" maxlength="3" autocomplete="off" />\n\
    <input type="hidden" name="x" id="x" value="' + x + '" /><input type="hidden" name="y" id="y" value="' + y + '" />');
        $('#wynik').val(wynik);
    }
    $('input[name=odp]').focus();
}

function submitForm() {
    var dobre = $('.ok').html();
    $('#d').val(dobre);
    $('input[name=action]').val('preroll');
    var zle = $('.wrong').html();
    $('#z').val(zle);
    $('#form1').submit();
}


function createStatement() {
    // tworzenie poprawnej odpowiedzi systemowej
    x = parseInt($('#x').val());
    y = parseInt($('#y').val());
    wyn = x - y;
    var statement = ' ' + x + ' - ' + y + ' = ' + wyn + ' <span class="s15 pull-right black" style="font-family: ">wpisano: ' + $('#odp').val() + '</span>';
    return statement;
}

function keyboardEnter(wrong_los) {

    // obsluga klawisza enter
    $(this).keydown(function (e) {
        if (e.keyCode == 13) {
            var statement = createStatement();
            obliczEnter(wrong_los, statement);
            return false;
        }
    });    
}


function obliczEnter(wrong_los, statement) {
    
    if (checkEmpty()) return false; 
    
    var odp = $('#odp').val();
    odp = str_replace(' ', '', odp);


        if (odp == $('#wynik').val()) {
            countCorrect();
            cleanSpace();
            
            
            // odkrywanie kawalka
            frag = Math.round(Math.random()*(elementow-1));
            while (jQuery.inArray(frag,odkryte)!=-1) {
               frag = Math.round(Math.random()*(elementow-1));
            }
            console.debug(odkryte);
            odkryte.push(frag);
            i = frag;
                if (i<(1*cols))       {       x=i*rozmiar;           a=0;     }
            else if (i<(2*cols)) {       x=(i-(1*cols))*rozmiar;       a=1;     }
            else if (i<(3*cols)) {       x=(i-(2*cols))*rozmiar;      a=2;     }
            else if (i<(4*cols)) {       x=(i-(3*cols))*rozmiar;      a=3;     }
            else if (i<(5*cols)) {       x=(i-(4*cols))*rozmiar;      a=4;     }
            
            y=a*rozmiar;
            $('#'+i).css('background-image','none');
            //$('#'+i).css('background-position','-'+x+'px -'+y+'px');
            los();
            
        }
        else {
            if (wrong_los == 1)
                los();
            countWrong(statement);
        }

        $('input[name=odp]').focus();

}

$(document).ready(function () {

    keyboardEnter(1);
    $('#puzzle').addClass('margincenter');
    generatePuzzle();

});