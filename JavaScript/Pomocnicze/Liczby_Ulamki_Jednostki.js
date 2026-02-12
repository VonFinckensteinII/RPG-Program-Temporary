//Funkcja tworzona z myślą o V2 ale jeszcze nie jest skonczona.

// Funkcja służy do usuwania końcówek przy konwersji ułamków
function Zaokraglij(wartosc) {
    return (Math.round(wartosc * 100) / 100).toFixed(Number.isInteger(wartosc) ? 0 : 1);
}
function konwertujJednostkę(ilosc, miara) {
    const miary = {
        waga: { 
            jednostka1: ['Kilogram', 'Kilogramy', 'Kilogramów','Kilograma'], 
            przelicznik1: 1, 
            jednostka2: ['Gram', 'Gramy', 'Gramów','Grama'], 
            przelicznik2: 1000 
        },
        objętość: { 
            jednostka1: ['Litr', 'Litry', 'Litrów', 'Litra'], 
            przelicznik1: 1,
            jednostka2: ['Mililitr', 'Mililitry', 'Mililitrów', 'Mililitra'], 
            przelicznik2: 1000
        },
        sztuki: { 
            jednostka1: ['Sztuka', 'Sztuki', 'Sztuk', 'Sztuki'], 
            przelicznik1: 1
        },
        sloty: { 
            jednostka1: ['Slot', 'Sloty', 'Slotów', 'Slota'], 
            przelicznik1: 1
        },
        długość: { 
            jednostka1: ['Metr', 'Metry', 'Metrów', 'Metra'],
            przelicznik1: 1,
            jednostka2: ['Centymetr', 'Centymetry', 'Centymetrów', 'Centymetra'],
            przelicznik2: 100,
            jednostka3: ['Milimetr', 'Milimetry', 'Milimetrów', 'Milimetra'], 
            przelicznik3: 1000
        },
        objętość_metr: { 
            jednostka1: ['Metr Kwadratowy', 'Metry Kwadratowe', 'Metrów Kwadratowych', 'Metra Kwadratowego'],
            przelicznik1: 1,
            jednostka2: ['Centymetr Kwadratowy', 'Centymetry Kwadratowe', 'Centymetrów Kwadratowych', 'Centymetra Kwadratowego'],
            przelicznik2: 1000,
            jednostka3: ['Milimetr Kwadratowy', 'Milimetry Kwadratowe', 'Milimetrów Kwadratowych', 'Milimetra Kwadratowego'], 
            przelicznik3: 1000000
        },
        kalorie: { 
            jednostka1: ['Kilokaloria', 'Kilokalorie', 'Kilokalorii', 'Kilokalorii'], 
            przelicznik1: 1,
            jednostka2: ['Kaloria', 'Kalorie', 'Kalorii', 'Kalorii'], 
            przelicznik2: 1000
        }
    };

    if (miara === 'czas-długi') {
        const formy = {
            dzień: ['Dzień', 'Dni', 'Dni', 'Dnia'],
            tydzień: ['Tydzień', 'Tygodnie', 'Tygodni', 'Tygodnia'],
            miesiąc: ['Miesiąc', 'Miesiące', 'Miesięcy', 'Miesiąca'],
            rok: ['Rok', 'Lata', 'Lat', 'Roku',]
        };

        if (ilosc < 7) return `${ilosc} ${Odmiana(ilosc, formy.dzień)}`;
        if (ilosc < 30) {
            const tygodnie = Math.round(ilosc / 7 * 2) / 2;
            return `${Zaokraglij(tygodnie)} ${Odmiana(tygodnie, formy.tydzień)}`;
        }
        if (ilosc < 365) {
            const miesiące = Math.round(ilosc / 30 * 2) / 2;
            return `${Zaokraglij(miesiące)} ${Odmiana(miesiące, formy.miesiąc)}`;
        }
        const lata = Math.round(ilosc / 365 * 2) / 2;
        if (lata === 1.5) return `${Zaokraglij(lata)} Roku`;
        return `${Zaokraglij(lata)} ${Odmiana(lata, formy.rok)}`;
    }

    const jednostka = miary[miara];
    if (!jednostka) return `${Zaokraglij(ilosc)} ${miara}`;

    let x = 1;
    let wartosc,fleksja;

    while (jednostka[`przelicznik${x}`]) {

        wartosc = ilosc * jednostka[`przelicznik${x}`];
        fleksja = jednostka[`jednostka${x}`];

        if (wartosc >= 1 || !jednostka[`przelicznik${x + 1}`]) 
        {
            break;
        }
        x++;
    }
    return `${Zaokraglij(wartosc)} ${Odmiana(wartosc, fleksja)}`;
}
// Funkcja pomocnicza wybiera odpowiednią forme fleksyjną w zalezności od otrzymanych danych.
function Odmiana(liczba, fleksja) {
    const abs = Math.abs(liczba);
    if (!Number.isInteger(liczba)) return fleksja[3];
    if (abs === 1) return fleksja[0];           
    if (abs % 10 >= 2 && abs % 10 <= 4 && (abs % 100 < 10 || abs % 100 >= 20)) return fleksja[1];
    return fleksja[2];                          
}
// Funkcja zamienia ułamek dziesiętny na zwykły.
function PoprawUlamekWynik(tekst) {
  return tekst.replace(/^(\d+(?:\.\d+)?)\s/, (m, n) => {
    const x = Number(n);
    if (!Number.isFinite(x)) return m;

    let optymalny = { licznik: x, mianownik: 1, zaokraglenie: Infinity };

    for (let m = 1; m <= 10; m++) {
      const l = Math.round(x * m);
      const zaokraglenie = Math.abs(x - l / m);

      if (zaokraglenie < optymalny.zaokraglenie) {
        optymalny = { licznik: l, mianownik: m, zaokraglenie };
      }
    }

    if (optymalny.zaokraglenie < 0.01) {
      return `${optymalny.licznik}/${optymalny.mianownik} `;
    }

    return m;
  });
}
