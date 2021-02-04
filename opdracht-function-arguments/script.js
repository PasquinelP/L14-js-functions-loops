// No arguments
const paintWalls1 = function () {
  console.log("The wall has been painted red");
};

paintWalls1();

// Single argument
const paintWalls2 = function (colors) {
  console.log("The wall has been painted " + colors);
};

paintWalls2("green");
paintWalls2("red");

// Multiple arguments
const paintWalls3 = function (location, colors) {
  console.log("The " + location + " wall has been painted " + colors);
};

paintWalls3("north", "orange");
paintWalls3("south-east", "grey");
paintWalls3("grey", "south-east");

