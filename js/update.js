var net = require('net');
// include the Themeparks library
const Themeparks = require("themeparks");
document.write("<h1>Test</h1>");
const code = 212;
const park = Math.floor(code/100);
const ride = code % 100;
// configure where SQLite DB sits
// optional - will be created in node working directory if not configured
// Themeparks.Settings.Cache = __dirname + "/themeparks.db";

// access a specific park
//  Create this *ONCE* and re-use this object for the lifetime of your application
//  re-creating this every time you require access is very slow, and will fetch data repeatedly for no purpose
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