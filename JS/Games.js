$('#down').click(function(e){
        $('html , body').animate({
            scrollTop: $('#games').offset().top
        },2000);
        e.preventDefault();
    });

function TargetRPS(){
    window.open('HTML/RPS.html');
    };

function kinderSay(){
    window.open('HTML/alphabet.html');
    };

function LetterQuiz(){
    window.open('HTML/numbers_quiz.html');
    };

function PicsWord(){
    window.open('HTML/4pics 1 word.html');
    };

function Cross(){
    window.open('HTML/cross.html');
    };

