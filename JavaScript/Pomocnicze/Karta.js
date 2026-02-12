//Funkcja tworzona z myślą o V2 ale jeszcze nie jest skonczona.

async function Karta_65x93(karta) {
    console.log((karta.blok_test.typ_broni))
    const Karta = `
        <div style="
            width: 420px;
            height: 650px;
            background-image: url('/Obrazy/Karta/Karta_Baza.png');
            background-size: 100% 100%;
            background-position: center;
            background-repeat: no-repeat;
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
            align-items: center;
        ">
            <div style="
                margin-top: 4%;
                width: 70%;
                height: 7%;
                border: 4px solid black;
                box-sizing: border-box;
                display: flex;
                justify-content: center;
                align-items: center;
            ">
                <span class="Kar-20">${karta.nazwa}</span>
            </div>
            <div style="
                margin-top: 0%;
                width: 92.6%;
                height: 80%;
                display: flex;
                flex-direction: column;
            ">  
                ${await Podzial_Blokowy(karta.bloki)}
                ${await Blok_Naglowek_Broni_Bialej(karta.blok_test)}
                ${await Blok_Atak(karta.nazwa)}
                ${await Blok_Atak(karta.nazwa)}
                ${await Blok_Umniejetnosc(karta.nazwa)}
                ${await Blok_Umniejetnosc(karta.nazwa)}
            </div>
            <div style="
                margin-top: 1%;
                width: 70%;
                height: 7.4%;
                background-color: lightgrey;
                display: flex;
                justify-content: center;
                align-items: center;
            ">
                <span class="Kar-20">stopka</span>
            </div>
        </div>
    `;
    return Karta;
}

async function Podzial_Blokowy(bloki){
    let bloki_razem = ""
    for (const blok of bloki) {
        bloki_razem += ""
    };
    return bloki_razem;
};



// Funkcja Wykorzystywana do tworzenia podstawowego nagłówka dla broni do walki wręcz.
// Wysokość 19/100.
async function Blok_Naglowek_Broni_Bialej(naglowek) {
    const Naglowek = `
        <div style="
            margin-top: 1%;
            width: 100%;
            height: 22%;
            display: flex;
            justify-content: space-between;
        ">
            <div style="
                width: 37%;
                height: 100%;
                display: flex;
                flex-direction: column;
                justify-content: space-between;
            ">
                <div style="
                    width: 100%;
                    height: 45%;
                    border: 4px solid black;
                    box-sizing: border-box;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                ">
                    <span class="Kar-20">${naglowek.typ_broni}</span>
                </div>

                <div style="
                    margin-top: 3%;
                    width: 100%;
                    height: 55%;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                ">
                    <div style="
                        width: 31.5%;
                        height: 100%;
                        display: flex;
                        flex-direction: column;
                        justify-content: center;
                        align-items: center;
                        background-image: url('/Obrazy/Karta/Karta_Zalozenie.png');
                        background-size: contain;
                        background-position: center;
                        background-repeat: no-repeat;
                    ">

                    </div>
                    <div style="
                        width: 31.5%;
                        height: 100%;
                        display: flex;
                        flex-direction: column;
                        justify-content: center;
                        align-items: center;
                        background-image: url('/Obrazy/Karta/Tarcza.png');
                        background-size: contain;
                        background-position: center;
                        background-repeat: no-repeat;
                    ">
                        <span class="Kar-20">${naglowek.obrona_sila > 0 ? `+${naglowek.obrona_sila}` : naglowek.obrona_sila}</span>
                        <span class="Kar-15">Si</span>
                    </div> 
                    <div style="
                        width: 31.5%;
                        height: 100%;
                        display: flex;
                        flex-direction: column;
                        justify-content: center;
                        align-items: center;
                        background-image: url('/Obrazy/Karta/Tarcza.png');
                        background-size: contain;
                        background-position: center;
                        background-repeat: no-repeat;
                    ">
                        <span class="Kar-20">${naglowek.obrona_zrecznosc > 0 ? `+${naglowek.obrona_zrecznosc}` : naglowek.obrona_zrecznosc}</span>
                        <span class="Kar-15">Zr</span>
                    </div> 
                </div> 
            </div>

            <div style="
                width: 62%;
                height: 100%;
                border: 4px solid black;
                box-sizing: border-box;
                display: flex;
                justify-content: center;
                align-items: center;
            ">
                <span class="Kar-20">${await Cechy_Karta(naglowek.cechy_broni)}</span>
            </div>
        </div>
    `;

    return Naglowek;
};

async function Blok_Atak(dane) {
    const Naglowek = `
        <div style="
            margin-top: 1%;
            width: 100%;
            height: 26%;
            border: 4px solid black;
            box-sizing: border-box;
        ">

        </div>
    `;

    return Naglowek;
};

async function Blok_Umniejetnosc(dane) {
    const Naglowek = `
        <div style="
            margin-top: 1%;
            width: 100%;
            height: 13%;
            border: 4px solid black;
            box-sizing: border-box;
        ">

        </div>
    `;

    return Naglowek;
};

async function Cechy_Karta(cechy) {
    let html ="";
    for (const cecha of cechy) {
        html += await Import_Zapisu (cecha.json_lista, cecha.id, cecha.inputy)
        html += cecha.koncowka
    };
    return html;
};
