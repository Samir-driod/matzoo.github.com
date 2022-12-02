limit = 23;

function los(last=null) {
    // los
    var x = Math.round(Math.random() * limit);

    tab = [
        ['rownoleglobok2','P = a·h','<img src="imgtask/610/p_erfn2.png">','P = 2(a+b)'],
        ['rownoleglobok','P = a·h','P = 2(a+b)','P = a·b'],
        ['rownoleglobok','Obw = 2(a+b)','Obw = a·h','<img src="imgtask/610/o_arhn2.png">'],
        ['romb2','Obw = 4·a','Obw = a·a','<img src="imgtask/610/o_erfn2.png">'],
        ['romb2','<img src="imgtask/610/p_erfn2.png">','P = a·a','P = 4·a'],
        ['romb2','P = a·h','P = a·a','P = e·f'],
        ['romb','P = a·h','P = a·a','P = 2(a·h)'],
        ['trapez2','<img src="imgtask/610/p_apbrhn2.png">','<img src="imgtask/610/p_epfn2.png">','<img src="imgtask/610/p_apbncpd.png">'],
        ['trapez','<img src="imgtask/610/p_apbrhn2.png">','P = 2·(a+b)','<img src="imgtask/610/p_apbncpd.png">'],
        ['trapez','Obw = a+b+c+d','Obw = 2·(a+b)','<img src="imgtask/610/o_apbn2rh.png">'],
        ['prostokat2','Obw = 2a+2b','Obw = 2·(a+d)','Obw = a·b'],
        ['prostokat2','P = a·b','<img src="imgtask/610/p_ardn2.png">','P = 2·(a+b)'],
        ['prostokat2','Obw = 2·(a+b)','Obw = 2·(a+d)','Obw = a·b'],
        ['kwadrat2','Obw = 4·a','Obw = 2·(a+d)','Obw = a·a'],
        ['kwadrat2','P = a·a','<img src="imgtask/610/p_ardn2.png">','P = 4·a'],
        ['trojkat2','<img src="imgtask/610/p_crh2n2.png">','P = a·h','P = a+b+c'],
        ['trojkat2','Obw = a+b+c','<img src="imgtask/610/o_arhn2.png">','<img src="imgtask/610/o_crh2n2.png">'],
        ['trojkat2','Obw = a+b+c','<img src="imgtask/610/o_arhn2.png">','Obw = a+b+c+h+h<sub>2</sub>'],
        ['trojkat','Obw = a+b+c','Obw = 2·(a+b+c)','Obw = a+b+c+h'],
        ['trojkat','<img src="imgtask/610/p_arhn2.png">','P = a·h','P = a+b+c'],
        ['trojkat3','Obw = a+b+c','<img src="imgtask/610/o_arbn2.png">','<img src="imgtask/610/o_apbpcn2.png">'],
        ['trojkat3','<img src="imgtask/610/p_arbn2.png">','<img src="imgtask/610/p_apnb2.png">','P = a+b+c'],
        ['trojkat4','Obw = a+b+c','<img src="imgtask/610/o_arhn2.png">','<img src="imgtask/610/o_apbpcn2.png">'],
        ['trojkat4','<img src="imgtask/610/p_arhn2.png">','<img src="imgtask/610/p_arbn2.png">','<img src="imgtask/610/p_apbpcn2.png">'],        
    ];
//    while (tab[x][0]==last) x = Math.round(Math.random() * 23);
//
//    last = x;
    
    var x = Math.round(Math.random() * limit);
    //poprzednie
    previous = $('#previous').val();
    previous_tab = previous.split(';');
        
    if ((previous_tab.length)>=20) { previous = ''; previous_tab = ''; }
    this_example = x.toString();
    while (previous_tab && jQuery.inArray(this_example,previous_tab)!=-1) {
        x = Math.round(Math.random() * limit);
        this_example = x.toString();
    }    
    $('#previous').val(previous+this_example+';');          
    
    
    
    wyrazenie = tab[x][0];
    zdanie = '<p class=center><img src="imgtask/'+wyrazenie+'.png" alt="figura" /></p>';
    $('#zadanie').html(zdanie + '<input type="hidden" id="odp" name="odp"/><br>');

    var example = Math.round(Math.random() * 2);
    if (example == 1) {
        $('#zadanie').append('<a class="btn btn-lsuccess wyrazm margin10 text-black s35" style="font-weight: 300" onclick="klik(1)"> ' + tab[x][1] + '</a>');
        $('#zadanie').append('<a class="btn btn-lsuccess wyrazm margin10 text-black s35" style="font-weight: 300" onclick="klik(2)"> ' + tab[x][2] + '</a>');
        $('#zadanie').append('<a class="btn btn-lsuccess wyrazm margin10 text-black s35" style="font-weight: 300" onclick="klik(3)"> ' + tab[x][3] + '</a>');
        
    } else if (example == 2) {
        $('#zadanie').append('<a class="btn btn-lsuccess wyrazm margin10 text-black s35" style="font-weight: 300" onclick="klik(2)"> ' + tab[x][2] + '</a>');
        $('#zadanie').append('<a class="btn btn-lsuccess wyrazm margin10 text-black s35" style="font-weight: 300" onclick="klik(1)"> ' + tab[x][1] + '</a>');
        $('#zadanie').append('<a class="btn btn-lsuccess wyrazm margin10 text-black s35" style="font-weight: 300" onclick="klik(3)"> ' + tab[x][3] + '</a>');
    } else if (example == 0) {
        $('#zadanie').append('<a class="btn btn-lsuccess wyrazm margin10 text-black s35" style="font-weight: 300" onclick="klik(3)"> ' + tab[x][3] + '</a>');
        $('#zadanie').append('<a class="btn btn-lsuccess wyrazm margin10 text-black s35" style="font-weight: 300" onclick="klik(2)"> ' + tab[x][2] + '</a>');
        $('#zadanie').append('<a class="btn btn-lsuccess wyrazm margin10 text-black s35" style="font-weight: 300" onclick="klik(1)"> ' + tab[x][1] + '</a>');
    }
    var popr = 1;
    $('#zadanie').append('<br>');
    $('#wynik').val(popr);
    $('#odp').focus();

}


function klik(em) {

    $('#odp').val(em);
    obliczEnter();

}



$(document).ready(function() {

    $('#zadanie').addClass('tekstowe');  
    $('#zadanie').addClass('text-center');  
    los();


});


