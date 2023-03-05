$(document).ready(function(){
// let przycisk=document.querySelector('#pobierzDane');
// console.log(przycisk)

let przycisk=$('#pobierzDane');

przycisk.click(function(){

$.getJSON('https://akademia108.pl/kurs-front-end/ajax/1-pobierz-dane-programisty.php', function(data){
console.log(data);

$('#dane-programisty').append(
    '<br>Imię: ' + data.imie, 
    '<br>Nazwisko: ' + data.nazwisko,
    '<br>Zawód: ' + data.zawod,
    '<br>Firma: ' + data.firma,
)
});
});

   
});
