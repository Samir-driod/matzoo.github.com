$(document).ready(function () {
      //window.setTimeout(function () {
    if(!document.getElementById('JibjKoUzkLREzoo')){
        
        yes = $("#task_area").length;
             $("#task_area").css('pointer-events','none');
             $("#task_area").css('opacity','0.2');
             
        if (yes) $("body").prepend('<div id="bear_wrap" style="width:100%;display:block;z-index:100000;padding:10% 1%;position: fixed;height: 100%;background-color: rgba(0,0,0,0.5);">\n\
<div id="" style="position:relative;width:auto;background-color:#2B67A0;background-color:#FFF;max-width:740px;margin:0 auto;border-radius:10px">\n\
  <img onclick="window.open(\'strefa-bez-reklam\')"  style="padding:4% 1% 1%;cursor:pointer" src="img/JibjKoUzkLREzoo.png" alt="Prosimy, wyłącz blokowanie reklam." class="img-responsive center-block" />\n\
  <a title="zamknij" onclick="$(\'#bear_wrap\').hide()" style="cursor: pointer; top:3px; position: absolute; right: 10px;"><i class="fa fa-times" aria-hidden="true"></i></a>\n\
  <p class="text-center" style="padding-bottom:20px">\n\
<a title="zamknij" onclick="window.open(\'adblock\')" class="btn margin10">Jak wyłączyć Adblocka?</a>\n\
</p>\n\
\n\
</div>\n\
</div>');
    }
  //}, 1000);
    
});


