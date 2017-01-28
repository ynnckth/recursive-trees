
var CANVAS_WIDTH = 800;
var CANVAS_HEIGHT = 600;

var BLACK = 0;
var BROWN = '#331900';
var GREEN = '#009900';


// Branching constants
var MAX_ANGLE = Math.PI / 5;
var WEIGHT_FACTOR = 0.6;
var MIN_GROWTH = 0.6;
var MAX_GROWTH = 0.9;

var tree = new Tree([]);

var BRANCHES = 9;


// p5 specific initializer function
function setup() {
    let cnv = createCanvas(CANVAS_WIDTH, CANVAS_HEIGHT);
    cnv.position(windowWidth / 2 - CANVAS_WIDTH / 2, 0);

    smooth();
    stroke(BROWN);
    strokeCap(PROJECT);
    
    let startpos = createVector(CANVAS_WIDTH/2, CANVAS_HEIGHT);
    branch(startpos, Math.PI/2, 110, 12, BRANCHES);
    tree.display();
}

// p5 specific draw loop
function draw() { }


function branch(startpos, angle, length, weight, currentBranch) {
    let endpos = calculateEndpos(startpos, angle, length);
    let color = currentBranch < 0 ? GREEN : BROWN;

    tree.addBranch(new Branch(startpos, endpos, weight, color));

    if (currentBranch >= 0) {
        // right branch
        branch(endpos, angle+rand(0, MAX_ANGLE), length*rand(MIN_GROWTH,MAX_GROWTH), weight*WEIGHT_FACTOR, currentBranch-1);

        // left branch
        branch(endpos, angle+rand(-MAX_ANGLE,0), length*rand(MIN_GROWTH,MAX_GROWTH), weight*WEIGHT_FACTOR, currentBranch-1);
        
        // and some more random branches...
        for (let i = 0; i < 3; i++) {
            if (rand(0,1) < 0.5) {
                branch(endpos, angle+rand(-MAX_ANGLE,MAX_ANGLE), length*rand(MIN_GROWTH,MAX_GROWTH), weight*WEIGHT_FACTOR, currentBranch-1);
            }
        }
    }
}


function calculateEndpos(startpos, angle, length) {
    var x = startpos.x - length * Math.cos(angle);
    var y = startpos.y - length * Math.sin(angle);
    return createVector(x, y);
}

// returns a random number between lower and upper
function rand(lower, upper) {
    var rnd = Math.random();
    return rnd*(upper-lower)+lower;
}