class Product {
	// title = "DEFAULT";
	// imagrUrl;
	// description;
	// price;
   constructor(title, image, price, desc) {
      this.title = title;
      this.imgUrl = image;
      this.description = desc;
      this.price = price;
   }
}

class ElementAttribute {
	constructor(attrName, attrValue) {
		this.name = attrName;
		this.value = attrValue;
	}
}

class Component {

	constructor(renderHookId, shouldRender = true) {
		this.hookId = renderHookId;
		if (shouldRender) {
			this.render();
		}
	}

	createRootElement(tag, cssClass, attributes) {
		const rootElement = document.createElement(tag);
		if (cssClass) {
			rootElement.className = cssClass;
		}
		if (attributes && attributes.length > 0) {
			for (const attr in attributes) {
				rootElement.setAttribute(attr.name, attr.value);
			}
		}
		document.getElementById(this.hookId).append(rootElement);
		return rootElement
	}
}

class ShoppingCart extends Component{
	items = [];

	set cartItems(value) {
		this.items = value;
		this.totalOutput.innerHTML = `<h2>Total: \$${this.totalAmopunt.toFixed(2)}</h2>`;
	}

	get totalAmopunt() {
		let sum = this.items.reduce((prevValue, curItem) => prevValue + curItem.price, 0);
		return sum;
	}

	constructor(renderHookId) {
		super(renderHookId);
	}

	addProduct(product) {
		const updatedItems = [...this.items];
		updatedItems.push(product);
		this.cartItems = updatedItems;
	}

	render() {
		const cartEl = this.createRootElement("section", "cart")
		cartEl.innerHTML = `
			<h2>Total: \$${0}</h2>
			<button>Order Now!</button>
		`;
		this.totalOutput = cartEl.querySelector("h2");
	}
}

class ProductItem {
   constructor(product) {
      this.product = product;
   }

	addToCart() {
		App.addProductToCart(this.product);
	}

   render () {
      const prodEl = document.createElement("li");
      prodEl.className = "product-item";
      prodEl.innerHTML = `
         <div>
            <img src="${this.product.imgUrl}" alt="${this.product.title}">
            <div class="product-item__content">
               <h2>${this.product.title}</h2>
               <h3>\$${this.product.price}</h3>
               <p>${this.product.description}</p>
               <button>Add to Cart</button>
            </div>
         </div>
      `;
		const addCartButton = prodEl.querySelector("button");
		addCartButton.addEventListener("click", this.addToCart.bind(this));
		return prodEl;
   }
}

class ProductList {
	products = [
		new Product(
         "A Pillow",
         "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/Pillows_on_a_hotel_bed.jpg/1920px-Pillows_on_a_hotel_bed.jpg",
         19.99,
         "A soft pillow!"
      ),
      new Product(
         "A Carpet",
         "https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Ardabil_Carpet.jpg/397px-Ardabil_Carpet.jpg",
         89.99,
         "A carpet which you might like - or not."
      ),
	];

	constructor() {}

	render() {
      const prodList = document.createElement("ul");
      prodList.className = "product-list";
      for (const prod of this.products) {
         const prodItem = new ProductItem(prod);
			const prodEl = prodItem.render();
         prodList.append(prodEl);
      }
		return prodList;
   }
}

class Shop {
	render() {
      const renderHook = document.getElementById("app");

		this.cart = new ShoppingCart('app');
		this.cart.render();
		const productList = new ProductList();
		const prodListEl = productList.render();

      renderHook.append(prodListEl);
	}
}

class App {
	static cart;

	static init() {
		const shop = new Shop();
		shop.render();
		this.cart = shop.cart;
	}

	static addProductToCart(product) {
		this.cart.addProduct(product);
	}
}

App.init();