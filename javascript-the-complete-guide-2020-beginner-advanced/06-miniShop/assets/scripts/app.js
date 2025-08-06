class Product {
	constructor(title, image, price, desc) {
		this.title = title ?? 'Default';
		this.imgUrl = image;
		this.description = desc;
		this.price = price;
	}
}

const productList = {
	products: [
		new Product('A Pillow', 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/Pillows_on_a_hotel_bed.jpg/1920px-Pillows_on_a_hotel_bed.jpg', 19.99, 'A soft pillow!'),
		new Product('A Carpet', 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Ardabil_Carpet.jpg/397px-Ardabil_Carpet.jpg', 89.99, 'A carpet which you might like - or not.'),
	],
	render() {
		const renderHook = document.getElementById('app');
		const prodList = document.createElement('ul');
		prodList.className = 'product-list';
		for ( const prod of this.products) {
			const prodEl = document.createElement('li');
			prodEl.className = 'product-item';
			prodEl.innerHTML = `
				<div>
					<img src="${prod.imgUrl}" alt="${prod.title}">
					<div class="product-item__content">
						<h2>${prod.title}</h2>
						<h3>\$${prod.price}</h3>
						<p>${prod.description}</p>
						<button>Add to Cart</button>
					</div>
				</div>
			`;
			prodList.append(prodEl);
		}
		renderHook.append(prodList);
	}
}

productList.render();