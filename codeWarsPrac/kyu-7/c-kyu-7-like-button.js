//Completed

function likeOrDislike(buttons) {
    if(buttons.length === 1){
        return buttons[0]
    } else if (buttons.length === 0) {
        return 'Nothing';
    }

    let buttonState = 'Nothing';

    for (let i = 0; i < buttons.length; i++) {
        if (buttons[i] === buttonState) {
            buttonState = 'Nothing'

        } else if (buttons[i] === 'Like') {
            buttonState = 'Like'
        } else if (buttons[i] === 'Dislike'){
            buttonState = 'Dislike'
        }
    }

    return buttonState;

}

console.log( likeOrDislike(['Dislike']), " Dislike" );
console.log( likeOrDislike(['Like', 'Like']), " Nothing" );
console.log( likeOrDislike(['Dislike', 'Like']), " Like" );
console.log( likeOrDislike(['Like', 'Dislike', 'Dislike']), " Nothing" );
console.log( likeOrDislike(['Dislike', 'Dislike']), " Nothing" );
console.log( likeOrDislike(['Like', 'Like', 'Like']), " Like" );
console.log( likeOrDislike(['Like', 'Dislike']), " Dislike" );
console.log( likeOrDislike(['Dislike', 'Like', 'Dislike']), " Dislike" );
console.log( likeOrDislike(['Like', 'Like', 'Dislike', 'Like', 'Like', 'Like', 'Like', 'Dislike']), " Dislike" );
console.log( likeOrDislike([]), " Nothing" );
