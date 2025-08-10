const totalFrames = 11;

// The final result will be reverted direction.
const moveXPerFrame = 0; // - right, + left
const moveYPerFrame = -8; // - down, + up
const scalePerFrame = 0;  // - up, + down
const time = "25"
const isReverse = true

// Assumes a document is open and one layer is selected
var doc = app.activeDocument;
var baseLayer = app.activeDocument.activeLayer;

function easeInOutQuad(t) {
    return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
}

for (var i = 0; i < totalFrames; i++) {
    var t = i / (totalFrames - 1); // Normalize i to 0..1
    var easedT = easeInOutQuad(t); // Apply easing

    var dup = baseLayer.duplicate();
    dup.name = "_a_" + (i + 1) + "," + time;

    dup.translate(moveXPerFrame * easedT * totalFrames, moveYPerFrame * easedT * totalFrames);
    dup.resize(100 + scalePerFrame * easedT * totalFrames, 100 + scalePerFrame * easedT * totalFrames);

    for (var j = 0; j < doc.layers.length; j++) {
        doc.layers[j].visible = false;
    }
    dup.visible = true;
}

if (isReverse) {
    // Reverse loop with easing
    for (var i = totalFrames - 2; i >= 0; i--) {
        var t = i / (totalFrames - 1);
        var easedT = easeInOutQuad(t);

        var dup = baseLayer.duplicate();
        dup.name = "_a_" + (totalFrames * 2 - i - 1) + "," + time;

        dup.translate(moveXPerFrame * easedT * totalFrames, moveYPerFrame * easedT * totalFrames);
        dup.resize(100 + scalePerFrame * easedT * totalFrames, 100 + scalePerFrame * easedT * totalFrames);

        for (var j = 0; j < doc.layers.length; j++) {
            doc.layers[j].visible = false;
        }
        dup.visible = true;
    }
}