
limit = 10;
function los() {
        $('#zadanie').html('');
    // los
    limit = 5;
    slimit = 6;
    var s = Math.round(Math.random() * limit);
    var x = Math.round(Math.random() * 5) + 1;
    var a = Math.round(Math.random() * 5) + 1;
    var b = Math.round(Math.random() * 5) + 1;
    while (a == x || b == x || a == b) {
        x = Math.round(Math.random() * 5) + 1;
        a = Math.round(Math.random() * 5) + 1;
        b = Math.round(Math.random() * 5) + 1;
    }
        var wynik = x;
        
        var example = Math.round(Math.random() * 2);

        // wyswietl los
        $('#zadanie').html('');
        $('#wynik').val(wynik);

        for (i = 0; i < x; i++) {
            $('#zadanie').append('<img src="imgtask/toy' + s + '.png" style="margin:2px 2px 12px;" /> ');
        }

        if (example == 1) {
            $('#guziki').append('<a class="btn btn-info btn-matzoo33 gradient-kropki3 s50" onclick="klik('+wynik+')">' + x + '</a> ');
            $('#guziki').append('<a class="btn btn-info btn-matzoo33 gradient-kropki3 s50" onclick="klik(' + a + ')">' + a + '</a> ');
            $('#guziki').append('<a class="btn btn-info btn-matzoo33 gradient-kropki3 s50" onclick="klik(' + b + ')">' + b + '</a> ');
        } else if (example == 2) {

            $('#guziki').append('<a class="btn btn-info btn-matzoo33 gradient-kropki3 s50" onclick="klik(' + a + ')">' + a + '</a> ');
            $('#guziki').append('<a class="btn btn-info btn-matzoo33 gradient-kropki3 s50" onclick="klik('+wynik+')">' + x + '</a> ');
            $('#guziki').append('<a class="btn btn-info btn-matzoo33 gradient-kropki3 s50" onclick="klik(' + b + ')">' + b + '</a> ');
            d
        } else {
            $('#guziki').append('<a class="btn btn-info btn-matzoo33 gradient-kropki3 s50" onclick="klik(' + b + ')">' + b + '</a> ');
            $('#guziki').append('<a class="btn btn-info btn-matzoo33 gradient-kropki3 s50" onclick="klik(' + a + ')">' + a + '</a> ');
            $('#guziki').append('<a class="btn btn-info btn-matzoo33 gradient-kropki3 s50" onclick="klik('+wynik+')">' + x + '</a> ');

        }
    }



    function oblicz() {
        var dobre = $('.ok').html();
        var zle = $('.wrong').html();

        if (em == $('#wynik').val()) {

            $('#tresc').hide();
            $('#zle').hide();
            $('#dobrze').hide();
            $('#dobrze').fadeIn("fast");

            $('#odp').val('');
            $('#guziki').empty();


            dobre = parseInt(dobre) + 1;
            zle = zle;

            los();

        }
        else {
            $('#tresc').hide();
            $('#dobrze').hide();
            $('#zle').hide();
            $('#zle').fadeIn("fast");
            $('#odp').val('');
            zle = parseInt(zle) + 1;
            dobre = dobre;
        }

        $('.ok').empty();
        $('.wrong').empty();
        $('.ok').append(dobre);
        $('.wrong').append(zle);
    }

    function klik(em) {
        $('#odp').val(em);
        obliczEnter();
    }

    $(document).ready(function () {


        los();



}
);


