var map;
function initMap() {
    map = new google.maps.Map(document.getElementById('map__container'), {
    center: {lat: 40.842, lng: 14.245},
    zoom: 14,
    disableDefaultUI: true,
    styles: [
        {
            "featureType": "administrative",
            "elementType": "labels.text.fill",
            "stylers": [
                {
                    "color": "#ca2031"
                }
            ]
        },
        {
            "featureType": "administrative.province",
            "elementType": "all",
            "stylers": [
                {
                    "visibility": "off"
                }
            ]
        },
        {
            "featureType": "landscape",
            "elementType": "all",
            "stylers": [
                {
                    "visibility": "on"
                },
                {
                    "lightness": "58"
                },
                {
                    "saturation": "-100"
                }
            ]
        },
        {
            "featureType": "poi",
            "elementType": "all",
            "stylers": [
                {
                    "saturation": "-100"
                },
                {
                    "lightness": "45"
                },
                {
                    "visibility": "simplified"
                }
            ]
        },
        {
            "featureType": "road.highway",
            "elementType": "all",
            "stylers": [
                {
                    "visibility": "simplified"
                },
                {
                    "gamma": "5"
                },
                {
                    "weight": "0.70"
                },
                {
                    "saturation": "-100"
                },
                {
                    "lightness": "-21"
                }
            ]
        },
        {
            "featureType": "road.arterial",
            "elementType": "all",
            "stylers": [
                {
                    "visibility": "on"
                },
                {
                    "color": "#c62828"
                },
                {
                    "gamma": "5"
                },
                {
                    "weight": ".8"
                }
            ]
        },
        {
            "featureType": "road.local",
            "elementType": "all",
            "stylers": [
                {
                    "visibility": "on"
                },
                {
                    "color": "#c62828"
                },
                {
                    "saturation": "0"
                },
                {
                    "gamma": "5"
                },
                {
                    "weight": "0.5"
                }
            ]
        },
        {
            "featureType": "transit",
            "elementType": "all",
            "stylers": [
                {
                    "saturation": -100
                },
                {
                    "visibility": "simplified"
                }
            ]
        },
        {
            "featureType": "water",
            "elementType": "geometry",
            "stylers": [
                {
                    "hue": "#0075ff"
                },
                {
                    "visibility": "simplified"
                },
                {
                    "saturation": "-5"
                },
                {
                    "gamma": "2"
                }
            ]
        },
        {
            "featureType": "water",
            "elementType": "labels",
            "stylers": [
                {
                    "visibility": "on"
                },
                {
                    "lightness": -25
                },
                {
                    "saturation": -100
                }
            ]
        }
    ]
   });

    // Load GeoJSON.
    map.data.loadGeoJson('map.json');

    // Add some style.
    map.data.setStyle(function(feature) {
        return /** @type {google.maps.Data.StyleOptions} */({
        fillColor: feature.getProperty('color'),
        icon: 'src/images/pin4.png',
        strokeWeight: 1
        });
    });

    // Set onclick event for each feature.
    map.data.addListener('click', function(event) {
        mapInfo.classList.remove('hideAnimation');
        mapContainer.classList.add('blur');
        mapInfoTitle.innerHTML = event.feature.getProperty('name');
        mapInfoDescription.innerHTML = 'Segui il battito';
        mapInfoAnchor.href = 'http://maps.google.com/maps?z=10&q=loc:'+event.latLng.lat()+'+'+event.latLng.lng();
    });

    // aggiungo un listener all'overlay
    mapInfo.addEventListener("click", function(event) {
        // Se l'utente clicca sul mapbox non far nulla
        if (event.target.closest(".mapbox")) return;
        // Se l'utente clicca fuori nascondi tutto.
        mapInfo.classList.add("hideAnimation");
        mapContainer.classList.remove('blur');
    });
}


