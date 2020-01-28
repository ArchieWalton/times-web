var net = require('net');
const Themeparks = require("themeparks");
document.getElementById("20").innerHTML = "Test";
const code = 212;
const park = Math.floor(code/100);
const ride = code % 100;

if (park == 1){
  const myPark = new Themeparks.Parks.WaltDisneyWorldMagicKingdom();
}else if (park == 2){
  var myPark = new Themeparks.Parks.WaltDisneyWorldEpcot();
}else if (park == 3){
  const myPark = new Themeparks.Parks.WaltDisneyWorldHollywoodStudios();
}else if (park == 4){
  var myPark = new Themeparks.Parks.WaltDisneyWorldAnimalKingdom();
};
var addID = 0;
var totalID = 0;
// Access wait times by Promise
const CheckWaitTimes = () => {
    myPark.GetWaitTimes().then((rideTimes) => {
        rideTimes.forEach((ride) => {
          document.write("Test1 achieved")
          var currentID = park.toString();
          totalID = currentID + addID.toString();
          document.getElementById(totalID).innerHTML = ride.waitTime;
          addID++;
        });
    }).catch((error) => {
        console.error(error);
    })
};
CheckWaitTimes();
