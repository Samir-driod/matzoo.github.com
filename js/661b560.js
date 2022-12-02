
function los() {
  // los

    //var tab = ['11','40','41','42','43','44','52','54','55','56','59','62','63','64','66','68','69','70','72','73','82','86','88','90','135','180'];
    
    
    var tab = [

['√3', '1', '2'],
['2√3', '2', '4'],
['3√3', '3', '6'],
['4√3', '4', '8'],
['5√3', '5', '10'],
['6√3', '6', '12'],
['7√3', '7', '14'],
['8√3', '8', '16'],
['9√3', '9', '18'],

['3','√3', '2√3'],
['6','2√3', '4√3'],
['9','3√3', '6√3'],
['12','4√3', '8√3'],
['15','5√3', '10√3'],

['√6','√2', '2√2'],
['2√6','2√2', '4√2'],
['3√6','3√2', '6√2']

];
    
    
    var example = Math.round(Math.random()*(tab.length-1));
    
    wynik=tab[example];
    
    var ex = Math.round(Math.random()*5)+1;
    
    if (ex==1) { // b
        wynik=tab[example][1];
        var litera = 'x';
        tab[example][0]='';
        tab[example][1]=litera;
        
    }
    else if (ex==6) { // b2
        wynik=tab[example][1];
        var litera = 'x';
        tab[example][2]='';
        tab[example][1]=litera;
        
    }
    else if (ex==2) { // a
        wynik=tab[example][0];
        var litera = 'x';
        tab[example][0]=litera;
        tab[example][1]='';
    }
    else if (ex==5) { // a 2
        wynik=tab[example][0];
        var litera = 'x';
        tab[example][0]=litera;
        tab[example][2]='';
    }
    else if (ex==3) { // c
        wynik=tab[example][2];
        var litera = 'x';
        tab[example][2]=litera;
        tab[example][1]='';
    }
    else if (ex==4) { // c
        wynik=tab[example][2];
        var litera = 'x';
        tab[example][2]=litera;
        tab[example][0]='';
    }

    // wyswietl los
    $('#zadanie').html('<div class="two-cards">\n\
  <div class="card"><div class="trojprost30"><div class="troj30-a">'+tab[example][0]+'</div><div class="troj30-b">'+tab[example][1]+'</div><div class="troj30-c">'+tab[example][2]+'</div></div></div>\n\
  <div class="card"><a class="znak btn btn-lsuccess btn-matzoo gradient s21 text-black margin0 pull-right" style="padding:8px" onclick="radic(\'&radic;\')"><img alt="&radic;" src="img/zn_sqrtsm.png"></a>\n\
<br><br class="hidden-xs">&nbsp;'+litera+' = <input type="text" id="odp" size=2 name="odp" autocomplete="off" /><input name="odp3" type="text" style="opacity:0;float:right" id="odp3" size="1" autocomplete="off" maxlength="2" /><br></div>\n\
  </div>\n\
<div class="modal fade" id="myModal">\n\
  <div class="modal-dialog" style="max-width: 800px;width:auto">\n\
    <div class="modal-content">\n\
      <div class="modal-body"><button type="button" class="close s19" data-dismiss="modal" aria-label="Close"><span aria-hidden="true" class="">&times;</span></button>\n\
<div class="tekstowe-solve tekstowe">\n\
    <p class="main-solve">Połowa trójkąta równobocznego - zależności</p><p class=text-center>\n\
<img src="imgtask/troj_prost30wzory.png" alt="rysunek" style="max-width:75%"/>\n\
</p><p class="main-solve"></p>\n\
</div>  \n\
      </div>\n\
    </div><!-- /.modal-content -->\n\
  </div><!-- /.modal-dialog -->\n\
</div><!-- /.modal -->');
    $('#wynik').val(wynik);
    $('#odp').focus();

}

function createStatement() {
    // tworzenie poprawnej odpowiedzi systemowej
    var statement = 'Spróbuj ponownie. <span class="s15 oswald dontknow" style="font-family:oswald;font-weight:300;margin-bottom:0">Nie wiesz jak? <a onclick="$(\'#myModal\').modal()" style="cursor:pointer">Zobacz wzory.</a></span>';
    return statement;
}


$(document).ready(function () {
    
    $('#content20').prop('id','content10');
    $('#content10').css('padding-left','5%');
    $('#zadanie').addClass('s30');
    
    
    los();
    keyboardEnter(0);

});