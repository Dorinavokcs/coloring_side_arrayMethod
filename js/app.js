// alert("asdfa")

//SZámokat tartalmazó négyzetek létrehozása:
/*const makeBoxes = () => {
    let boxList = [];
    for (let i = 1; i < 16; i++) {
        boxList.push(`<div id="box-${i}" class="box">${i}</div>`);
    }
    return boxList;
};*/

const makeBoxes =() => {
    const data = [
        {number: 1},
        {number: 2},
        {number: 3},
        {number: 4},
        {number: 5},
        {number: 6},
        {number: 7},
        {number: 8},
        {number: 9},
        {number: 10},
        {number: 11},
        {number: 12},
        {number: 13},
        {number: 14},
        {number: 15}
    ];
    const content = data.map()
}

// A négyzetek megjelenítése a HTML-ben:
const renderBoxes = () => {
    const boxesContainer = document.querySelector(".boxes");
    boxesContainer.innerHTML = "";
    boxesContainer.innerHTML = makeBoxes().join('');

   /* const boxes = document.querySelectorAll(".box")
    console.log("Boxlista2",boxes); //log-ot kell beirni hogy kiadja ezt
    */
};

//Oldal betöltésekor inicializálódik a weboldal:
//document.addEventListener("DOMContentLoaded", renderBoxes);

//Ezek a kódsorok hamrabb futnak le, mint a callback-függvények. Ezért itt még nem létezik a renderelt tartalom:
//const boxes = document.querySelectorAll(".box")
//console.log("Boxlista1",boxes); //log-ot kell beirni hogy kiadja ezt

document.addEventListener("DOMContentLoaded", ()=>/*ez a nyilacska egy olyan rövidítés a function()-nak de nem úgy fog menni hogy ()function hanem function()*/{
    renderBoxes()
    const boxes = document.querySelectorAll(".box")
    console.log("Boxlista3",boxes);
});

//Tennivalók:
//1.Kivenni az input mező értékét
//2.Megfelelő-e az érték (nem üres, nem string, 1 és 15 között van)
//3.A színező gombra eseményfigyelőt helyezni - színező callback-eljárás
//4.Véletlen szám-generátor
//5.Számoknól színt készíteni
//6. 3. feladat színező eljárásában alkalmazni ezt a színt