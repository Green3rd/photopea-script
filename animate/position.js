// Assumes a document is open and one layer is selected
var doc = app.activeDocument;
var baseLayer = app.activeDocument.activeLayer;

var totalFrames = 10;
var moveXPerFrame = 10; // pixels to move right per frame

for (var i = 0; i < totalFrames; i++) {
    // Duplicate the base layer
    var dup = baseLayer.duplicate();
    dup.name = "_a_" + (i + 1) + ",100 ";

    // Translate layer to the right
    dup.translate(moveXPerFrame * i, 0);

    // Set visibility: only current duplicated layer is visible
    for (var j = 0; j < doc.layers.length; j++) {
        doc.layers[j].visible = false;
    }
    dup.visible = true;
}
