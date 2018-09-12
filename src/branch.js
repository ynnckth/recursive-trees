
class Branch {

    constructor(startpos, endpos, weight, color, recursionDepth) {
        this.startpos = startpos;
        this.endpos = endpos;
        this.weight = weight;
        this.color = color;
        this.recursionDepth = recursionDepth;
    }

    display() {
        strokeWeight(this.weight);
        stroke(this.color);
        line(this.startpos.x, this.startpos.y, this.endpos.x, this.endpos.y);
    }
}