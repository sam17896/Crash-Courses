const scribble = require('scribbletune');


let melody1 =scribble.clip({
    notes:scribble.scale('f#',"minor").slice(0,4),
    pattern : 'xx-xx-xx-xx-x-x-'.repeat(4)
    
});

let melody2 =scribble.clip({
    notes:scribble.scale('g#',"phrgian").slice(0,4),
    pattern : 'xx-xx-xx-xx-x-x-'.repeat(4)
    
});


scribble.midi(melody1.concat(melody2),'verse.mid')