miasta = [];

$(document).ready(function(){


     $.ajax({
            type: "POST",
            url: "web/ajax.php",
            data: "action=get_seekers"
        }).done(function (cities) {
            miasta = cities.split(';');
        });

    
    
    $( "#szukam").keyup(function(){

        $(this).autocomplete({
            autoFocus: true,
            minLength: 0,
            delay:100,            
            source: miasta
        });
    });
    
    
    $( "#szukam").change(function(){
        city =  $( "#szukam").val();           
    });
    
    $( "#mob_city").keyup(function(){

        $(this).autocomplete({
            autoFocus: true,
            minLength: 0,
            delay:100,            
            source: miasta
        });
    });
    
    
    $( "#mob_city").change(function(){
        city =  $( "#mob_city").val();   
    });


});