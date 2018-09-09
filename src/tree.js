
const TREE_DEPTH = 10;

const MAX_BRANCH_ANGLE = Math.PI / 5;
const CENTER_ANGLE = Math.PI/2;

const BRANCH_WEIGHT = 0.6;
const START_BRANCH_WEIGHT = 12;

const MIN_BRANCH_LENGTH = 0.6;
const MAX_BRANCH_LENGTH = 0.9;
const MAX_ADDITIONAL_NUM_BRANCHES = 3;
const START_BRANCH_LENGTH = 110;

const COLOR_BROWN = '#331900';
const COLOR_GREEN = '#009900';


class Tree {
	
	constructor() {
		this.branches = [];
		this.startPos = createVector(CANVAS_WIDTH/2, CANVAS_HEIGHT);
    }

	sprout(startPos = this.startPos, angle = CENTER_ANGLE, branchLength = START_BRANCH_LENGTH, branchWeight = START_BRANCH_WEIGHT, currentIteration = TREE_DEPTH) {
        if (currentIteration < 1) {
            return;
        }

	    let endPos = Helpers.calculatePosition(startPos, angle, branchLength);
        let branchColor = currentIteration <= 1 ? COLOR_GREEN : COLOR_BROWN;

        this.branches.push(new Branch(startPos, endPos, branchWeight, branchColor));

        // left branch
        this.sprout(endPos,
            angle + Helpers.random(-MAX_BRANCH_ANGLE, 0),
            branchLength * Helpers.random(MIN_BRANCH_LENGTH, MAX_BRANCH_LENGTH),
            branchWeight * BRANCH_WEIGHT,
            currentIteration - 1);


        // right branch
        this.sprout(endPos,
            angle + Helpers.random(0, MAX_BRANCH_ANGLE),
            branchLength * Helpers.random(MIN_BRANCH_LENGTH, MAX_BRANCH_LENGTH),
            branchWeight * BRANCH_WEIGHT,
            currentIteration - 1);

        // and some more random branches...
        for (let i = 0; i < MAX_ADDITIONAL_NUM_BRANCHES; i++) {
            if (Helpers.random(0, 1) < 0.5) {
                this.sprout(endPos,
                    angle + Helpers.random(-MAX_BRANCH_ANGLE, MAX_BRANCH_ANGLE),
                    branchLength * Helpers.random(MIN_BRANCH_LENGTH, MAX_BRANCH_LENGTH),
                    branchWeight * BRANCH_WEIGHT,
                    currentIteration - 1);
            }
        }
	}

	display() {
		this.branches.forEach(branch => branch.display());
	}
}