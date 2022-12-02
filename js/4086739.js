
function los() {
    // los
    var a = Math.round(Math.random() * 4) + 2;
    var b = 2 * a;
    var x = Math.round(Math.random() * 3);
    if (x==2) { var oa = a; a=2*a; }

    tab = [
        ['-' + a + 'x<sup>2</sup>-' + b + '', '-' + a + '(x<sup>2</sup>+2)', '-' + a + '(x<sup>2</sup>-2)', '-' + a + 'x(x+2)', '' + a + 'x(x-2)'],
        ['' + a + 'x<sup>2</sup>-' + b + '', '' + a + '(x<sup>2</sup>-2)', '-' + a + '(x<sup>2</sup>+2)', '-' + a + 'x(x+2)', '' + a + 'x(x-2)'],
        ['-' + a + 'x<sup>2</sup>-' + b + 'x-2', '-2(' + oa + 'x<sup>2</sup>+' + oa + 'x+1)', '-2(x<sup>2</sup>-' + oa + 'x-1)', '-2x(x+' + a + '+1)', '2(-x-' + oa + 'x-1)'],
        ['-' + a + 'x<sup>2</sup>-' + b + 'x', '-' + a + 'x(x+2)', '-' + a + '(x<sup>2</sup>-2x)', '-' + a + '(x+2)', 'a(x-2x)'],
    ];

    
    wyrazenie = tab[x][0];
    zdanie = 'Po wyłączeniu wspólnego czynnika przed nawias w wyrażeniu <span class="wyrazm">' + wyrazenie + '</span> otrzymamy:';
    $('#zadanie').html(zdanie + '<br><input type="hidden" id="odp" name="odp"/><br>');

    var example = Math.round(Math.random() * 2);
    if (example == 1) {
        $('#zadanie').append('<a class="btn btn-lsuccess wyrazm margin10 text-black s35" style="font-weight: 300" onclick="klik(1)"> ' + tab[x][1] + '</a>');
        $('#zadanie').append('<a class="btn btn-lsuccess wyrazm margin10 text-black s35" style="font-weight: 300" onclick="klik(2)"> ' + tab[x][2] + '</a><br>');
        $('#zadanie').append('<a class="btn btn-lsuccess wyrazm margin10 text-black s35" style="font-weight: 300" onclick="klik(3)"> ' + tab[x][3] + '</a>');
        $('#zadanie').append('<a class="btn btn-lsuccess wyrazm margin10 text-black s35" style="font-weight: 300" onclick="klik(3)"> ' + tab[x][4] + '</a>');
    } else if (example == 2) {
        $('#zadanie').append('<a class="btn btn-lsuccess wyrazm margin10 text-black s35" style="font-weight: 300" onclick="klik(2)"> ' + tab[x][2] + '</a>');
        $('#zadanie').append('<a class="btn btn-lsuccess wyrazm margin10 text-black s35" style="font-weight: 300" onclick="klik(1)"> ' + tab[x][1] + '</a><br>');
        $('#zadanie').append('<a class="btn btn-lsuccess wyrazm margin10 text-black s35" style="font-weight: 300" onclick="klik(1)"> ' + tab[x][4] + '</a>');
        $('#zadanie').append('<a class="btn btn-lsuccess wyrazm margin10 text-black s35" style="font-weight: 300" onclick="klik(3)"> ' + tab[x][3] + '</a>');
    } else if (example == 0) {
        $('#zadanie').append('<a class="btn btn-lsuccess wyrazm margin10 text-black s35" style="font-weight: 300" onclick="klik(3)"> ' + tab[x][4] + '</a>');
        $('#zadanie').append('<a class="btn btn-lsuccess wyrazm margin10 text-black s35" style="font-weight: 300" onclick="klik(3)"> ' + tab[x][3] + '</a><br>');
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


