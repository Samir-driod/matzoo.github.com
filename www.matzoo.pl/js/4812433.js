items = [];

function los() {
$('#turtle').hide();
    // los
example = parseInt($('#example').val());
$('#ponownie').val(0);
$('#scene').removeClass(); $('#scene').addClass('scene'+example);
switch (example) {
    case 11: 
    $('#zadanie').append('<div class="alert alert-success margin10 s15" style="font-family:helveticaneueb;margin-bottom:50px"><br><br>Gratulujemy! Ukończyłeś ten etap.<br><br>Wybierz następny poziom trudności z menu z listą zadań.<br><br><br></div>');
    $('#work').hide();
    case 1:
        objects = [0,3,4,5,6,7,
          10,16,17,18,
          20,21,27,28,
          31,32,33,34,37,38,
          41,42,43,44,45,47,48
          ];
        success = 36;
        tuti = 22;
        optimove = 5;
        break;
    case 2:
        objects = [2,6,7,
          12,13,17,18,
          20,21,22,23,24,26,27,28,
          30,31,37,38,
          40,41
          ];
        success = 3;
        tuti = 36;
        optimove = 6;
        break;         
    case 3:
        objects = [0,1,2,3,4,5,6,7,9,
          11,12,13,17,18,19,
          20,21,22,27,28,
          31,32,33,34,37,38,
          41,40,44,45,47
          ];
        success = 13;
        tuti = 36;
        optimove = 5;
        break;    
    case 4:
        objects = [
          10,13,14,15,16,17,
          20,21,27,28,
          31,32,33,34,38,39
          ];
        success = 43;
        tuti = 23;
        optimove = 6;
        break;
    case 5:
        objects = [2,8,
          10,16,19,
          21,22,
          32,35,
          40,42,44,48,49
          ];
        success = 5;
        tuti = 27;
        optimove = 4;
        break;
    case 6:
        objects = [0,1,2,5,6,7,9,
          11,12,18,19,
          20,21,27,28,29,
          31,32,33,34,37,38,
          41,40,44,45
          ];
        success = 48;
        tuti = 22;
        optimove = 8;
        break;
    case 7:
        objects = [6,7,
          12,13,17,18,
          20,21,22,28,
          30,37,38,
          40,41,44,45,47
          ];
        success = 31;
        tuti = 3;
        optimove = 7;
        break; 
case 8:
        objects = [0,3,
          10,11,13,16,
          22,23,24,25,26,29,
          33,37,39,
          ,49
          ];
        success = 47;
        tuti = 14;
        optimove = 10;
        break;    
//    case 11:
//        objects = [3,
//          10,11,13,16,17,18,
//          26,30,40,41,42,43,46,47,48,49
//          ];
//        success = 38;
//        tuti = 32;
//        optimove = 6;
//        break;        
    case 9:
        objects = [0,4,7,8,9,
          10,14,19,24,26,29,
          30,36,40,42,46
          ];
        success = 5;
        tuti = 12;
        optimove = 8;
        break;  
    case 1:
        objects = [0,1,2,3,4,
          16,17,18,
          21,22,23,24,26,28,
          34,36,37,38,
          40,41,42,43,44
          ];
        success = 14;
        tuti = 32;
        optimove = 8;
        break;
    default:
        objects = [0,1,2,5,6,7,9,
          11,12,18,19,
          20,21,27,28,29,
          31,32,33,34,37,38,
          41,40,44,45,47
          ];
        success = 25;
        tuti = 36;
        optimove = 2;
        break;
}

$('#tuti_position').val(tuti);
$('#tuti_start').val(tuti);

$('#scene div').each(function() {
    $(this).html('');
    $(this).removeClass('block-success odd');
   
    id = $(this).attr('id');
    id = parseInt(id.substr(5, 2)); 
    if (id==success) $(this).addClass('block-success');
    else if (id==tuti) $(this).html($('#tuti_original').html());
    else if (jQuery.inArray(id,objects)!=-1) $(this).addClass('odd');
    
});


$('#scene').find('#tuti-sample').attr('id','tuti');
$('#scene').find('#turtler').attr('id','turtle-right');
$('#scene').find('#turtle').attr('id','turtle-left');
$('#tuti').css('top',0);
$('#tuti').css('left',0);
workspaceClean();
}

function refreshTuti(tuti) {
$('#tuti_position').val(tuti);

$('#scene div').each(function() {
    $(this).html('');
    $(this).removeClass('block-success odd');
   
    id = $(this).attr('id');
    id = parseInt(id.substr(5, 2)); 
    if (id==success) $(this).addClass('block-success');
    else if (id==tuti) $(this).html($('#tuti_original').html());
    else if (jQuery.inArray(id,objects)!=-1) $(this).addClass('odd');
    
});


$('#scene').find('#tuti-sample').attr('id','tuti');
$('#tuti').css('top',0);
$('#tuti').css('left',0);  
$('#ruch').hide();
}

function losn() {
            example = parseInt($('#example').val());
        example = example+1; 
        $('#example').val(example);
        los();
}
function oblicz(odp,losuj) {
    // jesli dobra odpowiedź
    if (odp==1) {
        countCorrect();
        cleanSpace();
        example = parseInt($('#example').val());
        example = example+1; 
        $('#example').val(example);
        if (losuj==1) los(); else {
            $('#uruchom').html('Następny przykład');
            $('#uruchom').attr('onclick','los()');
        }
    } // jeśli zła odpowiedź
    else {
        countWrong();
    }
}





$(document).ready(function () {

    $('#zadanie').removeClass('wyraz1');
    $('#zadanie').addClass('spr_tekstowe');
    $('#zadanie').css('font-size', '15pt');
    $('#zadanie').css('font-family', 'helveticaneueb');

    los();




$("#frame").droppable({
        drop: function(event, ui) {
            element = $(ui.draggable).clone();
            if ($(element).hasClass('btn-pink')) {
                $(this).append(element);
                
                val = $(element).attr('id');
                planMove(val);
                $(element).addClass('btn-lsuccess');
                $(element).removeClass('btn-pink');
                $(element).draggable();                
            } else {
                $(ui.draggable).remove();
                planRecall();
            }
        }
    });

    $(".drag.btn-pink").draggable({
        helper: 'clone'
    });




});


function makeDrop(element) {
               element = element.clone();
            if ($(element).hasClass('btn-pink')) {
                $('#frame').append(element);
                
                val = $(element).attr('id');
                planMove(val);
                $(element).addClass('btn-lsuccess');
                $(element).removeClass('btn-pink');
                $(element).draggable();                
            } else {
                $(ui.draggable).remove();
                planRecall();
            }
}