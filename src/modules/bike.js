/**
 * @description a basic object with two fields: Number and Color
 * @assumption the registration number for two bikes can never be same
 * @author Azhar Sayyed <sayyedazhar1712@gmail.com>
 */
class Bike {
    constructor (NUMBER, TYPE) {
        this.NUMBER = NUMBER; // unique property of an instance of bike class
        this.TYPE = TYPE;
    }

    /**
     *
     * @param {Object} bikeA an instance of bike class
     * @param {Object} bikeB an instance of bike class
     * @description returns true if two bike Objects are equal, false if both are not equal
     */
    isBikeEqual (bikeA, bikeB) {
        return ((bikeA.NUMBER.toLowerCase() === bikeB.NUMBER.toLowerCase())
            && bikeA.COLOR.toLowerCase() === bikeB.toLowerCase());
    }
}

module.exports = Bike;
