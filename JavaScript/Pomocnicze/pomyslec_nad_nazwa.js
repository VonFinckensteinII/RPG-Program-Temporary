// NADAJE SIE DO V2 !!!

// Funkcja służy do konwersji zapisu blokowego z opcjonalnymi fragmentami i zmiennymi na pojedynczy string.
// Przeznaczony glownie do ogarniania cech, bieglosci i umiejetnosci ale moze sie jeszcze przydac z jakiegos innego powodu.
function Zapis_Blokowy(zapis, inputy) {
    // Input (zapis): [{zmienna:, tresc:, typ:, wyjasnienie:}]
    // Funkcja jest przeznnaczona do przyjmowania dowolnej ilości takich bloków.
    // zmienna
        // Zawiera nazwy zmiennych wraz z ich numerami. Numery dla pojedyńczej funkcji nie moga się powtarzac chyba ze ten sam input ma trafić w dwa różne miejsca.
        // {String: Intiger} / true
        // Funkcja jest przeznnaczona do przyjmowania dowolnej ilości takich bloków.
        // Wstawienie true powoduje ze blok jest zawsze widoczny.
    // tresc 
        // tekst który zostanie wyświetlony.
        // String
        // W stringu elementy do podmieniania należy wstawić jako {nazwa}.
    // typ (opcjonalny)
        // Zawiera nazwy zmiennych wraz z ich typami.
        // {String: String}
        // Pierwszy string musi pokrywać sie ze stringiem zadeklarowanym w zmiennej. drugi string mówi o typie zmiennej.
            //Istniejące typy zmiennych: uzupelniac jak sie nie zapomni.
    // wyjasnienie (opcjonalny)
        // Zawiera nazwy zmiennych wraz z ich wyjasnieniami.
        // {String: String}
        // Pierwszy string musi pokrywać sie ze stringiem zadeklarowanym w zmiennej. drugi string mówi co dokladnie opisuje ta zmienna.

    // Input (inputy):
    // Zawiera treść która ma podmienić zmienne z zapisu. Brak tersci spowoduje niewyswietlenie calego bloku.
    // Tabela Stringów

  return zapis
    .map(fragment => {

        if (fragment.zmienna === true) {
            return `${fragment.tresc}`;
        }

        let tresc_pomocnicza = fragment.tresc;

        for (const pozycja_zmiennej in fragment.zmienna) {
            const wartosc = inputy[fragment.zmienna[pozycja_zmiennej]];

            if (wartosc == null) return "";

            tresc_pomocnicza = tresc_pomocnicza.replace(
                new RegExp(`\\{${pozycja_zmiennej}\\}`, "g"),
                `${wartosc}`
            );
        }

        return tresc_pomocnicza;
    })
    .join(" ")
    .replace(/\s+/g, " ")
    .trim();
}

async function Import_Zapisu(json_lista, id, inputy) {
    let pelna_lista = await listaCache.get(json_lista);
    console.log(pelna_lista)
    let cecha = pelna_lista.find(c => c.id === id);

    return Zapis_Blokowy(cecha.zapis, inputy);
}