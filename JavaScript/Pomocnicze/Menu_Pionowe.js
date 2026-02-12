// NADAJE SIE DO V2 !!!

// Funkcja wyswietla pionowy uklad menu
function Menu_Pionowe(menu) {
    // Input: [{naglowek:, tresc:, przelacznik:, tresc_ekstra:}]
    // naglowek
        // Okresla co bedzie widoczne w naglowku. Nalezy tu wpisac caly kod html elementow ktore maja byc widoczne.
        // String 
    // tresc 
        // Okresla co bedzie widoczne po rozwinieciu naglowka. Nalezy tu wpisac caly kod html elementow ktore maja byc widoczne.
        // String
    // przelacznik
        // Czy przelacznik ma byc wyswietlany
        // true/false
    // tresc_ekstra (opcjonalny)
        // Okresla co bedzie widoczne po rozwinieciu naglowka i wlaczeniu przelacznika. Nalezy tu wpisac caly kod html elementow ktore maja byc widoczne.
        // String
    return `
    <div class="menu_poziome">
        <div class="zakladka-header">
            ${menu.naglowek}
            ${menu.przelacznik ? `
            <label class="Przelacznik">
                <input type="checkbox" class="przelacznik">
                <span class="slider"></span>
            </label>
            ` : ""}

            <button class="Guzik-Strzalka-H50"></button>
        </div>

        <div class="ukrycie">
            ${menu.tresc}
        </div>

        ${menu.przelacznik ? `<div class="zawartosc_warunkowa" style="display:none;">${menu.tresc_ekstra}</div>` : ""}
    </div>
    `;
}

document.addEventListener("click", (e) => {
    const header = e.target.closest(".zakladka-header");
    if (!header) return;

    const GuzikStrzalka = header.querySelector(".Guzik-Strzalka-H50");
    if (e.target === GuzikStrzalka) {
        const element = header.closest(".menu_poziome");
        GuzikStrzalka.classList.toggle("active");

        element.querySelector(".ukrycie").style.display = GuzikStrzalka.classList.contains("active") ? "block" : "none";

        const dodatkowa_zawartosc = element.querySelector(".zawartosc_warunkowa");
        if (dodatkowa_zawartosc) {
            dodatkowa_zawartosc.style.display = GuzikStrzalka.classList.contains("active") && header.querySelector(".przelacznik").checked ? "block" : "none";
        }
    }
});
document.addEventListener("change", (e) => {
    if (!e.target.matches(".przelacznik")) return;

    const checkbox = e.target;
    const element = checkbox.closest(".menu_poziome");
    const GuzikStrzalka = element.querySelector(".Guzik-Strzalka-H50");
    const dodatkowa_zawartosc = element.querySelector(".zawartosc_warunkowa");

    if (dodatkowa_zawartosc) {
        dodatkowa_zawartosc.style.display = GuzikStrzalka.classList.contains("active") && checkbox.checked ? "block" : "none";
    }
});

