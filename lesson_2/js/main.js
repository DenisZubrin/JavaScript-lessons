'use strict'
class ProductsList {
    constructor(container = '.products') {
        this.container = container;
        this.goods = [{
                id: 1,
                title: 'Notebook',
                price: 2000
            },
            {
                id: 2,
                title: 'Mouse',
                price: 20
            },
            {
                id: 3,
                title: 'Keyboard',
                price: 200
            },
            {
                id: 4,
                title: 'Gamepad',
                price: 50
            },
        ];
    }

    renderList() {
        const block = document.querySelector(this.container);
        for (let product of this.goods) {
            const productObject = new ProductItem(product);
            block.insertAdjacentHTML('beforeend', productObject.renderItem());
        }
    }
}
class Basket {
    constructor(container = '.cart') {
        this.container = container;
        this.goodsList = [];
    }
    renderBasket() {
        const block = document.querySelector(this.container);
        if (this.goodsList !== 0) {
            for (let product of this.goodsList) {
                const productObject = new ProductItem(product);
                block.insertAdjacentHTML('beforeend', productObject.renderItem());
            }
        } else {
            block.insertAdjacentHTML('beforeend', '<span>В вашей корзине пусто</span>');
        }

    }
    countBasket() {
        let totalPrice = 0;
        goodsList.forEach(item => {
            totalPrice += item.price;
        });
        return totalPrice;
    }
}

class ProductItem {
    constructor(product, img = 'https://placehold.it/200x150') {
        this.title = product.title;
        this.price = product.price;
        this.id = product.id;
        this.img = img;
    }
    renderItem() {
        return `<div class="product-item">
                    <img src="${this.img}">
                    <h3>${this.title}</h3>
                    <p>${this.price}</p>
                    <button class="buy-btn">Купить</button>
                </div>`;
    }
}
// Не делаю отдельного класса, так как работа в корзине ведется с теми же элементами

let list = new ProductsList();
list.renderList();
let basket = new Basket();
// Корзина отрисовывается и собирается при нажатии на кнопку
document.getElementsByClassName('btn-cart')[0].addEventListener('click', basket.renderBasket());
// Каждая кнопка "Купить" получает свойство: при нажатии в корзину добавляется объект, которому она принадлежит
if (window.onload) {
    for (let i = 0; i < list.goods.length; i++) {
        let button = document.querySelectorAll('buy-btn')[i];
        button.addEventListener('click', () => {
            basket.goodsList.push(list.goods[i]);
        });
    }
}
