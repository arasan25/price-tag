let cardData = [];
let datav = [];
async function fetchdata() {

    var url = `https://www.cheapshark.com/api/1.0/deals?storeID=1&upperPrice=15`;
    try {
        let result = await fetch(url);
        let output = await result.json();
      
        if (output.length > 0) {
            datav = [...output];
        }
        createCard(datav);
      

    }
    catch (error) {
        console.log(error);
    }
}
fetchdata();
function createCard(value) {
    value.forEach((data) => {
        let card = document.getElementById('container');
        let H1 = document.createElement('h1');
        H1.innerText = `Title:${data.title}`;
        let P1 = document.createElement('h4');
        P1.innerText = `Deal id:${data.dealID}`;
        let P2 = document.createElement('h4');
        P2.innerText = `Store id:${data.storeID}`;
        let P3 = document.createElement('h4');
        P3.innerText = `Game id:${data.gameIdD}`;
        let P4 = document.createElement('h5');
        P4.innerText = `Sale Price:${data.salePrice}`;
        let P5 = document.createElement('h5');
        P5.innerText = `Normal Price:${data.normalPrice}`;
        card.append(H1, P1, P2, P3, P4, P5);
    });
}

