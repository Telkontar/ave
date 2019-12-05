var map;

function initMap() {

   var styledMapType = new google.maps.StyledMapType([{
         "featureType": "all",
         "elementType": "labels.text.fill",
         "stylers": [

            {
               "saturation": 36
            },
            {
               "color": "#000000"
            },
            {
               "lightness": 40
            }
         ]
      },
      {
         "featureType": "administrative.country",
         "elementType": "labels.text.fill",
         "stylers": [{
            "color": "#9e9e9e"
         }]
      },
      {
         "featureType": "all",
         "elementType": "labels.text.stroke",
         "stylers": [{
               "visibility": "on"
            },
            {
               "color": "#000000"
            },
            {
               "lightness": 16
            }
         ]
      },
      {
         "featureType": "all",
         "elementType": "labels.icon",
         "stylers": [{
            "visibility": "off"
         }]
      },
      {
         "featureType": "administrative",
         "elementType": "geometry.fill",
         "stylers": [{
               "color": "#000000"
            },
            {
               "lightness": 20
            }
         ]
      },
      {
         "featureType": "administrative",
         "elementType": "geometry.stroke",
         "stylers": [{
               "color": "#000000"
            },
            {
               "lightness": 17
            },
            {
               "weight": 1.2
            }
         ]
      },
      {
         "featureType": "landscape",
         "elementType": "geometry",
         "stylers": [{
               "color": "#000000"
            },
            {
               "lightness": 20
            }
         ]
      },
      {
         "featureType": "poi",
         "elementType": "geometry",
         "stylers": [{
               "color": "#000000"
            },
            {
               "lightness": 21
            }
         ]
      },
      {
         "featureType": "road.highway",
         "elementType": "geometry.fill",
         "stylers": [{
               "color": "#000000"
            },
            {
               "lightness": 17
            }
         ]
      },
      {
         "featureType": "road.highway",
         "elementType": "geometry.stroke",
         "stylers": [{
               "color": "#000000"
            },
            {
               "lightness": 29
            },
            {
               "weight": 0.2
            }
         ]
      },
      {
         "featureType": "road.arterial",
         "elementType": "geometry",
         "stylers": [{
               "color": "#000000"
            },
            {
               "lightness": 18
            }
         ]
      },
      {
         "featureType": "road.local",
         "elementType": "geometry",
         "stylers": [{
               "color": "#000000"
            },
            {
               "lightness": 16
            }
         ]
      },
      {
         "featureType": "transit",
         "elementType": "geometry",
         "stylers": [{
               "color": "#000000"
            },
            {
               "lightness": 19
            }
         ]
      },
      {
         "featureType": "water",
         "elementType": "geometry",
         "stylers": [{
               "color": "#000000"
            },
            {
               "lightness": 17
            }
         ]
      }
   ], {
      name: 'Styled Map'
   });

   map = new google.maps.Map(document.getElementById('map'), {
      center: {
         lat: 55.647,
         lng: 37.581
      },
      zoom: 8,
      mapTypeControlOptions: {
         mapTypeIds: ['roadmap', 'satellite', 'hybrid', 'terrain',
            'styled_map'
         ]
      }
   });
   map.mapTypes.set('styled_map', styledMapType);
   map.setMapTypeId('styled_map');
}