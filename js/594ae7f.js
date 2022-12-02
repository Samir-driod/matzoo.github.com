

function createStatement() {}


$(document).ready(function() {

dobre = $('.ok').html();
zle = $('.wrong').html();
    
    $('#zadanie').addClass('s21');  
    $('#zadanie').removeClass('wyraz1');  
    $('#zadanie').addClass('wyrazm');  
    ilosc = 16;
    
    los();
    keyboardEnter(0);

});



function los() {
    $('#odp2').val('');
    $('#odp3').val('');


var example = Math.round(Math.random()*10);
var a = Math.round(Math.random()*500);

if (example==1) a = a*100;
if (example==1) a = a*10;
if (example==2) a = a*5;
if (example==3) a = a*3;
if (example==4) a = a*2;
if (example==5) a = a*4;
if (example==6) a = a*6;
if (example==7) a = a*9;


        var tresc='<table class="table table-condensed table-bordered" style="width:auto;margin:10px auto">\n\
    <tr>\n\
        <td>&nbsp;Liczba:&nbsp;</td>\n\
        <td colspan="4" class="text-center">&nbsp;jest podzielna przez:&nbsp;</td>\n\
    </tr>\n\
    <tr>\n\
        <td rowspan="2" class="wyraz s40 text-center" style="vertical-align:middle;font-weight:normal">'+a+'</td>\n\
        <td class="text-center">2</td>\n\
        <td class="text-center">3</td>\n\
        <td class="text-center">5</td>\n\
        <td class="text-center">10</td>\n\
    </tr>\n\
    <tr>\n\
        <td><a class="btn btn-default s15 margin10" onclick="click594($(this))" style="width:50px" id="link2"><i class="fa fa-close" aria-hidden="true"></i></a></td>\n\
        <td><a class="btn btn-default s15 margin10" onclick="click594($(this))" style="width:50px" id="link3"><i class="fa fa-close" aria-hidden="true"></i></a></td>\n\
        <td><a class="btn btn-default s15 margin10" onclick="click594($(this))" style="width:50px" id="link5"><i class="fa fa-close" aria-hidden="true"></i></a></td>\n\
        <td><a class="btn btn-default s15 margin10" onclick="click594($(this))" style="width:50px" id="link10"><i class="fa fa-close" aria-hidden="true"></i></a></td>\n\
    </tr>\n\
</table>\n\
<input type="hidden" id="a" value="'+a+'" />\n\
<input type="hidden" id="example" value="'+example+'" />\n\
<input type="hidden" id="2" name="input2" value="0" />\n\
<input type="hidden" id="3" name="input3" value="0" />\n\
<input type="hidden" id="5" name="input5" value="0" />\n\
<input type="hidden" id="10" name="input10" value="0" />\n\
</p>';    





    // wyswietl los
    
    $('#zadanie').html(tresc + '<p><input name="odp" type="hidden" id="odp" size="1" maxlength="2" autocomplete="off" value="1" /></p>');
    $('#odp').focus();

}

function oblicz() {
    ok=0;
    // los

    a=$('#a').val();
           
    marked2   = $('input[name=input2]').val();
    marked3   = $('input[name=input3]').val();
    marked5   = $('input[name=input5]').val();
    marked10  = $('input[name=input10]').val();
    
    ok = 1;
    if ((a%2 == 0   && marked2!=1) || (a%2 != 0   && marked2==1)) ok=0; 
    if ((a%3 == 0   && marked3!=1) || (a%3 != 0   && marked3==1)) ok=0; 
    if ((a%5 == 0   && marked5!=1) || (a%5 != 0   && marked5==1)) ok=0; 
    if ((a%10 == 0  && marked10!=1) || (a%10 != 0   && marked10==1)) ok=0;        
        
    // jesli dobra odpowiedź
    if (ok == 1) {
        countCorrect();
        cleanSpace();
        los();
        
    } // jeśli zła odpowiedź
    else {

        countWrong();
    }   

}

function obliczEnter() {
    ok=0;
    // los

    a=$('#a').val();
           
    marked2   = $('input[name=input2]').val();
    marked3   = $('input[name=input3]').val();
    marked5   = $('input[name=input5]').val();
    marked10  = $('input[name=input10]').val();
    
    ok = 1;
    if ((a%2 == 0   && marked2!=1) || (a%2 != 0   && marked2==1)) ok=0; 
    if ((a%3 == 0   && marked3!=1) || (a%3 != 0   && marked3==1)) ok=0; 
    if ((a%5 == 0   && marked5!=1) || (a%5 != 0   && marked5==1)) ok=0; 
    if ((a%10 == 0  && marked10!=1) || (a%10 != 0   && marked10==1)) ok=0;        
        
    // jesli dobra odpowiedź
    if (ok == 1) {
        countCorrect();
        cleanSpace();
        los();
        
    } // jeśli zła odpowiedź
    else {

        countWrong();
    }   

}
function click594(elem) {
    is = $(elem).hasClass('btn-success');
    link = $(elem).attr('id');
    id = link.substr(4);
    if (!is) {
        $(elem).addClass('btn-success');
        $(elem).html('<i class="fa fa-check" aria-hidden="true"></i>');
        $('input[name=input'+id+']').val(1);
    }
    else {
        $(elem).removeClass('btn-success');
        $(elem).html('<i class="fa fa-close" aria-hidden="true"></i>');
        $('input[name=input'+id+']').val(0);
    }
    return false;
}

