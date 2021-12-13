getLocation();

(function () {

    var clockElement = document.getElementById( "Time" );

    function updateClock ( clock ) {
    const d = new Date();
    clock.innerHTML = String(d.getHours())+" : "+String(d.getMinutes());
    }

    setInterval(function () {
        updateClock( clockElement );
    }, 1000);

  }());
  var dt = new Date();
  const options = { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' };
  document.getElementById("date").innerHTML = dt.toLocaleDateString(undefined,options);





var input = document.getElementById("search_bar");
input.addEventListener("keyup", function(event) {
if (event.keyCode === 13) {
event.preventDefault();
document.getElementById("search_btn").click();
}
});

async function search()
{
var str= document.getElementById("search_bar").value;
var key= "&appid=dc7c5a85257f3769a97f58a204690696";
var url="https://api.openweathermap.org/data/2.5/weather?q="+str+"&units=metric"+key;
const api_url=url;
const response = await fetch(api_url);
const data= await response.json();

document.getElementById("cityname").innerHTML=str;
var str1=data.main.temp;
var cname=data.name;
var chumidity=data.main.humidity;
var cspeed=data.wind.speed;
var country=data.sys.country;
cspeed=Math.round(cspeed*3.6);
document.getElementById("cardtemp").innerHTML= str1;
document.getElementById("defaultcity").innerHTML= cname;
document.getElementById("chum").innerHTML=chumidity;
document.getElementById("humstyle").style.width=chumidity;
document.getElementById("cspd").innerHTML=cspeed;
document.getElementById("countryname").innerHTML=country;
}




const x = document.getElementById("demo");

async function getLocation() {
  try {
    navigator.geolocation.getCurrentPosition(showPosition);
  } catch {
    x.innerHTML = err;
  }
}

async function showPosition(position) {
  var url1="https://api.openweathermap.org/data/2.5/weather?lat="+position.coords.latitude+"&lon="+position.coords.longitude+"&appid=dc7c5a85257f3769a97f58a204690696&units=metric";
  const api_url1=url1;
  const response1= await fetch(api_url1);
  const data1= await response1.json();
  var str=data1.main.temp;
  var cname=data1.name;
  var chumidity=data1.main.humidity;
  var cspeed=data1.wind.speed;
  var country=data1.sys.country;
  cspeed=Math.round(cspeed*3.6);
  document.getElementById("cardtemp").innerHTML= str;
  document.getElementById("defaultcity").innerHTML= cname;
  document.getElementById("chum").innerHTML=chumidity;
  document.getElementById("humstyle").style.width=chumidity;
  document.getElementById("cspd").innerHTML=cspeed;
  document.getElementById("countryname").innerHTML=country;

}
