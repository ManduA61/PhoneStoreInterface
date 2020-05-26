class Product {
	// un produs este creat cu o clasa cu urmtorul constructor:
	constructor(id, nume, price, year, dateAdd, ph) {
		this.id = id;
		this.nume = nume;
		this.price = price;
		this.year = year;
		this.dateAdd = dateAdd;
		this.ph = ph;
	}
	// metoda renderProduct adauga produse in interiorul listei de produse
	renderProduct() {
		const productList = document.querySelector('#product-list');
		productList.innerHTML += `
			<div class="product">
					<div class="contentProduct">
						<div><img src="${this.ph}" alt="phone"></img></div>
						<div class="descriptionProduct">
							<p>Nume: ${this.nume}</p>
							<p>Pret: ${this.price} RON</p>
							<p>An apariție: ${this.year}</p>
							<p>Adăugat pe: ${this.dateAdd}</p>
						</div>
					</div>
					<div class="buttons">
						<a href="index.html" id="btnCart" class="btn"> <i class="fas fa-shopping-cart"></i> Adaugă în coș</a>
						<div id="btnDelete${this.id}" class="btn"><i class="fas fa-trash-alt"></i> Șterge produsul</div>
					</div>
			</div>
		`;
	}
}