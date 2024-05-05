let inputbox = document.getElementById('input-box');
let display  = document.getElementById('dislay');

inputbox.addEventListener('keyPress', function(e){
    display.innerText ="you have Pressed " + e.key;
});