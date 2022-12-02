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
        objects = [0,1,2,3,4,5,6,7,8,9,
          10,11,12,13,14,15,16,17,18,19,
          20,21,22,23,27,28,29,
          30,31,32,33,34,35,36,37,38,39,
          40,41,42,43,44,45,46,47,48,49
          ];
        success = 26;
        tuti = 24;
        optimove = 2;
        break;
    case 2:
        objects = [0,1,2,3,4,5,6,7,8,9,
          10,11,12,13,14,15,16,17,18,19,
          20,21,22,23,24,25,26,27,28,29,
          30,31,32,33,34,39,
          40,41,42,43,44,45,46,47,48,49
          ];
        success = 35;
        tuti = 38;
        optimove = 3;
        break;         
    case 3:
        objects = [0,1,2,3,4,5,6,7,8,9,
          10,11,12,13,15,16,17,18,19,
          20,21,22,23,25,26,27,28,29,
          30,31,32,33,36,37,38,39,
          40,41,42,43,44,45,46,47,48,49
          ];
        success = 35;
        tuti = 14;
        optimove = 5;
        break;    
    case 4:
        objects = [0,1,2,3,4,5,6,7,8,9,
          10,11,12,13,14,16,17,18,19,
          20,21,22,23,24,26,27,28,29,
          30,31,32,36,37,38,39,
          40,41,42,43,44,45,46,47,48,49
          ];
        success = 33;
        tuti = 15;
        optimove = 4;
        break;
    case 5:
        objects = [0,1,2,3,4,5,6,7,8,9,
          10,14,15,16,17,18,19,
          20,22,23,24,25,26,27,28,29,
          30,32,33,34,35,36,37,38,39,
          40,41,42,43,44,45,46,47,48,49
          ];
        success = 31;
        tuti = 13;
        optimove = 4;
        break;
    case 6:
        objects = [0,1,2,3,4,5,6,7,8,9,
          10,11,12,13,15,16,17,18,19,
          20,28,29,
          30,31,32,33,34,35,36,37,38,39,
          40,41,42,43,44,45,46,47,48,49
          ];
        success = 27;
        tuti = 21;
        optimove = 6;
        break;
    case 7:
        objects = [0,1,2,3,4,5,6,7,8,9,
          10,11,12,13,16,17,18,19,
          20,21,22,23,26,27,28,29,
          30,31,32,33,34,35,36,37,38,39,
          40,41,42,43,44,45,46,47,48,49
          ];
        success = 15;
        tuti = 24;
        optimove = 2;
        break; 
    case 8:
        objects = [0,1,2,3,4,5,6,7,8,9,
          10,11,12,17,18,19,
          20,21,22,27,28,29,
          30,31,32,33,34,35,36,37,38,39,
          40,41,42,43,44,45,46,47,48,49
          ];
        success = 26;
        tuti = 14;
        optimove = 4;
        break;           
    case 9:
        objects = [0,1,2,3,4,5,6,7,8,9,
          10,13,14,15,16,17,18,19,
           2029,
          30,33,34,35,36,37,38,39,
          40,41,42,43,44,45,46,47,48,49
          ];
        success = 27;
        tuti = 23;
        optimove = 4;
        break;
    case 10:
        objects = [0,1,2,3,4,5,6,7,8,9,
          10,11,12,13,14,15,16,17,18,19,
          20,21,22,23,24,25,26,27,28,29,
          30,31,37,38,39,
          40,41
          ];
        success = 46;
        tuti = 33;
        optimove = 4;
        break;  
    default:
        objects = [0,1,2,3,4,5,6,7,8,9,
          10,11,12,13,14,15,16,17,18,19,
          20,21,22,23,24,25,26,27,28,29,
          30,31,32,33,34,35,36,37,38,39,
          40,41,42,43,44,45,46,47,48,49
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
