// leafleti kaardi setupi javascripti allikas: https://leafletjs.com/examples/quick-start/

// keskpunkt (allikas https://leafletjs.com/examples/quick-start/)
const map = L.map("map").setView([58.378, 26.729], 13);

// openstreetmapi kaardikiht (allikas https://leafletjs.com/examples/quick-start/)
L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: 19,
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

const kohad = [
    {
        id: "toomemagi",
        nimi: "Toomemägi",
        koordinaadid: [58.379723, 26.716667]
    },

    {
        id: "botaanikaaed",
        nimi: "Tartu Ülikooli botaanikaaed",
        koordinaadid: [58.384831, 26.721487]
    },

    {
        id: "emajogi",
        nimi: "Emajõe kallas",
        koordinaadid: [58.379657, 26.726963]
    },

    {
        id: "supilinn",
        nimi: "Supilinn",
        koordinaadid: [58.387822, 26.710184]
    },

    {
        id: "tahtvere",
        nimi: "Tähtvere",
        koordinaadid: [58.390489, 26.705393]
    },

    {
        id: "karlova",
        nimi: "Karlova",
        koordinaadid: [58.371942, 26.731727]
    },

    {
        id: "moku",
        nimi: "Möku",
        koordinaadid: [58.38345985296545, 26.72211558376987]
    },

    {
        id: "kivi",
        nimi: "Kivi",
        koordinaadid: [58.38203884010296, 26.721549361391997]
    },

    {
        id: "seik",
        nimi: "Seik",
        koordinaadid: [58.38155764726224, 26.721546631165975]
    },

    {
        id: "gen",
        nimi: "Genialistide klubi",
        koordinaadid: [58.383475367765925, 26.721960195475074]
    },

    {
        id: "ula",
        nimi: "Ula baar",
        koordinaadid: [58.37779188967427, 26.714992263793537]
    },

    {
        id: "werner",
        nimi: "Werner",
        koordinaadid: [58.38053518621302, 26.72096329020195]
    },

    {
        id: "kohvipaus",
        nimi: "Kohvipaus",
        koordinaadid: [58.38107152821488, 26.72179913244089]
    },

    {
        id: "karlova",
        nimi: "Karlova kohv",
        koordinaadid: [58.379751746657305, 26.722002058317624]
    },

    {
        id: "cruffin",
        nimi: "Cruffin",
        koordinaadid: [58.38026248768847, 26.722137886969378]
    },

    {
        id: "gustav",
        nimi: "Gustav cafe",
        koordinaadid: [58.37784996943192, 26.726658669035672]
    },

    {
        id: "reval",
        nimi: "Reval cafe",
        koordinaadid: [58.37680510916691, 26.72746318517415]
    },

    {
        id: "mandel",
        nimi: "Mandel",
        koordinaadid: [58.38210564480205, 26.709446439067072]
    },

];

const markerid = {};

// igale kohale marker
kohad.forEach(function (koht) {

    // loob markeri, lisab
    const marker = L.marker(koht.koordinaadid).addTo(map);

    // markeri hüpikaken
    marker.bindPopup(`
        <strong>${koht.nimi}</strong>
        <br>
        <a href="kohad.html#${koht.id}">
            Vaata kohta
        </a>
    `);

    markerid[koht.id] = marker;

});


// kontrollib kas kasutaja tuli kaardile koha lingilt
const urlParameetrid = new URLSearchParams(window.location.search);
const valitudKoht = urlParameetrid.get("koht");

// otsib urli id põhjal markerit
if (valitudKoht && markerid[valitudKoht]) {
    const marker = markerid[valitudKoht];

    // liigutab kaarti õigesse asukohta, suurendab
    map.setView(marker.getLatLng(), 16);
    marker.openPopup();

}