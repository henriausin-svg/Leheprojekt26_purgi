// kohad lehe otsingukasti js, autor: Henri

// ootab kuni html on täielikult laetud
document.addEventListener("DOMContentLoaded", function () {

    const otsingukast = document.getElementById("koha-otsing");
    const kohad = document.querySelectorAll(".tulp li");

    // kui otsinguväli puudub, lõpetab skripti töö
    if (!otsingukast || kohad.length === 0) {
        return;
    }

    // reageerib sisestusele
    otsingukast.addEventListener("input", function () {

        // sisend väiketöhtedeks
        const otsisona = otsingukast.value
            .trim()
            .toLocaleLowerCase("et");

        // vaatab iga kohta eraldi
        kohad.forEach(function (koht) {
            const kohanimi = koht.querySelector(".koha-link").textContent;

            // kontrollib kas koha nimi sisaldab otsitavat teksti
            const sobib = kohanimi
                .toLocaleLowerCase("et")
                .includes(otsisona);

            // peidab mitte sobivad kohad
            koht.hidden = !sobib;
        });
    });
});