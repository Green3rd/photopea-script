let doc = app.activeDocument;
let layers = doc.layers;

let total = layers.length;
let keepCount = 20;

if (total <= keepCount) {
    alert("Already has 20 or fewer layers.");
} else {
    let keepEvery = total / keepCount;
    for (let i = total - 1; i >= 0; i--) {
        if (Math.floor(i % keepEvery) !== 0) {
            layers[i].remove();
        }
    }
    alert(`Reduced to ${doc.layers.length} layers.`);
}
