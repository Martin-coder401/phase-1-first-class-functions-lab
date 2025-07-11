// 1. returnFirstTwoDrivers
const returnFirstTwoDrivers = function(drivers) {
  return drivers.slice(0, 2);
};

// 2. returnLastTwoDrivers
const returnLastTwoDrivers = function(drivers) {
  return drivers.slice(-2);
};

// 3. selectingDrivers array
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

// 4. createFareMultiplier
function createFareMultiplier(multiplier) {
  return function(fare) {
    return fare * multiplier;
  };
}

// 5. fareDoubler
const fareDoubler = createFareMultiplier(2);

// 6. fareTripler
const fareTripler = createFareMultiplier(3);

// 7. selectDifferentDrivers
function selectDifferentDrivers(drivers, driverFunction) {
  return driverFunction(drivers);
}
// Code your solution in this file!
