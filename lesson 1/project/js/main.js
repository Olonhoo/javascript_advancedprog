const pathToImages = "img";
const products = [
    { id: 1, title: 'Notebook', price: 2000, image: "random.jpg" },
    { id: 2, title: 'Mouse', price: 20, image: "random.jpg" },
    { id: 3, title: 'Keyboard', price: 200, image: "random.jpg" },
    { id: 4, title: 'Gamepad', price: 50, image: "random.jpg" },
];
//Функция для формирования верстки каждого товара
//Добавить в выводе изображение


const renderProduct = (title, price, image) => {
    return `<div class="product-item">
                <h3>${title}</h3>
                <p>${price}</p>
                <img src="${pathToImages}/${image}" alt="img">
                <button class="buy-btn">Купить</button>
            </div>`
};
const renderPage = list => {
    const productsList = list.map(item => renderProduct(item.title, item.price, item.image));
    console.log(productsList);
    document.querySelector('.products').innerHTML = productsList;
};

renderPage(products);