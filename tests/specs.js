const assert = require('chai').assert,
      fs = require('fs'),
      Parking = require('../src/modules/parkingLot.js');

var commands = [],
      totalParkings,
      parkingLot = new Parking();

// test specs for unit testing the methods in Parking Lot class
describe('Test for reading input test data', function () {
  it('reading input.txt', function (done) {
    fs.readFile('./data/input.txt', 'utf-8', function (err, data) {
      if (err) {
        throw 'Unable to read input test file';
      }
      commands = JSON.parse(JSON.stringify(data)).split('\n');
      done();
    });
  });

  it('checking commands', function (done) {
      assert.equal(commands[0].split(' ')[0], 'create_parking_lot');
      assert.equal(commands[1].split(' ')[0], 'park');
      assert.equal(commands[7].split(' ')[0], 'status');
      done();
  });
});

// unit tests for functions in ParkingLot class
describe('Testing Functions in ParkingLot class', function () {

  it('Creating a Parking lot', function (done) {
      totalParkings = parkingLot.createParkingLot(commands[0]);
      assert.equal(totalParkings, 50);
      done();
  });

  it('Allocating Parking to User 1', function (done) {
      var ele = parkingLot.parkVehicle(commands[1]);
      assert.equal(ele, 1, 'these numbers are equal');
      done();
  });

  it('Allocating Parking to User 2', function (done) {
      var ele = parkingLot.parkVehicle(commands[2]);
      assert.equal(ele, 2);
      done();
  });

  it('Allocating Parking to User 3', function (done) {
      var ele = parkingLot.parkVehicle(commands[3]);
      assert.equal(ele, 4);
      done();
  });

  it('Leaving from slot 5', function (done) {
      var ele = parkingLot.leaveVehicle(commands[5]);
      assert.equal(ele, 4);
      done();
  });

  it('Checking status', function (done) {
      var ele = parkingLot.getParkingStatus();
      assert.equal(ele.length, 5);
      done();
  });

  it('Allocating Parking to User 7. Should Reallocate the nearest empty postion', function (done) {
      var ele = parkingLot.parkVehicle(commands[8]);
      assert.equal(ele, 4);
      assert.notEqual(ele, 8);
      done();
  });

  it('Allocating Parking to User 8. Should indicate Parking is full.', function (done) {
      try {
        var ele = parkingLot.parkVehicle(commands[10]);
      }
      catch (err) {
        assert.notEqual(ele, 8);
      }
      done();
  });

  it('Registration no. for cars with car type', function (done) {
      var ele = parkingLot.getVehiclesWithSameType(commands[11]);
      ele = ele.split(', ');
      assert.equal(ele[0], 'KA-01-HH-1234');
      assert.equal(ele[1], 'KA-01-HH-1234');
      assert.equal(ele[2], 'KA-01-P-333');
      done();
  });

  it('Slot no. for cars with car type', function (done) {
      var ele = parkingLot.getSlotsWithSameTypeVehicle(commands[11]);
      ele = ele.split(',').map(Number);
      assert.equal(ele[0], 1);
      assert.equal(ele[1], 2);
      assert.equal(ele[2], 4);
      done();
  });

  it('Slot no. for registration no. KA-01-HH-3141', function (done) {
      var ele = parkingLot.getSlotByVehNumber(commands[12]);
      assert.equal(ele, 2);
      done();
  });

  it('Slot no. for registration no. MH-04-AY-1111', function (done) {
      var ele = parkingLot.getSlotByVehNumber(commands[13]);
      assert.equal(ele, 'Not found');
      done();
  });

});
