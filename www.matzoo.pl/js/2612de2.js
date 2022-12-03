function los() {
    // los
    //$('.example').hide();
    var x = $('#xx').val();
    //x = 1;
    //$('#zapalki').html();
    $('#zapalkim').html($('#e' + x).html());


}



$(document).ready(function () {

    dobre = $('#d').val();
    zle = $('#z').val();
    los();
    id = '';
    ids = '';


// obsługa dropów
    $("#zapalkim div.liczba div").draggable({
        containment: "#zapalki",
        scroll: false,
        stop: function () {

            id = $(this).attr('id');
            if (id == 'ok' && ids == 'oks') {
                $('#main').append('<audio src="../upload/bravo.mp3" preload="auto" autoplay></audio>');
                $('#tresc').hide();
                $('#zle_odp').hide();
                $('#dobrze').hide();
                $('#dobrze').fadeIn("fast");
                $('#odp').val('');
                $('#guziki').empty();
                dobre = parseInt(dobre) + 1;
                zle = zle;
                $('#zapalki div.liczba div').draggable("disable");
                countCorrect();
            }
            else {
                $(this).css('top', 0);
                $(this).css('left', 0);
                x = ($('#x').val());
                y = ($('#y').val());
                wyn = x * y;
                $('#tresc').hide();
                $('#dobrze').hide();
                $('#zle_odp').hide();
                $('#zle_odp').html($('#zle_poczatek').html());
                $('#zle_odp').fadeIn("fast");
                $('#odp').val('');
                zle = parseInt(zle) + 1;
                dobre = dobre;
                countWrong();
            }
            $('.ok').empty();
            $('.wrong').empty();
            $('.ok').append(dobre);
            $('.wrong').append(zle);
            $('#d').val(dobre);
            $('#z').val(zle);
            id = '';
            ids = '';
        }
    });
    $("#zapalkim div #oks").droppable({
        drop: function (event, ui) {
            $(this).addClass("highlight");
            ids = $(this).attr('id');
        }
    });
    $(".example div").draggable({});
    $(".example div #oks").droppable({});


});

