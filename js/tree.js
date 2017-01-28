
class Tree {
	
	constructor(branches) {
		this.branches = branches;
	}

	addBranch(branch) {
		this.branches.push(branch);
	}

	display() {
		for(let i = 0; i < this.branches.length; i++) {
        	this.branches[i].display();
    	}
	}
}