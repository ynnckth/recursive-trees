
class Helpers {

    static calculatePosition(startPos, angle, length) {
        const x = startPos.x - length * Math.cos(angle);
        const y = startPos.y - length * Math.sin(angle);
        return createVector(x, y);
    }

    // returns a random number between lower and upper (inclusive)
    static random(lower, upper) {
        const rnd = Math.random();
        return rnd*(upper-lower)+lower;
    }
}