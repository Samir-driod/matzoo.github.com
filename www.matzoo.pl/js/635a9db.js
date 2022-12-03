
$(document).ready(function() {

    $('#zadanie').addClass('s19');
    $('#zadanie').addClass('tekstowe');  
    $('#zadanie').removeClass('wyraz1');  
    los();


});



function los() {
    // los


var krawedz_czy_sciana = Math.round(Math.random() * 1);

if (krawedz_czy_sciana==1) { // jesli krawedz
//
//AB DC EF HG
//
//AD BC FG EH
//
//AE BF CG DH

    tab = [
        ['AB','CG','DC','EF','HG','prostopadłą','ab'],
        ['AB','BC','DC','EF','HG','prostopadłą','ab'],
        ['AB','EH','DC','EF','HG','prostopadłą','ab'],
        ['AB','BF','DC','EF','HG','prostopadłą','ab'],
        ['DC','BF','AB','EF','HG','prostopadłą','dc'],
        ['DC','FG','AB','EF','HG','prostopadłą','dc'],
        ['DC','AE','AB','EF','HG','prostopadłą','dc'],
        ['DC','AD','AB','EF','HG','prostopadłą','dc'],
        ['AE','AD','BF','CG','DH','prostopadłą','ae'],
        ['AE','EF','BF','CG','DH','prostopadłą','ae'],
        ['AE','DC','BF','CG','DH','prostopadłą','ae'],
        ['BF','EH','AE','CG','DH','prostopadłą','bf'],
        ['BF','FG','AE','CG','DH','prostopadłą','bf'],
        ['AD','DC','BC','FG','EH','prostopadłą','ad'],
        ['AD','HG','BC','FG','EH','prostopadłą','ad'],
        ['AD','AE','BC','FG','EH','prostopadłą','ad'],
        ['AD','CG','BC','FG','EH','prostopadłą','ad'],
        ['FG','AE','BC','AD','EH','prostopadłą','fg'],
        ['FG','DC','BC','AD','EH','prostopadłą','fg'],
        ['FG','AB','BC','AD','EH','prostopadłą','fg'],
        ['EH','AB','BC','AD','FG','prostopadłą','eh'],
        ['EH','CG','BC','AD','FG','prostopadłą','eh'],
        ['EH','BF','BC','AD','FG','prostopadłą','eh'],
        ['EH','AE','BC','AD','FG','prostopadłą','eh'],
        ['AB','EF','BC','DH','CG','równoległą','ab'],
        ['AB','EF','BC','AD','DH','równoległą','ab'],
        ['AB','DC','AD','FG','BF','równoległą','ab'],
        ['AB','HG','AD','EH','BF','równoległą','ab'],
        ['AB','CD','AD','EH','BF','równoległą','ab'],
        ['EF','DC','BC','AD','CG','równoległą','ef'],
        ['EF','AB','FG','DH','CG','równoległą','ef'],
        ['EF','HG','BC','DH','FG','równoległą','ef'],
        ['DC','EF','BC','DH','CG','równoległą','dc'],
        ['DC','HG','AD','BF','CG','równoległą','dc'],
        ['DC','AB','BC','BF','AE','równoległą','dc'],
        ['HG','DC','AD','EH','BF','równoległą','hg'],
        ['HG','AB','AD','EH','FG','równoległą','hg'],
        ['HG','EF','AE','FG','BF','równoległą','hg'],
        ['AD','BC','EF','DC','CG','równoległą','ad'],
        ['AD','FG','EF','DH','CG','równoległą','ad'],
        ['AD','EH','EF','HG','AE','równoległą','ad'],
        ['FG','AD','EF','DH','CG','równoległą','fg'],
        ['EH','AD','EF','HG','AE','równoległą','eh'],
        ['AE','BF','EF','HG','FG','równoległą','ae'],
        ['BF','AE','EF','HG','FG','równoległą','bf'],
        ['BF','CG','EH','HG','AB','równoległą','bf'],
        ['BF','DH','EH','AD','AB','równoległą','bf'],
        ['BF','AE','EH','HG','AB','równoległą','bf'],
        
    ];

    var a = Math.round(Math.random() * (tab.length - 1));

    $('#zadanie').html('Poniżej narysowano prostopadłościan ABCDEFGH.\n\
<img src="imgtask/627/'+tab[a][6]+'.png" alt="" class="center-block" style="max-width:50%;max-height:200px">\n\
Krawędzią '+tab[a][5]+' do krawędzi <span class="bold">'+tab[a][0]+'</span> jest krawędź:<input type="hidden" id="odp" name="odp"/><br>');


    var example = Math.round(Math.random() * 3);
    if (example == 1) {
        $('#zadanie').append('<span class="btn btn-lsuccess text-black btn-matzoo33"  onclick="klik(1)"> ' + tab[a][1] + '</span>');
        $('#zadanie').append('<span class="btn btn-lsuccess text-black btn-matzoo33"  onclick="klik(2)"> ' + tab[a][2] + '</span>');
        $('#zadanie').append('<span class="btn btn-lsuccess text-black btn-matzoo33"  onclick="klik(3)"> ' + tab[a][3] + '</span>');   
        $('#zadanie').append('<span class="btn btn-lsuccess text-black btn-matzoo33"  onclick="klik(3)"> ' + tab[a][4] + '</span>');   
    } else if (example == 2) {
        $('#zadanie').append('<span class="btn btn-lsuccess text-black btn-matzoo33"  onclick="klik(2)"> ' + tab[a][2] + '</span>');
        $('#zadanie').append('<span class="btn btn-lsuccess text-black btn-matzoo33"  onclick="klik(3)"> ' + tab[a][4] + '</span>');   
        $('#zadanie').append('<span class="btn btn-lsuccess text-black btn-matzoo33"  onclick="klik(1)"> ' + tab[a][1] + '</span>');
        $('#zadanie').append('<span class="btn btn-lsuccess text-black btn-matzoo33"  onclick="klik(3)"> ' + tab[a][3] + '</span>');   
    } else if (example == 0) {   
        $('#zadanie').append('<span class="btn btn-lsuccess text-black btn-matzoo33"  onclick="klik(3)"> ' + tab[a][3] + '</span>');
        $('#zadanie').append('<span class="btn btn-lsuccess text-black btn-matzoo33"  onclick="klik(1)"> ' + tab[a][1] + '</span>');
        $('#zadanie').append('<span class="btn btn-lsuccess text-black btn-matzoo33"  onclick="klik(3)"> ' + tab[a][4] + '</span>');   
        $('#zadanie').append('<span class="btn btn-lsuccess text-black btn-matzoo33"  onclick="klik(2)"> ' + tab[a][2] + '</span>');
        
    } else if (example == 3) {
        $('#zadanie').append('<span class="btn btn-lsuccess text-black btn-matzoo33"  onclick="klik(3)"> ' + tab[a][4] + '</span>');   
        $('#zadanie').append('<span class="btn btn-lsuccess text-black btn-matzoo33"  onclick="klik(3)"> ' + tab[a][3] + '</span>');   
        $('#zadanie').append('<span class="btn btn-lsuccess text-black btn-matzoo33"  onclick="klik(2)"> ' + tab[a][2] + '</span>');
        $('#zadanie').append('<span class="btn btn-lsuccess text-black btn-matzoo33"  onclick="klik(1)"> ' + tab[a][1] + '</span>');
    }
    
    
} else {
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
