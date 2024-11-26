// Code your solution in this file!
// First two drivers from the array
const returnFirstTwoDrivers = function (drivers) {
    return drivers.slice(0, 2);
  };
  
  // Last two drivers from the array
  const returnLastTwoDrivers = function (drivers) {
    return drivers.slice(-2);
  };
  
  // Two functions: returnFirstTwoDrivers and returnLastTwoDrivers
  const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];
  
  // Creates a multiplier function for fares
  const createFareMultiplier = function (multiplier) {
    return function (fare) {
      return fare * multiplier;
    };
  };
  
  // Doubles the fare
  const fareDoubler = createFareMultiplier(2);
  
  // Triples the fare
  const fareTripler = createFareMultiplier(3);
  
  // Allows selection of different drivers based on a provided function
  const selectDifferentDrivers = function (drivers, driverSelector) {
    return driverSelector(drivers);
  };
  