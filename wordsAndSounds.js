// finds element with id "player"
// then we can use methods that the browser provides on <audio> elements
// player points to the audio element itself
const player = document.getElementById('player');

// finds element with id "words"
const words = document.getElementById('words')

// currentTime is an attribute of <audio> elements. 
function seekTo(seconds) {
    player.currentTime = seconds;
    player.play();
}

// the element with id pieceTitle, when clicked, will go to the first timestamp in the first element of sections
// sections is a global variable that contains objects
// objects are like dictionaries / hash
document.getElementById('pieceTitle').style.cursor = 'default';

player.addEventListener('canplaythrough', () => {
    document.getElementById('pieceTitle').onclick = () => seekTo(sections[0].start);
    document.getElementById('pieceTitle').style.cursor = 'pointer';
});

// loop through each element of sections
sections.forEach(section => {
    // if the text indicates that there is to be a new paragraph
    // add <br><br>
    if (section.newParagraph){
        words.appendChild(document.createElement('br'));
        words.appendChild(document.createElement('br'));
    }
    
    // we want the text to be in <span> elements
    const span = document.createElement('span');
    span.innerHTML = section.text + (section.noSpace ? '' : ' ');

    // starts out transparent
    span.style.opacity = 0;
    
    // when you click on previous words, you can come back to the previous section
    span.onclick = () => seekTo(section.start);
    words.appendChild(span);
    section.el = span;
})

function checkTime() {
    sections.forEach(section => {
        if (player.currentTime >= section.start) {
            section.el.style.opacity = 1;
            section.el.style.cursor = 'pointer';
            section.el.style.pointerEvents = 'auto';
        } else {
            section.el.style.opacity = 0;
            section.el.style.pointerEvents = 'none';
        }
    });
    requestAnimationFrame(checkTime);
}

requestAnimationFrame(checkTime);