var doc = app.activeDocument;

// Create a new empty group
var group = doc.layerSets.add();
group.name = "Animated";

// Move all top-level layers into the group
for (var i = doc.layers.length - 1; i >= 0; i--) {
    doc.layers[i].move(group, ElementPlacement.INSIDE);
}
