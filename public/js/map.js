/* eslint no-unused-vars: 0, no-undef: 0 */

/* Mapbox stuff */

function createMap(container, token, center, zoom, coordinates, title, description) {
  mapboxgl.accessToken = token;
  const map = new mapboxgl.Map({
    container,
    style: 'mapbox://styles/mapbox/streets-v10',
    center,
    zoom,
  });

  const geojson = {
    type: 'FeatureCollection',
    features: [{
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates,
      },
      properties: {
        title,
        description,
      },
    }],
  };

  map.on('load', () => {
    geojson.features.forEach((marker) => {
      // create a HTML element for each feature
      const el = document.createElement('div');
      el.className = 'pin2';

      // make a marker for each feature and add to the map
      new mapboxgl.Marker(el)
        .setLngLat(marker.geometry.coordinates)
        .setPopup(new mapboxgl.Popup({ offset: 25 })
          .setHTML(`<h3>${marker.properties.title}</h3><p><em>Address:</em><br/>${marker.properties.description}</p>`))
        .addTo(map);
    });

    map.scrollZoom.disable();
  });
}
