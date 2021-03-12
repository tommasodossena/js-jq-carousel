/*
ESERCIZIO: SLIDER
Lo slider prevederà due frecce (icone) che permettono di scorrere tra le immagini dello slider
In oltre per scorrere le immagini permettere anche l’uso delle frecce sinistra e destra della tastiera
Utiliziamo una classe first e last per capire quali sono la prima e ultima immagine dello slider
Utilizziamo una classe active per aiutarci a capire quale è l’immagine attuale da visualizzare nello slider
BONUS:
Clicchiamo sui pallini e mostriamo l’immagine corrispondente
Generiamo i pallini con JS
*/

// 0 - $(document).ready()
$(function() {
    
    // 1A - Al click sulla freccia sinistra, mostrare l'immagine precedente
    $(".prev").click(
        function() {
            // 2A - Variabile che seleziona l'immagine con la classe active e la rimuove
            var imgActive = $(".active");
            imgActive.removeClass("active");
            // 3A - Se l'immagine con la classe active ha la classe first, devo applicare la classe active all'ultima immagine. 
            if ( imgActive.hasClass("first") == false ) {
                imgActive.prev().addClass("active");   
            } else {
                $(".last").addClass("active");  
            }
        }
    );

    // 1B - Al click sulla freccia destra, mostrare l'immagine successiva
    $(".next").click(
        function() {
            // 2B - Variabile che seleziona l'immagine con la classe active e la rimuove
            var imgActive = $(".active");
            imgActive.removeClass("active");
            // 3B - Se l'immagine con la classe active ha la classe last, devo applicare la classe active alla prima immagine. 
            if ( imgActive.hasClass("last") == false ) {
                imgActive.next().addClass("active");   
            } else {
                $(".first").addClass("active");  
            }
        }
    );

});