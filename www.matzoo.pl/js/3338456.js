dobre = 0;
zle = 0;
x = 0;
odpowiedz = '';




// --------

slowa =   ['0a','0b','1a','1b','1c','1d','1e','2a','2b','2c','2e','3a','3b','4a','4b','4c','4d','5a','5b','6a','6b','6c','6d','6e','6f','7a','8a','8b','8c','8d','8e','9a','9b','9c','10a','10b','10c'];
odp   =   ['0' ,'0' ,'1' ,'1' ,'1' ,'1' ,'1' ,'2' ,'2' ,'2' ,'2' ,'3' ,'3' ,'4' ,'4' ,'4' ,'4' ,'5' ,'5' ,'6' ,'6' ,'6' ,'6' ,'6' ,'6' ,'7' ,'8' ,'8' ,'8' ,'8' ,'8' ,'9' ,'9' ,'9' ,'10' ,'10' ,'10'];
byki  =   ['biały', 'czerwony', 'zielony', 'niebieski', 'pomarańczowy', 'szary' , 'żółty', 'granatowy','brązowy','fioletowy','różowy'  ];
pary  =   ['bialy', 'czerwony', 'zielony', 'niebieski', 'pomaranczowy', 'szary' , 'zolty', 'granatowy','brazowy','fioletowy','rozowy'  ];
  
  ilosc = $(slowa).length-1;
  iloscs = $(pary).length-1;
// --------

  
function los() {
    
  prawidlowe = [];
  zaznaczone = [];
  // generowanie klocków
  x = Math.round(Math.random()*iloscs);
  $('#zadanie').html('');
  $('#zadanie').addClass('col-md-10');
  $('#zadanie').append('<p style="color:#234080;font-size: 30pt;font-weight: bold">'+byki[x]+'&nbsp;</p>');
  for (i=1;i<13;i++) {
    y = Math.round(Math.random()*ilosc);
    examp = Math.round(Math.random()*1);
    if (odp[y]==x) {
      $('#zadanie').append('<span class="col-sm-3 img-responsive" id="'+i+'"><img class="border5 margin10 btn btn-default img-responsive center-block" src=" img/kolory/' + slowa[y] + '.png" /></span>');
         prawidlowe.push(i);
    } else {
      $('#zadanie').append('<span class="col-sm-3 img-responsive" id="'+i+'"><img class="border5 margin10 btn btn-default img-responsive center-block" src=" img/kolory/' + slowa[y] + '.png" /></span>');
    }
  }
  while (prawidlowe.length==0) {
    $('#zadanie').html('');
    x = Math.round(Math.random()*iloscs);
    $('#zadanie').append('<p style="color:#234080;font-size: 30pt;font-weight: bold">'+byki[x]+'&nbsp;</p>');
    for (i=1;i<13;i++) {
      y = Math.round(Math.random()*ilosc);
      examp = Math.round(Math.random()*1);
      if (odp[y]==x) {
        $('#zadanie').append('<span class="col-sm-3 img-responsive" id="'+i+'"><img class="border5 margin10 btn btn-default img-responsive center-block" src=" img/kolory/' + slowa[y] + '.png" /></span>');
           prawidlowe.push(i);
      } else {
        $('#zadanie').append('<span class="col-sm-3 img-responsive" id="'+i+'"><img class="border5 margin10 btn btn-default img-responsive center-block" src=" img/kolory/' + slowa[y] + '.png" /></span>');
      }
    }      
  }
  
}

$(document).ready(function(){


  var co_ile = 1;

  los();


  $('#zadanie span').click(function(){
      if ($('#is_music').val() == 'on') click();
    $(this).toggleClass('zaznaczona');
  });

  $(this).keydown(function(e){
    if (e.keyCode==13) oblicz(co_ile);
  });

  nielicz=0;


});






function oblicz(){
    

  var ok=1;

  $('.zaznaczona').each(function(){
    id = parseInt($(this).prop('id'));
    zaznaczone.push(parseInt(id));
    if (jQuery.inArray(id,prawidlowe)==-1)  ok=0;
  });

for (i=0;i<prawidlowe.length;i++){
    if (jQuery.inArray(prawidlowe[i],zaznaczone)==-1)  ok=0;
}

    
   
  if(ok==1) {
  
    $('#tresc').hide();
    $('#zle_odp').hide();
    $('#dobrze').hide();
    $('#dobrze').fadeIn("fast");
  
    $('#odp').val('');
    $('#guziki').empty();
    
    
    dobre=parseInt(dobre)+1;
    zle=zle;
  
    
    los();
      $('#zadanie span').click(function(){
      if ($('#is_music').val() == 'on') click();
    $(this).toggleClass('zaznaczona');
  });
    
  }
  else {    
      x = ($('#x').val());
      y = ($('#y').val());
      wyn = x*y;
    $('#tresc').hide();
    $('#dobrze').hide();
    $('#zle_odp').hide();
    $('#zle_odp').html($('#zle_poczatek').html());
    $('#zle_odp').append('&nbsp; Spróbuj ponownie. ');
    $('#zle_odp').fadeIn("fast");
    $('#odp').val('');
    zle=parseInt(zle)+1;
    dobre=dobre;
   
  }

  $('.ok').empty();
  $('.wrong').empty();
  $('.ok').append(dobre);
  $('.wrong').append(zle);
  $('#fd').val(dobre);
  $('#fz').val(zle); 
    
ananasy();

}