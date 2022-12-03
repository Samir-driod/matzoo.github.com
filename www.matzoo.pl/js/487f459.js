items = [];

function los() {
$('#turtle').hide();
    // los
example = parseInt($('#example').val());
$('#ponownie').val(0);
$('#scene').removeClass(); 
$('#scene').addClass('hippo');
$('#scene').addClass('scene'+example);
switch (example) {
    case 11: 
    $('#zadanie').append('<div class="alert alert-success margin10" style="font-family:helveticaneueb;margin-bottom:50px"><br><br>Gratulujemy! Ukończyłeś ten etap.<br><br>Wybierz następny poziom trudności z menu z listą zadań.<br><br><br></div>');
    $('#work').hide();
    case 1:
        objects = [0,3,4,5,6,7,
          10,16,17,18,
          20,21,27,28,
          31,32,33,34,37,38,
          41,42,43,44,45,47,48
          ];
        success = 35;
        tuti = 23;
        optimove = 5;
        break;
    case 2:
        objects = [0,1,2,3,4,5,6,7,8,9,
          10,11,12,13,15,16,17,18,19,
          20,28,29,
          30,31,32,33,34,35,36,37,38,39,
          40,41,42,43,44,45,46,47,48,49
          ];
        success = 27;
        tuti = 21;
        optimove = 7;
        break;         
    case 3:
        objects = [0,1,2,3,4,5,6,7,9,
          11,12,13,17,18,19,
          20,21,22,27,28,
          31,32,33,34,37,38,
          41,40,44,45,47
          ];
        success = 25;
        tuti = 36;
        optimove = 4;
        break;    
    case 4:
        objects = [
          10,13,14,15,16,17,
          20,21,27,28,
          31,32,33,34,38,39
          ];
        success = 35;
        tuti = 23;
        optimove = 5;
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
        optimove = 6;
        break;
    case 6:
        objects = [0,1,2,5,6,7,9,
          11,12,18,19,
          20,21,27,28,29,
          31,32,33,34,37,38,
          41,40,44,45,47
          ];
        success = 26;
        tuti = 22;
        optimove = 5;
        break;
    case 7:
        objects = [6,7,
          12,13,17,18,
          20,21,22,28,
          30,37,38,
          40,41,44,45,47
          ];
        success = 11;
        tuti = 3;
        optimove = 5;
        break; 
case 8:
        objects = [0,3,
          10,11,13,16,
          22,23,25,26,29,
          33,37,39,
          47,48,49
          ];
        success = 36;
        tuti = 14;
        optimove = 5;
        break;        
    case 9:
        objects = [0,4,7,8,9,
          10,14,19,24,26,29,
          30,36,40,42,46
          ];
        success = 35;
        tuti = 12;
        optimove = 6;
        break;  
    case 10:
        objects = [0,1,2,3,4,
          16,17,18,
          21,22,23,24,26,28,
          34,36,37,38,
          40,41,42,43,44
          ];
        success = 11;
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
        optimove = 0;
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

$('#scene').find('#h-left').attr('id','hero_left');
$('#scene').find('#h-right').attr('id','hero_right');
$('#scene').find('#h-front').attr('id','hero_front');
$('#scene').find('#h-back').attr('id','hero_back');
$('#scene').find('#tuti img').hide();
$('#hero_front').show();
$('#hero_poz').val('front');
$('#tuti').css('top',0);
$('#tuti').css('left',0);
workspaceClean();
}
