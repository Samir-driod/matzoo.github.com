       
function myModal(mode) {
    if (mode=='error') { 
        $('#ruch').show(); 
        $('#myModalWrong').modal();  
    }
    else if (mode=='end-ok') { 
        $('#myModalSuccess').modal(); 
        if ($('#scene').hasClass('hippo')) {
        } else {
            $('#tuti').addClass('block-apple-success'); 
        }
    
    }
    else if (mode=='end-wrong') { $('#myModalWrong').modal(); }
}

function moveForward(timing) {
    timing = timing*1000;
    setTimeout(function() {
        poz = $('#hero_poz').val();
        if (poz=='front') {
            moveDown(timing);
        }
        if (poz=='back') {
            moveUp(timing);
        }
        if (poz=='right') {
            moveRight(timing);
        }
        if (poz=='left') {
            moveLeft(timing);
        }
    }, timing);
}

function turnLeft(timing) {
    timing = timing*1000;
    setTimeout(function() {
    poz = $('#hero_poz').val();
    if (poz=='front') {
        poz='right';
        $('#hero_poz').val(poz);
        $('#hero_front').hide();
        $('#hero_right').show();
    } else if (poz=='back') {
        poz='left';
        $('#hero_poz').val(poz);
        $('#hero_back').hide();
        $('#hero_left').show();
    } else if (poz=='right') {
        poz='back';
        $('#hero_poz').val(poz);
        $('#hero_right').hide();
        $('#hero_back').show();
    } else if (poz=='left') {
        poz='front';
        $('#hero_poz').val(poz);
        $('#hero_left').hide();
        $('#hero_front').show();
    }
    }, timing);
}

function turnRight(timing) { 
    
    timing = timing*1000;
    setTimeout(function() {
    poz = $('#hero_poz').val();
    if (poz=='front') {
        poz='left';
        $('#hero_poz').val(poz);
        $('#hero_front').css('display','none');
        $('#hero_left').css('display','block');
    } else if (poz=='back') {
        poz='right';
        $('#hero_poz').val(poz);
        $('#hero_back').css('display','none');
        $('#hero_right').css('display','block');
    } else if (poz=='right') {
        poz='front';
        $('#hero_poz').val(poz);
        $('#hero_right').css('display','none');
        $('#hero_front').css('display','block');
    } else if (poz=='left') {
        poz='back';
        $('#hero_poz').val(poz);
        $('#hero_left').css('display','none');
        $('#hero_back').css('display','block');
    }
    }, timing);
}


function moveUp(timing) {
    timing = timing*1000;
    if ($(window).width()>400) {
        boxsize = 50;
    } else {
        boxsize = 30;
    }
    position = parseInt($('#tuti_position').val());
    position = position-10;
    block = $('#block'+position);
    if (position>=0 && position<=99 && !block.hasClass('odd')) {  
        $("#tuti").animate({top:'-='+boxsize},1000);
        if (block.hasClass('bg-success')) setTimeout(function() {myModal('success');}, timing);
        $('#tuti_position').val(position);
    } else {
        setTimeout(function() {myModal('error');}, timing);
    }
}


function moveDown(timing) {
    if ($(window).width()>400) {
        boxsize = 50;
    } else {
        boxsize = 30;
    }    
    position = parseInt($('#tuti_position').val());
    position = position+10;
    block = $('#block'+position); 
    if (position>=0 && position<=99 && !block.hasClass('odd')) { 
        $("#tuti").animate({top:'+='+boxsize},1000);
        $('#tuti_position').val(position);
    } else {
        timing = timing*1000;
        setTimeout(function() {myModal('error');}, timing);
    }
}


function moveRight(timing) {
    if ($(window).width()>400) {
        boxsize = 50;
    } else {
        boxsize = 30;
    }    
    position = parseInt($('#tuti_position').val());
    position = position+1;
    block = $('#block'+position);
    timing = timing*1000;
    if (position%10!=0 && !block.hasClass('odd')) { 
      $("#tuti").animate({left:'+='+boxsize},1000);
      
      $('#tuti_position').val(position);
      setTimeout(function() {$('#turtle-left').hide();$('#turtle-right').show();}, timing);
    } else {
      setTimeout(function() {myModal('error');}, timing);
    }
}



function moveLeft(timing) {
    if ($(window).width()>400) {
        boxsize = 50;
    } else {
        boxsize = 30;
    }    
    position = parseInt($('#tuti_position').val());
    position = position-1;
    block = $('#block'+position);
    timing = timing*1000;
    if (position%10!=9 && !block.hasClass('odd')) {  
      $("#tuti").animate({left:'-='+boxsize},1000);
      $('#tuti_position').val(position);
      setTimeout(function() {$('#turtle-right').hide();$('#turtle-left').show();}, timing);
    } else {
      setTimeout(function() {myModal('error');}, timing);
    }
}

function eatItem(timing) {
    
    timing = timing*1000;
    setTimeout(function() {
        position = parseInt($('#tuti_position').val());
        block = $('#block'+position);
        if (jQuery.inArray(position,items)!=-1) {
            $(block).addClass('block-item-shadow');
            $(block).removeClass('block-item');
        }
    }, timing);

}



function planMove(move,where_field) {
    switch(move) {
        case 'T':
            text = 'moveUp();';
            break;
        case 'D':
            text = 'moveDown();';
            break;
        case 'R':
            text = 'moveRight();';
            break;
        case 'L':
            text = 'moveLeft();';
            break;
        case 'F':
            text = 'moveForward();';
            break;
        case 'S':
            text = 'turnRight();';
            break;
        case 'A':
            text = 'turnLeft();';
            break;
        case 'P':
            text = 'executeLoop();';
            break;
        case 'I':
            text = 'eatItem();';
            break;
    }  
    if (!where_field) {
        moves = $('#tuti_plan').val();
        moves = moves+move;
        $('#tuti_plan').val(moves);    
        $('.console'). append(text+'<br>');
    } else {
        moves = $(where_field).val();
        moves = moves+move;
        $(where_field).val(moves);    
        $('.consolep'). append(text+'<br>');
    }
        
    
}


function getAttrId() {
    id = $(this).attr('id');
    planMove(id);
}
function getPAttrId() {
    id = $(this).attr('id');
    planMove(id,$('#loop_plan'));
}

function planRecall() {
    planClean();
    moves = $('#frame').find('.btn-lsuccess');
    ids = moves.each(getAttrId);
}
function planPRecall() {
    planPClean();
    moves = $('#framep').find('.btn-lsuccess');
    ids = moves.each(getPAttrId);
}

function planClean() {
    $('#tuti_plan').val('');
    $('#all_plan').val('');
    $('.console').html('');
}
function planPClean() {
    $('#loop_plan').val('');
    $('#all_plan').val('');
    $('.consolep').html('');
}

function workspaceClean() {
    planClean();
    planPClean();
    $('#frame').find('.btn-lsuccess').remove();
    $('#framep').find('.btn-lsuccess').remove();
}




function executeMove(value,index) {
    switch(value) {
        case 'T':
            moveUp(index);
            break;
        case 'D':
            moveDown(index);
            break;
        case 'R':
            moveRight(index);
            break;
        case 'L':
            moveLeft(index);
            break;
        case 'F':
            moveForward(index);
            break;
        case 'S':
            turnRight(index);
            break;
        case 'A':
            turnLeft(index);
            break;
        case 'I':
            eatItem(index);
            break;
    }  

}

function checkLoops(move) {
    moves = $('#all_plan').val();
    if (move == 'P') {
        moves = moves+$('#loop_plan').val();
    } else {
        moves = moves+move;
    }
    $('#all_plan').val(moves);   
}


function executeMoves(option) {
    // pobranie ruchów z maina
    moves = $('#tuti_plan').val();
    movesn = moves.split("");
    // sprawdzenie czy są pętle i zaktualizowanie all_plan
    tekst = movesn.forEach(checkLoops);
    moves = $('#all_plan').val();
    movesn = moves.split("");
    moves_main = $('#tuti_plan').val();
    movesn_main = moves_main.split("");
    // wykonanie ruchów z all_plan
    movesn.forEach(executeMove);
    movescount = movesn.length;   
    movescount_main = movesn_main.length;   
    timing = movescount*1000;

    // zakończenie, spradzenie, czy na prawidłowym polu (tuti==success)
    // i czy najmniejsza możliwa ilość ruchów (movescount==optimove)
    setTimeout(function() {
        tuti = $('#tuti_position').val();
        lostitems = $('#scene').find('.block-item');  
        
        if (option=='short') {
            $('#toomany').hide(); 
            if (tuti==success && lostitems.length==0 && movescount_main==optimove) {
                myModal('end-ok');
            } else {
                myModal('end-wrong');
            }                 
        } else {
            if (movescount>optimove) $('#toomany').show(); else $('#toomany').hide(); 
            if (tuti==success && lostitems.length==0) {
                myModal('end-ok');
            } else {
                myModal('end-wrong');
            }            
        }
    }, timing);
}



function refreshTuti(tuti) {
    fillUpScene(tuti, success, objects, items); 
    $('#all_plan').val('');
    $('#ruch').hide();
//    planRecall();
}



function fillUpScene(tuti, success, objects, items) {
    if (!items) items = null;
    $('#scene div').each(function() {
        $(this).html('');
        $(this).removeClass('block-success odd block-item block-item-shadow');
        id = $(this).attr('id');
        id = parseInt(id.substr(5, 2)); 
        if (id==success) $(this).addClass('block-success');
        else if (id==tuti) $(this).html($('#tuti_original').html());
        else if (jQuery.inArray(id,objects)!=-1) $(this).addClass('odd');
        else if (jQuery.inArray(id,items)!=-1) $(this).addClass('block-item');
    });
    
    $('#tuti_position').val(tuti);
    $('#tuti_start').val(tuti);
    
    $('#scene').find('#turtler').attr('id','turtle-right');
    $('#scene').find('#turtle').attr('id','turtle-left');
    $('#scene').find('#h-left').attr('id','hero_left');
    $('#scene').find('#h-right').attr('id','hero_right');
    $('#scene').find('#h-front').attr('id','hero_front');
    $('#scene').find('#h-back').attr('id','hero_back');
    $('#scene').find('#tuti img').hide();
    $('#hero_front').show();
    $('#hero_poz').val('front');
    $('#scene').find('#tuti-sample').attr('id','tuti');
    $('#tuti').css('top',0);
    $('#tuti').css('left',0);
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
        if ($('#ponownie').val()!=1) {
            countCorrect();
            $('#nastepny').show();
        }
        $('#sprobuj').show();
        $('#uruchom').hide();
        cleanSpace();
        example = parseInt($('#example').val());
        example = example+1; 
        $('#example').val(example);
        if (losuj==1) {
            los();
        }
    } // jeśli zła odpowiedź
    else {
        countWrong();
    }
}

function makeDrop(element) {
               element = element.clone();
            if ($(element).hasClass('btn-pink')) {
                $('#frame').append(element);
                val = $(element).attr('id');
                planMove(val);
                $(element).addClass('btn-lsuccess');
                $(element).addClass('ui-state-default');
                $(element).removeClass('btn-pink');                     
            } else if ($(element).hasClass('btn-info')) {
                $('#frame').append(element);
                val = $(element).attr('id');
                planMove(val);
                $(element).addClass('btn-lsuccess');
                $(element).addClass('ui-state-default');
                $(element).removeClass('btn-info');                     
            } else {
                planRecall();
            }
}


$(document).ready(function () {

    $('#zadanie').removeClass('wyraz1');
    $('#zadanie').addClass('spr_tekstowe');
    
    // sprawdzanie szerokosci okna i generowanie odpowiedniej wielkosci sceny (bloki 50px lub 30px)
    if ($(window).width()>400) {
        boxsize = 50;
    } else {
        boxsize = 30;
    } 
    $('#boxsize').attr('value',boxsize);
    $('#turtle').attr('width',boxsize+'px');
    $('#turtle').attr('height',boxsize+'px');
    $('#turtler').attr('width',boxsize+'px');
    $('#turtler').attr('height',boxsize+'px');
    for (i=0;i<50;i++) {
        $('#scene').append('<div id="block'+i+'" style="left:'+(Math.floor(i%10))*boxsize+'px;top:'+(Math.floor(i/10))*boxsize+'px"></div>');    
    }

    los();

    
    
    


$("#frame").droppable({
        drop: function(event, ui) {
            makeDrop($(ui.draggable));
        }
    });
    
  
    

    $( "#frame" ).sortable({
      placeholder: "ui-state-highlight",
       stop: function(event, ui) {
           setTimeout(function() { planRecall();}, 300);
       }
    });

    $( "#frame" ).disableSelection();

    $( "#framep" ).sortable({
      placeholder: "ui-state-highlight",
       stop: function(event, ui) {
           setTimeout(function() { planPRecall();}, 300);
       }
    });
    $( "#framep" ).disableSelection();

    
$("#framep").droppable({
        drop: function(event, ui) {
            element = $(ui.draggable).clone();
            if ($(element).hasClass('btn-pink')) {
                $(this).append(element);
                val = $(element).attr('id');
                planMove(val,$('#loop_plan'));
                $(element).addClass('btn-lsuccess');
                $(element).addClass('ui-state-default');
                $(element).removeClass('btn-pink');              
            } else if ($(element).hasClass('btn-info')) {
                $(this).append(element);
                val = $(element).attr('id');
                planMove(val,$('#loop_plan'));
                $(element).addClass('btn-lsuccess');
                $(element).addClass('ui-state-default');
                $(element).removeClass('btn-info');              
            } else {
                planPRecall();
            }
        }
    });
    
$("#frame .absolute-bottom").droppable({
        drop: function(event, ui) {
            $(ui.draggable).remove();
            
             
        }
    });
    
$("#framep .absolute-bottom").droppable({
        drop: function(event, ui) {
            $(ui.draggable).remove();
             planPRecall();
        }
    });

    $(".drag.btn-pink").draggable({
        helper: 'clone'
    });

    $(".drag.btn-info").draggable({
        helper: 'clone'
    });


$("#myModalSuccess").on("hidden.bs.modal", function () {
    oblicz(1,0);
});
$("#myModalWrong").on("hidden.bs.modal", function () {
    refreshTuti($('#tuti_start').val());
});



});


