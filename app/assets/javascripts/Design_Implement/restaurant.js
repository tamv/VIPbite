function initialize_withLoc()
{
	var featureOpts = [{
		stylers: [
        { visibility: 'simplified' }, { saturation: -100 }, { gamma: 0.28 }, { weight: 0.5 } ] },
        { elementType: 'labels', stylers: [ { visibility: 'off' } ] }
    ];

	MY_MAPTYPE_ID = 'VIPbite';

    var styledMapOptions = { name: 'VIPbite' };
    var customMapType = new google.maps.StyledMapType(featureOpts, styledMapOptions);

    var mapProperties = {
    	center:new google.maps.LatLng(51.0500,-114.0667),
		zoom:13,
		mapTypeControlOptions: { mapTypeIds: [google.maps.MapTypeId.ROADMAP, MY_MAPTYPE_ID] },
		mapTypeId: MY_MAPTYPE_ID
    };

    map = new google.maps.Map(document.getElementById("googleMap"),mapProperties);
    map.mapTypes.set(MY_MAPTYPE_ID, customMapType);

	$("input:hidden.hid_location").each( function(){
		var info = jQuery.parseJSON($(this).val());
		var latlong = new google.maps.LatLng(info.latitude, info.longitude);
		var marker = new google.maps.Marker({ title: info.name, map: map, position: latlong});
	});
};

function showRestaurantLocation(restname)
{
	var info = jQuery.parseJSON($("#"+restname).val());
    var latlong = new google.maps.LatLng(info.latitude, info.longitude);
    var marker = new google.maps.Marker({ title: info.name, map: map, position: latlong});

	map.panTo(marker.position);
	map.setZoom(17);
}