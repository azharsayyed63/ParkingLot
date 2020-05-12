/**
 * @description a basic object with two fields: Number and Color
 * @assumption the registration number for two bus can never be same
 * @author Azhar Sayyed <sayyedazhar1712@gmail.com>
 */
class Bus {
    constructor (NUMBER, TYPE) {
        this.NUMBER = NUMBER; // unique property of an instance of bus class
        this.TYPE = TYPE;
    }

    /**
     *
     * @param {Object} busA an instance of bus class
     * @param {Object} busB an instance of bus class
     * @description returns true if two bus Objects are equal, false if both are not equal
     */
    isBusEqual (busA, busB) {
        return ((busA.NUMBER.toLowerCase() === busB.NUMBER.toLowerCase())
            && busA.COLOR.toLowerCase() === busB.toLowerCase());
    }
}

module.exports = Bus;
