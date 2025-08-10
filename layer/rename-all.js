function renameAllLayers(layerContainer) {
    for (let i = 0; i < layerContainer.layers.length; i++) {
        let layer = layerContainer.layers[i];
        if (layer.layers && layer.layers.length > 0) {
            // It's a group/folder, recurse
            renameAllLayers(layer);
        } else {
            // Regular layer
            layer.name = "_a_" + (i + 1) + ",25";
        }
    }
}

if (app.documents.length > 0) {
    renameAllLayers(app.activeDocument);
    alert("All layers renamed to _a_,33.");
} else {
    alert("No document open.");
}
