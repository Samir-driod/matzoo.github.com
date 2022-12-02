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
        objects = [6,
          12,16,
          20,21,22,
          30,32,37,38,
          44,45
          ];
        success = 49;
        tuti = 4;
        optimove = 9;
        break;
    case 2:
        objects = [
          11,15,16,
          25,26,32
          ];
        success = 13;
        tuti = 28;
        optimove = 8;
        break;
    case 3:
        objects = [9,
          10,13,16,19,
          22,23,24,25,26,
          36
          ];
        success = 31;
        tuti = 17;
        optimove = 10;
        break;
    case 4:
        objects = [
          15,18,19,
          20,21,22,25,29,
          35,
          45
          ];
        success = 48;
        tuti = 34;
        optimove = 11;
        break;        
    case 5:
        objects = [12,
          20,
          32,36,37,38
          ];
        success = 40;
        tuti = 16;
        optimove = 9;
        break;
    case 6:
        objects = [8,
          11,13,
          33,37,
          47
          ];
        success = 31;
        tuti = 38;
        optimove = 9;
        break;
    case 7:
        objects = [2,
          12,18,19,
          22,23,28,
          36,37,38
          ];
        success = 10;
        tuti = 27;
        optimove = 10;
        break;
    case 8:
        objects = [
          16,17,18,
          21,22,23,28,
          33,38,43
          ];
        success = 20;
        tuti = 48;
        optimove = 12;
        break;
    case 9:
        objects = [4,
          14,16,24,26,
          30,34,36,40,46
          ];
        success = 18;
        tuti = 12;
        optimove = 14;
        break;
    case 10:
        objects = [0,3,
          13,16,
          23,24,25,26,29,
          33,39,
          48,49
          ];
        success = 21;
        tuti = 14;
        optimove = 16;
        break;
    default:
        objects = [6,
          12,16,
          20,21,22,
          30,32,37,38
          ];
        success = 18;
        tuti = 4;
        optimove = 7;
        break;
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
