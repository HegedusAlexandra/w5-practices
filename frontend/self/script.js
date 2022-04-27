
const beerCardComponent = function (name,company,type){
    return `
        <div class="beers.card">
            <div class="beerName">name:${name}</div>
            <div class="beerCompany">company:${company}</div>
            <div class="beerType">type:${type}</div>
        </div>
    `
}

//  1   htmlbe linkelni a script.js-t és a data.js-t <script src"">

//  2   meghatározom mit akarok visszajátszani- itt csak a söröket amiből 10 van 3 paraméterrel

//  3   addEventListener---Eseményfigyelő-abalkban esemény (tölt,funkció név)

//  4   insertAdjacentHTML (position string,html tage at amit betehet)

const beerTitleComponent = `
<h1>Beers</h1>
`;

//  +   definiáltuk a beerTitleComp-ot ,ez nem szükséges de lehet ez kerül vissza a funkció név helyre az insertAdjacentHTML be

const loadEvent = function () {
    const rootElement= document.getElementById("root");
    console.log(rootElement);
    rootElement.insertAdjacentHTML("beforeend",beerTitleComponent)

console.log(beers.cards);
console.log(beers.logo);

//  5   ezzel csak kiíratjuk szisztematikusan az adatok közül az értékét

//  6   attól függ melyik forciklust hazsnálom hogy van e adat (for of) vagy nincs (for)

    for (const beer of beers.cards)
{
 console.log(beer)
 console.log(beers.cards.title);
 rootElement.insertAdjacentHTML("beforeend", beerCardComponent(beer.title,beer.sub,beer.text));

}

//  7   beercardCompot meg kell hívni () ide ami kerül pl ("kiskutya","kiscica","I love frontend") ezt fogja 10* visszajátszani

//  8   beercardcomponentbe beer a for of hivatkozás miatt és a console miatt

}

//  3   addEventListener---Eseményfigyelő-abalkban esemény (tölt,funkció név)

window.addEventListener("load", loadEvent)





