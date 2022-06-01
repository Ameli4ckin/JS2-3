
class ProductsList {
    constructor(container = '.goods-list') {
        this.container = container;
        this.goods = [];
        this.allProducts = [];
        this._fetchProducts();
    }


    _fetchProducts() {
        this.goods = [
            {title: 'Shirt', foto: 'example.jpeg', price: 150}, 
            {title: 'Socks', foto: 'example.jpeg', price: 50}, 
            {title: 'Jacket', foto: 'example.jpeg', price: 350}, 
            {title: 'Shoes', foto: 'example.jpeg', price: 250}, 
        ];
    }

    render() {
        const block = document.querySelector(this.container);
        for(let product of this.goods){
            const productObj = new ProductItem(product);
            this.allProducts.push(productObj);
            block.insertAdjacentHTML('beforeend',productObj.render())
        }
    }

    getSum() {
        let sum = 0;
        this.goods.forEach(item=>{
            sum += item.price;
        })
        alert(sum);
    }
}

class ProductItem {
    constructor(product){
        this.title = product.title;
        this.price = product.price;
        this.id = product.id;
        this.img = product.img;
    }

    render() {
        return `<div class="goods-item">
            <h3 class = "title">${this.title}</h3>
            <img class = "goods-img" src="img/${this.foto}"></img> 
            <p>${this.price} $</p>
            <button class="buy-btn">Купить</button>
        </div>`;
    }
}

let list = new ProductsList();
list.render();
list.getSum();

class Basket {
    addGood() {

    }
    removeGood() {

    }
    changeGood() {

    }
    render(){

    }
}

class BasketEl {
    render() {}
}





