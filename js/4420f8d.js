
function los() {
    // los
    var example = Math.round(Math.random() * 3);
    
    if (example==1) { 
        var x = Math.round(Math.random() * 1)+2; 
        var y = Math.round(Math.random() * 3)+2; 
        while (y==4) y = Math.round(Math.random() * 3)+2; 
        var wynik=x*x*x*y;
        
        // wyswietl los
        $('#zadanie').html('<div style="float:left;margin:10px 6px 10px 20%;width:auto">'+x+'</div><div class="sqrt3 margin0">'+y+'</div><div class="pull-left margin10"> = </div><div class="sqrt3 margin0">\n\
        <input name="odp" tabindex="1" type="text" size="2" id="odp" maxlength="6" autocomplete="off" style="padding: 0;margin: 12px 0;line-height: 100%;"/></div>');     
        $('#wynik').val(wynik);
        
    } else {     
        var x = Math.round(Math.random() * 7)+2; 
        var y = Math.round(Math.random() * 3)+2; 
        while (y==4) y = Math.round(Math.random() * 3)+2; 
        if (x>5) y = Math.round(Math.random() * 2)+2; 
        var wynik=x*x*y;
        
        // wyswietl los
        $('#zadanie').html('<div style="float:left;margin:10px 6px 10px 20%;width:auto">'+x+'</div><div class="sqrt margin0">'+y+'</div><div class="pull-left margin10"> = </div><div class="sqrt margin0">\n\
        <input name="odp" tabindex="1" type="text" size="2" id="odp" maxlength="6" autocomplete="off" style="padding: 0;margin: 12px 0;line-height: 100%;"/></div>');     
        $('#wynik').val(wynik);
        
    }
        $('#odp').focus();        

}


function createStatement() {
    // tworzenie poprawnej odpowiedzi systemowej
    x = ($('#x').val());
    y = ($('#y').val());
    wyn = ($('#wyn').val());
    
    var statement = '&nbsp; '+x+'<sup>'+y+'</sup> = '+wyn+ ' <span class="s15 pull-right black" style="font-family: ">wpisano: ' + $('#odp').val() + '</span>';
    var statement = '';
    return statement;
}


$(document).ready(function () {

    $('#zadanie').addClass('wyraz1');
    $('#zadanie').css('text-align','left');
    los();
    keyboardEnter(1);

});

