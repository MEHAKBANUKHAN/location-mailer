let map;

function initMap() {
    // Map initialization
    map = new google.maps.Map(document.getElementById("map"), {
        center: { lat: -34.397, lng: 150.644 },
        zoom: 8,
    });

    // Creating an Advanced Marker
    const marker = new google.maps.marker.AdvancedMarkerElement({
        position: { lat: -34.397, lng: 150.644 },
        map: map,
        title: "Swapna Gruh Location",
    });
}

// Ensure that Google Maps API loads asynchronously
window.initMap = initMap;