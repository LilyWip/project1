let openShopping = document.querySelector('.shopping');
let closeShopping = document.querySelector('.closeShopping');
let list = document.querySelector('.list');
let listCard = document.querySelector('.listCard');
let body = document.querySelector('body');
let total = document.querySelector('.total');
let quantity = document.querySelector('.cart-number');

openShopping.addEventListener('click', ()=>{
    body.classList.add('active');
})
closeShopping.addEventListener('click', ()=>{
    body.classList.remove('active');
})

let products = [
    {
        id: 1,
        name: 'Chocolate cake and Coffee whip',
        image: 'cake/c1.PNG',
        price: 600
    },
    {
        id: 2,
        name: 'Extreme Blizzard',
        image: 'cake/c10.PNG',
        price: 700
    },
    {
        id: 3,
        name: 'Cocoa Butter Cream',
        image: 'cake/c18.PNG',
        price: 620
    },
    {
        id: 4,
        name: 'Vanilla Choco Flakes Cherry Top',
        image: 'cake/c2.PNG',
        price: 650
    },
    {
        id: 5,
        name: 'Crunchy Caramelized',
        image: 'cake/c6.PNG',
        price: 650
    },
    {
        id: 6,
        name: 'Almond Crumble zchoc',
        image: 'cake/c4.PNG',
        price: 500
    },
    {
        id: 7,
        name: 'Mix fruit red velved',
        image: 'cake/c3.PNG',
        price: 620
    },
    {
        id: 8,
        name: 'Black Forest',
        image: 'cake/c5.PNG',
        price: 600
    },
    {
        id: 9,
        name: 'Crunchy Caramelized',
        image: 'cake/c6.PNG',
        price: 650
    },
    {
        id: 10,
        name: 'Tropical Fruit',
        image: 'cake/c7.PNG',
        price: 590
    },
    {
        id: 11,
        name: 'Strawberry Cheesecake-Piece',
        image: 'cake/c11.PNG',
        price: 89
    },
    {
        id: 12,
        name: 'Peanut Choco-Piece',
        image: 'cake/c21.PNG',
        price: 89
    },
    {
        id: 13,
        name: 'Strawberry Milk Cream-Piece',
        image: 'cake/c22.PNG',
        price: 79
    },
    {
        id: 14,
        name: 'Pecan Pie Vanilla Ice Cream-Piece',
        image: 'cake/c24.PNG',
        price: 99
    },
    {
        id: 15,
        name: 'Chocolate Mousse-Piece',
        image: 'cake/c25.PNG',
        price: 99
    },
    {
        id: 16,
        name: 'Raspberry Cheesecake-Piece',
        image: 'cake/c27.PNG',
        price: 109
    },
    {
        id: 17,
        name: 'Biscoff Cheesecake-Piece',
        image: 'cake/c28.PNG',
        price: 109
    },
    {
        id: 18,
        name: 'Red Raspberry-Piece',
        image: 'cake/c30.PNG',
        price: 119
    },
    {
        id: 19,
        name: 'Raisin Cupcake',
        image: 'cake/c31.PNG',
        price: 69
    },
    {
        id: 20,
        name: 'Heavy Chocolate Cupcake',
        image: 'cake/c34.PNG',
        price: 109
    },
    {
        id: 21,
        name: 'Mint Pink Cupcake',
        image: 'cake/c35.PNG',
        price: 109
    },
    {
        id: 22,
        name: 'Black Pink Cupcake',
        image: 'cake/c37.PNG',
        price: 500
    },
    {
        id: 23,
        name: 'Almond Crumble zchoc',
        image: 'cake/c3.PNG',
        price: 500
    }
];
let listCards  = [];
function initApp(){
    products.forEach((value, key) =>{
        let newDiv = document.createElement('div');
        newDiv.classList.add('item');
        newDiv.innerHTML = `
            <img src="image/${value.image}">
            <div class="title">${value.name}</div>
            <div class="price">${value.price.toLocaleString()}฿</div>
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
                <div><img src="image/${value.image}"/></div>
                <div>${value.name}</div>
                <div>${value.price.toLocaleString()}฿</div>
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