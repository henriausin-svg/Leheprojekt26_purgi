// keskpunkt
const map = L.map("map").setView([58.378, 26.729], 13);


// openstreetmapi kaardikiht
L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: 19,
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);