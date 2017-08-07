const scribble = require('scribbletune');
let clip = scribble.clip({
    notes: ['c4']
});
scribble.midi(clip);