
function InitWithLocation(lat, lng)
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
        center:new google.maps.LatLng(lat,lng),
        zoom:13,
        mapTypeControlOptions: { mapTypeIds: [google.maps.MapTypeId.ROADMAP, MY_MAPTYPE_ID] },
        mapTypeId: MY_MAPTYPE_ID
    };

    map = new google.maps.Map(document.getElementById("googleMap"), mapProperties);
    map.mapTypes.set(MY_MAPTYPE_ID, customMapType);

    var latlong = new google.maps.LatLng(lat, lng);

    var marker = new google.maps.Marker({ title: "restaurantLocation", map: map, position: latlong });
};

!function(d,s,id){
var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id))
	{js=d.createElement(s);js.id=id;js.src=p+'://platform.twitter.com/widgets.js';fjs.parentNode.insertBefore(js,fjs);}
}(document, 'script', 'twitter-wjs');