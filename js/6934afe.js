items = [
    ['Ile dni ma grudzień?','31', '28', '29', '30'],
    ['Ile dni ma rok przestępny?', '366', '365', '356'],
    ['Czy rok 2014 jest rokiem przestępnym?', 'NIE', 'TAK'],
    ['Ile sekund ma godzina?', '3600', '24', '60', '360'],
    ['Kiedy rozpoczął się wiek XXI?', '01.01.2001', '01.01.2000', '01.01.2010'],
    ['I kwartał to jakie miesiące?', 'styczeń, luty, marzec', 'styczeń','styczeń, luty'],
    ['Ile kwartałów ma rok?', '4','10','12','3'],
    ['Ile miesięcy ma rok?', '12','10','52','7'],
    ['Ile miesięcy ma 31 dni?', '7' ,'6','5','8'],
    ['Ile dni ma luty w roku przestępnym?', '29', '28','30','31'],
    ['Jakie miesiące są w III kwartale?', 'lipiec, sierpień, wrzesień','lipiec, sierpień','czerwiec'],
    ['Październik, listopad, grudzień - który to kwartał?', 'IV','III','II','I'],
    ['Ile doba ma godzin?', '24','12','7','10'],
    ['4 godziny - ile to minut?', '240','400','120','60'],
    ['Ile kwartał ma miesięcy?','3','4','6','12'],
    ['Ile jest pór roku?', '4','2','3','6'],
    ['Ile pełnych tygodni mieści się w roku?', '52','12','7','120'],
    ['Ile dni ma rok nieprzestępny?', '365', '366', '356'],
    ['Ile pełnych tygodni mieści się w miesiącu?', '4', '3', '7','10'],
    [' Ile dni ma wrzesień?','30', '28', '29', '31']
];

// --------

ile_pytan = items.length;
x = 0;

$(document).ready(function() {

    const taskDiv = $('#zadanie');
    taskDiv.addClass('taskmargin');

    quizLos(x);

});