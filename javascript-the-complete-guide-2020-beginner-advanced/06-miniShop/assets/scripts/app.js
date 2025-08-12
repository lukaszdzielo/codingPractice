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

class ProductItem {
   constructor(product) {
      this.product = product;
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
      const renderHook = document.getElementById("app");
      const prodList = document.createElement("ul");
      prodList.className = "product-list";
      for (const prod of this.products) {
         const prodItem = new ProductItem(prod);
			const prodEl = prodItem.render();
         prodList.append(prodEl);
      }
      renderHook.append(prodList);
   }
}

const productList = new ProductList();
productList.render();
