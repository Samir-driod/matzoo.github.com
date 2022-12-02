dobre = 0;
zle = 0;
x = 0;
odpowiedz = '';
co_ile = 1;

// --------


  zestawy = [
  ['0','0'],
  ['1','1'],
  ['2','2'],
  ['3','3'],
  ['4','4'],
  ['5','5'],
  ['6','6'],
  ['8','8'],
  ['9','9'],
  ['10','10']
  
  ];
  
  // --------
  ilosc = $(zestawy).length-1;
 
 
 function wylosuj(ile,skad) {
    linia = Math.round(Math.random()*skad);
    linie = [];
    linie.push(linia);
    while (linie.length<ile) {
      linia = Math.round(Math.random()*skad);
      while (jQuery.inArray(linia,linie)!=-1) linia = Math.round(Math.random()*skad);
      linie.push(linia);
    }
    return linie;
 }

function los() {
    $('#zadanie').html('');
    $('#zadanie').addClass('col-sm-10');    
    // generowanie obrazkow
    linie = wylosuj(4,ilosc);
        obrazki = [];
        $.each( linie, function(lindex, lvalue){
            dlugosclinii = $(zestawy[lvalue]).length-1;
            elementy = wylosuj(1,dlugosclinii);
            $.each( elementy, function(index, value){
                obrazki.push(zestawy[lvalue][value]+'_'+lvalue);
            }); 
        });

    uklad = Math.round(Math.random()*2);
    $.each( obrazki, function(index, value){
        sklad = value.split('_');
        if (uklad==0) $('#zadanie').append('<li id="'+sklad[0]+'" class="mnpo col-sm-3 c'+sklad[1]+'" value="'+sklad[1]+'"><img class="img-responsive center-block" src=" img/kolory/' + sklad[0] + 'a.png" /></li>');
        else if (uklad==1) $('#zadanie').append('<li id="'+sklad[0]+'" class="mnpo col-sm-3 c'+sklad[1]+'" value="'+sklad[1]+'"><img class="img-responsive center-block" src=" img/kolory/' + sklad[0] + 'b.png" /></li>');
        else $('#zadanie').append('<li id="'+sklad[0]+'" class="mnpo col-sm-3 c'+sklad[1]+'" value="'+sklad[1]+'"><img class="img-responsive center-block" src=" img/kolory/' + sklad[0] + 'c.png" /></li>');
        
    });
    obrazki.sort();    
    $.each( obrazki, function(index, value){
        sklad = value.split('_');
        if (uklad==0) $('#zadanie').append('<li id="n'+sklad[0]+'" class="mnpo col-sm-3 c'+sklad[1]+'" value="'+sklad[1]+'"><img class="img-responsive center-block" src=" img/kolory/' + sklad[0] + 'c.png" /></li>');
        else if (uklad==1) $('#zadanie').append('<li id="n'+sklad[0]+'" class="mnpo col-sm-3 c'+sklad[1]+'" value="'+sklad[1]+'"><img class="img-responsive center-block" src=" img/kolory/' + sklad[0] + 'a.png" /></li>');
        else $('#zadanie').append('<li id="n'+sklad[0]+'" class="mnpo col-sm-3 c'+sklad[1]+'" value="'+sklad[1]+'"><img class="img-responsive center-block" src=" img/kolory/' + sklad[0] + 'b.png" /></li>');
    });

 
  nielicz=0;
  sprawdzam = [];
  
  var klik ='abc';

  
  
  $('#zadanie li').click(function(){
 if ($('#is_music').val() == 'on') ring();
  if ($(this).hasClass('unvisible')==false) {
      if (klik.length!=3) {
                   

        if (klik == $(this).val() && klikname != $(this).prop('id')) {

            klasa = $(this).val();
            $('.c'+klasa).each(function(){
                $(this).removeClass('bluo');                
                $(this).addClass('unvisible');
            });
            
    // jesli dobra odpowiedz
    $('#zle_odp').hide();
    $('#tak').fadeIn('').delay(500).fadeOut('');
    $('#area').delay(500).val('');
    // punktacja
    
    $('#dobrze').hide();
    $('#dobrze').fadeIn("fast");
      
    dobre=parseInt(dobre)+1;
    
    zle=zle;
    
    
    $('#dobre').html(dobre);


    
    if (dobre%4==0) {
      los();
    }
    
            
        } else {
            $('#zadanie li').removeClass('bluo');
    // jesli zla odpowiedz
$('#dobrze').hide();
    $('#zle_odp').hide();
    $('#zle_odp').html($('#zle_poczatek').html());
    $('#zle_odp').append('&nbsp; Wybrano złą odpowiedź. ');
    $('#zle_odp').fadeIn("fast");
    zle=parseInt(zle)+1;
    dobre=dobre;
    $('#nie').fadeIn('').delay(500).fadeOut('');
    $('#area').delay(500).val('');            
        }
        
          $('.ok').empty();
  $('.wrong').empty();
  $('.ok').append(dobre);
  $('.wrong').append(zle);
  $('#fd').val(dobre);
  $('#fz').val(zle); 
        ananasy();
        
        
        klik ='abc';
      } else {
        $('#zadanie li').removeClass('bluo');
        $(this).toggleClass('bluo');
        klik = $(this).val();
        klikname = $(this).prop('id');

      
      }
  } 
  });
  
  $('#zadanie').delay(900).fadeIn('slow');
}


$(document).ready(function() {



    los();
    $('#content20').css('padding-left','5%');
    $('#zadanie').addClass('s25');
    
});

