$(document).ready(function(){
    $("#cambiarcolor").click(function(){
        $("#parrafo").toggleClass("rojo"); 
    });
});


document.addEventListener('DOMContentLoaded', function() {
    const toggleButton = document.getElementById('colorazul');
    const targetParagraph = document.getElementById('parrafo2');

    toggleButton.addEventListener('click', function() {
        targetParagraph.classList.toggle('azul');
    });
});