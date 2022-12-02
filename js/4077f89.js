

function createStatement() {}


$(document).ready(function() {

dobre = $('.ok').html();
zle = $('.wrong').html();
    
    $('#zadanie').addClass('tekstowe');  
    ilosc = 16;
    
    los();
    keyboardEnter(0);

});



function los() {
    $('#odp2').val('');
    $('#odp3').val('');

    // los
liczby = ['1','0,5','2','-7,5','38','-2','√16','√4','24/5','√2','4','0,5','256','0','-0,6','√38','-√2','√25','√100','17/2','√12','4200','√81','1,(3)','√50','-1/4'];




var count_examples = liczby.length-1;
var a = Math.round(Math.random()*count_examples);
var example = Math.round(Math.random()*1);
    
    
    
    while(wynik>10) {
        x = Math.round(Math.random()*8)+2;
        y = Math.round(Math.random()*8)+2;
        wynik = x+y;
    }
if (example==1) {
while (a==13) a = Math.round(Math.random()*count_examples);
        var tresc=' <p class="wyrazm text-left dblue">Liczba '+liczby[a]+' jest:</p>\n\
    <p class="">\n\
<a class="btn btn-default s21 margin10" onclick="click407($(this))" id="na">naturalna</a><br>\n\
<a class="btn btn-default s21 margin10" onclick="click407($(this))" id="ca">całkowita</a> \n\
<a class="btn btn-default s21 margin10" onclick="click407($(this))" id="wy">wymierna</a><br>\n\
<a class="btn btn-default s21 margin10" onclick="click407($(this))" id="nic">żadne z powyższych</a>\n\
<input type="hidden" name="na" value="0"/>\n\
<input type="hidden" name="ca" value="0"/>\n\
<input type="hidden" name="wy" value="0"/>\n\
<input type="hidden" name="nic" value="0" />\n\
<input type="hidden" id="a" value="'+a+'" />\n\
<input type="hidden" id="example" value="'+example+'" />\n\
</p>';    
}
    else 
        var tresc=' <p class="wyrazm text-left dblue">Liczba '+liczby[a]+' jest:</p>\n\
    <p class="">\n\
<a class="btn btn-default s21 margin10" onclick="click407($(this))" id="dod">dodatnia</a> \n\
<a class="btn btn-default s21 margin10" onclick="click407($(this))" id="uj">ujemna</a><br>\n\
<a class="btn btn-default s21 margin10" onclick="click407($(this))" id="ca">całkowita</a> \n\
<a class="btn btn-default s21 margin10" onclick="click407($(this))" id="wy">wymierna</a><br>\n\
<a class="btn btn-default s21 margin10" onclick="click407($(this))" id="nic">żadne z powyższych</a>\n\
<input type="hidden" name="dod" value="0"/>\n\
<input type="hidden" name="uj" value="0"/>\n\
<input type="hidden" name="ca" value="0"/>\n\
<input type="hidden" name="wy" value="0"/>\n\
<input type="hidden" name="nic" value="0" />\n\
<input type="hidden" id="a" value="'+a+'" />\n\
<input type="hidden" id="example" value="'+example+'" />\n\
</p>';




    // wyswietl los
    
    $('#zadanie').html(tresc + '<p><input name="odp" type="hidden" id="odp" size="1" maxlength="2" autocomplete="off" value="1" /></p>');
    $('#odp').focus();

}

function oblicz() {
    ok=0;
    // los

    a=$('#a').val();
    example=$('#example').val();
    
    ca=$('input[name=ca]').val();
    wy=$('input[name=wy]').val();
    nic=$('input[name=nic]').val();
    if (example==1) {
liczby    = ['1','0,5','2','-7,5','38','-2','√16','√4','24/5','√2','4','0,5','256','0','-0,6','√38','-√2','√25','√100','17/2','√12','4200','√81','1,(3)','√50','-1/4'];
naturalna = ['1',  '0','1',   '0', '1', '0',  '1',  '1',  '0',  '0','1',  '0',  '1','0',   '0',  '0',  '0',  '1',    '1',   '0',  '0',   '1',  '1',    '0',  '0',    '0'];
calkowita = ['1',  '0','1',   '0', '1', '1',  '1',  '1',  '0',  '0','1',  '0',  '1','1',   '0',  '0',  '0',  '1',    '1',   '0',  '0',   '1',  '1',    '0',  '0',    '0'];
wymierna  = ['1',  '1','1',   '1', '1', '1',  '1',  '1',  '1',  '0','1',  '1',  '1','1',   '1',  '0',  '0',  '1',    '1',   '1',  '0',   '1',  '1',    '1',  '0',    '1'];
zadne     = ['0',  '0','0',   '0', '0', '0',  '0',  '0',  '0',  '1','0',  '0',  '0','0',   '0',  '1',  '1',  '0',    '0',   '0',  '1',   '0',  '0',    '0',  '1',    '0'];    
            
        na=$('input[name=na]').val();
        if (naturalna[a]==na && calkowita[a]==ca && wymierna[a]==wy && zadne[a]==nic) ok=1;
    } else {
liczby    = ['1','0,5','2','-7,5','38','-2','√16','√4','24/5','√2','4','0,5','256','0','-0,6','√38','-√2','√25','√100','17/2','√12','4200','√81','1,(3)','√50','-1/4'];
dodatnia  = ['1',  '1','1',   '0', '1', '0',  '1',  '1',  '1',  '1','1',  '1',  '1','0',   '0',  '1',  '0',  '1',    '1',   '1',  '1',   '1',  '1',    '1',  '1',    '0'];
ujemna    = ['0',  '0','0',   '1', '0', '1',  '0',  '0',  '0',  '0','0',  '0',  '0','0',   '1',  '0',  '1',  '0',    '0',   '0',  '0',   '0',  '0',    '0',  '0',    '1'];
calkowita = ['1',  '0','1',   '0', '1', '1',  '1',  '1',  '0',  '0','1',  '0',  '1','1',   '0',  '0',  '0',  '1',    '1',   '0',  '0',   '1',  '1',    '0',  '0',    '0'];
wymierna  = ['1',  '1','1',   '1', '1', '1',  '1',  '1',  '1',  '0','1',  '1',  '1','1',   '1',  '0',  '0',  '1',    '1',   '1',  '0',   '1',  '1',    '1',  '0',    '1'];
zadne     = ['0',  '0','0',   '0', '0', '0',  '0',  '0',  '0',  '0','0',  '0',  '0','0',   '0',  '0',  '0',  '0',    '0',   '0',  '0',   '0',  '0',    '0',  '0',    '0'];    
            
        dod=$('input[name=dod]').val();
        uj=$('input[name=uj]').val();        
        if (dodatnia[a]==dod && ujemna[a]==uj && calkowita[a]==ca && wymierna[a]==wy && zadne[a]==nic) ok=1;
    }
    
       
        
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

function click407(elem) {
    is = $(elem).hasClass('btn-success');
    id = $(elem).attr('id');
    if (!is) {
        $(elem).addClass('btn-success');
        $('input[name='+id+']').val(1);
    }
    else {
        $(elem).removeClass('btn-success');
        $('input[name='+id+']').val(0);
    }
    return false;
}

