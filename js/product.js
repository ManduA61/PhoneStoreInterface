class Product {
	// un produs este creat cu o clasa cu urmtorul constructor:
	constructor(nume, price, year, dateAdd) {
		this.nume = nume;
		this.price = price;
		this.year = year;
		this.dateAdd = dateAdd;
	}
	// metoda renderProduct adauga produse in interiorul listei de produse
	renderProduct() {
		const productList = document.querySelector('#product-list');
		productList.innerHTML += `
			<div class="product">
					<div class="contentProduct">
						<div><img src="img/ph1.png" alt="phone1"></img></div>
						<div class="descriptionProduct">
							<p>Nume: ${this.nume}</p>
							<p>Pret: ${this.price} RON</p>
							<p>An apariție: ${this.year}</p>
							<p>Adăugat pe: ${this.dateAdd}</p>
						</div>
					</div>
					<div class="buttons">
						<a href="index.html" id="btnCart" class="btn"> <i class="fas fa-shopping-cart"></i> Adaugă în coș</a>
						<div id="btnDelete" class="btn"><i class="fas fa-trash-alt"></i> Șterge produsul</div>
					</div>
			</div>
		`;
	}
}

/* <img src=" ${this.ph} " alt="phone1"></img> */

/* <img src="img/ph1.png" alt="phone1"></img> */