const pathToImages = "img";

/**
     * @param {number} id уникальный идентификатор каждого товара
     * @param {string} image название файла с картинкой, например 0.jpg
     * @param {string} title имя товара
     * @param {number} price цена товара
     */
class Product {
    constructor(id, image, title, price) {
        this.id = id;
        this.image = image;
        this.title = title;
        this.price = price;
    }
}

const products = [
    new Product(
        1,
        "random.jpg",
        "Notebook",
        2000,
    ),
    new Product(
        2,
        "random.jpg",
        "Mouse",
        20,
    ),
    new Product(
        3,
        "random.jpg",
        "Keyboard",
        200,
    ),
    new Product(
        4,
        "random.jpg",
        "Gamepad",
        50,
    ),

]
//Функция для формирования верстки каждого товара
//Добавить в выводе изображение
function insertProductsIntoPage(product) {
    return `<div class="product-item">
                <h3>Название товара - ${product.title}</h3>
                <p>Цена - ${product.price}$</p>
                <img src="${pathToImages}/${product.image}" alt="img">
                <div><button class="buy-btn">Купить</button></div>
                
            </div>`
};

function completeLayout(products) {
    let productsMarkup = '';
    for (let product of products) {
        productsMarkup += insertProductsIntoPage(product);
    }
    document.querySelector('.products').insertAdjacentHTML('afterbegin', productsMarkup)
};

completeLayout(products);