// Initialize and add the map
let map;

async function initMap() {
  // The location of map
  const position = { lat: 40.785091, lng: -72.944444 };
  // Request needed libraries.
  //@ts-ignore
  const { Map } = await google.maps.importLibrary("maps");
  const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");

  // The map, centered in New York
  map = new Map(document.getElementById("map"), {
    zoom: 7,
    center: position,
    mapId: "DEMO_MAP_ID",
  });

  // The marker, positioned at New York
  const marker = new AdvancedMarkerElement({
    map: map,
    position: { lat: 40.785091, lng: -72.978385 },
    title: "New York",
  });

  const marker2 = new AdvancedMarkerElement({
    map: map,
    position: { lat: 41.084045, lng: -73.874245 },
    title: "New York",
  });

  const marker3 = new AdvancedMarkerElement({
    map: map,
    position: { lat: 40.754932, lng: -73.984016 },
    title: "New York",
  });
}

initMap();