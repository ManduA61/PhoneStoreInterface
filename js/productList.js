// adaugam lista de produse in html
mainPage.innerHTML += `
	<div class="sortBtnAll">
		<div class="sortBtn">
			<p>Sort după preț ascendent</p> 
			<i class="fas fa-2x fa-sort-up" id="sortByPriceUp"></i> 
			<i class="fas fa-sort-down fa-2x" id="sortByPriceDown"></i> 
		</div>
		<div class="sortBtn">
			<p>Sort după an apariție</p>
			<i class="fas fa-2x fa-sort-up" id="sortByYearUp"></i> 
			<i class="fas fa-sort-down fa-2x" id="sortByYearDown"></i> 
		</div>
		<div class="sortBtn"> 
			<p>Sort după nume</p>
			<i class="fas fa-2x fa-sort-alpha-down" id="sortByNameUp"></i> 
			<i class="fas fa-2x fa-sort-alpha-up" id="sortByNameDown"></i> 
		</div>
		<div class="sortBtn" id="sortByRecent"><p>Cele mai recente adăugate</p></div>
		<div class="sortBtn"> 
			<div id="filterPrice"><p>Produse peste 2000 RON</p></div> 
			<div id="notFilter"><i class="fas fa-box-open fa-2x"></i></div> 
		</div>
	</div>
	<h2>Toate produsele</h2>
	<div id="product-list">
	</div>
`;
/* <div class="sortBtn" id="sortByPriceDown"><p>Sort după preț descendent</p></div> */

APP.renderProductList = (productArray) => {
	// golim lista in care se vor afisa produsele
	const productList = document.querySelector('#product-list');
	productList.innerHTML = '';
	// pentru fiecare element din vectorul primit ca parametru
	productArray.forEach( (elem) => {
		// cream un produs
		product = new Product(elem.id, elem.nume, elem.price, elem.year, elem.dateAdd, elem.ph);
		// il afisam in pagina web
		product.renderProduct();
	});
}
