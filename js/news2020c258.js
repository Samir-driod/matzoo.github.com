function str_replace (search, replace, subject, count) {
    j = 0,
    temp = '',
    repl = '',
    sl = 0,        fl = 0,
    f = [].concat(search),
    r = [].concat(replace),
    s = subject,
    ra = Object.prototype.toString.call(r) === '[object Array]',        sa = Object.prototype.toString.call(s) === '[object Array]';
    s = [].concat(s);
    if (count) {
        this.window[count] = 0;
    }
    for (i = 0, sl = s.length; i < sl; i++) {
        if (s[i] === '') {
            continue;
        }
        for (j = 0, fl = f.length; j < fl; j++) {
            temp = s[i] + '';
            repl = ra ? (r[j] !== undefined ? r[j] : '') : r[0];
            s[i] = (temp).split(f[j]).join(repl);
            if (count && s[i] !== temp) {
                this.window[count] += (temp.length - s[i].length) / f[j].length;
            }
        }
    }
    return sa ? s : s[0];
}

function listen(sound,check) {
    audio = new Audio('upload/'+sound+'.mp3');
    if (!check || check && $('#is_music').val() == 'on') audio.play();
}

function change_music() {
  var music = $('#is_music').val();
  if (music=='off') {
    $('#is_music').val('on');
    $('#music').html('wyłącz dźwięki <span aria-hidden="true" class="glyphicon glyphicon-headphones"></span>');
    $.ajax({
        type: "POST",
        url: "../web/ismusic.php",
        data: "is=on"
    }); 
  } else {
    $('#is_music').val('off');
    $('#music').html('włącz dźwięki <span aria-hidden="true" class="glyphicon glyphicon-headphones"></span>');
    $.ajax({
        type: "POST",
        url: "../web/ismusic.php",
        data: "is=off"
    }); 
     
  }
}

function Session()
{
    var oIframe = document.createElement('iframe');
    oIframe.src = '../web/ping.php';
    oIframe.style.border = oIframe.style.width = oIframe.style.height = 0;
    document.body.appendChild(oIframe);
}

$(document).ready(function(){


    setTimeout("Session()", 500000);
    
$('.uklad_point').click(function(){
    if ($(this).hasClass('disabled')) {
        
    } else {
  if ($(this).hasClass('redd')) {
    $(this).removeClass('redd');
    $('#zaznaczone').val('');
  } else {
      $(this).parent().children().removeClass('redd');
    $(this).addClass('redd');
    valn = $(this).attr('id');
    $('#zaznaczone').val(+valn);
  }
        
    }
});


if ($)
   
    
        $('.cat').click(function() {
        $(this).parent().parent().children('div').slideToggle('slow');
    });


$('input[name=email]').click(function(){
  $(this).val('');
});

  // walidacja email w newsletterze
  $('#news_addemail').click(function(){
    email=$('input[name=email]').val();
    emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
    if (email=='') {
      alert('Wpisz w pole adres e-mail');
      return false;
    }
    else if(!emailReg.test(email)) {
      alert('Wpisz poprawny adres e-mail');
      return false;
    }
    else return true;
  });


//(function () {
//    width = window.innerWidth;
//    var rand = Math.round(Math.random() * 1);
//    if (rand===1) {
//  window.setTimeout(function () {
//    if ( width>800 && ($('.adsense200').height() === 0 || $('.adsense200').filter(':visible') === 0 || $('.spolecznoscinet').height() === 0 || $('.spolecznoscinet').filter(':visible') === 0)) {
//       $("#task_area").html("<div><br><a href='strefa-bez-reklam' title='strefa bez reklam'><img src='img/adblock.png' alt='blokowanie reklam' /></a></div>");
//    } 
//  }, 8000);
//    }
//})();

});