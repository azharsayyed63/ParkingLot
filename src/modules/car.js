/**
 * @description a basic object with two fields: Number and Color
 * @assumption the registration number for two cars can never be same
 * @author Azhar Sayyed <sayyedazhar1712@gmail.com>
 */
class Car {
    constructor (NUMBER, TYPE) {
        this.NUMBER = NUMBER; // unique property of an instance of car class
        this.TYPE = TYPE;
    }

    /**
     *
     * @param {Object} carA an instance of Car class
     * @param {Object} carB an instance of Car class
     * @description returns true if two Car Objects are equal, false if both are not equal
     */
    isCarEqual (carA, carB) {
        return ((carA.NUMBER.toLowerCase() === carB.NUMBER.toLowerCase())
            && carA.COLOR.toLowerCase() === carB.toLowerCase());
    }
}

module.exports = Car;
