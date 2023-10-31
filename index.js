let openShopping = document.querySelector('.shopping');
let closeShopping = document.querySelector('.closeShopping');
let list = document.querySelector('.list');
let listCard = document.querySelector('.listCard');
let body = document.querySelector('body');
let total = document.querySelector('.total');
let quantity = document.querySelector('.quantity');

openShopping.addEventListener('click', ()=>{
    body.classList.add('active');
})
closeShopping.addEventListener('click', ()=>{
    body.classList.remove('active');
})

let products = [
    {
        id: 1,
        name: 'Jack Daniels Whiskey',
        image: 'https://images.hdqwalls.com/wallpapers/jack-daniels-whiskey-4k.jpg',
        price: 4000
    },
    {
        id: 2,
        name: 'Old Monk',
        image: 'https://img5.goodfon.com/wallpaper/big/c/af/rom-alkogol-butylka-bokaly-indiiskii-rom.jpg',
        price: 1200
    },
    {
        id: 3,
        name: 'Carona',
        image: 'https://tse4.mm.bing.net/th?id=OIP.cJ-AbRgJH5ad1Cl_t0iPjgHaFk&pid=Api&P=0&h=180',
        price: 240
    },
    {
        id: 4,
        name: 'Magic Moments',
        image: 'https://pbs.twimg.com/media/DBTSSyCV0AAYa41.jpg',
        price: 1350
    },
    {
        id: 5,
        name: 'bacardi',
        image: 'https://wallpapercave.com/wp/wp2126669.jpg',
        price: 1900
    },
    {
        id: 6,
        name: 'MH',
        image: 'https://wallpapercave.com/wp/wp2708083.jpg',
        price: 5000
    },
    {
        id: 7,
        name: 'Red Label',
        image: 'https://images6.alphacoders.com/317/thumb-1920-317608.jpg',
        price: 4500
    },
    {
        id: 8,
        name: 'Heineken',
        image: 'https://c0.wallpaperflare.com/preview/165/195/807/two-beer-bottles-of.jpg',
        price: 200
    },
    {
        id: 9,
        name: 'Wine',
        image: 'https://images8.alphacoders.com/100/thumb-1920-1008706.jpg',
        price: 1200
    },
    {
        id: 10,
        name: 'AB',
        image: 'http://yesofcorsa.com/wp-content/uploads/2017/06/4K-Vodka-Desktop-Wallpaper.jpg',
        price: 1200
    },
    {
        id: 11,
        name: 'Zin',
        image: 'https://images5.alphacoders.com/929/929453.jpg',
        price: 1100
    },
    {
        id: 12,
        name: '3MONKEYS',
        image: 'https://i.pinimg.com/originals/a0/33/ea/a033eab37c8799ba6ee6b4c21b18c27d.jpg',
        price: 123
    },
    {
        id: 13,
        name: 'Blue Label',
        image: 'https://i.pinimg.com/originals/66/ec/55/66ec5569e836963da8d5713a30a4676b.jpg',
        price: 1222
    },
    {
        id: 14,
        name: 'Black Label',
        image: 'https://i.pinimg.com/736x/f7/b1/d3/f7b1d3f28dba09c89bc00cc593708bc1--johnnie-walker-whisky.jpg',
        price: 4210
    },
    {
        id: 14,
        name: '',
        image: 'https://i.pinimg.com/736x/db/bf/8f/dbbf8f52929065d4daaa22b17c234cd8.jpg',
        price: 1209
    }


];
let listCards  = [];
function initApp(){
    products.forEach((value, key) =>{
        let newDiv = document.createElement('div');
        newDiv.classList.add('item');
        newDiv.innerHTML = `
            <img src="${value.image}">
            <div class="title">${value.name}</div>
            <div class="price">${value.price.toLocaleString()}</div>
            <button onclick="addToCard(${key})">Add To Card</button>`;
        list.appendChild(newDiv);
    })
}
initApp();
function addToCard(key){
    if(listCards[key] == null){
        // copy product form list to list card
        listCards[key] = JSON.parse(JSON.stringify(products[key]));
        listCards[key].quantity = 1;
    }
    reloadCard();
}
function reloadCard(){
    listCard.innerHTML = '';
    let count = 0;
    let totalPrice = 0;
    listCards.forEach((value, key)=>{
        totalPrice = totalPrice + value.price;
        count = count + value.quantity;
        if(value != null){
            let newDiv = document.createElement('li');
            newDiv.innerHTML = `
                <div><img src="${value.image}"/></div>
                <div>${value.name}</div>
                <div>${value.price.toLocaleString()}</div>
                <div>
                    <button onclick="changeQuantity(${key}, ${value.quantity - 1})">-</button>
                    <div class="count">${value.quantity}</div>
                    <button onclick="changeQuantity(${key}, ${value.quantity + 1})">+</button>
                </div>`;
                listCard.appendChild(newDiv);
        }
    })
    total.innerText = totalPrice.toLocaleString();
    quantity.innerText = count;
}     
function changeQuantity(key, quantity){
    if(quantity == 0){
        delete listCards[key];
    }else{
        listCards[key].quantity = quantity;
        listCards[key].price = quantity * products[key].price;
    }
    reloadCard();
}