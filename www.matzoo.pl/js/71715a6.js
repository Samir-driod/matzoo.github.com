const limit = 6;
const countKafelki = 3;

function fourMultiplies() {
    examples = [];
    results = [];
    while (examples.length < countKafelki) {
        var x = Math.round(Math.random() * 4) + 1;
        var y = Math.round(Math.random() * 4) + 1;
        var result = x + y;
        while (result > limit) {
             x = Math.round(Math.random() * 4) + 1;
             y = Math.round(Math.random() * 4) + 1;
             result = x + y;
        }

        example = [x, y, result];
        if (jQuery.inArray(result, results) == -1) {
            examples.push(example);
        }
        results.push(result);
    }
    return examples;

}



$(document).ready(function(){


    function rozdanie() {

        $('#zadanie').html('');
        $('#guziki').html('');
        // generowanie obrazkow
        examples = fourMultiplies();
        obrazki = [];

        kolory = ['pink','warning','info','lsuccess'];
        kolor_one = 0;
        kolor_two = 3;

        examples.forEach(function(example){
            obrazki.push(example[2]);
        });

        examples.forEach(function(example){
            sklad = example[2];
            $('#zadanie').append('<li id="n'+sklad+'" class="tiles tiles-action btn gradient btn-'+kolory[kolor_one]+' c'+sklad+'" value="'+sklad+'">'+example[0]+'+'+example[1]+'</li>');
        });

        obrazki.sort();

        obrazki.forEach(function(value){

            $('#guziki').append('<li id="'+value+'" class="tiles tiles-result btn gradient btn-'+kolory[kolor_two]+' c'+value+'" value="'+value+'">'+value+'</li>');
        });


        var klik ='abc';



        $('li').click(function(){
            if ($(this).hasClass('unvisible')==false) {
                if (klik.length!=3) {

                    if (klik == $(this).val() && klikname != $(this).prop('id')) {
                        klasa = $(this).val();
                        $('.c'+klasa).each(function(){
                            $(this).removeClass('bluo');
                            $(this).addClass('unvisible');
                        });

                        // jesli dobra odpowiedz
                        console.log('countC');
                        countCorrect();
                        var dobre = $('.ok').html();
                        if (dobre % countKafelki == 0) {
                            rozdanie();
                        }
                    } else {
                        $('#zadanie li').removeClass('bluo');
                        $('#guziki li').removeClass('bluo');
                        // jesli zla odpowiedz
                        countWrong();
                    }
                    klik ='abc';
                } else {
                    $('#zadanie li').removeClass('bluo');
                    $('#guziki li').removeClass('bluo');
                    $(this).toggleClass('bluo');
                    klik = $(this).val();
                    klikname = $(this).prop('id');
                }
            }
        });

        $('#zadanie').delay(400).fadeIn('slow');
    }

    rozdanie();
});

/*
* losuje określoną ilość liczb z puli (od 0 do skad)
 */
function randomItems(ile,skad) {
    linie = [];
    while (linie.length<ile) {
        linia = Math.round(Math.random()*skad);
        while (jQuery.inArray(linia,linie)!==-1) {
            linia = Math.round(Math.random()*skad);
        }
        linie.push(linia);
    }
    return linie;
}