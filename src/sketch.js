
const CANVAS_WIDTH = 800;
const CANVAS_HEIGHT = 600;


// p5 specific initializer function
function setup() {
    const cnv = createCanvas(CANVAS_WIDTH, CANVAS_HEIGHT);
    cnv.position(windowWidth/2 - CANVAS_WIDTH/2, 0);

    smooth();
    strokeCap(PROJECT);

    const tree = new Tree();
    tree.sprout();
    tree.display();
}

