
function los() {
    // los
    var example = Math.round(Math.random() * 2);

    
    if (example==0) {        
        
        var ex = Math.round(Math.random() * 3); 
        var x = Math.round(Math.random() * 986)+12; 
        if (ex==1) x=x*10;
        else if (ex==2) x=x*100;
        else if (ex==3) x=x*1000;
        
        var tresc = x;
        var y = 0;
        while (x>10) {
            x=x/10;
            y=y+1;
            x=Math.decimal(x,y);
        }
        x=str_replace('.',',',x);
        
    }
    else if (example==1) {        
        
        var ex = Math.round(Math.random() * 3); 
        var x = Math.round(Math.random() * 986)+12; 
        var b = Math.round(Math.random() * 3)+3; 
        for (i=1;i<=b;i++) {
            x=x/10;
            x=Math.decimal(x,(b)); 
        }
        var xp=str_replace('.',',',x);
        var tresc = xp;
        var y = 0;
        while (x<1) {
            x=x*10;
            y=y-1;
        }
        x=Math.decimal(x,(b));
        x=str_replace('.',',',x);
        
    }
    else {        

        var x = Math.round(Math.random() * 3200)+12; 
        var a = Math.round(Math.random() * 4)+2; 
        var tresc = x+' · 10<sup>'+a+'</sup>';
        var y = 0;
        while (x>10) {
            x=x/10;
            y=y+1;
            x=Math.decimal(x,y);
        }
        x=str_replace('.',',',x);
        y=y+a;
    }
   
    
        // wyswietl los
        $('#zadanie').html('<p>'+tresc+' = <input name="odp" type="text" id="odp" size="3" maxlength="7" autocomplete="off" /> · 10<sup><input name="odp2" type="text" class="s30" id="odp2" size="1" maxlength="5" autocomplete="off" style="margin-left:2px;line-height:100%;" /></sup>\n\
    <input type="hidden" id="x" value="'+x+'" /><input type="hidden" id="tresc" value="'+tresc+'" /><input type="hidden" id="wyn" value="'+y+'" /></p>');
        $('#wynik').val(x);
        $('#wynik2').val(y);

        $('#odp').focus();        
   


}
Math.decimal = function(n, k) 
{
    var factor = Math.pow(10, k+1);
    n = Math.round(Math.round(n*factor)/10);
    return n/(factor/10);
}


function createStatement() {
    // tworzenie poprawnej odpowiedzi systemowej
    tresc = ($('#tresc').val());
    x = ($('#x').val());
    wyn = ($('#wyn').val());
    
    //var statement = ' ' + x + ' · ' + y + ' = ' + wyn + ' <span class="s15 pull-right black" style="font-family: ">wpisano: ' + $('#odp').val() + '</span>';
    var statement = '&nbsp; '+tresc+' = '+x+' · 10<sup>'+wyn+ '</sup> <span class="s15 pull-right black" style="font-family: ">wpisano: '+$('#odp').val()+' · 10<sup>' + $('#odp2').val() + '</sup></span>';
    return statement;
}


$(document).ready(function () {

$('#zadanie').addClass('s40');
    los();
    keyboardEnter(1);

});