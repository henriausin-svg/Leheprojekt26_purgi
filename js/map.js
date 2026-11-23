// keskpunkt (allikas https://leafletjs.com/examples/quick-start/)
const map = L.map("map").setView([58.378, 26.729], 13);

// openstreetmapi kaardikiht (allikas https://leafletjs.com/examples/quick-start/)
L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: 19,
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// kohtade loend, autor: Henri
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
        nimi: "Kivi baar",
        koordinaadid: [58.38203884010296, 26.721549361391997]
    },

    {
        id: "seik",
        nimi: "Seik baar",
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
        nimi: "Werneri kohvik",
        koordinaadid: [58.38053518621302, 26.72096329020195]
    },

    {
        id: "kohvipaus",
        nimi: "Kohvipaus",
        koordinaadid: [58.38107152821488, 26.72179913244089]
    },

    {
        id: "karlova-kohv",
        nimi: "Karlova kohv - ökokohvi röstikoda",
        koordinaadid: [58.379751746657305, 26.722002058317624]
    },

    {
        id: "cruffin",
        nimi: "Cruffini croissanterie",
        koordinaadid: [58.38026248768847, 26.722137886969378]
    },

    {
        id: "gustav",
        nimi: "Gustav Cafe",
        koordinaadid: [58.37784996943192, 26.726658669035672]
    },

    {
        id: "reval",
        nimi: "Reval Café",
        koordinaadid: [58.37680510916691, 26.72746318517415]
    },

    {
        id: "mandel",
        nimi: "Mandli koogipood",
        koordinaadid: [58.38210564480205, 26.709446439067072]
    },

    {
        id: "piro",
        nimi: "Pirogovi park",
        koordinaadid: [58.37994843551232, 26.72072599986768]
    },

    {
        id: "aparaat",
        nimi: "Aparaaditehas",
        koordinaadid: [58.370479033971954, 26.71611745929899]
    },

    {
        id: "delta",
        nimi: "Delta hoone",
        koordinaadid: [58.38524596325133, 26.725555477990362]
    },

    {
        id: "elektriteater",
        nimi: "Elektriteater",
        koordinaadid: [58.380990307900134, 26.719127839990737]
    },


    {
        id: "erm",
        nimi: "Eesti Rahva Muuseum",
        koordinaadid: [58.39518829504244, 26.744127631055157]
    },

    {
        id: "raamatukogu",
        nimi: "Tartu Ülikooli raamatukogu",
        koordinaadid: [58.37671534054486, 26.720609276484144]
    },

    {
        id: "humana",
        nimi: "Humana",
        koordinaadid: [58.376120224484936, 26.711792219770558]
    },

    {
        id: "sarapuu",
        nimi: "Sarapuu kirbukas",
        koordinaadid: [58.386445084881395, 26.73618180917367]
    },

    {
        id: "sobraltsobralea",
        nimi: "Sõbralt sõbrale Annelinn",
        koordinaadid: [58.369331395379646, 26.76543217327981]
    },

    {
        id: "sobraltsobralej",
        nimi: "Sõbralt sõbrale Jõe",
        koordinaadid: [58.36556776535495, 26.744318126286693]
    },

    {
        id: "uuskasutuskeskus",
        nimi: "Uuskasutuskeskus",
        koordinaadid: [58.372117231452584, 26.762339480709976]
    },
];

const markerid = {};

// igale kohale marker, autor: Henri
kohad.forEach(function (koht) {

    // loob markeri, lisab, allikas: https://leafletjs.com/examples-v1/quick-start/
    const marker = L.marker(koht.koordinaadid).addTo(map);

    // markeri hüpikaken, autor: Henri
    marker.bindPopup(`
        <strong>${koht.nimi}</strong>
        <br>
        <a href="kohad.html#${koht.id}">
            Koha kirjelduse juurde →
        </a>
    `);
    markerid[koht.id] = marker;
});


// kontrollib, kas kasutaja tuli kaardile koha lingilt
const urlParameetrid = new URLSearchParams(window.location.search);
const valitudKoht = urlParameetrid.get("koht");

// otsib URL-i id põhjal markerit
if (valitudKoht && markerid[valitudKoht]) {
    const marker = markerid[valitudKoht];

    // liigutab kaardi õigesse asukohta ja suurendab, setView, getLatLng ja openPopup allikas: https://leafletjs.com/reference
    map.setView(marker.getLatLng(), 16);
    // avab valitud koha hüpikakna
    marker.openPopup();
}