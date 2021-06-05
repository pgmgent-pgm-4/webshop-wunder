mapboxgl.accessToken = 'pk.eyJ1IjoicGdtLWphbmRlc2NoYWNodCIsImEiOiJja2xnbHd0a2IwYjNsMnFuMjZ1d2VwenozIn0.By_rgqLvh4rXGOoTE6txsQ';
var map = new mapboxgl.Map({
  container: 'mapbox',
  style: 'mapbox://styles/mapbox/light-v10',
  center: [3.668803751201422, 51.08733753167722],
  zoom: 14
});

map.addControl(new mapboxgl.NavigationControl());

map.on('load', function () {
  // Load an image from an external URL.
  map.loadImage(
      './static/images/icons/marker.png',
      function (error, image) {
          if (error) throw error;

          // Add the image to the map style.
          map.addImage('marker', image);

          // Add a data source containing one point feature.
          map.addSource('point', {
              'type': 'geojson',
              'data': {
                  'type': 'FeatureCollection',
                  'features': [
                      {
                          'type': 'Feature',
                          'geometry': {
                              'type': 'Point',
                              'coordinates': [3.668803751201422, 51.08733753167722]
                          },
                          'properties': {
                            'title': 'Test'
                          }
                      }
                  ]
              }
          });

          // Add a layer to use the image to represent the data.
          map.addLayer({
              'id': 'points',
              'type': 'symbol',
              'source': 'point', // reference the data source
              'layout': {
                  'icon-image': 'marker', // reference the image
                  'icon-size': 0.6,
                  // 'text-field': ['get', 'title'],
                  // 'text-font': [
                  //   'Open Sans semibold',
                  //   'Arial'
                  // ],
                  // 'text-offset': [0, 1.25],
                  // 'text-anchor': 'top'
              }
          });
      }
  );
});