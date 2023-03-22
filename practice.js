function findRemainder(i, j) {
  return i % j;
};

function startGPS(currentLocation, newLocation) {
  if (currentLocation ===  newLocation) {
    return (`You are already at the ${currentLocation}!  Would you like to go somewhere else?`);
  } else {
  return(`Taking you from ${currentLocation} to ${newLocation}!  Getting directions now!`);
  }
};

module.exports = {
  findRemainder,
  startGPS,
  // createUser,
  // makePizza
}