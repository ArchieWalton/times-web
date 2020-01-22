<html lang="en">
<body>
<ul>
<li id="Test">30</li>
</ul>
</body>
</html>
<script>
  var net = require('themeparks');
  const code = 212;
  const park = Math.floor(code/100);
  const ride = code % 100;
  console.log(park);

  if (park == 1){
    const myPark = new Themeparks.Parks.WaltDisneyWorldMagicKingdom();
  }else if (park == 2){
    var myPark = new Themeparks.Parks.WaltDisneyWorldEpcot();
  }else if (park == 3){
    const myPark = new Themeparks.Parks.WaltDisneyWorldHollywoodStudios();
  }else if (park == 4){
    var myPark = new Themeparks.Parks.WaltDisneyWorldAnimalKingdom();
  };

  // Access wait times by Promise
  const FindTime = () => {
      myPark.GetWaitTimes().then((rideTimes) => {
        var server = net.createServer(function(socket) {
          var waitTime = rideTimes[ride].waitTime;
          document.getElementById("Test").innerHTML = rideTimes[ride].waitTime;
  };
  FindTime();
  
</script>
