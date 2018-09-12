
const CANVAS_WIDTH = 800;
const CANVAS_HEIGHT = 600;
const DEFAULT_TREE_DEPTH = 10;

let tree;
let slider;
let treeDepthToDisplay = DEFAULT_TREE_DEPTH;


// p5 specific initializer function
function setup() {
    const cnv = createCanvas(CANVAS_WIDTH, CANVAS_HEIGHT);
    cnv.position(windowWidth/2 - CANVAS_WIDTH/2, 0);

    slider = createSlider(0, DEFAULT_TREE_DEPTH, DEFAULT_TREE_DEPTH);
    slider.position(20, 20);

    smooth();
    strokeCap(PROJECT);

    tree = new Tree();
    tree.sprout();
    tree.display();
}

// p5 specific draw loop
function draw() {
    let sliderValue = slider.value();
    if (sliderValue !== treeDepthToDisplay) {
        background(255);
        treeDepthToDisplay = sliderValue;
        tree.display(treeDepthToDisplay);
    }
}

