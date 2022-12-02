
$(document).ready(function() {

    $('#zadanie').addClass('s19');
    $('#zadanie').addClass('tekstowe');  
    $('#zadanie').removeClass('wyraz1');  
    los();


});



function los() {
    // los

// ABCD EFGH
// ABFE DCGH
// ADHE BCGF

    tab = [
        ['ABCD','EFGH','ABFE','ADHE','równoległą','abcd'],
        ['ABCD','EFGH','DCGH','ADHE','równoległą','abcd'],
        ['ABCD','EFGH','ABFE','BCGF','równoległą','abcd'],
        ['EFGH','ABCD','ABFE','BCGF','równoległą','efgh'],
        ['ABCD','EFGH','DCGH','BCGF','równoległą','abcd'],
        ['EFGH','ABCD','DCGH','BCGF','równoległą','efgh'],       
        ['ABFE','DCGH','ABCD','EFGH','równoległą','abfe'],
        ['ABFE','DCGH','ADHE','BCGF','równoległą','abfe'],
        ['DCGH','ABFE','ADHE','BCGF','równoległą','dcgh'],
        ['ABFE','DCGH','ADHE','ABCD','równoległą','abfe'],
        ['ABFE','DCGH','EFGH','BCGF','równoległą','abfe'],
        ['DCGH','ABFE','EFGH','BCGF','równoległą','dcgh'],
        ['ADHE','BCGF','EFGH','DCGH','równoległą','adhe'],
        ['ADHE','BCGF','EFGH','ABCD','równoległą','adhe'],
        ['BCGF','ADHE','EFGH','ABCD','równoległą','bcgf'],
        ['ADHE','BCGF','ABFE','DCGH','równoległą','adhe'],
        ['BCGF','ADHE','ABFE','ABCD','równoległą','bcgf'],    
    ];

    var a = Math.round(Math.random() * (tab.length - 1));

    $('#zadanie').html('Poniżej narysowano prostopadłościan ABCDEFGH.\n\
<img src="imgtask/627/'+tab[a][5]+'.png" alt="" class="center-block" style="max-width:50%;max-height:200px">\n\
Ścianą '+tab[a][4]+' do ściany <span class="bold">'+tab[a][0]+'</span> jest ściana:<input type="hidden" id="odp" name="odp"/><br>');


    var example = Math.round(Math.random() * 4);
    if (example == 1) {
        $('#zadanie').append('<span class="btn btn-lsuccess text-black btn-matzoo33"  onclick="klik(1)"> ' + tab[a][1] + '</span>');
        $('#zadanie').append('<span class="btn btn-lsuccess text-black btn-matzoo33"  onclick="klik(2)"> ' + tab[a][2] + '</span>');
        $('#zadanie').append('<span class="btn btn-lsuccess text-black btn-matzoo33"  onclick="klik(3)"> ' + tab[a][3] + '</span>');   
    } else if (example == 2) {
        $('#zadanie').append('<span class="btn btn-lsuccess text-black btn-matzoo33"  onclick="klik(2)"> ' + tab[a][2] + '</span>');
        $('#zadanie').append('<span class="btn btn-lsuccess text-black btn-matzoo33"  onclick="klik(1)"> ' + tab[a][1] + '</span>');
        $('#zadanie').append('<span class="btn btn-lsuccess text-black btn-matzoo33"  onclick="klik(3)"> ' + tab[a][3] + '</span>');   
    } else if (example == 3) {
        $('#zadanie').append('<span class="btn btn-lsuccess text-black btn-matzoo33"  onclick="klik(3)"> ' + tab[a][3] + '</span>');
        $('#zadanie').append('<span class="btn btn-lsuccess text-black btn-matzoo33"  onclick="klik(2)"> ' + tab[a][2] + '</span>');
        $('#zadanie').append('<span class="btn btn-lsuccess text-black btn-matzoo33"  onclick="klik(1)"> ' + tab[a][1] + '</span>');
    } else if (example == 4) {
        $('#zadanie').append('<span class="btn btn-lsuccess text-black btn-matzoo33"  onclick="klik(1)"> ' + tab[a][1] + '</span>');
        $('#zadanie').append('<span class="btn btn-lsuccess text-black btn-matzoo33"  onclick="klik(3)"> ' + tab[a][3] + '</span>');
        $('#zadanie').append('<span class="btn btn-lsuccess text-black btn-matzoo33"  onclick="klik(2)"> ' + tab[a][2] + '</span>');    
    } else if (example == 0) {   
        $('#zadanie').append('<span class="btn btn-lsuccess text-black btn-matzoo33"  onclick="klik(3)"> ' + tab[a][3] + '</span>');
        $('#zadanie').append('<span class="btn btn-lsuccess text-black btn-matzoo33"  onclick="klik(1)"> ' + tab[a][1] + '</span>');
        $('#zadanie').append('<span class="btn btn-lsuccess text-black btn-matzoo33"  onclick="klik(2)"> ' + tab[a][2] + '</span>');
        
    } 
    var popr = 1;
$('#zadanie').append('<br><br>');
    $('#wynik').val(popr);
    $('#odp').focus();

}

function createStatement() {
}


function klik(em) {

    $('#odp').val(em);
    obliczEnter();

}
