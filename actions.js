// JavaScript Document

function inicio(){
	document.addEventListener("deviceready",function(){
		
		var cords = coordenadas();
		alert(cords['latitude']);
		
	//-25.363882,131.044922
var myLatlng = new google.maps.LatLng(cords['latitude'],cords['longitude']);
//var myLatlng = new google.maps.LatLng(-25.363882,131.044922);
  var mapOptions = {
    zoom: 8,
    center: myLatlng,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  }
  var map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions);

  var marker = new google.maps.Marker({
      position: myLatlng,
      map: map,
      title:"Hello World!"
  });
	},false);
  
}


function coordenadas(){
	alert('Entre a coordenadas;');
	
	var arr = [];
	
	navigator.geolocation.getCurrentPosition(onSuccess, onError);
	alert('ok');
	function onSuccess(position) {
		alert('ok success');
			arr['latitude'] =	position.coords.latitude; 
			arr['longitude'] =	position.coords.longitude;
				
				
	/*			
			alert('Latitude: '          + position.coords.latitude          + '\n' +
				  'Longitude: '         + position.coords.latitude         + '\n' +
				  'Altitude: '          + position.coords.altitude          + '\n' +
				  'Accuracy: '          + position.coords.accuracy          + '\n' +
				  'Altitude Accuracy: ' + position.coords.altitudeAccuracy  + '\n' +
				  'Heading: '           + position.coords.heading           + '\n' +
				  'Speed: '             + position.coords.speed             + '\n' +
				  'Timestamp: '         + position.timestamp                + '\n');*/
		};
		
		// onError Callback receives a PositionError object
		//
		function onError(error) {
			alert('code: '    + error.code    + '\n' +
				  'message: ' + error.message + '\n');
		}
		
		
return arr;
	
	
	
	}