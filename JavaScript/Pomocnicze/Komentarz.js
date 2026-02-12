// NADAJE SIE DO V2 !!!

// Funkcja służy do wstawiania komentarzy wraz z ich przypisanym stylem oraz opcjonalnym linkiem.
function Komentarz(komentarz) {
    // Input: [{typ:, tresc:, link:}]
        // typ
            // okresla styl w jakim komentarz zostanie wyświetlony.
            // String
        // tresc 
            // tekst który zostanie wyświetlony.
            // String
        // link (opcjonalny)
            // link do innego artykułu.
            // String

    let Styl_Komentarza = '';
    let Styl_Linku = '';
    switch (komentarz.typ) {
        // Style znajdują się w CSS Czcionki.
            // Zastanowić sie nad plikiem CSS Komentarze
        case 'Wzmianka': Styl_Komentarza = "Wzm-14"; Styl_Linku= "Wzm-14-Link"; break;
        case 'Ostrzezenie': Styl_Komentarza = "Ost-14"; Styl_Linku= "Ost-14-Link"; break;
        case 'Rownanie': Styl_Komentarza = "Equ-14"; Styl_Linku= "Equ-14-Link"; break;
        case 'Przyklad': Styl_Komentarza = "Exa-14"; Styl_Linku= "Exa-14-Link"; break;
        case 'Zobacz': Styl_Komentarza = "Che-14"; Styl_Linku= "Che-14-Link"; break;
    }

    if (komentarz.link) {
        return `<a href="${komentarz.link}" class=${Styl_Linku}>${komentarz.typ}: ${komentarz.tresc}</a>`;
    }
    return `<span class="${Styl_Komentarza}">${komentarz.typ}: ${komentarz.tresc}</span>`;
}
