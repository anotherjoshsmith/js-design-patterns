/* ========= Model ========= */

var model = {
    mapData: {
        center: {lat: 47.6073, lng: -122.3103},
        zoom: 15
    },
    currentMarker: null,
    markers: [
        {
            position : 0,
            map : map,
            title : 'Hello World!'
        }
    ]
};

/* ========= Octopus ========= */

var octopus = {
    init: function() {
        // set current cat to first in the model to start
        model.currentMarker = model.markers[0];

        // tell views to initialize
        mapView.init();
    },

    // function for catView to access current cat in the model
    getMapData: function() {
        return model.mapData;
    }
};


/* ========= View ========= */
var mapView = {
    init: function() {
        this.mapElem = document.getElementById('map');

        this.render()
    },

    render: function() {
        var data = octopus.getMapData();
        this.map = new google.maps.Map(this.mapElem, {
            center: data.center,
            zoom: data.zoom
        });
    }
};

octopus.init();
function initMap() {
    mapView.render()
};
