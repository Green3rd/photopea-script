const folderName = "heart2"
const animationTime = "50"

function renameAllLayersUnderFolder(layerContainer) {
    for (let i = 0; i < layerContainer.layers.length; i++) {
        let layer = layerContainer.layers[i];

        if (layer.layers && layer.layers.length > 0) {
            if (layer.name === folderName) {
                renameAllLayers(layer);
            } else {
                renameAllLayersUnderFolder(layer);
            }
        }
    }
}

function renameAllLayers(layerContainer) {
    for (let i = 0; i < layerContainer.layers.length; i++) {
        let layer = layerContainer.layers[i];
        if (layer.layers && layer.layers.length > 0) {
            // Recurse into subgroups if any
            renameAllLayers(layer);
        } else {
            layer.name = "_a_" + (i + 1) + "," + animationTime;
        }
    }
}
if (app.documents.length > 0) {
    renameAllLayersUnderFolder(app.activeDocument);
    alert("All layers renamed");
} else {
    alert("No document open.");
}
