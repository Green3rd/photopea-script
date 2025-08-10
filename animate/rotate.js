var doc = app.activeDocument;
var baseLayer = doc.activeLayer;


var angles = [0, 3, 5, 8, 5, 0, -3, -5, -8, -5];

for (var i = 0; i < angles.length; i++) {
    var dup = baseLayer.duplicate();
    dup.name = "_a_" + (i + 1) + ",40 ";

    // Apply rotation
    dup.rotate(angles[i]);

    // Hide all other layers
    for (var j = 0; j < doc.layers.length; j++) {
        doc.layers[j].visible = false;
    }

    // Show only current frame
    dup.visible = true;
}
