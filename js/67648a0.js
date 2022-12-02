
function los() {
    // los
    let example = Math.round(Math.random() * 9);

    var unitFrom, unitTo, unitChange, wynik, x;
    
    if (example === 0) { 
        // tydzień - 7 dni
        
        unitFrom = 'tygodnie';
        unitTo = 'dni';
        unitChange = 7;
        
        x = Math.round(Math.random() * 3) + 1;
        if (x === 1) unitFrom = 'tydzień'; 
        
        wynik = x * unitChange;

    
    } else if (example === 1) { 
        // godzina - 4 kwadranse
        
        unitFrom = 'godzin';
        unitTo = 'kwadransów';
        unitChange = 4;
        
        x = Math.round(Math.random() * 3) + 1;
        switch (x) {
            case 1: unitFrom = 'godzina'; unitTo = 'kwadranse'; break;
            case 2: unitFrom = 'godziny'; break;
            case 3: unitFrom = 'godziny'; break;
            case 4: unitFrom = 'godziny'; break;
        }
        
        wynik = x * unitChange;

    
    } else if (example === 2) { 
        // godzina - 60 minut
        
        unitFrom = 'godzin';
        unitTo = 'minut';
        unitChange = 60;
        
        x = Math.round(Math.random() * 2) + 1;
        switch (x) {
            case 1: unitFrom = 'godzina'; break;
            case 2: unitFrom = 'godziny'; break;
            case 3: unitFrom = 'godziny'; break;
            case 4: unitFrom = 'godziny'; break;
        }
        
        wynik = x * unitChange;
        
    
    } else if (example === 3) {
        // dzień - 24 godziny
        
        unitFrom = 'dzień';
        unitTo = 'godziny';
        unitChange = 24;
        
        x = Math.round(Math.random() * 1) + 1;
        if (x === 2) {
            unitFrom = 'dni';
            unitTo = 'godzin';
        }
        
        wynik = x * unitChange;
    
    
    } else if (example === 4) {
        // 24 godziny - dzień
        
        unitTo = 'dzień';
        unitFrom = 'godziny';
        unitChange = 24;
        
        x = Math.round(Math.random() * 1) + 1;
        if (x === 2) {
            unitTo = 'dni';
            unitFrom = 'godzin';
        } 
        wynik = x;
        x = x * unitChange;
        
        
    } else if (example === 5) {
        //  7 dni = tydzień
        
        unitFrom = 'dni';
        unitTo = 'tygodnie';
        unitChange = 7;
        
        x = Math.round(Math.random() * 3) + 1;
        if (x === 1) unitTo = 'tydzień'; 
        
        wynik = x;
        x = x * unitChange;
        
        
    } else if (example === 6) {
        //  4 kwadranse = godzina
        
        unitFrom = 'kwadransów';
        unitTo = 'godzin';
        unitChange = 4;
        
        x = Math.round(Math.random() * 3) + 1;
        switch (x) {
            case 1: unitTo = 'godzina'; unitFrom = 'kwadranse'; break;
            case 2: unitTo = 'godziny'; break;
            case 3: unitTo = 'godziny'; break;
            case 4: unitTo = 'godziny'; break;
        }
        
        wynik = x;
        x = x * unitChange;
        
        
    } else if (example === 7) {
        // 60 minut = godzina
        
        
        unitFrom = 'minut';
        unitTo = 'godzin';
        unitChange = 60;
        
        x = Math.round(Math.random() * 2) + 1;
        switch (x) {
            case 1: unitTo = 'godzina'; break;
            case 2: unitTo = 'godziny'; break;
            case 3: unitTo = 'godziny'; break;
            case 4: unitTo = 'godziny'; break;
        }
        
        wynik = x;
        x = x * unitChange;
        

    } else if (example === 8) { 
        // minuta - 60 sekund
        
        unitFrom = 'minut';
        unitTo = 'sekund';
        unitChange = 60;
        
        x = Math.round(Math.random() * 2) + 1;
        switch (x) {
            case 1: unitFrom = 'minuta'; break;
            case 2: unitFrom = 'minuty'; break;
            case 3: unitFrom = 'minuty'; break;
            case 4: unitFrom = 'minuty'; break;
        }
        
        wynik = x * unitChange;    
        
        
    } else if (example === 9) {
        // 60 sekund = minuta
        
        
        unitFrom = 'sekund';
        unitTo = 'minut';
        unitChange = 60;
        
        x = Math.round(Math.random() * 2) + 1;
        switch (x) {
            case 1: unitTo = 'minuta'; break;
            case 2: unitTo = 'minuty'; break;
            case 3: unitTo = 'minuty'; break;
            case 4: unitTo = 'minuty'; break;
        }
        
        wynik = x;
        x = x * unitChange;    
        
    }


    
    const tresc = '<div>' + x + ' ' + unitFrom + '&nbsp; = &nbsp;<input type="tel" id="odp" size="2" maxchars="4" name="odp"/> ' +
        unitTo + '</div><p class="s20 margin0">&nbsp;' +
        '<input type="hidden" name="unitFrom" id= "unitFrom" value="' + unitFrom + '" />' +
        '<input type="hidden" name="unitTo" id= "unitTo" value="' + unitTo + '" />' +
        '<input type="hidden" name="x" id= "x" value="' + x + '" />' +
        '</p>';

    // wyswietl los
    $('#zadanie').html(tresc);
    $('#wynik').val(wynik);
    $('#odp').focus();
    
}


function createStatement() {
    // tworzenie poprawnej odpowiedzi systemowej
    x = ($('#x').val());
    wyn = ($('#wynik').val());
    unitFrom = ($('#unitFrom').val());
    unitTo = ($('#unitTo').val());

    statement = x + ' ' + unitFrom + ' to ' + wyn + ' ' + unitTo + '.';
    return statement;
}


$(document).ready(function () {

    
    $('#zadanie').addClass('s35');
    $('#zadanie').css('font-weight','normal');
    $('#zle_odp').addClass('wrong3');


});