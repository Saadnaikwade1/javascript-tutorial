//GetCurrentPoistion()
function currSuccess(pos) {
  const coords = pos.coords;
  console.log(`Latitude:${coords.latitude}`);
  console.log(`Longitude:${coords.longitude}`);
  console.log(`within:${coords.accuracy} meters`);
}
function currError(err) {
  console.log(`Error:${err.code}-${err.message}`);
}
const currOptions = {
  enableHighAccuracy: true, //use GPS if available
  timeout: 5000, //Time to wait to stop trying for location
  maximumAge: 0, //Do not use a cached position
};
// navigator.geolocation.getCurrentPosition(currSuccess, currError, currOptions);

//Watch position()
const target = {
  latitude: 41.783434,
  longitude: -74.77383,
};

function watSuccess(pos) {
  const coords = pos.coords;
  console.log(coords);
  if (
    target.longitude === coords.longitude &&
    target.latitude === coords.latitude
  ) {
    console.log("You have reached your destionation");
    navigator.geolocation.clearWatch(id);
  }
}
function watError(err) {
  console.log(`Error:${err.code}-${err.message}`);
}
const watOptions = {
  enableHighAccuracy: true, //use GPS if available
  timeout: 5000, //Time to wait to stop trying for location
  maximumAge: 0, //Do not use a cached position
};
const id = navigator.geolocation.getCurrentPosition(
  watSuccess,
  watError,
  watOptions
);
