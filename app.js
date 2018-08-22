function initialize() {
  var mapOptions = {
    center: {
      lat: 45.855315,
      lng: 22.962614
    },
    zoom: 14,
    zoomControl: false,
    panControl: false,
    streetViewControl: false
  };

  var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);

  var img = "https://i.stack.imgur.com/JWM0W.png";

  var Deva = new google.maps.Marker({
      position: mapOptions.center,
      map: map,
      icon: img
   });

  var Bucuresti = new google.maps.Marker({
      position: {lat: 44.437318, lng: 25.964595},
      map: map,
      icon: img
   });


  var Cluj = new google.maps.Marker({
      position: {lat: 46.753405, lng: 23.533495},
      map: map,
      icon: img
   });

  var Sibiu = new google.maps.Marker({
      position: {lat: 45.774712, lng: 24.170322},
      map: map,
      icon: img
   });

  var Timisoara = new google.maps.Marker({
      position: {lat: 45.757411, lng: 21.217715},
      map: map,
      icon: img
   });

  var markers = {
    'Deva': Deva,
    'Bucuresti': Bucuresti,
    'Cluj': Cluj,
    'Sibiu': Sibiu,
    'Timisoara': Timisoara
  };

  var styles = [
    {
        "featureType": "water",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#80ccff"
            }
        ]
    },
    {
        "featureType": "transit",
        "stylers": [
            // {
            //     // "color": "#ff9966"
            // },
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "geometry.stroke",
        "stylers": [
            {
                "visibility": "on"
            }
            // ,
            // {
            //     "color": "#b3b3b3"
            // }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#ffffff"
            }
        ]
    },
    {
        "featureType": "road.local",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "visibility": "on"
            },
            {
                "weight": 1.8
            }
        ]
    },
    {
        "featureType": "road.local",
        "elementType": "geometry.stroke"
        // "stylers": [
        //     {
        //         "color": "#d7d7d7"
        //     }
        // ]
    },
    {
        "featureType": "poi",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "visibility": "on"
            },
            {
                "color": "#ebebeb"
            }
        ]
    },
    {
        "featureType": "administrative",
        "elementType": "geometry",
        // "stylers": [
        //     {
        //         "color": "#a7a7a7"
        //     }
        // ]
    },
    {
        "featureType": "road.arterial",
        "elementType": "geometry.fill",
        // "stylers": [
        //     {
        //         "color": "#ffffff"
        //     }
        // ]
    },
    {
        "featureType": "road.arterial",
        "elementType": "geometry.fill",
        // "stylers": [
        //     {
        //         "color": "#ffffff"
        //     }
        // ]
    },
    {
        "featureType": "landscape",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "visibility": "on"
            },
            // {
            //     "color": "#efefef"
            // }
        ]
    },
    {
        "featureType": "road",
        "elementType": "labels.text.fill",
        // "stylers": [
        //     {
        //         "color": "#696969"
        //     }
        // ]
    },
    {
        "featureType": "administrative",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "visibility": "on"
            }
            // {
            //     "color": "#737373"
            // }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "labels.icon",
        "stylers": [
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "labels",
        "stylers": [
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "road.arterial",
        "elementType": "geometry.stroke",
        // "stylers": [
        //     {
        //         "color": "#d6d6d6"
        //     }
        // ]
    },
    {
        "featureType": "road",
        "elementType": "labels.icon",
        // "stylers": [
        //     {
        //         "visibility": "off"
        //     }
        // ]
    },
    {},
    {
        "featureType": "poi",
        "elementType": "geometry.fill",
        // "stylers": [
        //     {
        //         "color": "#dadada"
        //     }
        // ]
    }
];

  map.setOptions({styles: styles});

  function getCoords (position) {
     var text = position.replace(/[()]/g,'').split(", ");
     var lat = Number(text[0]);
     var lng = Number(text[1]);

     return {
       lat: lat,
       lng: lng
     };
  }

   $('.nav li').on('click', function () {
     $('.nav li').removeClass('active');
     $(this).addClass('active');
     var id = $(this).attr('id');
     $('#active').animate({
       'margin-left': $(this).offset().left
     });
     var position = String(markers[id].getPosition());
     map.panTo(new google.maps.LatLng(getCoords(position).lat, getCoords(position).lng));
   });

 }

 google.maps.event.addDomListener(window, 'load', initialize);
