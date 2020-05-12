var Car = require('./car.js');
var Bike = require('./bike.js');
var Bus = require('./bus.js');

/**
 * @description a base class for Parking lot
 * @author Azhar Sayyed <sayyedazhar1712@gmail.com>
 */
class ParkingLot {

	constructor () {
        this.MAX_PARKING_SLOTS = 0; // maximum parking slots allowed
        this.parkingSlots = new Array(); // array for parking slots
    }

	/**
	 *
	 * @param {String} input user's input via terminal
	 * @description creates a parking lot with given maximum slot numbers.
	 * It throws an error if zero or negative input is provided
	 */
	createParkingLot (input) {
		this.MAX_PARKING_SLOTS = parseInt(input.split(' ')[1]);
		if (this.MAX_PARKING_SLOTS <= 0) {
			// minimum: 1 slot
			throw new Error('Minimum one slot is required to create parking slot');
		}
        for (var i = 0; i < this.MAX_PARKING_SLOTS; i++) {
            this.parkingSlots.push(null);
        }
        return this.MAX_PARKING_SLOTS;
	}

	/**
	 *
	 * @param {String} input user's input via terminal
	 * @description allocates nearest slot number to incoming vehicles.
	 * It throws an error if parking lot is empty or full.
	 * It also throws an error if only one field (either registration number or TYPE) is provided.
	 */
    parkVehicle (input) {
        var len = this.parkingSlots.length;
    	if (this.MAX_PARKING_SLOTS > 0) {
			var vehicle, vehNumber, vehType;
	    	if (this.findNearestAvailableSlot(this.parkingSlots) == true) {
		  		for (var i = 0; i < len; i++) {
		  			if (this.parkingSlots[i] == null) {
						vehNumber = input.split(' ')[1];
						vehType = input.split(' ')[2];
						if (vehNumber && vehType == "Car") {
							vehicle = new Car(vehNumber, vehType);
							for(var j = i; j<=i+1;j++){
							this.parkingSlots[j] = vehicle;
							}
							i = i + 1;
							return i;
						}
						else if (vehNumber && vehType == "Bike") {
							vehicle = new Bike(vehNumber, vehType);
							for(var j = i; j<=i;j++){
								this.parkingSlots[j] = vehicle;
								}
							i = i;
							return i;
						}
						else if (vehNumber && vehType == "Bus") {
							vehicle = new Bus(vehNumber, vehType);
							for(var j = i; j<=i+4;j++){
								this.parkingSlots[j] = vehicle;
								}
							i = i + 4;
							return i;
						}
						else {
							throw new Error('Please provide registration number and type both');
						}
		  			}
		  		}
			  }
			else {
		  		throw new Error('Sorry, parking lot is full');
		  	}
          }
          else {
	  		throw new Error('Minimum one slot is required to create parking slot');
	  	}
	}

	/**
	 *
	 * @param {String} input user's input via terminal
	 * @description makes slot free for given slot number.
	 * It throws an error if parking lot is empty or
	 * slot number is not found
	 */
    leaveVehicle (input) {
    	if (this.MAX_PARKING_SLOTS > 0) {
			var index = parseInt(input.split(' ')[1] - 1);
			if (index >= this.MAX_PARKING_SLOTS) {
				throw new Error(`Slot number ${index + 2} is not found`);
			}
			else if (this.parkingSlots[index] === null) {
				throw new Error(`Slot number ${index + 2} is already free`);
			}
		    else if (index > -1 && index <= this.parkingSlots.length && this.parkingSlots[index].TYPE == "Car") {
			    this.parkingSlots[index] = null;
			    index = index + 1;
			    return index;
			}
			else if (index > -1 && index <= this.parkingSlots.length && this.parkingSlots[index].TYPE == "Bike") {
			    this.parkingSlots[index] = null;
			    return index;
			}
			else if (index > -1 && index <= this.parkingSlots.length && this.parkingSlots[index].TYPE == "Bus") {
			    this.parkingSlots[index] = null;
			    index = index + 4;
			    return index;
			}
		}
		else {
			throw new Error('Sorry, parking lot is empty');
		}
	}

	/**
	 *
	 * @param {String} input user's input via terminal
	 * @description it makes the slot free for the vehicle of given registration number.
	 * It throws an error if vehicle is not found.
	 */
	leaveVehicleByVehNumber (input) {
		if (this.MAX_PARKING_SLOTS > 0) {
			var vehNumber = input.split(' ')[1];
		    for (var index = 0; index < this.MAX_PARKING_SLOTS; index++) {
				if (this.parkingSlots[index].NUMBER === vehNumber && this.parkingSlots[index].TYPE == "Car") {
					this.parkingSlots[index] = null;
					return index + 1;
				}
				else if (this.parkingSlots[index].NUMBER === vehNumber && this.parkingSlots[index].TYPE == "Bike") {
					this.parkingSlots[index] = null;
					return index;
				}
				if (this.parkingSlots[index].NUMBER === vehNumber && this.parkingSlots[index].TYPE == "Bus") {
					this.parkingSlots[index] = null;
					return index + 4;
				}
			}
		}
		else {
			throw new Error('Sorry, vehicle with given registration is not found');
		}
	}

	/**
	 * @description Returns an array containing parking details i.e. slot no, registration number and TYPE
	 */
    getParkingStatus () {
    	var arr = new Array();
    	if (this.MAX_PARKING_SLOTS > 0) {
			arr.push('Slot No. Registration No. Type ');
        	for (var i = 0; i < this.parkingSlots.length; i++) {
        		if (this.parkingSlots[i] != null && this.parkingSlots[i].TYPE == "Car") {
        			var e = i + 1;
        			arr.push(e + '.  ' + this.parkingSlots[i].NUMBER + '  ' + this.parkingSlots[i].TYPE);
				}
				else if (this.parkingSlots[i] != null && this.parkingSlots[i].TYPE == "Bike") {
        			var e = i + 1;
        			arr.push(e + '.  ' + this.parkingSlots[i].NUMBER + '  ' + this.parkingSlots[i].TYPE);
				}
				else if (this.parkingSlots[i] != null && this.parkingSlots[i].TYPE == "Bus") {
        			var e = i + 4;
        			arr.push(e + '.  ' + this.parkingSlots[i].NUMBER + '  ' + this.parkingSlots[i].TYPE);
        		}
        	}
        	return arr;
		}
		else {
			throw new Error('Sorry, parking lot is empty');
		}
	}

	/**
	 *
	 * @param {String} input user's input via terminal
	 * @description returns a comma separated string of registration numbers of vehicle having same TYPE.
	 * It returns null if vehicle is not found
	 */
    getVehiclesWithSameType (input) {
    	if (this.MAX_PARKING_SLOTS > 0) {
	        var sameTYPEedVehiclesArray = new Array();
	        for (var i = 0; i < this.parkingSlots.length; i++) {
	        	if (this.parkingSlots[i] && this.parkingSlots[i].TYPE.toLowerCase() == input.split(' ')[1].toLowerCase()) {
	        		sameTYPEedVehiclesArray.push(this.parkingSlots[i].NUMBER);
	        	}
	        }
    		return sameTYPEedVehiclesArray.join(', ');
		}
		else {
			return null;
		}
	}

	/**
	 *
	 * @param {String} input user's input via terminal
	 * @description returns a comma separated string of slot numbers for vehicles of given TYPE.
	 * It returns null if vehicles of given TYPE is not found.
	 */
    getSlotsWithSameTypeVehicle (input) {
    	if (this.MAX_PARKING_SLOTS > 0) {
	    	var slotsWithSameVehicleTypeArray = new Array();
	        for (var i = 0; i < this.parkingSlots.length; i++) {
	        	if (this.parkingSlots[i] && this.parkingSlots[i].TYPE == "Car" && this.parkingSlots[i].TYPE.toLowerCase() == input.split(' ')[1].toLowerCase()) {
	        		slotsWithSameVehicleTypeArray.push(i + 1);
				}
				else if (this.parkingSlots[i] && this.parkingSlots[i].TYPE == "Bike" && this.parkingSlots[i].TYPE.toLowerCase() == input.split(' ')[1].toLowerCase()) {
	        		slotsWithSameVehicleTypeArray.push(i);
				}
				else if (this.parkingSlots[i] && this.parkingSlots[i].TYPE == "Bus" && this.parkingSlots[i].TYPE.toLowerCase() == input.split(' ')[1].toLowerCase()) {
	        		slotsWithSameVehicleTypeArray.push(i + 4);
	        	}
	        }
        	return slotsWithSameVehicleTypeArray.join(', ');
        }
        else {
			return null;
		}
	}

	/**
	 *
	 * @param {String} input user's input via terminal
	 * @description returns slot number for given vehicle number.
	 * It returns null if vehicle is not found.
	 */
    getSlotByVehNumber (input) {
		// TODO:  What parking lot is empty
		if (this.MAX_PARKING_SLOTS > 0) {
	    	var ele = 'Not found';
	        for (var i = 0; i < this.parkingSlots.length; i++) {
	        	if (this.parkingSlots[i] && this.parkingSlots[i].TYPE == "Car" && this.parkingSlots[i].NUMBER == input.split(' ')[1]) {
	        		ele = i + 1;
				}
				else if (this.parkingSlots[i] && this.parkingSlots[i].TYPE == "Bike" && this.parkingSlots[i].NUMBER == input.split(' ')[1]) {
	        		ele = i;
				}
				else if (this.parkingSlots[i] && this.parkingSlots[i].TYPE == "Bus" && this.parkingSlots[i].NUMBER == input.split(' ')[1]) {
	        		ele = i + 4;
	        	}
	        }
        	return ele;
        }
        else {
			return null;
		}
	}

	/**
	 * @description returns a comma separated string of free parking slots.
	 * It returns `null` if parking lot is not created
	 */
	findAllAvailableSlots () {
		if (this.MAX_PARKING_SLOTS > 0) {
	    	var availableSlots = new Array();
	        for (var i = 0; i < this.parkingSlots.length; i++) {
	        	if (!(this.parkingSlots[i] && this.parkingSlots[i].TYPE == "Car" && this.parkingSlots[i].TYPE && this.parkingSlots[i].NUMBER)) {
	        		availableSlots.push(i + 1);
				}
				else if (!(this.parkingSlots[i] && this.parkingSlots[i].TYPE == "Bike" && this.parkingSlots[i].TYPE && this.parkingSlots[i].NUMBER)) {
	        		availableSlots.push(i);
				}
				else if (!(this.parkingSlots[i] && this.parkingSlots[i].TYPE == "Bus" && this.parkingSlots[i].TYPE && this.parkingSlots[i].NUMBER)) {
	        		availableSlots.push(i + 4);
				}
	        }
        	return availableSlots.join(', ');
        }
        else {
			return null;
		}
	}

	/**
	 * @description returns a comma separated string of allocated parking slots.
	 * It returns `null` if parking lot is not created.
	 */
	findAllAllocatedSlots () {
		if (this.MAX_PARKING_SLOTS > 0) {
	    	var allocatedSlots = new Array();
	        for (var i = 0; i < this.parkingSlots.length; i++) {
	        	if (this.parkingSlots[i] && this.parkingSlots[i].TYPE == "Car" && this.parkingSlots[i].TYPE && this.parkingSlots[i].NUMBER) {
	        		allocatedSlots.push(i + 1);
				}
				if (this.parkingSlots[i] && this.parkingSlots[i].TYPE == "Bus" && this.parkingSlots[i].TYPE && this.parkingSlots[i].NUMBER) {
	        		allocatedSlots.push(i + 4);
				}
				if (this.parkingSlots[i] && this.parkingSlots[i].TYPE == "Bike" && this.parkingSlots[i].TYPE && this.parkingSlots[i].NUMBER) {
	        		allocatedSlots.push(i);
	        	}
	        }
        	return allocatedSlots.join(', ');
        }
        else {
			return null;
		}
	}

	/**
	 * @description returns the nearest available slot
	 * used by parkVehicle() method to find nearest slot
	 */
	findNearestAvailableSlot () {
		var ele = false;
		for (var i = 0; i < this.parkingSlots.length; i++) {
			if (this.parkingSlots[i] == null) {
				ele = true;
			}
		}
		return ele;
	}
}

module.exports = ParkingLot;
