frag = 0;
x = 0;
i = 0;
odkryte = [];


function generatePuzzle() {
        los(1);
    bglos  = Math.round(Math.random()*128)+1;
    console.debug('generatePuzzle '+bglos);
if (bglos>9) bgimage = 'img/puzzle/'+bglos+'.jpg';
else bgimage = 'img/puzzle/0'+bglos+'.jpg';
  elementow = 48;
  cols = 8;
  rows = 6;
  rozmiar = 66;


  // generowanie klocków
  frag = Math.round(Math.random()*(elementow-1)); 
  console.debug(odkryte);
  //$('#puzzle').html('<div style="position:absolute;background-image: url(img/puzzle/bg48/puzzle48.png);width: 454px;height: 334px;"></div>');
  $('#puzzle').addClass('fragmenty540');
    $('#puzzle').css('background-image','url('+bgimage+')');
    $('#puzzle').css('position','relative');
    $('#puzzle').css('width','454px');
    $('#puzzle').css('height','334px');
    $('#puzzle').append('<div id="0" style="position:absolute;background-image:url(img/puzzle/bg48/1.png);height:110px;width:110px;background-repeat:no-repeat;top:0px"></div>');
    $('#puzzle').append('<div id="1" style="position:absolute;background-image:url(img/puzzle/bg48/2.png);height:110px;width:110px;background-repeat:no-repeat;left:53px;top:0px"></div>');
    $('#puzzle').append('<div id="2" style="position:absolute;background-image:url(img/puzzle/bg48/3.png);height:110px;width:110px;background-repeat:no-repeat;left:98px;top:0px"></div>');
    $('#puzzle').append('<div id="3" style="position:absolute;background-image:url(img/puzzle/bg48/4.png);height:110px;width:110px;background-repeat:no-repeat;left:172px;top:0px"></div>');
    $('#puzzle').append('<div id="4" style="position:absolute;background-image:url(img/puzzle/bg48/5.png);height:110px;width:110px;background-repeat:no-repeat;left:218px;top:0px"></div>');
    $('#puzzle').append('<div id="5" style="position:absolute;background-image:url(img/puzzle/bg48/6.png);height:110px;width:110px;background-repeat:no-repeat;left:294px;top:0px"></div>');
    $('#puzzle').append('<div id="6" style="position:absolute;background-image:url(img/puzzle/bg48/7.png);height:110px;width:110px;background-repeat:no-repeat;left:330px;top:0px"></div>');
    $('#puzzle').append('<div id="7" style="position:absolute;background-image:url(img/puzzle/bg48/8.png);height:110px;width:110px;background-repeat:no-repeat;left:382px;top:0px"></div>');
    
    $('#puzzle').append('<div id="8" style="position:absolute;background-image:url(img/puzzle/bg48/9.png);height:110px;width:110px;background-repeat:no-repeat;left:00px;top:50px"></div>');
    $('#puzzle').append('<div id="9" style="position:absolute;background-image:url(img/puzzle/bg48/10.png);height:110px;width:110px;background-repeat:no-repeat;left:59px;top:44px"></div>');
    $('#puzzle').append('<div id="10" style="position:absolute;background-image:url(img/puzzle/bg48/11.png);height:110px;width:110px;background-repeat:no-repeat;left:106px;top:45px"></div>');
    $('#puzzle').append('<div id="11" style="position:absolute;background-image:url(img/puzzle/bg48/12.png);height:110px;width:110px;background-repeat:no-repeat;left:163px;top:44px"></div>');
    $('#puzzle').append('<div id="12" style="position:absolute;background-image:url(img/puzzle/bg48/13.png);height:110px;width:110px;background-repeat:no-repeat;left:226px;top:45px"></div>');
    $('#puzzle').append('<div id="13" style="position:absolute;background-image:url(img/puzzle/bg48/14.png);height:110px;width:110px;background-repeat:no-repeat;left:282px;top:64px"></div>');
    $('#puzzle').append('<div id="14" style="position:absolute;background-image:url(img/puzzle/bg48/15.png);height:110px;width:110px;background-repeat:no-repeat;left:338px;top:50px"></div>');
    $('#puzzle').append('<div id="15" style="position:absolute;background-image:url(img/puzzle/bg48/16.png);height:110px;width:110px;background-repeat:no-repeat;left:383px;top:59px"></div>');
    
    $('#puzzle').append('<div id="16" style="position:absolute;background-image:url(img/puzzle/bg48/17.png);height:110px;width:110px;background-repeat:no-repeat;left:0px;top:128px"></div>');
    $('#puzzle').append('<div id="17" style="position:absolute;background-image:url(img/puzzle/bg48/18.png);height:110px;width:110px;background-repeat:no-repeat;left:44px;top:130px"></div>');
    $('#puzzle').append('<div id="18" style="position:absolute;background-image:url(img/puzzle/bg48/19.png);height:110px;width:110px;background-repeat:no-repeat;left:107px;top:107px"></div>');
    $('#puzzle').append('<div id="19" style="position:absolute;background-image:url(img/puzzle/bg48/20.png);height:110px;width:110px;background-repeat:no-repeat;left:160px;top:100px"></div>');
    $('#puzzle').append('<div id="20" style="position:absolute;background-image:url(img/puzzle/bg48/21.png);height:110px;width:110px;background-repeat:no-repeat;left:226px;top:112px"></div>');
    $('#puzzle').append('<div id="21" style="position:absolute;background-image:url(img/puzzle/bg48/22.png);height:110px;width:110px;background-repeat:no-repeat;left:279px;top:100px"></div>');
    $('#puzzle').append('<div id="22" style="position:absolute;background-image:url(img/puzzle/bg48/23.png);height:110px;width:110px;background-repeat:no-repeat;left:339px;top:112px"></div>');
    $('#puzzle').append('<div id="23" style="position:absolute;background-image:url(img/puzzle/bg48/24.png);height:110px;width:110px;background-repeat:no-repeat;left:391px;top:103px"></div>');
    
    $('#puzzle').append('<div id="24" style="position:absolute;background-image:url(img/puzzle/bg48/25.png);height:110px;width:110px;background-repeat:no-repeat;left:0px;top:168px"></div>');
    $('#puzzle').append('<div id="25" style="position:absolute;background-image:url(img/puzzle/bg48/26.png);height:110px;width:110px;background-repeat:no-repeat;left:54px;top:167px"></div>');
    $('#puzzle').append('<div id="26" style="position:absolute;background-image:url(img/puzzle/bg48/27.png);height:110px;width:110px;background-repeat:no-repeat;left:104px;top:165px"></div>');
    $('#puzzle').append('<div id="27" style="position:absolute;background-image:url(img/puzzle/bg48/28.png);height:110px;width:110px;background-repeat:no-repeat;left:173px;top:167px"></div>');
    $('#puzzle').append('<div id="28" style="position:absolute;background-image:url(img/puzzle/bg48/29.png);height:110px;width:110px;background-repeat:no-repeat;left:224px;top:165px"></div>');
    $('#puzzle').append('<div id="29" style="position:absolute;background-image:url(img/puzzle/bg48/30.png);height:110px;width:110px;background-repeat:no-repeat;left:294px;top:183px"></div>');
    $('#puzzle').append('<div id="30" style="position:absolute;background-image:url(img/puzzle/bg48/31.png);height:110px;width:110px;background-repeat:no-repeat;left:343px;top:168px"></div>');
    $('#puzzle').append('<div id="31" style="position:absolute;background-image:url(img/puzzle/bg48/32.png);height:110px;width:110px;background-repeat:no-repeat;left:405px;top:181px"></div>');  
    
    $('#puzzle').append('<div id="32" style="position:absolute;background-image:url(img/puzzle/bg48/33.png);height:110px;width:110px;background-repeat:no-repeat;left:0px;top:241px"></div>');
    $('#puzzle').append('<div id="33" style="position:absolute;background-image:url(img/puzzle/bg48/34.png);height:110px;width:110px;background-repeat:no-repeat;left:55px;top:232px"></div>');
    $('#puzzle').append('<div id="34" style="position:absolute;background-image:url(img/puzzle/bg48/35.png);height:110px;width:110px;background-repeat:no-repeat;left:125px;top:241px"></div>');
    $('#puzzle').append('<div id="35" style="position:absolute;background-image:url(img/puzzle/bg48/36.png);height:110px;width:110px;background-repeat:no-repeat;left:174px;top:232px"></div>');
    $('#puzzle').append('<div id="36" style="position:absolute;background-image:url(img/puzzle/bg48/37.png);height:110px;width:110px;background-repeat:no-repeat;left:244px;top:214px"></div>');
    $('#puzzle').append('<div id="37" style="position:absolute;background-image:url(img/puzzle/bg48/38.png);height:110px;width:110px;background-repeat:no-repeat;left:280px;top:209px"></div>');
    $('#puzzle').append('<div id="38" style="position:absolute;background-image:url(img/puzzle/bg48/39.png);height:110px;width:110px;background-repeat:no-repeat;left:348px;top:225px"></div>');
    $('#puzzle').append('<div id="39" style="position:absolute;background-image:url(img/puzzle/bg48/40.png);height:110px;width:110px;background-repeat:no-repeat;left:386px;top:216px"></div>');  

    $('#puzzle').append('<div id="40" style="position:absolute;background-image:url(img/puzzle/bg48/41.png);height:110px;width:110px;background-repeat:no-repeat;left:0px;top:270px"></div>');
    $('#puzzle').append('<div id="41" style="position:absolute;background-image:url(img/puzzle/bg48/42.png);height:110px;width:110px;background-repeat:no-repeat;left:58px;top:275px"></div>');
    $('#puzzle').append('<div id="42" style="position:absolute;background-image:url(img/puzzle/bg48/43.png);height:110px;width:110px;background-repeat:no-repeat;left:108px;top:270px"></div>');
    $('#puzzle').append('<div id="43" style="position:absolute;background-image:url(img/puzzle/bg48/44.png);height:110px;width:110px;background-repeat:no-repeat;left:177px;top:275px"></div>');
    $('#puzzle').append('<div id="44" style="position:absolute;background-image:url(img/puzzle/bg48/45.png);height:110px;width:110px;background-repeat:no-repeat;left:228px;top:293px"></div>');
    $('#puzzle').append('<div id="45" style="position:absolute;background-image:url(img/puzzle/bg48/46.png);height:110px;width:110px;background-repeat:no-repeat;left:297px;top:287px"></div>');
    $('#puzzle').append('<div id="46" style="position:absolute;background-image:url(img/puzzle/bg48/47.png);height:110px;width:110px;background-repeat:no-repeat;left:339px;top:270px"></div>');
    $('#puzzle').append('<div id="47" style="position:absolute;background-image:url(img/puzzle/bg48/48.png);height:110px;width:110px;background-repeat:no-repeat;left:397px;top:283px"></div>');  
    //
    ////  for (i=0;i<elementow;i++) {
//            $('#puzzle').append('<div class="fragment600 size44" id="'+i+'" style="background-image:none;background-color:#119344"></div>');
//  }
}
 

function los(losuj) {
    // los
    var x = Math.round(Math.random() * 9)+1;
    var y = Math.round(Math.random() * 9)+1;
    var wynik = y;
    y = x*y;

    // wyswietl los
    var dobre = $('.ok').html();
    if(dobre!=0 && dobre%48==0 && !losuj) {
        odkryte = [];
        var grade = $('#grade').val();
        $('#zadanie').html('<div style="margin: 10px 10px 10px 30px;font-weight: normal;" class="ok1 s25 alert alert-success">BRAWO! Dobra robota. <button name="im" onclick="submitForm()" class="btn btn-darkgreen s17">GRAJ DALEJ</button></div>');  
        $(document).keydown(function (e) {
            if (e.keyCode == 13) {
                return false;
            }
        });
    } else {
        $('#zadanie').html(y + ' : ' + x + ' = <input name="odp" type="tel" class="wyraz1" id="odp" size="1" maxlength="3" autocomplete="off" />\n\
    <input type="hidden" name="x" id="x" value="' + x + '" /><input type="hidden" name="y" id="y" value="' + y + '" />');
        $('#wynik').val(wynik);
    }
    $('input[name=odp]').focus();
}

function submitForm() {
    var dobre = $('.ok').html();
    $('#d').val(dobre);
    $('input[name=action]').val('preroll');
    var zle = $('.wrong').html();
    $('#z').val(zle);
    $('#form1').submit();
}


function createStatement() {
    // tworzenie poprawnej odpowiedzi systemowej
    x = ($('#x').val());
    y = ($('#y').val());
    wyn = y/x;
    var statement = ' ' + y + ' : ' + x + ' = ' + wyn + ' <span class="s15 pull-right black" style="font-family: ">wpisano: ' + $('#odp').val() + '</span>';
    return statement;
}

function keyboardEnter(wrong_los) {

    // obsluga klawisza enter
    $(this).keydown(function (e) {
        if (e.keyCode == 13) {
            var statement = createStatement();
            obliczEnter(wrong_los, statement);
            return false;
        }
    });    
}


function obliczEnter(wrong_los, statement) {
    
    if (checkEmpty()) return false; 
    
    var odp = $('#odp').val();
    odp = str_replace(' ', '', odp);


        if (odp == $('#wynik').val()) {
            countCorrect();
            cleanSpace();
            
            
            // odkrywanie kawalka
            frag = Math.round(Math.random()*(elementow-1));
            while (jQuery.inArray(frag,odkryte)!=-1) {
               frag = Math.round(Math.random()*(elementow-1));
            }
            console.debug(odkryte);
            odkryte.push(frag);
            i = frag;
                if (i<(1*cols))       {       x=i*rozmiar;           a=0;     }
            else if (i<(2*cols)) {       x=(i-(1*cols))*rozmiar;       a=1;     }
            else if (i<(3*cols)) {       x=(i-(2*cols))*rozmiar;      a=2;     }
            else if (i<(4*cols)) {       x=(i-(3*cols))*rozmiar;      a=3;     }
            else if (i<(5*cols)) {       x=(i-(4*cols))*rozmiar;      a=4;     }
            
            y=a*rozmiar;
            $('#'+i).css('background-image','none');
            //$('#'+i).css('background-position','-'+x+'px -'+y+'px');
            los();
            
        }
        else {
            if (wrong_los == 1)
                los();
            countWrong(statement);
        }

        $('input[name=odp]').focus();

}

$(document).ready(function () {

    keyboardEnter(1);
    $('#puzzle').addClass('margincenter');
    generatePuzzle();

});