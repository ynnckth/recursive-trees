
class Branch {

    constructor(startpos, endpos, weight, color) {
        this.startpos = startpos;
        this.endpos = endpos;
        this.weight = weight;
        this.color = color;
    }

    display() {
        strokeWeight(this.weight);
        stroke(this.color);
        line(this.startpos.x, this.startpos.y, this.endpos.x, this.endpos.y);
    }
}