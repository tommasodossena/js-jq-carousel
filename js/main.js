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

// FUNZIONI
// Funzione slide precedente carosello
function carouselPrev() {
    // 1A - Variabile che seleziona gli elementi del carousel con la classe active e li rimuove
    var currentSlide = $(".slider-wrapper .active");
    currentSlide.removeClass("active");
    // 2A - Se gli elementi del carousel con la classe active hanno la classe first, devo applicare la classe active agli elementi con la classe last
    if ( currentSlide.hasClass("first") == false ) {
        currentSlide.prev().addClass("active");
    } else {
        $(".last").addClass("active");
    }
}

// Funzione slide successiva carosello
function carouselNext() {
    // 1B - Variabile che gli elementi del carousel con la classe active e li rimuove
    var currentSlide = $(".slider-wrapper .active");
    currentSlide.removeClass("active");
    // 2B - Se gli elementi del carousel con la classe active hanno la classe last, devo applicare la classe active agli elementi con la classe first
    if ( currentSlide.hasClass("last") == false ) {
        currentSlide.next().addClass("active");
    } else {
        $(".first").addClass("active");
    }
}

// 0 - $(document).ready()
$(function() {
    
    // 1 - Al click sulla freccia sinistra, mostrare l'immagine precedente
    $(".prev").click(
        function() {
            carouselPrev();
        }
    );

    // 2 - Al click sulla freccia destra, mostrare l'immagine successiva
    $(".next").click(
        function() {
            carouselNext();
        }
    );
   
    // 3 - Premendo le frecce direzionali sulla tastiera l'immagine cambia
    $(document).keydown(
        function (e) {
            if ( e.which == 39 ) {
                carouselNext();
            } else if ( e.which == 37 ) { 
                carouselPrev();
            }
        }
    );

    // 4 - Cliccando sui pallini visualizzare la relativa immagine
    $(".nav .fa-circle").click(
        function () {
            var clicked = $(this).index();
            var currentSlide = $(".images img.active");
            var currentBullet = $(".nav i.active");

            currentSlide.removeClass("active");
            $(".images img").eq(clicked).addClass("active");

            currentBullet.removeClass("active");
            $(this).addClass("active");
        }
    );

    // 5 - Autoplay: l'immagine passa a quella successiva ogni 4 secondi
    setInterval("carouselNext()", 4000);
    
});