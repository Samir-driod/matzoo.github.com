items = [];

function los() {
$('#turtle').hide();
    // los
example = parseInt($('#example').val());
//$('#uruchom').html('Uruchom');
//$('#uruchom').removeClass('btn-info');
//$('#uruchom').addClass('btn-lsuccess');
//$('#uruchom').attr('onclick','executeMoves()');
$('#ponownie').val(0);

$('#scene').removeClass(); 
$('#scene').addClass('hippo');
$('#scene').addClass('scene'+example);
switch (example) {
    case 11: 
    $('#zadanie').append('<div class="alert alert-success margin10" style="font-family:helveticaneueb;margin-bottom:50px"><br><br>Gratulujemy! Ukończyłeś ten etap.<br><br>Wybierz następny poziom trudności z menu z listą zadań.<br><br><br></div>');
    $('#work').hide();
    case 1:
        objects = [1,4,
          11,12,15,17,18,
          21,24,25,27,28,
          31,32,
          43,44,45,48,49
          ];
        items = [23];
        success = 33;
        tuti = 3;
        optimove = 4;
        break;
    case 2:
        objects = [1,2,7,8,
          11,12,14,15,17,18,
          21,22,24,25,27,28,
          31,32,37,38,
          41,42,47,48
          ];
        items = [23];
        success = 35;
        tuti = 13;
        optimove = 6;
        break;
    case 3:
        objects = [0,1,2,8,
          10,12,15,18,19,
           29,
          30,31,34,35,37,
          41,42,45,47,48
          ];
        items = [24,25];
        success = 26;
        tuti = 14;
        optimove = 6;
        break;        
    case 4:
        objects = [2,3,4,8,9,12,
          20,
          32,36,37,38,39,
          47,49
          ];
        items = [33];         
        success = 40;
        tuti = 13;
        optimove = 8;
        break;
    case 5:
        objects = [0,1,2,
          15,18,19,
          20,21,22,25,29,
          35,37,
          40,41,42,45,47,48
          ];
        items = [3,33];
        success = 4;
        tuti = 34;
        optimove = 10;
        break;
    case 6:
        objects = [0,1,3,4,6,7,9,
          12,15,17,18,
          20,21,22,23,28,
          30,33,38,
          40,41,43,47,48
          ];
        items = [25];    
        success = 17;
        tuti = 27;
        optimove = 10;
        break;
    case 7:
        objects = [2,3,4,8,9,12,
          20,
          32,36,37,38,39,
          47,49
          ];
        items = [26,33];         
        success = 43;
        tuti = 16;
        optimove = 10;
        break;
    case 8:
        objects = [9,
          10,13,16,19,
          22,23,24,25,26,
          36,
          42,43,44,45,46,47,48,49
          ];
        items = [30,33];
        success = 31;
        tuti = 20;
        optimove = 11;
        break; 
    case 9:
        objects = [0,2,4,6,8,
          11,13,17,19,
          20,28,
          31,33,35,37,39,
          40,42,44,46,48
          ];
        items = [15];    
        success = 5;
        tuti = 22;
        optimove = 8;
        break;        
    case 10:
        objects = [9,
          10,13,16,19,
          22,23,24,25,26,
          36,
          42,43,44,45,46,47,48,49
          ];
        items = [30,21];
        success = 31;
        tuti = 20;
        optimove = 10;
        break;  

    default:
        objects = [6,
          12,16,
          20,21,22,
          30,32,37,38
          ];
        success = 18;
        tuti = 30;
        optimove = 0;
        break;
        break;
}

fillUpScene(tuti, success, objects, items);
workspaceClean();
}




