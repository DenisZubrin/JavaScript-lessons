'use strict';

const goods = [{
    title: 'Shirt',
    price: 150
  },
  {
    title: 'Socks',
    price: 50
  },
  {
    title: 'Jacket',
    price: 350
  },
  {
    title: 'Shoes',
    price: 250
  },
];

const renderGoodsItem = (title = "product", price = 0) => {
  return `
    <div class="goods-item">
      <img src="img/item-img.png" alt="item-photo" class="goods-item__img">
      <h3 class="goods-item__title">${title}</h3>
      <p class="goods-item__price">${price}</p>
    </div>`;
};

const renderGoodsList = (list) => {
  let goodsList = list.map(item => renderGoodsItem(item.title, item.price));
  // Элементы массива разделяются запятыми. При помощи join все элементы объединяются в одну строку без запятых
  document.querySelector('.goods-list').innerHTML = goodsList.join('');
}

renderGoodsList(goods);